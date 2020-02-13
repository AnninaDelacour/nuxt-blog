<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList isAdmin />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin'
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