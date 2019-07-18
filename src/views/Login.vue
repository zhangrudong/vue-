<template>
  <div class="container">
    <header>
      <i></i>
      <span>登录</span>
    </header>
    <div class="content">
      <div class="top">
        <ul>
          <router-link to="/login" tag="li">乐村淘帐号登录</router-link>
          <router-link to="/register" tag="li">免费注册</router-link>
        </ul>
      </div>
      <div class="center">
        <ul>
          <li>
            <span>icon</span>
            <input type="text" name="username" id="" placeholder="输入手机号/用户名">
          </li>
          <em></em>
          <li>
            <span>icon</span>
            <input type="text" name="password" id="" placeholder="输入密码">
          </li>
        </ul>
      </div>
      <div class="bottom">
        <span>登录</span>
        <span>找回密码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

    login () {
      // console.log(this.$store.commit)
      this.$store.commit('changeLoginState', 'ok')
      localStorage.setItem('isLogin', 'ok')
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  header{
    height:.63rem !important;
    i{
      display: block;
      position: absolute;
      background: url(https://m.lecuntao.com/resource/images/login/close.png?lv=c5dce8706a) no-repeat;
      width: 0.2rem;
      height: 0.2rem;
      background-size: 100%;
      position: absolute;
      left: 0.09rem;
      top: 0.14rem;
    }
    span{
      display:block;
      color: #333;
      font-size: 0.18rem;
      text-align: center;
      line-height: 0.48rem;
    }
  }
  .content{
    padding: 0 0.1rem;
    overflow: hidden;
    .top{
      ul{
        width: 100%;
        height: 0.4rem;
        font-size: 0.14rem;
        border-radius: 0.04rem;
        margin-bottom: 0.15rem;
        overflow: hidden;
        border: 0.01rem solid #f81234;
        line-height: 0.4rem;
        li{
          height: 100%;
          width: 50%;
          float: left;
          text-align:center;
          &.router-link-exact-active{
            background: #f81234;
            color: #fff;
          }
        }
      }
    }
    .center{
      border-radius: 0.04rem;
      background: #fff;
      height: 1rem;
      ul{
        width:100%;
        li{
          width:100%;
          overflow: hidden;
          span{
            float: left;
            width:10%;
          }
          input{
            float: left;
            height: .5rem;
            display: block;
            font-size: 0.15rem;
            width: 82%;
            border: 0;
          }
        }
        em{
          width: 94%;
          margin: 0 auto;
          height: 0.01rem;
          background: #ccc;
          display: block;
        }
      }
    }
  }
</style>
