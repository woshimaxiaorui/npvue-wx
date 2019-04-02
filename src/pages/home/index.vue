<template>
  <div >
    首页 
    <i-button type="primary" @click="handleText" size="large">大尺寸</i-button>
    <i-toast id="toast" />

    <swiper
      :indicator-dots="true"
      :autoplay="true"
      :interval="4000"
      :duration="300"
    >
      <swiper-item v-for="(item, index) of bannerdata" :key="index">
        <image :src='item' class="slide-image" width="355" height="150" />
      </swiper-item>
    </swiper>
    <i-cell-group>
      <i-cell v-for="item of prolist" :key="item.id" @click="goDetail(item.id)">
       <image :src = "item.images.small" :alt="item.alt" />
       <h1>{{ item.title }}</h1>
       1111111111111
      </i-cell>
    </i-cell-group>
    <!-- <Prolist /> -->
  </div>
</template>

<script>
import store from './store'
import Prolist from '@/components/prolsit'
import { $Toast } from './../../../static/dist/base'
export default {
  computed: {
    bannerdata () {
      return store.state.bannerdata
    },
    prolist () {
      return store.state.prolist
    }
  },
  components: {
    Prolist
  },
  methods: {
    handleText () {
      $Toast({
        content: '这是文本提示'
      })
    },
    goDetail (id) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      })
    }
  },
  mounted () {
    this.$http.get('https://www.daxunxun.com/banner').then(data => {
      console.log(data)
      let arr = []
      data.data.map((item) => {
        arr.push('https://www.daxunxun.com' + item)
      })
      store.commit('changebannerdata', arr)
    })
    this.$http.get('https://www.daxunxun.com/douban').then(data => {
      console.log(data)
      store.commit('changeprolist', data.data)
    })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
