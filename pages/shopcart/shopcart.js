// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[
        {
          pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
          name:"日本资生堂洗颜",
          price:200,
          isSelect:false,
          // 数据设定
          count: {
            quantity: 2,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
          name: "倩碧焕妍活力精华露",
          price: 340,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            min: 1,
            max: 20
          }
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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