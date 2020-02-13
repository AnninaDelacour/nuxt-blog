<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "A green world",
            previewText:
              "20 simple things you can do to make a better tomorrow",
            thumbnail:
              "https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        ]
      });
    }, 1500);
  }
};
</script>

<style lang="scss">
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>