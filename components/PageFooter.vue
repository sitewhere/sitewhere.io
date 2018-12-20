<template>
  <div class="bottom-content">
    <div class="footer-content">
      <div>Footer</div>
    </div>
    <div class="facets"/>
    <img class="lower-curve" src="~/assets/lower-curve.svg">
    <div class="copyright">
      Copyright &copy; 2018
      <strong>SiteWhere LLC</strong>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {}
};
</script>

<style scoped>
.bottom-content {
  position: relative;
  height: 300px;
}
.lower-curve {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
}
.facets {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 300px;
  background-image: url(/facets.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
}
.copyright {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 20px;
  font-size: 10pt;
  text-align: center;
  color: #eee;
  margin-bottom: 5px;
}
.footer-content {
  position: absolute;
  background-color: #000;
  top: 0px;
  width: 100%;
  height: 300px;
}
</style>
