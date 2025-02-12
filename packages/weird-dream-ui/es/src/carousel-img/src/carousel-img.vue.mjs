import { defineComponent, ref, onMounted, openBlock, createElementBlock, renderSlot } from "vue";
import { carouselImgProps } from "./type.mjs";
import "../../../theme-chalk/src/carousel-img.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "carousel-img",
  props: carouselImgProps,
  setup(__props) {
    const carouselImg = ref(null);
    const props = __props;
    function getImg() {
      if (carouselImg.value) {
        const src = `url(${props.src})`;
        carouselImg.value.style.setProperty("--imgSrc", src);
      }
    }
    onMounted(() => {
      getImg();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "wd-carousel-img",
        ref_key: "carouselImg",
        ref: carouselImg
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
