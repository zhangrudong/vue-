<template>
    <div class="container">
      <header class="home" :class="flag ? 'home-ser' : ''">
        <div class="left">
          <i class="iconfont icon-dingweiweizhi"></i>
          <span>上海市</span>
          <i class="iconfont icon-arrow-right-copy-copy-copy-copy-copy-copy" ></i>
        </div>
        <van-search
          placeholder="搜索您需要的商品"
          shape="round"
          disabled="false"
        >
        </van-search>
      </header>
      <div class="content" id="content">

      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore">
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for = "(item,index) of bannerlist" :key="index">
            <a :href="item.adv_url">
              <img :src="item.adv_image" alt="">
            </a>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="nav">
        <ul>
          <li v-for = "(item,index) of navlist" :key="index">
            <a :href="item.url">
              <img :src="item.cate_image">
              <span> {{ item.cate_name }} </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="leliu">
        <i class="le-icon"></i>
        <div class="img">
          <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_llj.jpg?date=20190603">
        </div>
        <div class="leliulist">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "item of leliulist" :key="item.goods_id">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <span>¥{{ item.goods_price }} </span>
            </li>
            <li class="te">
              <h5>查看全部</h5>
              <i>see more</i>
            </li>
          </ul>
        </div>
      </div>

      <div class="tsg">
        <i class="tsg-icon"></i>
        <div class="img">
          <img src="https://s0.lecuntao.com/mobile_2.3.0/resource/images/index/lct_wap_tsg.jpg?date=20190603">
        </div>
        <div class="tsglist">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of tsglist" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <span>¥{{ item.goods_price }} </span>
            </li>
            <li class="te">
              <h5>查看全部</h5>
              <i>see more</i>
            </li>
          </ul>
        </div>
      </div>

      <div class="nav2">
        <ul>
          <li>
            <span></span>
            <p>电器城</p>
          </li>
          <li>
            <span></span>
            <p>食品汇</p>
          </li>
          <li>
            <span></span>
            <p>米面油</p>
          </li>
          <li>
            <span></span>
            <p>服装城</p>
          </li>
          <li>
            <span>日用品</span>
            <p></p>
          </li>
        </ul>
      </div>

      <div class="dianqi">
        <div class="more">
          <i class="icon-l"></i>
          <span class="m-l">电器城</span>
          <a href="" class="m-a">
            <span class="m-r">更多</span>
            <i class="icon-r"></i>
          </a>
        </div>
        <div class="d-list">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of dianqilist" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <div class="d-fw">
                <span class="d-price"> {{ item.goods_price }} </span>
                <span class="d-sold">已售 {{ item.goods_salenum }} 件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="shipin">
        <div class="more">
          <i class="icon-l"></i>
          <span class="m-l">食品汇</span>
          <a href="" class="m-a">
            <span class="m-r">更多</span>
            <i class="icon-r"></i>
          </a>
        </div>
        <div class="d-list">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of shipinlist" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <div class="d-fw">
                <span class="d-price"> {{ item.goods_price }} </span>
                <span class="d-sold">已售 {{ item.goods_salenum }} 件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="mimian">
        <div class="more">
          <i class="icon-l"></i>
          <span class="m-l">米面油</span>
          <a href="" class="m-a">
            <span class="m-r">更多</span>
            <i class="icon-r"></i>
          </a>
        </div>
        <div class="d-list">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of mimianlist" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <div class="d-fw">
                <span class="d-price"> {{ item.goods_price }} </span>
                <span class="d-sold">已售 {{ item.goods_salenum }} 件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="fuzhuang">
        <div class="more">
          <i class="icon-l"></i>
          <span class="m-l">服装城</span>
          <a href="" class="m-a">
            <span class="m-r">更多</span>
            <i class="icon-r"></i>
          </a>
        </div>
        <div class="d-list">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of fuzhuanglist" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <div class="d-fw">
                <span class="d-price"> {{ item.goods_price }} </span>
                <span class="d-sold">已售 {{ item.goods_salenum }} 件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="riyong">
        <div class="more">
          <i class="icon-l"></i>
          <span class="m-l">日用品</span>
          <a href="" class="m-a">
            <span class="m-r">更多</span>
            <i class="icon-r"></i>
          </a>
        </div>
        <div class="d-list">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of riyonglist" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <div class="d-fw">
                <span class="d-price"> {{ item.goods_price }} </span>
                <span class="d-sold">已售 {{ item.goods_salenum }} 件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="tuijian">
        <div class="more">
          <i class="icon-l"></i>
          <span class="m-l">热门推荐</span>
          <a href="" class="m-a">
            <!-- <span class="m-r">更多</span>
            <i class="icon-r"></i> -->
          </a>
        </div>
        <div class="d-list">
          <ul>
            <li @click="goDetail(item.goods_id,item.gc_id)" v-for = "(item,index) of list" :key="index">
              <img :src="item.goods_image">
              <p> {{ item.goods_name }} </p>
              <div class="d-fw">
                <span class="d-price"> {{ item.goods_price }} </span>
                <span class="d-sold">已售 {{ item.goods_salenum }} 件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      </mt-loadmore>
      </div>
      <Gotop />
    </div>

</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import Gotop from '@/components/common/Gotop'
export default {
  data () {
    return {
      flag: false,
      allLoaded: false,
      pageCode: 2,
      list: []
    }
  },
  components: {
    Gotop
  },
  computed: {
    ...mapState({
      bannerlist: ({ home }) => home.bannerlist,
      navlist: ({ home }) => home.navlist,
      leliulist: ({ home }) => home.leliulist,
      tsglist: ({ home }) => home.tsglist,
      dianqilist: ({ home }) => home.dianqilist,
      shipinlist: ({ home }) => home.shipinlist,
      mimianlist: ({ home }) => home.mimianlist,
      fuzhuanglist: ({ home }) => home.fuzhuanglist,
      riyonglist: ({ home }) => home.riyonglist,
      tuijianlist: ({ home }) => home.tuijianlist

    })
  },
  methods: {
    goDetail (id, gd) {
      this.$router.push(`/detail/gc_id=${gd}&goods_id=${id}`)
    },
    loadTop () {
      axios.post('/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559564391238&act=goods&op=goodsRecom_new').then(res => {
        // console.log(res.data)
        this.allLoaded = false
        this.pageCode = 1
        // console.log(this.pageCode)
        this.list = res.data.datas.list
        this.$refs.loadmore.onTopLoaded()
      })
    },
    loadBottom () {
      let data = new FormData()
      data.append('page', this.pageCode)
      data.append('pageSize', 10)
      axios.post('/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559564391238&act=goods&op=goodsRecom_new', data).then(res => {
        if (res.data.length === 0) {
          this.allLoaded = true
        } else {
          this.list = [...this.list, ...res.data.datas.list]
          this.pageCode++
        }
        // console.log(this.list)
        this.$refs.loadmore.onBottomLoaded()
      })
    },
    scrollTop () {
      var scrollTop = document.getElementById('content').scrollTop
      if (scrollTop > 210) {
        this.flag = true
      } else {
        this.flag = false
      }
      // console.log(scrollTop)
    },
    ...mapActions({
      getHomeBannerList: 'getHomeBannerList',
      getNavlist: 'getNavlist',
      getLeliulist: 'getLeliulist',
      getTsglist: 'getTsglist',
      getDianqilist: 'getDianqilist',
      getShipinlist: 'getShipinlist',
      getMimianlist: 'getMimianlist',
      getFuzhuanglist: 'getFuzhuanglist',
      getRiyonglist: 'getRiyonglist',
      getTuijianlist: 'getTuijianlist'
    })
  },
  mounted () {
    let data = new FormData()
    data.append('page', 1)
    data.append('pageSize', 10)
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559564391238&act=goods&op=goodsRecom_new`, data).then(res => {
      // console.log(res.data.datas.list)
      this.list = res.data.datas.list
    })
    document.getElementById('content').addEventListener('scroll', this.scrollTop)
    this.getHomeBannerList()
    this.getNavlist()
    this.getLeliulist()
    this.getTsglist()
    this.getDianqilist()
    this.getShipinlist()
    this.getMimianlist()
    this.getFuzhuanglist()
    this.getRiyonglist()
    this.getTuijianlist()
  }
}
</script>

<style lang="scss">
  @import '@/lib/reset.scss';
  .home{
    position: fixed;
    z-index:  20;
    @include flexbox();
    @include align-items();
    // @include flex();
    // background: red;
    &.home-ser{background:#f81234}
    .left{
      overflow: hidden;
      margin-left: 0.1rem;
      color: #fff;
      @include flexbox();
      @include align-items();
      // @include flex();
      i{
        font-size: 0.2rem;
      }
      span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  }
    .van-search{
      @include flexbox();
      @include flex();
      width: 2.9rem;
      background: none !important;
      .van-search__content.van-search__content--round{
        background:#fff;
      }
    }
  }
  .banner{
    height: 2.05rem;
    a{
      display:block;
      width:100%;height:100%;
      img{
        width:100%;height:2.05rem;
      }
    }
  }
  .nav{
    overflow: hidden;
    width: 100%;height:1rem;
    background:#fff;
    ul{
      @include flexbox();
      @include flex-direction();
      @include justify-content();
      height: 100%;
      li{
        @include flexbox();
        @include flex-direction();
        @include align-items();
        @include justify-content();
        width:20%;height:100%;
        img{
          width:.4rem;
          display: block;
          margin-bottom: .05rem;
          text-align: center;
        }
        span{
          display: block;
          width:100%;
          color:rgb( 85,85,85);
          font-size: 0.13rem;
          text-align: center;
        }
      }
    }
  }
  .leliu{
    .le-icon{
      background:url(https://m.lecuntao.com/resource/images/index/imgLe6Ji.png?lv=121fc80180) no-repeat;
      width:1.2rem;height:.15rem;display:block;
      background-size: contain;margin:.1rem auto;
    }
    .img img{
      width:100%;height:1rem;
    }
    .leliulist{
      height: 1.7rem;
      ul{
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        li{
          text-align: center;
          height: 1.7rem;
          overflow: hidden;
          width:1.08rem;
          background:#fff;
          img{
            width:.96rem;height:.96rem;
            display:block;margin: 0 auto;
          }
          p{
            width: .87rem;height:.36rem;margin: 0 auto;font-size: .13rem;overflow: hidden;
            -webkit-line-clamp: 2;-webkit-box-orient: vertical;display: -webkit-box;
          }
          span{
            font: .14rem/.35rem "";
            color: #f81234;
          }
          &.te{
            background: rgb(247, 247, 247);
            @include flexbox();
            @include flex-direction(column);
            @include align-items();
            font-size: .16rem;
            color: rgb(155, 155, 155);
            h5{
              margin-top:.7rem;
            }
          }
        }
      }
    }
  }
  .tsg{
    .tsg-icon{
      background:url(https://m.lecuntao.com/resource/images/index/icon_teseguan.png?lv=46f429c64a) no-repeat;
      width:1.2rem;height:.15rem;display:block;
      background-size: contain;margin:.1rem auto;
    }
    .img img{
      width:100%;height:1rem;
    }
    .tsglist{
      height: 1.7rem;
      ul{
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        li{
          text-align: center;
          height: 1.7rem;
          overflow: hidden;
          width:1.08rem;
          background:#fff;
          img{
            width:.96rem;height:.96rem;
            display:block;margin: 0 auto;
          }
          p{
            width: .87rem;height:.36rem;margin: 0 auto;font-size: .13rem;overflow: hidden;
            -webkit-line-clamp: 2;-webkit-box-orient: vertical;display: -webkit-box;
          }
          span{
            font: .14rem/.35rem "";
            color: #f81234;
          }
          &.te{
            background: rgb(247, 247, 247);
            @include flexbox();
            @include flex-direction(column);
            @include align-items();
            font-size: .16rem;
            color: rgb(155, 155, 155);
            h5{
              margin-top:.7rem;
            }
          }
        }
      }
    }
  }
  .nav2{
    margin-top:.1rem;
    width: 100%;height:.47rem;
    background:#fff;
    ul{
      @include flexbox();
      @include flex-direction();
      li{
        @include flexbox();
        @include flex(1);
        @include flex-direction();
        @include justify-content();
        @include align-items();
        font: .14rem/.47rem "";
      }
    }
  }
  .dianqi,.shipin,.mimian,.fuzhuang,.riyong,.tuijian{
    height: 5.5rem;
    .more{
      width:100%;height:.35rem;
      font:.12rem/.35rem "";
      .icon-l{
        width: .03rem;
        height: .17rem;
        background: #ff4e67;
        float: left;
        margin-top: .09rem;
        margin-right: .1rem;
      }
      .m-l{
        float:left;
      }
      .m-a{
        color: rgb(158, 158, 158);
        float:right;
        .icon-r{
          background:url(https://m.lecuntao.com/resource/images/index/icon_more.png?lv=23b70ccc9f) no-repeat;
          width: .14rem;
          height: .14rem;
          background-size: contain;
          float: right;
          margin-top: .11rem;
          margin-right: .1rem;
          margin-left: .1rem;
        }
      }
    }
    .d-list{
      width:100%;
      ul{
        width:100%;
        li{
          float: left;
          width: 50%;
          height:2.57rem;
          overflow: hidden;
          background: #fff;
          border-bottom: 0.01rem solid #f0f0f0;
          box-sizing: border-box;
          img{
            width: 1.5rem;
            display: block;
            margin: .15rem auto;
          }
          p{
              font-size: .13rem;
              overflow: hidden;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              display: -webkit-box;
              height: 0.36rem;
              line-height: 0.18rem;
              margin:0 .1rem;
            }
            .d-fw{
              margin-top: .06rem;
              padding:0 .1rem;
              overflow:hidden;
              .d-price{
                float: left;
                color: #f81234;
                font: .14rem/.26rem "";
              }
              .d-sold{
                float: right;
                font: .12rem/.26rem "";
                color: rgb(182, 182, 182)
              }
            }
        }
        li:nth-child(odd){
          border-right: 0.01rem solid #f0f0f0;
        }
      }
    }
  }
</style>
