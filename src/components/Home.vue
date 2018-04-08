<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import vHead from './Header.vue'
import vSidebar from './Slider.vue'
export default {
  components: {
    vHead, vSidebar
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 13px;
  .content {
    background: none repeat scroll 0 0 #f2f2f2;
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    width: auto;
    box-sizing: border-box;
    overflow-y: scroll;
  }
}
</style>
