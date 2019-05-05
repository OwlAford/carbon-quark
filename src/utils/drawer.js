import * as StackBlur from "stackblur-canvas";

export const drawFullScreen = ({ canvasEl, imgEl, imgWidth, imgHeight }) => {
  const docEl = document.documentElement;
  const clientH = docEl.clientHeight;
  const clientW = docEl.clientWidth;
  const dpr = window.devicePixelRatio;
  const tarW = clientW * dpr;
  const tarH = clientH * dpr;

  canvasEl.setAttribute("width", tarW);
  canvasEl.setAttribute("height", tarH);
  canvasEl.style.cssText = `width: ${clientW}px; height: ${clientH}px`;

  const ctx = canvasEl.getContext("2d");
  let drawParams = [];

  if (clientW > clientH) {
    const clipH = (clientH / clientW) * imgWidth;
    const clipY = (imgHeight - clipH) / 2;
    drawParams = [imgEl, 0, clipY, imgWidth, clipH, 0, 0, tarW, tarH];
  } else {
    const clipW = (clientW / clientH) * imgHeight;
    const clipX = (imgWidth - clipW) / 2;
    drawParams = [imgEl, clipX, 0, clipW, imgHeight, 0, 0, tarW, tarH];
  }

  return new Promise(resolve => {
    if (imgEl.complete) {
      ctx.drawImage.apply(ctx, drawParams);
      resolve(ctx);
    } else {
      imgEl.onload = () => {
        ctx.drawImage.apply(ctx, drawParams);
        resolve(ctx);
      };
    }
  });
};

export const setCanvasBlur = ({ canvas, width, height, ratio }) => {
  const dpr = window.devicePixelRatio;
  StackBlur.canvasRGB(canvas, 0, 0, width, height, ratio * dpr);
};

export const copyImageDataToBlur = ({
  originImageContext,
  targetCanvas,
  width,
  height,
  x,
  y,
  ratio
}) => {
  const dpr = window.devicePixelRatio;
  const realWidth = width * dpr;
  const realHeight = height * dpr;

  targetCanvas.setAttribute("width", realWidth);
  targetCanvas.setAttribute("height", realHeight);
  targetCanvas.style.cssText = `width: ${width}px; height: ${height}px`;

  const blurCanvasCtx = targetCanvas.getContext("2d");

  const blurImgData = originImageContext.getImageData(
    x * dpr,
    y * dpr,
    realWidth,
    realHeight
  );

  blurCanvasCtx.putImageData(blurImgData, 0, 0);
  StackBlur.canvasRGB(targetCanvas, 0, 0, realWidth, realHeight, ratio * dpr);
};
