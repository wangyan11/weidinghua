// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cart = wx.getStorageSync("cart");
    if(cart){
      this.setData({
        cart
      })
    }
  },
  remove(e){
    const { cart } = this.data;
    cart.map(item=>{
    if(item.id===e.currentTarget.id){
      cart.splice(item,1)
      this.setData({
        cart
      })
    }
  })
    wx.setStorageSync('cart', cart)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //Storage获取count
    var count = wx.getStorageSync('count') || []
    if (count > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: `${count}`
      })
    }
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