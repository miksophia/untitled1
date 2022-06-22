<template>
  <app-header></app-header>
  <div class="root-button-banner banner banner-top">
    <img :src="fon1" class="banner__fon">
    <app-banner></app-banner>
  </div>
  <banner-text></banner-text>
  <app-talk @open="showModal"></app-talk>
  <app-about-host></app-about-host>
  <app-reason></app-reason>
  <app-int @open="showModal"></app-int>
  <app-conpen></app-conpen>
  <app-steps @open="showModal">
  </app-steps>
  <app-modal v-show="isModalVisible"
             @close="closeModal">

  </app-modal>
</template>

<script>
import AppHeader from './components/header.vue'
import AppBanner from './components/AppBanner.vue'
import fon1 from './assets/fon1.png'
import BannerText from './components/BannerText.vue'
import AppTalk from './components/AppTalk'
import AppAboutHost from './components/AppAboutHost'
import AppReason from './components/AppReason'
import AppInt from './components/AppInt'
import AppConpen from './components/AppConpen'
import AppSteps from './components/AppSteps'
import AppModal from './components/AppModal'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-banner': AppBanner,
    'banner-text': BannerText,
    'app-talk': AppTalk,
    'app-about-host': AppAboutHost,
    'app-reason': AppReason,
    'app-int': AppInt,
    'app-conpen': AppConpen,
    'app-steps': AppSteps,
    'app-modal': AppModal
  },
  data: function () {
    return {
      fon1: fon1,
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
      document.documentElement.style.overflow = 'hidden'
    },
    closeModal () {
      this.isModalVisible = false
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  position: relative;
}
body {
  margin: 0;
  padding: 0;
  font: 300 18px/28px FiraSans;
  background: #1f1250;
  color: #fff;
}
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
#app .container, #app .page-content {
  width: 1200px;
  max-width: 90%;
  margin: auto;
  position: relative;
  z-index: 5;
  padding-left: 0;
  padding-right: 0;
}
#app .layout {
  height: 100%;
  min-width: 100%;
  margin: 0 -15px;
}
.flex.xs12 {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -moz-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  max-width: 100%
}
#app .white-section {
  background: #fff;
  color: #333;
}
 .layout {
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-flex: 1;
   -webkit-flex: 1 1 auto;
   -moz-box-flex: 1;
   -ms-flex: 1 1 auto;
   flex: 1 1 auto;
   -webkit-flex-wrap: nowrap;
   -ms-flex-wrap: nowrap;
   flex-wrap: nowrap;
   min-width: 0;
 }
#app .list li:before {
  content: '';
  width: 5px;
  height: 5px;
  position: absolute;
  left: 0;
  top: 12px;
  background: #eb276d;
}
#app .list li {
  list-style: none;
  padding-left: 12px;
  position: relative;
  text-align: left;
  margin-bottom: 10px;
}
  .root-button-banner .banner__fon {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
  }
</style>
