<template>
  <div>
    <div class="jumbotron">
      <above-the-fold></above-the-fold>
    </div>
    <div style="margin-top: 80px; margin-bottom: 100px;">
      <lottie-with-overlay
        ref="lottie"
        :options="defaultOptions"
        :duration="32"
        :height="500"
        :width="900"
      >
        <text-overlay
          :padding="topPadding"
          :transition="deployment1"
          :textStyle="textStyle"
          :text="$t('lotties.deployment.deploy-in-minutes')"
        />
        <text-overlay
          :padding="topPadding"
          :transition="deployment2"
          :textStyle="textStyle"
          :text="$t('lotties.deployment.choose-cloud-env')"
        />
        <text-overlay
          :padding="topPadding"
          :transition="deployment3"
          :textStyle="textStyle"
          :text="$t('lotties.deployment.provision-k8s')"
        />
        <text-overlay
          :padding="topPadding"
          :transition="deployment4"
          :textStyle="textStyle"
          :text="$t('lotties.deployment.use-helm')"
        />
        <text-overlay
          :padding="topPadding"
          :transition="deployment5"
          :textStyle="textStyle"
          :text="$t('lotties.deployment.microsvc-launched')"
        />
        <text-overlay
          :padding="30"
          :transition="deployment6"
          :textStyle="textStyle"
          :text="$t('lotties.deployment.microsvc-assemble')"
        />
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
      fontSize: "28px"
    },
    topPadding: 30,
    animationSpeed: 1
  }),

  components: {
    AboveTheFold,
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
.jumbotron {
  min-height: 600px;
}
</style>
