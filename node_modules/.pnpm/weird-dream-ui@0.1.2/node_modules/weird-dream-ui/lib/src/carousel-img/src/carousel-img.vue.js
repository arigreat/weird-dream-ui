"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
require("../../../theme-chalk/src/carousel-img.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "carousel-img",
  props: type.carouselImgProps,
  setup(__props) {
    const carouselImg = vue.ref(null);
    const props = __props;
    function getImg() {
      if (carouselImg.value) {
        const src = `url(${props.src})`;
        carouselImg.value.style.setProperty("--imgSrc", src);
      }
    }
    vue.onMounted(() => {
      getImg();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "wd-carousel-img",
        ref_key: "carouselImg",
        ref: carouselImg
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
exports.default = _sfc_main;
