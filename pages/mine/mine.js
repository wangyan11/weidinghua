//logs.js
Page({
  data:{
    avatar:'../../assets/images/user.png',
    phone:'../../assets/images/phone.png',
    lists:[
      {id:1,text:"我的会员卡",url:""},
      {id:2,text:"我的礼品卡",url:""},
      {id: 3, text:"我的积分",url:""},
      {id: 4, text:"我的优惠券",url:""},
      {id: 5, text:"我的优惠码",url:"" },
      {id: 6, text:"分销员中心",url:"" },
      { id: 7, text:"我购买的专栏、内容",url:"" }
    ],
    icon:[
      { id: 1, text: "待付款",icon:"../../assets/images/daifukuan.png", url: "" },
      { id: 1, text: "待发货", icon: "../../assets/images/daifahuo.png", url: "" },
      { id: 1, text: "已发货", icon: "../../assets/images/yifahuo.png", url: "" },
      { id: 1, text: "已完成", icon: "../../assets/images/yiwancheng.png", url: "" }
    ]
  },
  //换头像了哟
  catchAvatarTap(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res)=>{
        const tempFilePaths = res.tempFilePaths[0];
        this.setData({
          avatar: tempFilePaths
        },()=>{
          wx.setStorage({
            key: 'avatar',
            data: tempFilePaths
          })
        })
      }
    })
  },
  onLoad:function(){
    var avatar = wx.getStorageSync('avatar') || []
    if (avatar){
      this.setData({
        avatar
      })
    }
  }
})
