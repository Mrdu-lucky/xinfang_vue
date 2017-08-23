<template>
  <div class="panodiv">
    <div id="pano"></div>
  </div>
</template>
<script>

  export default {
    props: ["rdata"],
    data() {
      return {}
    },
    mounted() {
      embedpano({
        swf: "http://omjbzg6gs.bkt.clouddn.com/krpano/tour.swf",
        xml: "http://omjbzg6gs.bkt.clouddn.com/krpano/tour.xml",
        target: "pano",
        html5: "prefer",
        mobilescale: 1.0,
        passQueryParameters: true
      });
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style>
  #pano {
    height: 100%;
  }

  #pano * {
    box-sizing: content-box;
  }

  .panodiv {
    padding: 50px 0;
    height: 740px;
  }
</style>
