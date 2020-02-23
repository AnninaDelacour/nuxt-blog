<template>
  <mdb-container>
    <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center text-md-left col-md-6 mb-5">
              <h1 class="h1-responsive font-weight-bold">Make purchases with our app</h1>
              <hr class="hr-light" />
              <h6 class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                iste.
              </h6>
              <mdb-btn color="white">Download</mdb-btn>
              <mdb-btn outline="white">Learn More</mdb-btn>
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5">
              <img
                src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                class="img-fluid"
              />
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
  </mdb-container>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbView,
  mdbMask,
  mdbBtn
} from "mdbvue";

export default {
  components: {
    PostList,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbView,
    mdbMask,
    mdbBtn
  }
};
</script>

<style lang="scss" scoped>
.view {
  background-image: url("~@/assets/images/flowerwall.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
}

h6 {
  line-height: 1.7;
}
</style>
