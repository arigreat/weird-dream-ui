import { defineComponent, computed, ref, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, unref, createCommentVNode } from "vue";
import { carouselProps } from "./type.mjs";
import "../../../theme-chalk/src/carousel.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "carousel",
  props: carouselProps,
  setup(__props) {
    const props = __props;
    const carouselClass = computed(() => {
      return [
        `wd-carousel-${props.type}`,
        props.round && "is-round"
      ];
    });
    const typeManual = props.type === "auto" ? false : true;
    const typeAuto = props.type === "manual" ? false : true;
    const carouselSelecter = ref(null);
    const carouselBg = ref(null);
    const carouselButtons = ref(null);
    onMounted(() => {
      var _a, _b, _c;
      if (carouselBg.value && carouselSelecter.value) {
        carouselBg.value.style.width = `${props.width}px`;
        carouselSelecter.value.style.width = `${props.width}px`;
        carouselBg.value.style.height = `${props.height}px`;
        carouselSelecter.value.style.height = `${props.height}px`;
        const imgSets = carouselSelecter.value.children;
        for (let i = 0; i < imgSets.length; i++) {
          const img = imgSets[i];
          img.style.width = `${props.width}px`;
          img.style.height = `${props.height}px`;
        }
      }
      let isCarousing = false;
      const carouselImg = ref(0);
      const carouselImgTotal = (_a = carouselSelecter.value) == null ? void 0 : _a.children.length;
      const firstImg = (_b = carouselSelecter.value) == null ? void 0 : _b.children[0].cloneNode(true);
      (_c = carouselSelecter.value) == null ? void 0 : _c.appendChild(firstImg);
      const carouselAnimationTime = 500;
      const carouselIntervalTime = 5e3;
      function carouselMovingAuto() {
        if (isCarousing) {
          return;
        }
        if (carouselSelecter.value) {
          isCarousing = true;
          carouselSelecter.value.style.setProperty("--transformNewX", `-${carouselImg.value * 100 + 100}%`);
          carouselSelecter.value.classList.add("is-moving");
          setTimeout(() => {
            var _a2, _b2, _c2, _d;
            if (carouselButtons.value) {
              carouselButtons.value.children[carouselImg.value].classList.remove("wd-carouselButtonCurrent");
            }
            (_a2 = carouselSelecter.value) == null ? void 0 : _a2.classList.remove("is-moving");
            carouselImg.value++;
            (_b2 = carouselSelecter.value) == null ? void 0 : _b2.style.setProperty("--transformOldX", `-${carouselImg.value * 100}%`);
            if (carouselButtons.value) {
              carouselButtons.value.children[carouselImg.value % carouselImgTotal].classList.add("wd-carouselButtonCurrent");
            }
            if (carouselImg.value == carouselImgTotal) {
              carouselImg.value = 0;
              (_c2 = carouselSelecter.value) == null ? void 0 : _c2.style.setProperty("--transformOldX", `-${carouselImg.value * 100}%`);
              (_d = carouselSelecter.value) == null ? void 0 : _d.classList.add("is-resetting");
              setTimeout(() => {
                var _a3;
                (_a3 = carouselSelecter.value) == null ? void 0 : _a3.classList.remove("is-resetting");
                isCarousing = false;
              }, 100);
            }
            isCarousing = false;
          }, carouselAnimationTime);
        }
      }
      typeAuto && setInterval(carouselMovingAuto, carouselIntervalTime);
      function carouselMovingManual(index) {
        isCarousing = true;
        if (!carouselSelecter.value) {
          return;
        }
        carouselSelecter.value.style.setProperty("--transformNewX", `-${index * 100}%`);
        carouselSelecter.value.classList.add("is-moving");
        setTimeout(() => {
          if (carouselButtons.value) {
            carouselButtons.value.children[carouselImg.value].classList.remove("wd-carouselButtonCurrent");
          }
          if (!carouselSelecter.value) {
            return;
          }
          carouselSelecter.value.classList.remove("is-moving");
          carouselImg.value = index;
          carouselSelecter.value.style.setProperty("--transformOldX", `-${carouselImg.value * 100}%`);
          if (carouselButtons.value) {
            carouselButtons.value.children[carouselImg.value % carouselImgTotal].classList.add("wd-carouselButtonCurrent");
          }
          isCarousing = false;
        }, carouselAnimationTime);
      }
      if (typeManual && carouselButtons.value) {
        for (let i = 0; i < carouselImgTotal; i++) {
          const button = document.createElement("div");
          button.classList.add("wd-carouselButton");
          button.addEventListener("click", (e) => {
            carouselMovingManual(i);
          });
          carouselButtons.value.appendChild(button);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["wd-carousel", carouselClass.value]),
        ref_key: "carouselBg",
        ref: carouselBg
      }, [
        createElementVNode("div", {
          class: "wd-carouselImgbox",
          ref_key: "carouselSelecter",
          ref: carouselSelecter
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 512),
        unref(typeManual) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "wd-carouselButtonbox",
          ref_key: "carouselButtons",
          ref: carouselButtons
        }, null, 512)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
