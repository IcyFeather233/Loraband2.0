// example/result/result.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      locate_time1: 0,
      locate_time2: 0,
      locate_time3: 0,
      id1: 0,
      id2: 0,
      id3: 0,
      locate_lon1: 0,
      locate_lon2: 0,
      locate_lon3: 0,
      locate_lat1: 0,
      locate_lat2: 0,
      locate_lat3: 0,
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
        locate_time1: (parseInt(res.data[0].time.slice(11,13))-8) + res.data[0].time.slice(13,19),
        locate_lon1: res.data[0].lon,
        locate_lat1: res.data[0].lat,
        id1: res.data[0].id,
        locate_time2: (parseInt(res.data[1].time.slice(11,13))-8) + res.data[1].time.slice(13,19),
        locate_lon2: res.data[1].lon,
        locate_lat2: res.data[1].lat,
        id2: res.data[1].id,
        locate_time3: (parseInt(res.data[2].time.slice(11,13))-8) + res.data[2].time.slice(13,19),
        locate_lon3: res.data[2].lon,
        locate_lat3: res.data[2].lat,
        id3: res.data[2].id,
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
        locate_time1: (parseInt(res.data[0].time.slice(11,13))-8) + res.data[0].time.slice(13,19),
        locate_lon1: res.data[0].lon,
        locate_lat1: res.data[0].lat,
        id1: res.data[0].id,
        locate_time2: (parseInt(res.data[1].time.slice(11,13))-8) + res.data[1].time.slice(13,19),
        locate_lon2: res.data[1].lon,
        locate_lat2: res.data[1].lat,
        id2: res.data[1].id,
        locate_time3: (parseInt(res.data[2].time.slice(11,13))-8) + res.data[2].time.slice(13,19),
        locate_lon3: res.data[2].lon,
        locate_lat3: res.data[2].lat,
        id3: res.data[2].id,
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

  },

  return_to_pages:function () {
    wx.switchTab({
      url: '../first/first',
    })
  },
})