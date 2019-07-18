<template>
  <div class="container">
    <header class="header">个人中心头部</header>
    <div class="content">
      <div v-if="loginState !== 'ok'">
        <router-link to="/login"> 登陆</router-link>
        <router-link to="/register"> 注册</router-link>
      </div>
      <div v-else>
        欢迎您****
        <van-button type="danger" @click="logout">退出</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') {
        vm.$store.commit('changeLoginState', 'ok')
        next()
      } else {
        vm.$store.commit('changeLoginState', '')
        next('/user')
      }
    })
  },
  computed: {
    ...mapState({
      loginState: ({ user }) => user.loginState
    })
  },
  methods: {
    logout () {
      this.$store.commit('changeLoginState', '')
      console.log(this.loginState)
      localStorage.setItem('isLogin', '')
      this.$router.push('/user')
    }
  }
}
</script>
