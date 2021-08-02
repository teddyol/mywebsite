<template>
  <div class="loading-box">
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
  },
  data () {
    return {

    };
  },
  created () {

  },
  methods: {

  }
};
</script>

<style lang="scss">
.loading-box {
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
}
.loading {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #FFA1A2;
  position: absolute;
  animation: loading linear 0.8s infinite;
  -webkit-animation: loading linear 0.8s infinite;
}
.loading:nth-child(1) {
  left: 48px;
  top: 4px;
  animation-delay: 0s;
}
.loading:nth-child(2) {
  left: 80px;
  top: 16px;
  animation-delay: 0.1s;
}
.loading:nth-child(3) {
  left: 94px;
  top: 48px;
  animation-delay: 0.1s;
}
.loading:nth-child(4) {
  left: 80px;
  top: 80px;
  animation-delay: 0.2s;
}
.loading:nth-child(5) {
  left: 48px;
  top: 94px;
  animation-delay: 0.4s;
}
.loading:nth-child(6) {
  left: 16px;
  top: 80px;
  animation-delay: 0.5s;
}
.loading:nth-child(7) {
  left: 4px;
  top: 48px;
  animation-delay: 0.6s;
}
.loading:nth-child(8) {
  left: 16px;
  top: 16px;
  animation-delay: 0.7s;
}

@keyframes loading {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  20% {
    transform: scale(3);
  }
}
@-webkit-keyframes loading {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  20% {
    transform: scale(3);
  }
}
</style>
