//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    imgUrls: [
      '../../assets/images/timg1.jpg',
      '../../assets/images/timg.jpg',
      '../../assets/images/timg2.jpg'
    ],
    src:'../../assets/images/laba.png',
    text: "微订花, 快鲜花!全国县级以上城市均可同城速递, 3小时达, 可直接下单!",
    list1:[],
    list2: [],
    list3: [],
    list4: [],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  
  //请求数据
  onLoad: function () {
    wx.showNavigationBarLoading();
    wx.request({
      url:`${app.baseUrl}/home`,
      success: (res)=>{ 
        this.setData({
          list1: res.data.data.list1,
          list2: res.data.data.list2,
          list3: res.data.data.list3,
          list4: res.data.data.list4
        })
      },
      complete:res=>{
        wx.hideNavigationBarLoading()
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
