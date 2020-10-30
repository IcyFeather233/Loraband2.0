//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    markers: [
      {
        latitude:'30.564931',
        longitude: '104.000428'
      },
      {
        latitude:'30.560547',
        longitude: '104.000487'
      },
      {
        latitude:'30.564994',
        longitude: '104.000517'
      }
    ],  //地图参数：
    latitude: "", //纬度 
    longitude: "",  //经度
    point1:{
      latitude:'',
      longitude:''
    },
    point2:{
      latitude:'',
      longitude:''
    },
    point3:{
      latitude:'',
      longitude:''
    },
    polyline:[{
    points:[],
    color: "#000000",
     width: 3,
    }, 
    {
      points:[],
    color: "#00FF00",
     width: 3,
    }, 
    {
      points:[],
    color: "#FF0000",
     width: 3,
    }, 
  ]
  },
  regionchange(e) {
    //console.log(e)
  },
  markertap(e) {
    //console.log(e)
  },
  controltap(e) {
    //console.log(e)
  },

  //获得地图
  getMyMap(e) {
    let that = this;
    //自行查询经纬度 http://www.gpsspg.com/maps.htm
    const mapLatitude = 30.556899,
          mapLongitude = 103.998097;
    wx.getLocation({
      type: 'wgs84', 
      success(res){
      // 当前自己的经纬度 res.latitude，res.longitude
        that.setData({
          latitude: mapLatitude,
          longitude: mapLongitude,
        })
      }
    })
  },
  onShow: function()
  {
    let that=this
    /**
     * 防止用户拿不到最新数据(因为页面切换会重新计时)
     * 无条件请求一次最新数据
     */
    console.log('请求接口：刷新数据(无条件执行)')
    /**
     * 每隔一段时间请求服务器刷新数据(客户状态)
     * 当页面显示时开启定时器(开启实时刷新)
     * 每隔1分钟请求刷新一次
     * @注意：用户切换后页面会重新计时
     */
    that.data.realTime = setInterval(function()
    {
      var polyline=that.data.polyline
      // 请求服务器数据
      console.log('请求接口：刷新数据')
      wx.request({
        url: 'https://www.loraband.com:443/nowLocation', //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.setData({
            ['point1.latitude']:res.data[0].lat,
            ['point2.latitude']:res.data[1].lat,
            ['point3.latitude']:res.data[2].lat,
            ['point1.longitude']:res.data[0].lon,
            ['point2.longitude']:res.data[1].lon,
            ['point3.longitude']:res.data[2].lon,
          })
          polyline[0].points.push({
            'latitude':res.data[0].lat,
            'longitude':res.data[0].lon
          })
          polyline[1].points.push({
            'latitude':res.data[1].lat,
            'longitude':res.data[1].lon
          })
          polyline[2].points.push({
            'latitude':res.data[2].lat,
            'longitude':res.data[2].lon
          })
          console.log(polyline)
          // polyline[1].points.push(that.data.point2),
          // polyline[2].points.push(that.data.point3),
          that.setData({
            polyline:polyline
          })
        }
    })
      // 反馈提示
     // wx.showToast({
       // title: 'NMSL！'
      //})

    }, 1000)//间隔时间

    // 更新数据
    that.setData({
      realTime:that.data.realTime,//实时数据对象(用于关闭实时刷新方法)
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    this.getMyMap()
    wx.request({
    url: '10.136.1.9:8080/nowLocation', //仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/json' // 默认值
    },
    success (res) {
      console.log(res.data)
      this.setData({
        polyline:res.Polyline
      })
    }
})
  },
  to_valuate:function () {
    wx.navigateTo({
      url: '../result/result',
    })
  },
})
