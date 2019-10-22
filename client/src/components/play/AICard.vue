<template lang="html">
  <div :class="{'slide-bottom': animate}">
    <img class="ai-card" :src="card.back_url" >
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['card'],
  data(){
    return {
      animate: false,
    }
  },
  methods: {
    handlePickAnimation(data) {
      if (data._id === this.card._id) {
        console.log("Do AI card pick animation");
        this.animate = true;
      }
    },
  },
  mounted() {
    eventBus.$on('ai-card-picked', data => this.handlePickAnimation(data));
  },
}
</script>

<style lang="css" scoped>
div {
  display: inline-block;
}
img {
  width: 100px;
}
.slide-bottom {
	-webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.4s, opacity 0.4s linear;
}
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
}
.ai-card {
  width: 90px;
  height: auto;
  margin: 5px;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.6);
}
</style>
