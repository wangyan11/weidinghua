// pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    imgs:[],
    id:"",
    img:"",
    price:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      img: options.img,
      price: options.price
    })
    wx.request({
      url: `${app.baseUrl}/detail/${options.id}`,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        this.setData({
          detail:res.data.data,
          imgs: res.data.data.imgs
        })
      }
    })
  },
  addToCart(e){
    const {id,img,price} = this.data;
    app.addToCart(id,img,price)
  },
  changeToCart(){
    console.log(11)
    wx.switchTab({
      url: '../cart/cart'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})