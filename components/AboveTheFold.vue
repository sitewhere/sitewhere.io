<template>
  <div>
    <img class="top-dark-curve" src="~/assets/top-dark-curve.svg">
    <img class="top-under-curve" src="~/assets/top-under-curve.svg">
    <img class="facets" src="/facets.jpg">
    <img class="top-overlay" src="~/assets/top-overlay.svg">
    <img class="main-logo" src="~/assets/sitewhere-logo.svg">
    <img class="logo-symbol" src="~/assets/sitewhere-symbol.svg">
    <h1 class="slogan">{{ $t('jumbotron.slogan') }}</h1>
    <v-btn class="view-docs-btn grey--text text--darken-1" color="white"
      light @click="openDocumentation">
      <font-awesome-icon icon="book" size="lg" />
      {{ $t('jumbotron.btn-documentation') }}
    </v-btn>
    <v-btn class="view-github-btn grey--text text--darken-1" color="white"
      light @click="openGitHub">
      <font-awesome-icon :icon="['fab', 'github']" size="lg" />
      {{ $t('jumbotron.btn-github') }}
    </v-btn>
    <v-btn class="view-discord-btn grey--text text--darken-1" color="white"
      light @click="openDiscord">
      <font-awesome-icon :icon="['fab', 'discord']" size="lg" />
      {{ $t('jumbotron.btn-discord') }}
    </v-btn>
    <v-btn class="get-started-btn white--text" color="red" @click="openDiscord">
      {{ $t('jumbotron.btn-get-started') }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),

  methods: {
    openDocumentation: function (event) {
      window.open('https://sitewhere.io/docs/en/2.0.RC1/index.html', '_blank');
    },
    openGitHub: function (event) {
      window.open('https://github.com/sitewhere/sitewhere', '_blank');
    },
    openDiscord: function (event) {
      window.open('https://discord.gg/sq7sH7B', '_blank');
    }
  }
}
</script>

<style scoped>
.main-logo {
  position: absolute;
  top: 20px;
  left: 30px;
  height: 60px;
}
.logo-symbol {
  position: absolute;
  top: 180px;
  left: 50px;
  height: 280px;
}
.facets {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 800px;
  opacity: 0.4;
}
.slogan {
  position: absolute;
  top: 210px;
  left: 300px;
  width: 500px;
  font-size: 40px;
}
.top-overlay {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 600px;
}
.top-dark-curve {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 600px;
}
.top-under-curve {
  position: absolute;
  top: 599px;
  width: 100%;
  height: 200px;
}
.svg-inline--fa {
  margin-right: 7px;
  margin-left: -5px;
  vertical-align: middle;
}
.view-docs-btn {
  position: absolute;
  top: 20px;
  right: 510px;
  width: 200px;
}
.view-github-btn {
  position: absolute;
  top: 20px;
  right: 280px;
  width: 200px;
}
.view-discord-btn {
  position: absolute;
  top: 20px;
  right: 50px;
  width: 200px;
}
.get-started-btn {
  position: absolute;
  top: 360px;
  left: 300px;
  width: 220px;
  height: 40px;
  font-size: 16pt;
}
</style>
