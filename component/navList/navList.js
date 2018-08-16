// component/navList/navList.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navLists:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    id:'1',
    lists:[]
  },
  ready(){
    this.getList(this.data.id);
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClick(e){
      this.getList(e.currentTarget.id)
      this.setData({
        id: e.currentTarget.id
      })
    },
    getList(id){
      wx.showNavigationBarLoading()
      wx.request({
        url: `${app.baseUrl}/list/${id}`,
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=> {
          // console.log(res.data.data)
          this.setData({
            lists:res.data.data
          })
        },
        complete: (res)=> {
          wx.hideNavigationBarLoading()
        },
      })
    },
    payCatchTap(e){
      console.log(e)
      wx.navigateTo({
        url: `../../pages/detail/detail?id=${e.currentTarget.id}&img=${e.currentTarget.dataset.img}&price=${e.currentTarget.dataset.price}`
      })
    }
  }

})
