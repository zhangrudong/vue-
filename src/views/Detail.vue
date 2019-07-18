<template>
  <div class="box">
    <div class="container">
      <div class="tab">
        <span class="left-icon iconfont icon-zuojiantou" @click= "back"></span>
        <div class="d-nav">
          <ul>
            <a href="#top"><li class="te">商品</li></a>
            <a href="#cha"><li>详情</li></a>
            <a href="#tuijian" ><li>推荐</li></a>
            <a href="#tuijian"><li>营业执照</li></a>
          </ul>
        </div>
      </div>

      <div class="content" id="content">
        <div class="d-img" id="top">
          <van-swipe @change="onChange">
            <van-swipe-item v-for = "(item, index) of images" :key="index">
              <img :src="item.goods_image" alt="">
            </van-swipe-item>

            <div class="custom-indicator" slot="indicator">
              <span class="swiper-pagination-current"> {{ current + 1 }} </span> / <span class=""> {{ images.length }} </span></div>
          </van-swipe>
        </div>

        <div class="prod">
          <div class="prod_title" >
            <span class="p-l"> {{ goods_info.goods_name }} </span>
            <div class="prod_r">
              <i></i>
              <span>二维码</span>
            </div>
          </div>
          <div class="prod_tit"> {{ goods_info.goods_jingle }} </div>

          <div class="prod_price">
            <span class="money"> ￥{{ goods_info.goods_price }} </span>
            <span class="old"> {{ goods_info.goods_marketprice }} </span>
          </div>

          <div class="prod_freight">
            <span>运费：</span>
            <span>送至山西省太原市0.00元</span>
          </div>

          <div class="space"></div>

          <div class="prod_spec">
            <span class="desc">请选择</span>
            <div class="spec_text">
              <span class="t-_span"  v-for = "(value,key,index) of goods_spec" :key="index"> {{ value }} </span>
            </div>
            <div class="msg">1个</div>
            <em class="spec_icon"></em>
          </div>

          <div class="space"></div>
          <div class="space"></div>

          <div class="prod_shop">
            <div class="shop_logo">
              <img :src="storeInfo.store_logo" alt="">
            </div>
            <div class="shop_r">
              <span class="shopname"> {{ storeInfo.store_name }} </span>
              <div class="shop_city"><span>所在地：</span> {{ storeInfo.area_info }} </div>
            </div>
          </div>
        </div>

        <div class="space"></div>

        <div class="space2"></div>
        <div class="space2"></div>

        <div class="cha" id="cha">查看图文详情</div>

        <div class="space2"></div>
        <div class="space2"></div>

        <div class="tuwen">
          <div class="img" v-html="goods_body">
            <!-- <img src="https://img.lecuntao.com/data/upload/shop/store/goods/4753/2018/09/08/4753_05897389957247389_1280.jpg" alt=""> -->
          </div>
        </div>

        <div class="tuijian" id="tuijian">
          <div class="t-shop">
            <span class="t-title">为你推荐</span>
            <div class="t-list">
              <ul>
                <li v-for = "(item,index) of tuijian" :key="index">
                  <img :src="item.goods_image" alt="">
                  <p> {{ item.goods_name }} </p>
                  <span>￥ {{ item.goods_price }} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="botm">已经到底了</div>

      </div>
    </div>

    <footer class="footer">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat-o"
          text="客服"
          @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          @click="onClickMiniBtn"
        />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="addCart"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="onClickBigBtn"
        />
        <i class="cart_num">0</i>
      </van-goods-action>
    </footer>

    <Gotop />

  </div>
</template>

<script>
import Gotop from '@/components/common/Gotop'
import Vue from 'vue'
import { Toast } from 'vant'
import axios from 'axios'
Vue.use(Toast)
export default {
  data () {
    return {
      flag: false,
      current: 0,
      images: '',
      goods_info: '',
      goods_spec: '',
      storeInfo: '',
      goods_body: '',
      tuijian: ''
    }
  },
  components: {
    Gotop
  },
  methods: {
    back () {
      this.$router.push('/home')
    },
    onChange (index) {
      this.current = index
    },
    onClickMiniBtn () {
      Toast('点击图标')
    },
    onClickBigBtn () {
      Toast('点击按钮')
    },
    addCart () {
      if (localStorage.getItem('isLogin') === 'ok') {
        Toast('加入购物车成功')
        this.$store.commit('changeNum', { number: 1 })
      } else {
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    const { id } = this.$route.params
    const { gd } = this.$route.params
    let data = new FormData()
    data.append('goods_id', id)
    data.append('gc_id', gd)
    data.append('province_id', 140)
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559651436819&act=mobile_goods_detail&op=getGoodsInfo`, data).then(res => {
      // console.log(res.data.datas.goods_info.gc_id)
      this.images = res.data.datas.img_list
      this.goods_info = res.data.datas.goods_info
      this.goods_spec = res.data.datas.goods_info.goods_spec
      // this.gc_id = res.data.datas.goods_info.gc_id
    })
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559706407880&act=mobile_goods_detail&op=getDetailData`, data).then(res => {
      // console.log(res.data.datas.goodsDetail)
      this.storeInfo = res.data.datas.storeInfo
      this.goods_body = res.data.datas.goodsDetail.goods_body
    })
    axios.post(`/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559726958397&act=mobile_goods_detail&op=getRecommentDetail`, data).then(res => {
      const arr = res.data.datas.recommendGoods
      this.tuijian = arr.slice(0, 6)
      // console.log(this.tuijian)
    })
  }
}
</script>

<style lang="scss">
 @import '@/lib/reset.scss';
 .tab{
   z-index: 5;
   position: relative;
   @include flexbox();
   @include flex-direction();
   @include justify-content();
   @include align-items();
   .left-icon{
     position: absolute;
     display: block;width:.5rem;height:.44rem;
     font: .25rem/.45rem "";left: 0;
     text-align: center;
   }
   .d-nav{
     width: 100%;
     background: #fff;
     border-bottom: 1px solid #d8d8d8;
     height: .46rem;
      ul{
        display: flex;
        @include align-items();
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 65%;height:.45rem;
        margin: 0 auto;
        a{
          display: block;
          color:#333;
          display: flex;
          @include flex();
          li{
            display: flex;
            @include flex();
            @include justify-content();
            @include align-items();
            height:.44rem;
            font-size:.13rem;
            &.te{
              border-bottom: 1.5px solid #333;
            }
          }
        }
      }
   }
}
.d-img{
  width:100%;
  .van-swipe__track{
    img{
      width:100%;
    }
  }
  .custom-indicator{
    width: 0.44rem;
    height: 0.44rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0.13rem;
    left: 84%;
    z-index: 5;
    font-size: 0.13rem;
    line-height: 0.44rem;
    background: rgba(0,0,0,0.4);
    color: #fff;
    text-align: center;
  }
}
.prod{
  border-top: .2px solid rgb(230, 230, 230);
  background:#fff;
  .prod_title{
    margin: .1rem .08rem 0 .08rem;
    overflow: hidden;
    .p-l{
      float: left;
      font-size: .15rem;
      width:80%;
      display:block;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      color: #252525;
    }
    .prod_r{
      float: right;
      text-align: center;
      width: .44rem;
      i{
        background: url(https://m.lecuntao.com/resource/images/details/icon_QRcode2.png?lv=365ee8b54d) no-repeat;
        display:block;width:.2rem;height:.2rem;background-size: contain;margin-left:.12rem;
      }
      span{
        width: 100%;
        display: block;
        text-align: center;
        font-size: 0.12rem;
        color: #808080;
        margin-top:.05rem;
      }
    }
  }
  .prod_tit{
    color: #808080;
    font-size: 0.12rem;
    margin: .09rem;
  }
  .prod_price{
    font-size: 0.24rem;
    color: #ff4b4b;
    margin-top: .08rem;
    margin-left: .06rem;
    .old{
    font-size: 0.13rem;
    color: #808080;
    padding-top: 0.3rem;
    text-decoration: line-through;
    }
  }
  .prod_freight{
    color: #808080;
    font-size: 0.12rem;
    margin:.04rem .08rem .08rem .08rem;
  }
  .prod_spec{
    height: .5rem;
    margin-left: 0.1rem;
    padding-right: 0.1rem;
    line-height: .05rem;
    font: 0.15rem/.5rem "";
    overflow: hidden;
    .desc{
      float: left;
      color: #808080;
      margin-right:.1rem;
    }
    .spec_text{
    float: left;
    color: #333;
    width: 65%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
    .msg{
      float: left;
      margin-left: .1rem;
    }
    .spec_icon{
      background: url(https://m.lecuntao.com/resource/images/irt.png?lv=cb30aa58fb) no-repeat;
      background-size: contain;
      display: block;
      width: .05rem;
      height: .07rem;
      float: right;
      margin-top: 0.2rem;
    }
  }
  .prod_shop{
    width: 100%;
    overflow: hidden;
    height: .5rem;
    .shop_logo{
      float: left;
      background: #fff;
      margin: 0.1rem;
      border: 0.01rem solid #e3e3e3;
      width: .7rem;
      height: 0.24rem;
      background-size: contain;
      margin-top: 0.1rem;
      img{
        width:100%;
      }
    }
    .shop_r{
      float: left;
      width: 66%;
      overflow: hidden;
      margin-top: .05rem;
      .shopname{
        font-size: 0.13rem;
        color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
      }
      .shop_city{
        font-size: 0.13rem;
        color: #333;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
.space{
  width:100%;height:.04rem;background:#f0f0f0;
}
.space2{
  width:100%;height:.04rem;background:#fff;
}
.cha{
  width: 100%;
  height: .68rem;
  background: #f0f0f0;
  color: #bababa;
  font-size: 0.14rem;
  line-height: .68rem;
  text-align: center;
}
.tuwen{
  .img{
    img{
      width:100%;
    }
  }
}
.tuijian{
  background: #fff;
  width: 100%;
  .t-shop{
    .t-title{
      color: #f81234;
      font: .15rem/.5rem "";
      width: 100%;
      font-weight: bold;
      text-align:center;
      display: block;
    }
  }
  .t-list{
    width:100%;
    ul{
      overflow: hidden;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      // li:nth-child(odd){
      //     border-right: 0.01rem solid #f0f0f0;
      // }
      li{
        width: 33%;
        float:left;
        // border-bottom: 1px solid #ccc;
        img{
          width: 100%;
        }
        p{
          height: 0.34rem;
          width:85%;
          margin: 0 auto;
          line-height: 0.17rem;
          overflow: hidden;
          font-size: 0.12rem;
          color: #808080;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical
        }
        span{
          display:block;width:85%;
          margin-left:.08rem;
          font-size: .16rem;
        }
      }
    }
  }
}
.botm{
  width: 100%;
  height: .68rem;
  background: #f0f0f0;
  color: #bababa;
  font-size: 0.13rem;
  border-top: 0.01rem solid #dcdcdc;
  line-height: .68rem;
  text-align: center;
}
.cart_num{
  padding: 0.01rem 0.04rem;
  border-radius: 50%;
  border: 0.01rem solid #ccc;
  background: #f81234;
  position: fixed;
  left: 23%;
  bottom: 0.28rem;
  font-size: 0.08rem;
  display: block;
  color: #fff;
  z-index: 10;
}

</style>
