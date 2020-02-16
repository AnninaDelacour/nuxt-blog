<template>
  <div class="container single-post-page">
    <div class="row">
      <div class="col-sm-12 d-flex mx-auto">
        <div class="hero-image">
          <div class="hero-text">
            <div class="shape"></div>
            <h1>Think green</h1>
            <p>
              This world needs you
              <strong>now</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="row">
      <section class="post">
        <div class="col-md-12">
          <h1 class="post-title">{{ loadedPosts.title }}</h1>
          <div class="post-details">
            <div class="post-detail">{{ loadedPosts.updatedDate }}</div>
            <div class="post-detail">{{ loadedPosts.author }}</div>
          </div>
        </div>
        <div class="col-md-12 post-content">
          {{ loadedPosts.content }}
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  asyncData(context) {
    return axios.get('https://nuxt-blog-24bc5.firebaseio.com/posts/' + context.params.id + '.json')
    .then(res => {
      return {
        loadedPosts: res.data
      }
    })
    .catch(e => context.error(e))
  }
};
</script>


<style lang="scss">
.hero {
  &-image {
    background-image: url("~@/assets/images/gruenerdaumen.jpg");
    height: 70vh;
    width: 100vw;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  &-text {
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 20px;
    //transform: translate(-50%, -50%);
    color: #5d5d5a;

    p {
      font-size: 2rem;
      font-weight: lighter;
    }

    h1 {
      font-size: 5rem;
      font-weight: bold;
    }
  }
}

.shape {
  height: 250px;
  width: 550px;
  border: 2px dashed #5d5d5a;
  position: absolute;
  opacity: 0.8;
  bottom: 0;
  right: 0;
}

.post {
  margin-top: 3rem;
  display: block;
}

hr {
  height: 15px;
  background-color: #5d5d5a; //#ffd615;
  opacity: 0.8;
}

//background-image: linear-gradient(to bottom, #5d5d5a 50%, #ffd615 50%, #ffd615 75% #2cb978 75%);
</style>

<!-- <div>
    <div class="container">
      <div class="row">
        <div class="post-header-img" :style="'background:url('+logo+')'">
            <div class="col-sm-12 text-center">
          <h1 class="pt-5">Vertically Centered Masthead Content</h1>
          <p class="lead">A great starter layout for a landing page</p>
        </div>
        </div>

        
      </div>
    </div>

    <section>
      <div class="container">
    <div class="row">
        <div class="col-sm-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic,
            assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.
            </p>
        </div>
    </div>
      </div>
    </section>
  </div> -->