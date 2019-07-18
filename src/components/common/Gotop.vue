<template>
  <div class="gotop" @click="backTop" v-show="flag">
    <img src="https://m.lecuntao.com/resource/images/index/iconZhiding.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    backTop () {
      document.getElementById('content').scrollTop = 0
    },
    scrollTop () {
      var scrollTop = document.getElementById('content').scrollTop
      if (scrollTop > 500) {
        // 显示回到顶部
        this.flag = true
      } else {
        // 隐藏回到顶部
        this.flag = false
      }
      // console.log(scrollTop)
    }
  },
  beforeRouteLeave (to, from, next) {
    document.getElementById('content').removeEventListener('scroll', this.scrollToTop)
    next()
  },
  mounted () {
    document.getElementById('content').addEventListener('scroll', this.scrollTop)
  }
}
</script>

<style lang="scss">
.gotop{
  position: fixed;
  bottom: .8rem;
  right: .1rem;
  img{
    width:.52rem;height:.52rem;
  }
}
</style>
