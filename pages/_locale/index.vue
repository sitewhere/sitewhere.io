<template>
  <v-app>
    <above-the-fold/>
    <div style="margin-top: 100px; margin-bottom: 100px;">
      <deployment-animation class="hidden-sm-and-down" :width="900" :height="500"/>
    </div>
    <page-footer class="page-footer"/>
  </v-app>
</template>

<script>
import AboveTheFold from "~/components/AboveTheFold";
import DeploymentAnimation from "~/components/DeploymentAnimation";
import PageFooter from "~/components/PageFooter";
import LottieWithOverlay from "~/components/LottieWithOverlay";
import TextOverlay from "~/components/TextOverlay";
import * as Deployment from "~/assets/deployment.json";

export default {
  data: () => ({
    timelines: [],
    defaultOptions: {
      animationData: Deployment
    },
    textStyle: {
      fill: "#333",
      fontSize: "28px"
    },
    topPadding: 30,
    animationSpeed: 1
  }),

  components: {
    AboveTheFold,
    DeploymentAnimation,
    PageFooter,
    LottieWithOverlay,
    TextOverlay
  },

  methods: {
    deployment1: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 0.2, 0.3, 2.4, 0.2);
      timeline.add(tline, 0);
    },
    deployment2: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 4.8, 0.3, 3.9, 0.4);
      timeline.add(tline, 0);
    },
    deployment3: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 9.5, 0.3, 4.0, 0.2);
      timeline.add(tline, 0);
    },
    deployment4: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 15.0, 0.3, 4.0, 0.2);
      timeline.add(tline, 0);
    },
    deployment5: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 20.0, 0.3, 3.0, 0.2);
      timeline.add(tline, 0);
    },
    deployment6: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 23.5, 0.3, 7.8, 0.6);
      timeline.add(tline, 0);
    },
    waitFadeInWaitFadeOut: function(element, wait, fadeIn, showFor, fadeOut) {
      let tline = new TimelineMax({});
      tline
        .set(element, {
          opacity: 0
        })
        .to(element, wait, {
          opacity: 0
        })
        .to(element, fadeIn, {
          opacity: 1
        })
        .to(element, showFor, {
          opacity: 1
        })
        .to(element, fadeOut, {
          opacity: 0
        });
      return tline;
    }
  }
};
</script>

<style>
html {
  font-family: Roboto, Arial;
}
</style>

<style scoped>
.page-footer {
  margin-top: 100px;
}
</style>
