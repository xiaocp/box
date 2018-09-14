var util = require('../../utils/util.js')
const app = getApp();
// var Page = require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;
var numAi = 0;
var timer;
Page({

  data: {
    animationData: {},
    animations: {},
    tj: "true",
    // indicatorDots: true,
    autoplay: true,
    circular: false,
    duration: 500,
    xmad: {
      adData: {},
      ad: {
        banner: "xm73f4976de288ab04df03a45e30ea3c",
        insert: "xmff64659f2a1213b5064a399c89e801",
        fixed: "xm16174b04cec429a187427d90c2aa88"
      }
    },
    btnState: false,
    winNum: 0,
    //中间的话“Ho~ You Win”
    gameOfPlay: '',
    //用户选择的图片
    imageUserScr: '/pages/image/wenhao.png',
    //电脑随机的图片
    imageAiScr: '',
    //石头剪刀布图片数组
    srcs: [
      '/pages/image/shitou.png',
      '/pages/image/jiandao.png',
      '/pages/image/bu.png'
    ],
    languagex: ''
  },
  tianjia:function(){
    this.setData({ tj: false })
  },
  tjx: function () {
    this.setData({ tj: true })
  },
  qrclick:function(res){
  
    wx.previewImage({
      current: res.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [res.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })

    var page = this
    var thiswxid = app.globalData.thiswxid;
    var curl = res.currentTarget.dataset.curl;
    var appid = res.currentTarget.dataset.wxid;
    var twxid = res.currentTarget.dataset.twxid;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = '';
    var nick = '';
    var hurl = '';
    var sex = '';
    var names = res.currentTarget.dataset.name;
    wx.getSystemInfo({

      success: function (res) {
        mb = res.model //手机型号
        lang = res.language //语言
        wxv = res.version //微信版本号
        osv = res.system //手机操作系统
        sv = res.SDKVersion //res.SDKVersion
      }

    })
    wx.request({
      url: curl,
      data: {
        "wxid": thiswxid,
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv,
        "nick": '',
        "hurl": '',
        "sex": '',
        "appid": '',
        "uid": '',
        "name":names
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      success: function (res) {
      }
    })
    
  },
  qrsclick: function (res) {
   
    wx.previewImage({
      current: res.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [res.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })
    var page = this
    var thiswxid = app.globalData.thiswxid;
    var curl = res.currentTarget.dataset.curl;
    var appid = res.currentTarget.dataset.wxid;
    var twxid = res.currentTarget.dataset.twxid;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = '';
    var nick = '';
    var hurl = '';
    var sex = '';
    var names = res.currentTarget.dataset.name;
    wx.getSystemInfo({

      success: function (res) {
        mb = res.model //手机型号
        lang = res.language //语言
        wxv = res.version //微信版本号
        osv = res.system //手机操作系统
        sv = res.SDKVersion //res.SDKVersion
      }

    })
    wx.request({
      url: curl,
      data: {
        "wxid": thiswxid,
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv,
        "nick": '',
        "hurl": '',
        "sex": '',
        "appid": '',
        "uid": '',
        "name": names
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      success: function (res) {
      }
    })
  },
  yx_1:function(res){
    var page = this
    var thiswxid = app.globalData.thiswxid;
    var curl = res.currentTarget.dataset.curl;
    var appid = res.currentTarget.dataset.wxid;
    var twxid = res.currentTarget.dataset.twxid;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = '';
    var nick = '';
    var hurl = '';
    var sex = '';
    var names = res.currentTarget.dataset.name;
    wx.getSystemInfo({

      success: function (res) {
        mb = res.model //手机型号
        lang = res.language //语言
        wxv = res.version //微信版本号
        osv = res.system //手机操作系统
        sv = res.SDKVersion //res.SDKVersion
      }

    })
    wx.request({
      url: curl,
      data: {
        "wxid": thiswxid,
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv,
        "nick": '',
        "hurl": '',
        "sex": '',
        "appid": '',
        "uid": '',
        "name": names
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      success: function (res) {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var page = this;
wx.request({
      // url: 'https://engine.miniadx.com/index',
      url:util.domain+'/index',
      data: {
        "wxid": 'wx22f56f084847a67c'
      },
      method: "POST",
      header: { 'content-type': 'application/json' },
      dataType: "json",
      success: function (res) {
        
        page.setData({
          ds:res.data,
        
        })

      }
    })

    //获取本地缓存“已经获胜的次数”
    var oldWinNum = wx.getStorageSync('winNum');
    //如果有缓存，那么赋值，否则为0
    if (oldWinNum != null && oldWinNum != '') {
      this.data.winNum = oldWinNum;
    }
    this.timerGo();
  },
  //点击按钮
  changeForChoose(e) {
    console.log();
    if (this.data.btnState == true) {
      return;
    }

    //获取数组中用户的，石头剪刀布相应的图片。
    this.setData({
      imageUserScr: this.data.srcs[e.currentTarget.id]
    });
    //清除计时器
    clearInterval(timer);

    //获取数据源
    var user = this.data.imageUserScr;
    var ai = this.data.imageAiScr;
    var num = this.data.winNum;
    var str = '0.0~\n你输了';

    //判断是否获胜
    if (user == "/pages/image/shitou.png" && ai == "/pages/image/jiandao.png") {
      //获胜后增加次数、改变文字内容、从新缓存获胜次数
      num++;
      str = '你赢了';
      wx.setStorageSync('winNum', num);
    };
    if (user == "/pages/image/jiandao.png" && ai == "/pages/image/bu.png") {
      num++;
      str = '你赢了';
      wx.setStorageSync('winNum', num);
    };
    if (user == "/pages/image/bu.png" && ai == "/pages/image/shitou.png") {
      num++;
      str = '你赢了';
      wx.setStorageSync('winNum', num);
    };

    //如果平局
    if (user == ai) {
      str = '平局';
    }

    var lang = ''
    try {
      var res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
      lang = res.language
    } catch (e) {
      // Do something when catch error
    }

    //刷新数据
    this.setData({
      winNum: num,
      gameOfPlay: str,
      btnState: true,
      languagex: lang
    });
  },

  //开启计时器
  timerGo() {
    timer = setInterval(this.move, 100);
  },

  //ai滚动方法
  move() {
    //如果大于等于3，重置
    if (numAi >= 3) {
      numAi = 0;
    }
    this.setData({
      //获取数组中Ai的，石头剪刀布相应的图片。
      imageAiScr: this.data.srcs[numAi],
    })
    numAi++;
  },

  again() {
    //控制按钮
    if (this.data.btnState == false) {
      return;
    }
    //从新开始计时器
    this.timerGo();
    //刷新数据
    this.setData({
      btnState: false,
      gameOfPlay: '',
      imageUserScr: '/pages/image/wenhao.png'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'linear',
    })

    this.animation = animation
    setInterval(function () {
      animation.right(30).step()
      animation.right(10).step()

      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)

    var animations = wx.createAnimation({
      duration: 600,
      timingFunction: 'linear',
    })

    this.animations = animations
    setInterval(function () {
      animations.rotate(-10).step()
      animations.rotate(10).step()
      this.setData({
        animations: animations.export()
      })
    }.bind(this), 500)


    var page = this;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    wx.getSystemInfo({

      success: function (res) {
        mb = res.model//手机型号
        lang = res.language//语言
        wxv = res.version//微信版本号
        osv = res.system//手机操作系统
        sv = res.SDKVersion//res.SDKVersion

      }

    })


    wx.request({
      // url: 'https://engine.miniadx.com/rec',
      url:util.domain+'/rec',
      data: {
        "wxid": 'wx22f56f084847a67c',
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv

      },
      method: "POST",
      header: { 'content-type': 'application/json' },
      dataType: "json",
      success: function (res) {
        page.setData({
          rec: res.data.data.rec,
          clist: res.data.data.clist,
        
        })
       
      }
    })



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
  // onReachBottom: function () {
    
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '创意新意休闲游戏，和朋友一起分享欢乐吧~',
      path: '/pages/index/index',
      imageUrl:'../../image/fximg.png'
    }

  }

})