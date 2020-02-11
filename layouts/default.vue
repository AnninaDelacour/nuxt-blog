<template>
  <div>
    <!-- <HeaderMain /> -->
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav"
    @close="displaySidenav = false" />
    <img src="~@/assets/images/rosemary.jpg" class="bg">
     <transition name="layout" mode="out-in">
    <nuxt/>
  </transition>
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  components: {
    Header,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
};
</script>

<style lang="scss">
body, html {
  height: 100vh;
}

img.bg {
  min-height: 100vh;
  min-width: 100%;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 767.98px) {
    max-height: 20%;
    width: 20%;
  }
}

</style>
