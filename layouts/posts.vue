<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav"
    @close="displaySidenav = false" />
    <transition name="layout" mode="out-in">
    <nuxt />
    </transition>
  </div>
</template>

<script>
import Header from '~/components/Navigation/Header.vue';
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

</style>