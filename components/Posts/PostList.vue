<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
  </section>
</template>
      <!-- 
        https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

        20 simple things you can do to make a better tomorrow


        <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://images.pexels.com/photos/66865/green-monkeys-monkey-old-world-monkey-monkey-family-66865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="To care for your health is essential. To care for nature, too."
        previewText="8 great methods to establish a healthy and sustainable lifestyle - for you and nature"
      />

      <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Living in harmony and balance with with our earth"
        previewText="What we should know and what we should do"
      /> -->


<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
// .posts-page {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>