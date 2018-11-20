<template>
  <div :style="style">
    <div class="svg-overlay" ref="lottieContainer"/>
    <svg :height="height" :width="width" class="svg-overlay">
      <slot/>
    </svg>
  </div>
</template>

<script>
import lottie from "lottie-web";
import { TimelineMax } from "gsap";

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    width: Number,
    height: Number
  },

  data() {
    return {
      animation: null,
      timeline: new TimelineMax({}),
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden",
        margin: "0 auto",
        position: "relative"
      }
    };
  },

  mounted() {
    this.initializeAnimation();
    this.initializeTimeline();
  },

  methods: {
    // Initialize lottie animation.
    initializeAnimation: function() {
      let component = this;
      let anim = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: this.options.animationData,
        rendererSettings: this.options.rendererSettings
      });
      this.$data.animation = anim;
    },
    // Initialize timeline.
    initializeTimeline: function() {
      let anim = this.$data.animation;
      let primary = this.$data.timeline;
      let tline = new TimelineMax({});
      tline.to({ frame: 0 }, this.duration, {
        frame: anim.totalFrames - 1,
        onUpdate: function() {
          anim.goToAndStop(this.target.frame, true);
        },
        onComplete: function() {
          primary.restart();
        },
        repeat: 0,
        ease: Linear.easeNone
      });
      primary.add(tline, 0);
      this.$data.timeline = primary;
    }
  }
};
</script>

<style scoped>
.svg-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
