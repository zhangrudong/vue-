<template>
  <div class="goodslist">
    <div class="container">
      <div class="top">
        <span class="left-icon iconfont icon-zuojiantou" @click= "back"></span>
        <h3> {{ name }} </h3>
      </div>
      <div class="nav">
        <ul>
          <li> 全部 </li>
          <li> 销量优先 </li>
          <li> 价格 </li>
          <li> 人气 </li>
        </ul>
      </div>
      <div class="content">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore">
        <ul>
          <li v-for = "(item,index) of list" :key="index" @click="goDetail(item.goods_id,item.gc_id)">
            <img :src="item.goods_image" alt="">
            <p> {{ item.goods_name }} </p>
            <div class="price">
              <span class="money">￥ {{ item.goods_price }} </span>
              <span class="msg"> {{ item.goods_salenum }} 人付款</span>
            </div>
          </li>
        </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      allLoaded: false,
      pageCode: 1,
      name: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/kind')
    },
    goDetail (id, gd) {
      this.$router.push(`/detail/gc_id=${gd}&goods_id=${id}`)
    },
    loadBottom () {
      // console.log(this.$route.params)
      const { id } = this.$route.params
      let data = new FormData()
      data.append('page', this.pageCode)
      data.append('gcId', id)
      // data.append('pageSize', 10)
      axios.post('/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1560165357314&act=goods&op=goodsList', data).then(res => {
        if (res.data.length === 0) {
          this.allLoaded = true
        } else {
          this.list = [...this.list, ...res.data.datas.list]
          this.pageCode++
        }
        // console.log(this.list)
        this.$refs.loadmore.onBottomLoaded()
      })
    }
  },
  mounted () {
    // console.log(this.$route.params)
    const { id } = this.$route.params
    const { name } = this.$route.params
    this.name = name
    let data = new FormData()
    data.append('gcId', id)
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1560165357314&act=goods&op=goodsList`, data).then(res => {
      console.log(res.data.datas.list)
      this.list = res.data.datas.list
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/lib/reset.scss';
  .container{
    background:#fff;
  }
  .top{
    @include flexbox();
    @include flex-direction();
    width:100%;height:.48rem;
    text-align:center;
    color: rgb(116, 116, 116);
    .left-icon{
      display: block;
      font: .28rem/.48rem "";
      width:10%;
      position: absolute;
    }
    h3{
      width:100%;
      font: .18rem/.48rem "";
      color: #000;
    }
  }
  .nav{
    border-bottom: 1px solid rgb(236, 236, 236);
    ul{
      @include flexbox();
      @include flex-direction();
      width:100%;height:.3rem;
      li{
        @include flexbox();
        width:25%;
        font: .15rem/.3rem "";
        @include justify-content();
        @include align-items();
      }
    }
  }
  .content{
    ul{
      width:100%;
      overflow: hidden;
      background: #f0f0f0;
      li{
        float: left;
        width: 49.3%;
        background: #fff;
        margin-top: 0.04rem;
        height:2.67rem;
        img{
          width:100%;
        }
        p{
          width:90%;height:auto;
          display:block;
          margin: 0 auto;
          font-size: .14rem;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
        .price{
          width:95%;height:.43rem;
          margin: 0 auto;
          line-height:.43rem;
          .money{
            color: #f81234;
            font-size: 0.18rem;
            float: left;
            margin-left: 0.04rem;
          }
          .msg{
            float: right;
            font-size: .12rem;
            color:rgb(165, 165, 165);
          }
        }
      }
      li:nth-child(odd){
        margin-right: 1.4%;
      }
    }
  }
</style>
