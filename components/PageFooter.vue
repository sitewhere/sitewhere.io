<template>
  <div class="bottom-content">
    <div class="facets"/>
    <div class="footer-area">
      <img class="lower-curve" src="~/assets/lower-curve.svg">
      <div class="footer-content">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-layout row>
              <v-flex xs12>
                <v-btn
                  fab
                  class="social-button elevation-7"
                  title="SiteWhere on GitHub"
                  color="white"
                  href="https://github.com/sitewhere"
                  target="_blank"
                >
                  <i class="fab fa-github fa-lg" style="margin-top: -5px;"></i>
                </v-btn>
                <v-btn
                  fab
                  class="social-button elevation-7"
                  title="SiteWhere Discord Community"
                  color="white"
                  href="https://discord.gg/sq7sH7B"
                  target="_blank"
                >
                  <i class="fab fa-discord fa-lg" style="margin-top: -3px;"></i>
                </v-btn>
                <v-btn
                  fab
                  class="social-button elevation-7"
                  title="SiteWhere on Twitter"
                  color="white"
                  href="https://twitter.com/sitewhere"
                  target="_blank"
                >
                  <i class="fab fa-twitter fa-lg" style="margin-top: -4px;"></i>
                </v-btn>
                <v-btn
                  fab
                  class="social-button elevation-7"
                  title="SiteWhere on Facebook"
                  color="white"
                  href="https://www.facebook.com/sitewhere"
                  target="_blank"
                >
                  <i class="fab fa-facebook fa-lg" style="margin-top: -6px;"></i>
                </v-btn>
                <v-btn
                  fab
                  class="social-button elevation-7"
                  title="SiteWhere on LinkedIn"
                  color="white"
                  href="https://www.linkedin.com/company/sitewhere/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin fa-lg" style="margin-top: -6px;"></i>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6>
            <div>
              <div>
                <v-layout row>
                  <v-flex xs12>
                    <!-- Begin Mailchimp Signup Form -->
                    <link
                      href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
                      rel="stylesheet"
                      type="text/css"
                    >
                    <style type="text/css">
                      #mc_embed_signup {
                        background: #fff;
                        clear: left;
                        font: 14px Helvetica, Arial, sans-serif;
                        width: 100%;
                      }
                      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    </style>
                    <div id="mc_embed_signup">
                      <form
                        action="https://sitewhere.us11.list-manage.com/subscribe/post?u=ba1d2e46ba388cec0f02a02a2&amp;id=731c5558db"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <label for="mce-EMAIL">Subscribe to the SiteWhere Community Newsletter</label>
                          <input
                            type="email"
                            value
                            name="EMAIL"
                            class="email"
                            id="mce-EMAIL"
                            placeholder="Email Address"
                            required
                          >
                          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                          <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input
                              type="text"
                              name="b_ba1d2e46ba388cec0f02a02a2_731c5558db"
                              tabindex="-1"
                              value
                            >
                          </div>
                          <div class="clear">
                            <v-btn
                              color="#dc0000"
                              class="white--text"
                              style="margin-top: -1px;"
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                            >Subscribe</v-btn>
                          </div>
                        </div>
                      </form>
                    </div>

                    <!--End mc_embed_signup-->
                  </v-flex>
                </v-layout>
              </div>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="copyright">
              Copyright &copy; 2019
              <span class="company">SiteWhere LLC</span>
              All Rights Reserved.
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ subscribeEmail: null }),

  methods: {
    onSubscribe: function() {
      alert(this.$data.subscribeEmail);
    }
  }
};
</script>

<style scoped>
.bottom-content {
  position: relative;
}
.lower-curve {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
}
.footer-area {
  position: relative;
  width: 100%;
}
.facets {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(/facets.jpg);
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
}
.footer-content {
  width: 100%;
  padding: 40px 40px 10px 40px;
  padding-top: 60px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.65);
}
.footer-social {
  margin-top: 10px;
}
.social-button {
  font-size: 30px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 20px;
}
.social-button:hover {
  color: #111;
}
#mc_embed_signup {
  background: transparent;
}
#mc_embed_signup_scroll label {
  font-weight: normal;
  color: #ccc;
}
.copyright {
  width: 100%;
  font-size: 10pt;
  text-align: center;
  color: #ccc;
  margin-top: 30px;
  margin-bottom: 5px;
}
.company {
  color: #fff;
  font-weight: bold;
}
</style>
