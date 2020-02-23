<template>
  <div class="admin-page">
    <Header />
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList :posts="loadedPosts" isAdmin />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList"
import AppButton from "@/components/UI/AppButton"
import Header from "@/components/Navigation/Header"

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton,
    Header
  },
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>

<style lang="scss" scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts {
  text-align: center;
}
</style>