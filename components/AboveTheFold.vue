<template>
  <div class="top-content">
    <img class="top-dark-curve hidden-sm-and-down" src="~/assets/top-dark-curve.svg">
    <img class="top-under-curve hidden-sm-and-down" src="~/assets/top-under-curve.svg">
    <img class="facets hidden-sm-and-down" src="/facets.jpg">
    <img class="top-overlay hidden-sm-and-down" src="~/assets/top-overlay.svg">
    <v-toolbar flat height="70" color="transparent">
      <img class="top-logo" src="~/assets/sitewhere-logo.svg">
      <v-spacer/>
      <div class="hidden-sm-and-down">
        <v-btn
          outline
          light
          class="header-button elevation-2"
          style="background-color: #fff!important;"
          color="#555"
          :href="docsLocation"
          target="_blank"
        >
          <i class="fa fa-book"></i>
          &nbsp;
          {{ $t('jumbotron.btn-documentation') }}
        </v-btn>
        <v-btn
          outline
          light
          class="header-button elevation-2"
          style="background-color: #fff!important;"
          color="#555"
          href="https://github.com/sitewhere/sitewhere"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          &nbsp;
          {{ $t('jumbotron.btn-github') }}
        </v-btn>
        <v-btn
          outline
          light
          class="header-button elevation-2"
          style="background-color: #fff!important;"
          color="#555"
          href="https://discord.gg/sq7sH7B"
          target="_blank"
        >
          <i class="fab fa-discord"></i>
          &nbsp;
          {{ $t('jumbotron.btn-discord') }}
        </v-btn>
      </div>
      <v-menu class="hidden-md-and-up" left bottom offset-y>
        <v-btn flat slot="activator" class="mt-4 pa-0">
          <i class="fa fa-2x fa-bars"></i>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="openDocumentation">
            <v-list-tile-content>
              <v-list-tile-title>
                <i class="fa fa-book"></i>
                &nbsp;
                {{ $t('jumbotron.btn-documentation') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="openGitHub">
            <v-list-tile-content>
              <v-list-tile-title>
                <i class="fab fa-github"></i>
                &nbsp;
                {{ $t('jumbotron.btn-github') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="openDiscord">
            <v-list-tile-content>
              <v-list-tile-title>
                <i class="fab fa-discord"></i>
                &nbsp;
                {{ $t('jumbotron.btn-discord') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <language-dropdown
        class="lang-button hidden-sm-and-down"
        :languages="languages"
        @languageUpdated="onLanguageUpdated"
      />
    </v-toolbar>
    <v-content>
      <v-layout row>
        <v-flex xs9>
          <div style="position: relative; margin-top: 120px;" class="hidden-sm-and-down">
            <img class="logo-symbol" src="~/assets/sitewhere-symbol.svg">
            <div class="blurb">
              <h1 class="slogan">{{ $t('jumbotron.slogan') }}</h1>
              <p class="short-desc">{{ $t('jumbotron.description') }}</p>
              <v-btn
                color="#dc0000"
                class="get-started-btn ma-0 mt-1 white--text"
                @click="openDocumentation"
              >{{ $t('jumbotron.btn-get-started') }}</v-btn>
              <gh-btns-star slug="sitewhere/sitewhere" show-count/>
            </div>
          </div>
        </v-flex>
        <v-flex xs3></v-flex>
      </v-layout>
      <div class="hidden-md-and-up text-xs-center pa-4" style="margin-top: 50px;">
        <img src="~/assets/sitewhere-symbol.svg" style="max-width: 300px;">
        <h1 class="slogan">{{ $t('jumbotron.slogan') }}</h1>
        <p class="short-desc">{{ $t('jumbotron.description') }}</p>
        <v-btn
          color="red darken-1 white--text"
          class="get-started-btn"
          @click="openDocumentation"
        >{{ $t('jumbotron.btn-get-started') }}</v-btn>
        <div style="width: 100%">
          <gh-btns-star
            style="display: inline-block; margin-left: auto; margin-right: auto;"
            slug="sitewhere/sitewhere"
            show-count
          />
        </div>
      </div>
      <div class="hidden-sm-and-down" style="min-height: 500px;"></div>
      <div class="deploy-section">
        <h2>{{ $t('home.deployment-title') }}</h2>
        <p>{{ $t('home.deployment-content') }}</p>
      </div>
    </v-content>
  </div>
</template>

<script>
import LanguageDropdown from "./LanguageDropdown.vue";
import "./vue-github-buttons.css";

export default {
  data: () => ({
    language: null,
    languages: [
      {
        locale: "en",
        flag: "flag-icon-us",
        name: "English",
        docsLocale: "en"
      },
      {
        locale: "es",
        flag: "flag-icon-mx",
        name: "Español",
        docsLocale: "es"
      },
      {
        locale: "cn",
        flag: "flag-icon-cn",
        name: "简体中文",
        docsLocale: "en"
      },
      {
        locale: "ja",
        flag: "flag-icon-jp",
        name: "日本語",
        docsLocale: "en"
      },
      {
        locale: "vn",
        flag: "flag-icon-vn",
        name: "Tiếng Việt",
        docsLocale: "en"
      },
      {
        locale: "fr",
        flag: "flag-icon-fr",
        name: "Français",
        docsLocale: "en"
      }
    ]
  }),

  components: {
    LanguageDropdown
  },

  computed: {
    docsLocation: function() {
      let suffix = "";
      let language = this.$data.language;
      if (language && "en" != language.docsLocale) {
        suffix = language.docsLocale + "/";
      }
      return "https://sitewhere.io/docs/2.0.0/" + suffix;
    }
  },

  methods: {
    openDocumentation: function(event) {
      let suffix = "";
      let language = this.$data.language;
      if (language && "en" != language.docsLocale) {
        suffix = language.docsLocale + "/";
      }
      window.open("https://sitewhere.io/docs/2.0.0/" + suffix, "_blank");
    },
    openGitHub: function(event) {
      window.open("https://github.com/sitewhere/sitewhere", "_blank");
    },
    openDiscord: function(event) {
      window.open("https://discord.gg/sq7sH7B", "_blank");
    },
    onLanguageUpdated: function(language) {
      this.$data.language = language;
      if (language.locale !== this.$i18n.locale) {
        document.location.pathname = "/" + language.locale + "/";
      }
    }
  }
};
</script>

<style scoped>
.top-content {
  min-height: 620px;
}
.top-logo {
  height: 60px;
  margin-top: 7px;
}
.header-button {
  height: 35px;
  margin-right: 10px;
  margin-top: 35px;
  color: #333;
}
.lang-button {
  height: 40px;
  margin-top: 15px;
}
.logo-symbol {
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
}
.blurb {
  position: absolute;
  top: 0;
  left: 260px;
  right: 0px;
}
.slogan {
  font-size: 35px;
  color: #333;
  line-height: 1.3em;
}
.short-desc {
  font-size: 18px;
  color: #333;
  line-height: 1.3em;
  margin-top: 15px;
}
.get-started-btn {
  width: 220px;
  height: 50px;
  font-size: 16pt;
  border-radius: 4px;
}
.facets {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 800px;
  opacity: 0.4;
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
.deploy-section {
  margin-top: 30px;
  padding-bottom: 50px;
  border-bottom: 1px solid #eee;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10%;
  padding-right: 10%;
  color: #333;
}
.deploy-section h2 {
  font-size: 30px;
}
.deploy-section p {
  font-size: 18px;
  margin-top: 15px;
}
</style>
