<template>
<nav class="navbar navbar-expand-lg navbar-light sticky-top sticky-offset">
  <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/posts/">Blog</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/admin">Admin</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  components: {
    TheSideNavToggle
  }
};
</script>


<style lang="scss">
.navbar {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  a {
      color: black;
  }
}

.nav-item {
  margin-left: 1.3rem;
}


.sticky + .content {
  padding-top: 60px;
}

</style>