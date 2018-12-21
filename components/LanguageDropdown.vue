<template>
  <v-menu left bottom offset-y>
    <v-btn fab small slot="activator" color="white" light>
      <span :class="currentFlag"></span>
    </v-btn>
    <v-list dense>
      <v-list-tile
        v-for="(language) in languages"
        :key="language.locale"
        @click="onLanguageUpdated(language)"
      >
        <v-list-tile-title>
          <span :class="flagFor(language)"></span>
          &nbsp; {{ language.name }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import "flag-icon-css/css/flag-icon.css";
export default {
  data: () => ({
    selected: null
  }),

  props: {
    languages: Array
  },

  created: function() {
    this.languages.forEach(language => {
      if (language.locale === this.$i18n.locale) {
        this.$data.selected = language;
      }
    });
    if (this.$data.selected == null) {
      this.$data.selected = this.$data.languages[0];
    }
    this.onLanguageUpdated(this.$data.selected);
  },

  computed: {
    currentFlag: function() {
      let current = this.$data.selected ? this.$data.selected : languages[0];
      return this.flagFor(current);
    }
  },

  methods: {
    onLanguageUpdated: function(language) {
      this.$data.selected = language;
      this.$emit("languageUpdated", language);
    },
    flagFor: function(language) {
      let clazz = {};
      clazz["flag-icon"] = true;
      clazz[language.flag] = true;
      return clazz;
    }
  }
};
</script>

<style scoped>
</style>
