<template>
  <div class="master-box">
    <slot name="content"></slot>
  </div>
</template>

<script>
// import scrollReveal from 'scrollreveal';
export default {
  name: 'MasterCom',
  props: {
  },
  data () {
    return {
    };
  },
  mounted () {
    // let revealCom = {
    //   distance: '80px',
    //   duration: 1000,
    //   opacity: 0
    // };
    // const revealLf = { ...revealCom, origin: 'left' };
    // const revealRt = { ...revealCom, origin: 'right' };
    // const revealTop = { ...revealCom, origin: 'top', interval: 100 };
    // const revealBtm = { ...revealCom, origin: 'bottom', interval: 100 };
    // const revealZoom = { ...revealCom, scale: .5, distance: 0, interval: 100 };
    // let sr = scrollReveal();
    // sr.reveal('.reveal-lf', revealLf);
    // sr.reveal('.reveal-rt', revealRt);
    // sr.reveal('.reveal-top', revealTop);
    // sr.reveal('.reveal-btm', revealBtm);
    // sr.reveal('.reveal-zoom', revealZoom);
    // window.sr = sr;
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
</style>
