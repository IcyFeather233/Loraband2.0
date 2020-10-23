// example/result/result.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      locate_time: 0,
      locate_id: 0,
      device_id: 1,
      start_time: 0,
      end_time: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://www.loraband.com/points?time=0:0:0",
    success: function(res){
      that.setData( {
        locate_time: (parseInt(res.data[0].time.slice(11,13))-8) + res.data[0].time.slice(13,19),
        locate_lon: res.data[0].lon,
        locate_lat: res.data[0].lat,
      })
    }
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
  onShow: function (options) {
    var that = this;
    wx.request({
      url: "https://www.loraband.com/points?time=0:0:0",
    success: function(res){
      that.setData( {
        locate_time: (parseInt(res.data[0].time.slice(11,13))-8) + res.data[0].time.slice(13,19),
        locate_lon: res.data[0].lon,
        locate_lat: res.data[0].lat,
      })
      console.log(res.data)
    }
    })
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