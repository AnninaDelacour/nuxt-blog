<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
    </div>


      <nuxt />

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
    };
  }
};
</script>

<style lang="scss">
body, html {
  height: 100vh;
}

// img.bg {
//   min-height: 100vh;
//   min-width: 90%;
	
//   /* Set up proportionate scaling */
//   width: 50%;
//   height: auto;
	
//   /* Set up positioning */
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: -1;

//   @media (max-width: 767.98px) {
//     max-height: 20%;
//     width: 20%;
//   }
// }

// .page {
//   overflow-y: auto;
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   padding: 50px 0;
//   text-align: center;
// }

</style>
