<template>
  <div class="top-content">
    <img class="top-dark-curve" src="~/assets/top-dark-curve.svg">
    <img class="top-under-curve" src="~/assets/top-under-curve.svg">
    <img class="facets" src="/facets.jpg">
    <img class="top-overlay" src="~/assets/top-overlay.svg">
    <img class="main-logo" src="~/assets/sitewhere-logo.svg">
    <img class="logo-symbol" src="~/assets/sitewhere-symbol.svg">
    <h1 class="slogan">{{ $t('jumbotron.slogan') }}</h1>
    <v-btn class="header-btn view-docs-btn" light @click="openDocumentation">
      <font-awesome-icon icon="book" size="lg"/>
      {{ $t('jumbotron.btn-documentation') }}
    </v-btn>
    <v-btn class="header-btn view-github-btn" light @click="openGitHub">
      <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
      {{ $t('jumbotron.btn-github') }}
    </v-btn>
    <v-btn class="header-btn view-discord-btn" light @click="openDiscord">
      <font-awesome-icon :icon="['fab', 'discord']" size="lg"/>
      {{ $t('jumbotron.btn-discord') }}
    </v-btn>
    <v-btn
      class="get-started-btn white--text"
      @click="openDocumentation"
    >{{ $t('jumbotron.btn-get-started') }}</v-btn>
    <v-btn fab class="icon-btn view-docs-btn" light @click="openDocumentation">
      <font-awesome-icon style="margin-left: 3px;" icon="book" size="2x"/>
    </v-btn>
    <v-btn fab class="icon-btn view-github-btn" light @click="openGitHub">
      <font-awesome-icon style="margin-left: 3px;" :icon="['fab', 'github']" size="2x"/>
    </v-btn>
    <v-btn fab class="icon-btn view-discord-btn" light @click="openDiscord">
      <font-awesome-icon style="margin-left: 3px;" :icon="['fab', 'discord']" size="2x"/>
    </v-btn>
    <v-btn
      class="get-started-btn white--text"
      @click="openDocumentation"
    >{{ $t('jumbotron.btn-get-started') }}</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {
    openDocumentation: function(event) {
      let locale = this.$i18n.locale;
      if (!locale || "en" === locale) {
        locale = "";
      } else {
        locale = locale + "/";
      }
      window.open("https://sitewhere.io/docs/2.0.0/" + locale, "_blank");
    },
    openGitHub: function(event) {
      window.open("https://github.com/sitewhere/sitewhere", "_blank");
    },
    openDiscord: function(event) {
      window.open("https://discord.gg/sq7sH7B", "_blank");
    }
  }
};
</script>

<style scoped>
.top-content {
  min-height: 650px;
}
.main-logo {
  position: absolute;
  top: 20px;
  left: 30px;
  height: 60px;
}
.logo-symbol {
  position: absolute;
  top: 200px;
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
  top: 240px;
  left: 300px;
  width: 500px;
  font-size: 40px;
  color: #333;
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
.get-started-btn {
  position: absolute;
  top: 365px;
  left: 290px;
  width: 220px;
  height: 50px;
  font-size: 16pt;
  border-radius: 6px;
  background-color: #dc0000;
}
@media screen and (min-width: 1024px) {
  .icon-btn {
    display: none;
  }
  .header-btn {
    background-color: #fff;
    opacity: 0.8;
    top: 20px;
    width: 190px;
    color: #666;
    border-radius: 6px;
  }
  .header-btn:hover {
    background-color: #fff;
    opacity: 1;
    color: #333;
  }
  .view-docs-btn {
    position: absolute;
    right: 445px;
  }
  .view-github-btn {
    position: absolute;
    right: 235px;
  }
  .view-discord-btn {
    position: absolute;
    right: 25px;
  }
}
@media screen and (max-width: 1024px) {
  .header-btn {
    display: none;
  }
  .icon-btn {
    background-color: #fff;
    opacity: 0.8;
    top: 15px;
    color: #666;
  }
  .view-docs-btn {
    position: absolute;
    right: 175px;
  }
  .view-github-btn {
    position: absolute;
    right: 100px;
  }
  .view-discord-btn {
    position: absolute;
    right: 25px;
  }
}
</style>
