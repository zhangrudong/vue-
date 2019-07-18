<template>
    <div class="container">
      <header class="header">
        <van-search
          placeholder="搜索您需要的商品"
          show-action
          shape="round"
          disabled="false"
        >
        <div slot="action">取消</div>
        </van-search>
      </header>

      <div class="content">
        <div class="box">
          <div class="k_left">
            <ul>
              <li v-for = "(item,index) of navlist" :key="index" @click="golist(index,item.gc_id)" :class="current==index ? 'te' : ''"> {{ item.gc_name }} </li>
            </ul>
          </div>
          <div class="k_right">
            <ul>
              <li v-for = "(item,index) of goodlist" :key="index" @click="goGoodlist(item.gc_id,item.gc_name)">
                <img :src="item.cate_img" alt="">
                <span> {{ item.gc_name }} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      flag: false,
      navlist: [],
      goodlist: [],
      current: '',
      gc_id: ''
    }
  },
  methods: {
    golist (index, id) {
      this.current = index
      this.gc_id = id
      // console.log(this.gc_id)
      let data = new FormData()
      data.append('gc_id', this.gc_id)
      axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559814172736&act=mobile_cate&op=index`, data).then(res => {
        this.goodlist = res.data.datas
      })
    },
    goGoodlist (id, name) {
      this.$router.push(`/goodslist/gc_id=${id}&goods_name=${name}`)
    }
  },
  mounted () {
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559814172736&act=mobile_cate&op=index`).then(res => {
      this.navlist = res.data.datas
    })
    let data = new FormData()
    data.append('gc_id', 256)
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559814172736&act=mobile_cate&op=index`, data).then(res => {
      this.goodlist = res.data.datas
      // console.log(this.goodlist)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  header{
    height: .6rem !important;
    background: #fff;
    .van-search{
      width: 100%;
      .van-search__content.van-search__content--round{
        background: #f2f2f2;
      }
    }
  }
  .content{
    background: #fff;
    .box{
      @include flexbox();
      @include flex-direction();
      .k_left{
        @include flexbox();
        // @include flex();
        @include flex-direction(column);
        width:25%;height: auto;
        ul{
          background: #f0f0f0 !important;
          li{
            height: .45rem;
            text-align:center;
            font: .15rem/.45rem "";
            &.te{
              background: #fff;
              color: #f81234;
            }
          }
        }
      }
      .k_right{
        @include flexbox();
        @include flex();
        @include flex-direction();
        ul{
          width:100%;
          overflow:hidden;
          li{
            float: left;
            width: 33%;
            text-align:center;
            img{
              width:100%;
            }
          }
        }
      }
    }
  }
</style>
