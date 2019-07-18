<template>
  <div id="app">
    <!-- <transition name="test"> -->
    <router-view></router-view>
    <!-- </transition> -->

    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import '@/lib/reset.scss';
  html,body,#app,.box,.goodslist{
    @include rect(100%,100%);
  }
  body{
    @include background-color(#f0f0f0)
  }
  #app,.box,.goodslist{
    @include flexbox();
    @include flex-direction(column);
    .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    header {
      @include rect(100%, 0.44rem);
    &.header{
    border-bottom: 0.01rem solid #ccc;
  }
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    border-top: 0.01rem solid #ccc;
    ul {
      color: #696969;
      @include rect(100%, 100%);
      @include flexbox();
      @include background-color(#fff);
      li{
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(0.22rem);
          height: 0.3rem;
        }
        p {
          @include font-size(0.11rem);
        }
        &.router-link-active{
          @include color(#f81234)
        }
      }
    }
  }
  }
//   .test-enter {
//   transform: translateX(100%)
// }
// .test-enter-active {
//   transition: all 0.5s;
// }
// .test-enter-to, .test-leave {
//   transform: translateX(0)
// }
// .test-leave-to {
//   transform: translateX(-100%)
// }
// .test-leave-active {
//   transition: all 0;
// }

</style>
