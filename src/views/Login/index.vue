<template lang="pug">
  .page-login
    .bg
      canvas(ref="$canvas")
      canvas(ref="$canvasThumb" class="maskCanvasBg" :class="blurMaskStatus")
      #particles-mask
    .img-source
      img(src="@/assets/img/city.jpg" ref="$imgbg")
      img(src="@/assets/img/city-thumb.jpg" ref="$imgbgThumb")
    .title 分析管理系统
    .login-box(ref="$box")
      canvas(ref="$blurCanvas")
      .inner
        .ipt
          a-icon(type="user")
          input(type="text" placeholder="请输入用户名" v-model="userName")
        .ipt
          a-icon(type="lock")
          input(
            type="password"
            placeholder="请输入密码"
            v-model="password"
          )
        .ipt
          a-icon(type="safety")
          input(type="text" placeholder="请输入验证码" v-model="safecode")
          .safe-code(@click="getCheckCode")
            img(:src="checkCodeSrc" width="86" height="28")
        .login-btn(@click="submit" :class="btnStatus")
          a-icon(type="loading")
          i.anticon.anticon-check
            <svg version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28" viewBox="0 0 359.64 260.21" style="enable-background:new 0 0 359.64 260.21;" xml:space="preserve">
              <polyline class="st0" points="7.07,139.57 113.57,246.07 352.57,7.07"/>
            </svg>
</template>

<style lang="scss" src="./index.scss"></style>

<script>
import "particles.js";
import { getLogin } from "@/config/req";
import { setCookie } from "@/utils/cookie";
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash/debounce";
import { message } from "ant-design-vue";
import md5 from "md5";
import {
  drawFullScreen,
  copyImageDataToBlur,
  setCanvasBlur
} from "@/utils/drawer";

export default {
  name: "login",
  data() {
    return {
      userName: "admin",
      password: "ynet123",
      safecode: "",
      loginStatus: "default",
      originBgImgReady: false
    };
  },
  computed: {
    ...mapGetters({
      checkCodeSrc: "checkCodeSrc"
    }),
    btnStatus: function() {
      return {
        loading: this.loginStatus === "loading",
        success: this.loginStatus === "success"
      };
    },
    blurMaskStatus: function() {
      return {
        hide: this.originBgImgReady === true
      };
    }
  },
  mounted() {
    this.getCheckCode();
    this.drawThumb();
    this.drawCanvas();

    this.dynamicDraw = debounce(() => {
      this.drawThumb();
      this.drawCanvas();
    }, 100);
    window.addEventListener("resize", this.dynamicDraw, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.dynamicDraw);
  },
  methods: {
    ...mapActions({
      getCheckCode: "getCheckCode",
      setCstInfo: "setCstInfo"
    }),
    drawThumb() {
      const { $canvasThumb, $imgbgThumb } = this.$refs;
      drawFullScreen({
        canvasEl: $canvasThumb,
        imgEl: $imgbgThumb,
        imgWidth: 384,
        imgHeight: 216
      }).then(() => {
        setCanvasBlur({
          canvas: $canvasThumb,
          width: $canvasThumb.width,
          height: $canvasThumb.height,
          ratio: 30
        });
      });
    },
    drawCanvas() {
      const { $canvas, $imgbg, $box, $blurCanvas } = this.$refs;
      drawFullScreen({
        canvasEl: $canvas,
        imgEl: $imgbg,
        imgWidth: 3840,
        imgHeight: 2160
      }).then(ctx => {
        const boxW = $box.offsetWidth;
        const boxH = $box.offsetHeight;
        const boxOffsetTop = $box.offsetTop;
        const boxOffsetLeft = $box.offsetLeft;

        window.particlesJS.load("particles-mask", "particles.json", () => {
          this.originBgImgReady = true;
        });

        copyImageDataToBlur({
          originImageContext: ctx,
          targetCanvas: $blurCanvas,
          width: boxW,
          height: boxH,
          x: boxOffsetLeft,
          y: boxOffsetTop,
          ratio: 30
        });
      });
    },
    submit() {
      if (this.loginStatus !== "default") {
        return;
      }
      const { password, userName, safecode } = this;
      if (!userName.trim()) {
        message.warning("请输入用户名！");
      } else if (!password.trim()) {
        message.warning("请输入密码！");
      } else if (!safecode.trim()) {
        message.warning("请输入验证码！");
      } else {
        // 开始向后台请求校验
        this.loginStatus = "loading";

        getLogin({
          loginName: userName,
          loginPassword: md5(password),
          validateCodeText: safecode,
          isLogin: false
        })
          .then(res => {
            const { body } = res.data;
            const { result, cstName, cstNo } = body;
            if (result === "1") {
              this.setCstInfo({ cstName, cstNo });
              const delayTime = 24 * 60 * 60 * 1000;
              setCookie("eCIFID", cstNo, delayTime);
              this.loginStatus = "success";
              setTimeout(() => {
                this.$router.push("/main");
              }, 1000);
            } else {
              this.getCheckCode();
              this.loginStatus = "default";
            }
          })
          .catch(() => {
            this.getCheckCode();
            this.loginStatus = "default";
          });
      }
    }
  }
};
</script>
