<template>
  <text ref="textElement" :x="x" :y="y" :style="textStyle">{{ text }}</text>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  props: {
    text: String,
    textStyle: Object,
    halign: String,
    valign: String,
    padding: Number,
    transition: Function
  },

  data() {
    return { x: 0, y: 0 };
  },

  mounted() {
    let lottie = this.$parent;
    let bbox = this.$refs.textElement.getBBox();
    let pad = this.padding || 0;

    // Horizontal.
    let horz = this.halign || "center";
    if (horz === "center") {
      this.$data.x = (lottie.width - bbox.width) / 2;
    } else if (horz === "left") {
      this.$data.x = pad;
    } else if (horz === "right") {
      this.$data.x = lottie.width - pad - bbox.width;
    }

    // Vertical.
    let vert = this.valign || "top";
    if (vert === "middle") {
      this.$data.y = lottie.height / 2;
    } else if (vert === "top") {
      this.$data.y = pad + bbox.height;
    } else if (vert === "bottom") {
      this.$data.y = lottie.height - pad;
    }

    if (this.transition) {
      console.log(lottie);
      this.transition(lottie.timeline, this.$refs.textElement);
    }
  },

  methods: {}
};
</script>

<style scoped>
</style>
