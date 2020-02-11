<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <transition name="slideIn">
        <nuxt-link to="/"><a>Home</a></nuxt-link>
        </transition>
      </li>
      <li class="nav-item">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/posts/1">Posts</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/admin">Admin</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.navbar {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
}

.nav-item {
  margin-left: 1.3rem;
}


</style>