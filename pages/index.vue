<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest climate news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  //  data() {
  //    return {
  //      loadedPosts: [
  //        { id: "1",
  //        title: "A green world",
  //        previewText: "20 simple things you can do to make a better tomorrow",
  //        thumbnail:"https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //        },
  //        { id: "2",
  //        title: "Another green world",
  //        previewText: "20 simple things you can do to make a better tomorrow",
  //        thumbnail:"https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //        }
  //      ]
  //    }
  //  }
};
</script>

<style lang="scss" scoped>
.intro {
  height: 200px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  /* OR
  background-image: url('~assets/images/mountain-view.jpg');
  background-position: top;
  */
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}



</style>
