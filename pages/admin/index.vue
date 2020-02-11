<template>
  <div class="admin-page">
    <section class="new-post">
      <button @click="$router.push('/admin/new-post')">Create post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
    </section>
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";

export default {
  components: {
    PostList
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