<template>
  <div class="top-content">
    <img class="top-dark-curve" src="~/assets/top-dark-curve.svg">
    <img class="top-under-curve" src="~/assets/top-under-curve.svg">
    <img class="facets" src="/facets.jpg">
    <img class="top-overlay" src="~/assets/top-overlay.svg">
    <img class="main-logo" src="~/assets/sitewhere-logo.svg">
    <img class="logo-symbol" src="~/assets/sitewhere-symbol.svg">
    <h1 class="slogan">{{ $t('jumbotron.slogan') }}</h1>
    <v-btn
      color="white"
      class="header-btn view-docs-btn elevation-5"
      light
      @click="openDocumentation"
    >
      <font-awesome-icon icon="book" size="lg"/>
      {{ $t('jumbotron.btn-documentation') }}
    </v-btn>
    <v-btn color="white" class="header-btn view-github-btn elevation-5" light @click="openGitHub">
      <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
      {{ $t('jumbotron.btn-github') }}
    </v-btn>
    <v-btn color="white" class="header-btn view-discord-btn elevation-5" light @click="openDiscord">
      <font-awesome-icon :icon="['fab', 'discord']" size="lg"/>
      {{ $t('jumbotron.btn-discord') }}
    </v-btn>
    <v-btn
      color="red darken-1 white--text"
      class="get-started-btn"
      @click="openDocumentation"
    >{{ $t('jumbotron.btn-get-started') }}</v-btn>
    <v-btn fab small color="white" class="icon-btn view-docs-btn" light @click="openDocumentation">
      <font-awesome-icon style="margin-left: 5px;" icon="book" size="lg"/>
    </v-btn>
    <v-btn fab small color="white" class="icon-btn view-github-btn" light @click="openGitHub">
      <font-awesome-icon style="margin-left: 6px;" :icon="['fab', 'github']" size="lg"/>
    </v-btn>
    <v-btn fab small color="white" class="icon-btn view-discord-btn" light @click="openDiscord">
      <font-awesome-icon style="margin-left: 6px;" :icon="['fab', 'discord']" size="lg"/>
    </v-btn>
    <language-dropdown
      class="language-dd"
      :languages="languages"
      @languageUpdated="onLanguageUpdated"
    />
  </div>
</template>

<script>
import LanguageDropdown from "./LanguageDropdown.vue";

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
.slogan {
  position: absolute;
  top: 240px;
  left: 300px;
  width: 500px;
  font-size: 40px;
  color: #333;
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
}
@media screen and (max-width: 900px) {
  .facets {
    display: none;
  }
  .top-overlay {
    display: none;
  }
  .top-dark-curve {
    display: none;
  }
  .top-under-curve {
    display: none;
  }
}
@media screen and (min-width: 900px) {
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
}
@media screen and (min-width: 1024px) {
  .icon-btn {
    display: none;
  }
  .header-btn {
    top: 20px;
    width: 190px;
    color: #666;
    border-radius: 6px;
  }
  .view-docs-btn {
    position: absolute;
    right: 480px;
  }
  .view-github-btn {
    position: absolute;
    right: 280px;
  }
  .view-discord-btn {
    position: absolute;
    right: 80px;
  }
  .language-dd {
    position: absolute;
    top: 18px;
    right: 15px;
  }
}
@media screen and (max-width: 1024px) {
  .header-btn {
    display: none;
  }
  .icon-btn {
    top: 15px;
    color: #666;
  }
  .view-docs-btn {
    position: absolute;
    right: 180px;
  }
  .view-github-btn {
    position: absolute;
    right: 130px;
  }
  .view-discord-btn {
    position: absolute;
    right: 80px;
  }
  .language-dd {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
