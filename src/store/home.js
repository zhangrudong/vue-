import axios from 'axios'
const baseUrl = '/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559470882878&act=index&op=index&key=1c3e86778283aa1d09a08896ff820535'
const baseUrl2 = '/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1559564391238&act=goods&op=goodsRecom_new'
export default {
  state: {
    bannerlist: [],
    navlist: [],
    leliulist: [],
    tsglist: [],
    dianqilist: [],
    shipinlist: [],
    mimianlist: [],
    fuzhuanglist: [],
    riyonglist: [],
    tuijianlist: []
  },
  actions: {
    getHomeBannerList ({ commit }) {
      axios.get(baseUrl).then(res => {
        console.log(res.data.datas)
        commit('changeHomeBannerList', {
          data: res.data.datas.adv
        })
      })
    },
    getNavlist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.platform.list)
        commit('changeNavlist', {
          data: res.data.datas.platform.list
        })
      })
    },
    getLeliulist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.le6ji.recommend_goods)
        commit('changeLeliulist', {
          data: res.data.datas.le6ji.recommend_goods
        })
      })
    },
    getTsglist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.feature.recommend_goods)
        commit('changeTsglist', {
          data: res.data.datas.feature.recommend_goods
        })
      })
    },
    getDianqilist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.category_goods[0])
        commit('changeDianqilist', {
          data: res.data.datas.category_goods[0].goods_list
        })
      })
    },
    getShipinlist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.category_goods[1].goods_list)
        commit('changeShipinlist', {
          data: res.data.datas.category_goods[1].goods_list
        })
      })
    },
    getMimianlist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.category_goods[2].goods_list)
        commit('changeMimianlist', {
          data: res.data.datas.category_goods[2].goods_list
        })
      })
    },
    getFuzhuanglist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.category_goods[3].goods_list)
        commit('changeFuzhuanglist', {
          data: res.data.datas.category_goods[3].goods_list
        })
      })
    },
    getRiyonglist ({ commit }) {
      axios.get(baseUrl).then(res => {
        // console.log(res.data.datas.category_goods[2].goods_list)
        commit('changeRiyonglist', {
          data: res.data.datas.category_goods[4].goods_list
        })
      })
    },
    getTuijianlist ({ commit }) {
      axios.get(baseUrl2).then(res => {
        // console.log(res.data.datas.list)
        commit('changeTuijianlist', {
          data: res.data.datas.list
        })
      })
    }
  },
  mutations: {
    changeHomeBannerList (state, payload) {
      state.bannerlist = payload.data
    },
    changeNavlist (state, payload) {
      state.navlist = payload.data
    },
    changeLeliulist (state, payload) {
      state.leliulist = payload.data
    },
    changeTsglist (state, payload) {
      state.tsglist = payload.data
    },
    changeDianqilist (state, payload) {
      state.dianqilist = payload.data
    },
    changeShipinlist (state, payload) {
      state.shipinlist = payload.data
    },
    changeMimianlist (state, payload) {
      state.mimianlist = payload.data
    },
    changeFuzhuanglist (state, payload) {
      state.fuzhuanglist = payload.data
    },
    changeRiyonglist (state, payload) {
      state.riyonglist = payload.data
    },
    changeTuijianlist (state, payload) {
      state.tuijianlist = payload.data
    }
  }
}
