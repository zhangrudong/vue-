<template>
    <div class="container">
      <header class="header">购物车顶部</header>
      <div class="content">购物车登陆</div>
    </div>
</template>

<style lang="scss">
  @import '@/lib/reset.scss';
</style>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') {
        vm.$store.commit('changeLoginState', 'ok')
        next()
      } else {
        vm.$store.commit('changeLoginState', '')
        next('/login')
      }
    })
  }
}
</script>
