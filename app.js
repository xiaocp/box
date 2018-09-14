App({

  onLaunch: function (options) {
   
    // var app_ids = options.query.app_id
    // var app_paths = options.query.app_path
    // setTimeout(function () {
    //   wx.navigateToMiniProgram({
    //     appId: app_ids, // 要跳转的小程序的appid
    //     path: app_paths, // 跳转的目标页面
    //     extarData: {

    //     },
    //     success(res) {
    //       // 打开成功 

    //     }
    //   })
    // }, 0)


    var page = this;
    var nt = this.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = this.globalData.uid;
    var nick = '';
    var hurl = '';
    var sex = '';


    wx.getSystemInfo({

      success: function (res) {
        mb = res.model //手机型号
        lang = res.language //语言
        wxv = res.version //微信版本号
        osv = res.system //手机操作系统
        sv = res.SDKVersion //res.SDKVersion
      }

    })
    var thiswxids = this.globalData.thiswxid
    // wx.request({
    //   url: 'https://engine.miniadx.com/redirect', 
    //   data: {
    //     "wxid": thiswxids,
    //     "lang": lang,
    //     "nt": 'wifi',
    //     "mb": mb,
    //     "wxv": wxv,
    //     "osv": osv,
    //     "sv": sv,
    //     "nick": '',
    //     "hurl": '',
    //     "sex": '',
    //     "uid":''
    //   },
    //   method: "POST",
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   dataType: "json",
    //   success: function (res) {
      
    //     var appId = res.data.data.wxid
    //     var path = res.data.data.path
    //     console.log(path)
    //     setTimeout(function () {
    //       wx.navigateToMiniProgram({
    //         appId: appId, // 要跳转的小程序的appid
    //         path: path, // 跳转的目标页面
    //         extarData: {

    //         },
    //         success(res) {
    //           // 打开成功  
              
    //         }
    //       })
    //     }, 0)

    //   }
    // })

    
    // wx.hideTabBar({})
    // wx.request({
    //   url: 'https://engine.miniadx.com/index',
    //   data: {
    //     "wxid": 'wx22f56f084847a67c'
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/json' },
    //   dataType: "json",
    //   success: function (res) {
        
    //     if (res.data.data.type=="game") {
    //       wx.hideTabBar({})
    //     }
    //     else {
    //       wx.showTabBar({})
    //     }
      

    //   }
    // })


  
      
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  
    wx.getNetworkType({
      success: res => {
        this.globalData.nt= res.networkType//网络类型  
  
      }
    })


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
       
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

   
   
   
  },
  onShow: function () {
    // var thiswxids = this.globalData.thiswxid;

    //    wx.request({
    //   url: 'https://engine.miniadx.com/index',
    //   data: {
    //     "wxid": thiswxids
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/json' },
    //   dataType: "json",
    //   success: function (res) {
     
    //     if (res.data.data.type=="game") {
    //       wx.hideTabBar({})
    //     }
    //     else {
    //       wx.showTabBar({})
    //     }
      

    //   }
    // })

    
   
  },


  globalData: {
    userInfo: null,
    nt:null,
    thiswxid: 'wx26277e222ad76486',
  }
})