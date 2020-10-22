// 轮播
var swiper =  {
  //这是首页-搜索栏和活动赛事中间的轮播图片
    imgUrls: [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567580368&di=6a50443ff7f190c29575cd7279d9bd59&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F9d82d158ccbf6c8195fa91b0b13eb13532fa409c.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567626519&di=1efede5085211672dc0d17d7bef46456&imgtype=0&src=http%3A%2F%2Fpic43.nipic.com%2F20140710%2F13125463_152624268002_2.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1017915947,1464809805&fm=26&gp=0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567680925&di=74e325d8f9cfcf7b7cfb68b3bd64236c&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd6%2F1804%2F1f%2F98c25e9eb68b40b5.jpg_r_680x435x95_7521aea8.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567698526&di=ec08718f73e2ab6ebdefcb53bd37f739&imgtype=0&src=http%3A%2F%2Fwww.offcn.com%2Fdl%2F2015%2F0821%2F20150821054006161.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 200,
};


// 赛事banner
var banner = [
  {
    url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567764430&di=d0d64ed26def47c970d924ed3d36a764&imgtype=0&src=http%3A%2F%2Fcms-bucket.nosdn.127.net%2F130ea582cd184849b3a67364448bcced20171206235520.png%3FimageView%26thumbnail%3D550x0',
    status:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567848633&di=e3c7f0de01cce0917a8f21d08321fe1c&imgtype=0&src=http%3A%2F%2Fwww.jxxyk.cn%2Fupload%2F2016-03-24%2F49b1e13f-9d56-45e3-8150-ee57e538d628.gif',
    stausing:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567848633&di=e3c7f0de01cce0917a8f21d08321fe1c&imgtype=0&src=http%3A%2F%2Fwww.jxxyk.cn%2Fupload%2F2016-03-24%2F49b1e13f-9d56-45e3-8150-ee57e538d628.gif'
  },
  {
    url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=411031040,1469902166&fm=15&gp=0.jpg',
    status:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567848633&di=e3c7f0de01cce0917a8f21d08321fe1c&imgtype=0&src=http%3A%2F%2Fwww.jxxyk.cn%2Fupload%2F2016-03-24%2F49b1e13f-9d56-45e3-8150-ee57e538d628.gif',
    stausing:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567848633&di=e3c7f0de01cce0917a8f21d08321fe1c&imgtype=0&src=http%3A%2F%2Fwww.jxxyk.cn%2Fupload%2F2016-03-24%2F49b1e13f-9d56-45e3-8150-ee57e538d628.gif'
  },
  {
    url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4255683255,1573854473&fm=26&gp=0.jpg',
    status:'http://demo.zhilengzhire.com/weui-SPA-img/333.png',
    stausing:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567848633&di=e3c7f0de01cce0917a8f21d08321fe1c&imgtype=0&src=http%3A%2F%2Fwww.jxxyk.cn%2Fupload%2F2016-03-24%2F49b1e13f-9d56-45e3-8150-ee57e538d628.gif'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-img/004.jpg',
    status:'http://demo.zhilengzhire.com/weui-SPA-img/555.png',
    stausing:''
  }
];
var Middlebanner = {
  //这是首页-活动赛事下面的图片
    imgUrls: [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595567764430&di=d0d64ed26def47c970d924ed3d36a764&imgtype=0&src=http%3A%2F%2Fcms-bucket.nosdn.127.net%2F130ea582cd184849b3a67364448bcced20171206235520.png%3FimageView%26thumbnail%3D550x0',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=411031040,1469902166&fm=15&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4255683255,1573854473&fm=26&gp=0.jpg',
    '../cptui/1.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
};
// 项目图标
var icons = {
  icon: [
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",font:"羽毛球"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/005.png",font:"乒乓球"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/006.png",font:"足球"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/007.png",font:"篮球"}
  ],
  icon1: [
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/008.png",font:"棋牌"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/009.png",font:"游泳"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/010.png",font:"户外"},
    {url:"http://demo.zhilengzhire.com/weui-SPA-index/011.png",font:"网球"}
  ]
};
// 赛事详情
var pition_detail = [
  {
    title:'比赛场地',
    desc:'川大校园内'
  },
  {
    title:'比赛地址',
    desc:'长桥'
  },
  {
    title:'比赛时间',
    desc:'2020年07月24日 上午'
  },
  {
    title:'报名时间',
    desc:'2020/07/02-2020/07/06'
  },
  {
    title:'报名费用',
    desc:'免费'
  },
];
var organize = [
  {
    sec_title:'1、主办单位：',
    sec_desc:'四川大学'
  },
  {
    sec_title:'2、承办单位：',
    sec_desc:'四川大学'
  },
  {
    sec_title:'3、协办单位：',
    sec_desc:'四川大学'
  },
  {
    sec_title:'4、冠名：',
    sec_desc:'四川大学'
  },
  {
    sec_title:'5、合作媒体：',
    sec_desc:'四川大学'
  },
  {
    sec_title:'6、赛事说明：',
    sec_desc:'四川大学'
  },

];
// 评价item
var assessData = [
    {
      userImg:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",
      user:'135****7581',
      star:[
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
      ],
      time:'2017-05-06',
      content:'方式登记法律思考'
    },
    {
      userImg:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",
      user:'135****7581',
      star:[
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
      ],
      time:'2017-05-06',
      content:'方式登记上的归属感法律思考'
    },
    {
      userImg:"http://demo.zhilengzhire.com/weui-SPA-index/004.png",
      user:'135****7581',
      star:[
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
      ],
      time:'2017-05-06',
      content:'对方水电费方式登记法律思考'
    },
   
];
// item   data
var navigaData = [
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/004.png',
        itemTitle:'王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥720',
        itempriceH:'门市价￥10',
        range:'<1800m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/005.png',
        itemTitle:'羽球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥70',
        itempriceH:'门市价￥120',
        range:'80m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/006.png',
        itemTitle:'lanqu球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥78',
        itempriceH:'门市价￥10',
        range:'1050m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/007.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'80m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/008.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'10m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/009.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'1200m'
      },
      {
        itemImg:'http://demo.zhilengzhire.com/weui-SPA-index/010.png',
        itemTitle:'羽毛球之王球馆',
        itemStar:[
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/014.png',
          'http://demo.zhilengzhire.com/weui-SPA-index/015.png',
        ],
        itemprice:'￥150',
        itempriceH:'门市价￥20',
        range:'1500m'
      },

    ];
var location = [
    'http://demo.zhilengzhire.com/weui-SPA-img/020.png',
    'http://demo.zhilengzhire.com/weui-SPA-img/021.png',
    '广东省深圳市龙岗区龙河路80号',
    'http://demo.zhilengzhire.com/weui-SPA-img/022.png'

];  
// 预定场馆
var requires = [
    {
      img:'http://demo.zhilengzhire.com/weui-SPA-img/010.png',
      project:'羽毛球',
      place:'场地',
      price:'￥40元起',
    },
    {
      img:'http://demo.zhilengzhire.com/weui-SPA-img/008.png',
      project:'乒乓球',
      place:'场地',
      price:'￥70元起',
    },
    {
      img:'http://demo.zhilengzhire.com/weui-SPA-img/009.png',
      project:'橄榄球',
      place:'场地',
      price:'￥80元起',
    },
  
];  
// 我的  img，位置在我的-title各项前面作为小图标
var myImg = [
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/001.png',
    title:'客户未授权'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/002.png',
    title:'我的预约'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/003.png',
    title:'我的收藏'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/004.png',
    title:'我的参赛'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/005.png',
    title:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/006.png',
    title:'意见反馈'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/007.png',
    title:'联系客服'
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/008.png',
    title:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/009.png',
    title:''
  },
  {
    url:'http://demo.zhilengzhire.com/weui-SPA-myImg/010.png',
    title:''
  }
  
];


module.exports = {
  swiper: swiper,
  banner:banner,
  icons: icons,
  organize: organize,
  assessData:assessData,
  pition_detail:pition_detail,
  navigaData:navigaData,
  Middlebanner:Middlebanner,
  location:location,
  requires:requires,
  myImg:myImg,

};

