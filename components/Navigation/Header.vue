<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-flower">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-md-auto mb-lg-auto mt-lg-auto">
          <li class="nav-item">
            <nuxt-link to="/" @click="$emit('change-page', 'next')">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" @click="$emit('change-page', 'next')">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/posts/" @click="$emit('change-page', 'next')">Blog</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/admin" @click="$emit('change-page', 'next')">Admin</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  components: {
    TheSideNavToggle
  },
  methods: {
    onChangePage(to) {
      this.page = to;
    }
  }
};
</script>


<style lang="scss">
.navbar {
  @media (min-width: 768px) and (max-width: 991.98px) {
    z-index: 1;
    display: inline-block;
    position: absolute;
    box-shadow: none;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
    writing-mode: vertical-rl;
    display: inline-block;
    transform: rotate(180deg);
    height: 100vh;
    width: 5vw;
    position: absolute;
    box-shadow: none;
    z-index: 1;
  }

  a {
    color: black;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
  }
}

.bg-flower {
  background-color: transparent;
}

.nav-item {
  padding: 0 1rem;
  font-size: 2rem;

  @media (min-width: 1200px) {
    padding: 1rem 0;
  }

  // @media (min-width: 768px) and (max-width: 991.98px) {
  //   padding: 0 2rem;
  // }
}
</style>