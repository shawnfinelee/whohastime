// custom-tab-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [{
      url: "/pages/index/index",
      icon: "home-o",
      text: "寄养"
    },
    {
      url: "/pages/examples/index",
      icon: "home-o",
      text: "代养"
    },
    {
      url: "/pages/business/index",
      icon: "add-o",
      text: "发布"
    },
    {
      url: "/pages/user-center/index",
      icon: "friends-o",
      text: "发布"
    },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      this.setData({ active: e.detail });
      wx.switchTab({
        url: this.properties.list[e.detail].url
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }

  }
})