<template>
  <div>
    <div class="jumbotron">
      <above-the-fold></above-the-fold>
    </div>
    <div style="margin-top: 40px;">
      <lottie-with-overlay ref="lottie" :options="defaultOptions" :duration="18" :height="500" :width="900">
        <text-overlay :padding="50" :transition="deployment1" :textStyle="textStyle"
          :text="$t('lotties.deployment.deploy-in-minutes')"/>
        <text-overlay :padding="50" :transition="deployment2" :textStyle="textStyle"
          :text="$t('lotties.deployment.choose-cloud-env')"/>
        <text-overlay :padding="50" :transition="deployment3" :textStyle="textStyle"
          :text="$t('lotties.deployment.provision-k8s')"/>
        <text-overlay :padding="50" :transition="deployment4" :textStyle="textStyle"
          :text="$t('lotties.deployment.use-helm')"/>
      </lottie-with-overlay>
    </div>
  </div>
</template>

<script>
import AboveTheFold from "~/components/AboveTheFold";
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
      fontSize: "26px"
    },
    animationSpeed: 1
  }),

  components: {
    AboveTheFold,
    LottieWithOverlay,
    TextOverlay
  },

  methods: {
    deployment1: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 0.2, 0.3, 2.0, 0.2);
      timeline.add(tline, 0);
    },
    deployment2: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 3.0, 0.3, 4.8, 0.2);
      timeline.add(tline, 0);
    },
    deployment3: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 8.5, 0.3, 4.0, 0.2);
      timeline.add(tline, 0);
    },
    deployment4: function(timeline, element) {
      let tline = this.waitFadeInWaitFadeOut(element, 13.0, 0.3, 4.0, 0.2);
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
.jumbotron {
  min-height: 600px;
}
</style>
