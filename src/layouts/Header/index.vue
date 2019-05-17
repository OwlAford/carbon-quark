<template lang="pug">
header.app-header
  .header-left
    .logo
    span.name 分析管理系统
  .header-middle
    nav.app-tab
      router-link(to="/main")
        a-icon(type="setting")
        span 系统管理
      router-link(to="/login")
        a-icon(type="mobile")
        span 猎豹金融
  .header-right
    a-popover(
      trigger="click"
      v-model="subMenuVisible"
    )
      .subMenu(slot="content")
        .item(@click="openEditModal") 修改密码
        .item(@click="logout") 退出

      span.user-panel
        a-icon(type="user")
        span.user {{ cstInfo.cstName }}
        a-icon(type="caret-down")

    span.safe-quit(@click="safeLogout")
      span 安全退出
      a-icon(type="logout")

  a-modal(
    title="修改登录密码"
    :visible="editPswdModalVisible"
    okText="提交"
    @ok="handleOk"
    :confirmLoading="confirmLoading"
    cancelText="退出"
    @cancel="closeEditModal"
  )
    .editForm
      a-form(
        :form="editPswdForm"
        @submit="handleSubmit"
      )
        a-form-item(
          label="旧密码"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 14 }"
        )
          a-input(
            type="password"
            placeholder="6-16位数字或字母"
            v-decorator=["oldPassword", {
              rules: [{
                required: true,
                message: "旧密码为必填项！"
              }]
            }]
          )

        a-form-item(
          label="新密码"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 14 }"
        )
          a-input(
            type="password"
            placeholder="6-16位数字或字母"
            v-decorator=["newPassword", {
              rules: [{
                required: true,
                message: "新密码为必填项！"
              }]
            }]
          )

        a-form-item(
          label="确认新密码"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 14 }"
        )
          a-input(
            type="password"
            placeholder="6-16位数字或字母"
            v-decorator=["newPasswordAgain", {
              rules: [{
                required: true,
                message: "请再次输入新密码！"
              }]
            }]
          )
        
        .reset-btn-wrap
          a-button(type="dashed" @click="resetEditForm") 重置输入
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { message } from "ant-design-vue";
import { changePassword, getLogout } from "@/config/req";

export default {
  name: "Header",
  data() {
    return {
      editPswdModalVisible: false,
      confirmLoading: false,
      subMenuVisible: false,
      editPswdForm: this.$form.createForm(this)
    };
  },
  computed: {
    ...mapGetters({
      cstInfo: "cstInfo",
      initBaseInfo: "initBaseInfo"
    })
  },
  mounted() {
    this.setInitBaseInfo();
  },
  methods: {
    ...mapActions({
      setInitBaseInfo: "setInitBaseInfo"
    }),
    logout() {
      this.$router.push("/login");
    },
    safeLogout() {
      getLogout().then(() => {
        this.logout();
      });
    },
    handleOk() {
      this.handleSubmit();
    },
    resetEditForm() {
      this.editPswdForm.resetFields();
    },
    handleSubmit() {
      const pswdReg = new RegExp(/^[a-zA-Z0-9]{6,10}$/);
      this.editPswdForm.validateFields(
        (err, { newPassword, newPasswordAgain, oldPassword }) => {
          if (!err) {
            if (oldPassword === newPassword) {
              message.error("旧密码和新密码不能一致！");
            } else if (newPassword !== newPasswordAgain) {
              message.error("两次输入密码不一致！");
            } else if (!pswdReg.test(newPassword)) {
              message.error("请输入正确格式的密码！");
            } else {
              this.confirmLoading = true;
              changePassword({ newPassword, oldPassword })
                .then(res => {
                  const { body } = res.data;
                  const { opResult } = body;
                  if (opResult === "1") {
                    message.success("密码修改成功！");
                    this.editPswdModalVisible = false;
                  } else {
                    message.error("密码修改失败！");
                  }
                  this.confirmLoading = false;
                })
                .catch(() => {
                  this.confirmLoading = false;
                });
            }
          }
        }
      );
    },
    openEditModal() {
      this.subMenuVisible = false;
      this.editPswdModalVisible = true;
    },
    closeEditModal() {
      this.resetEditForm();
      this.editPswdModalVisible = false;
    }
  }
};
</script>

<style scoped lang="scss" src="./index.scss"></style>
