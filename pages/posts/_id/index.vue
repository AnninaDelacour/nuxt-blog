<template>
  <div class="container single-post-page">

    <div class="row">
      <div class="col-sm-12 d-flex mx-auto">
        <div class="hero-image">
          <div class="hero-text">
            <div class="shape"></div>
            <h1>Think green</h1>
            <p>This world needs you <strong>now</strong></p>
          </div>
        </div>
      </div>
    </div>

<hr>

    <div class="row">
      <section class="post">
        <div class="col-md-12">
        <h1 class="post-title">My First Post</h1>
        <div class="post-details">
          <div class="post-detail">Last updated on DATE</div>
          <div class="post-detail">Written by NAME</div>
        </div>
      </div>
      <div class="col-md-12">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
          ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
          id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
          placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
          et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
          recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
          consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      </section>
    </div>
  </div>
</template>



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