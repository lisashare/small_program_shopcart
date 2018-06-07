// pages/shopcart/shopcart.js
Page({
  data: {
    carts:[],             //购物车列表
    hasList:false,        //类表是否有数据
    totalPrice:0,         //总价，初始为0
    selectAllStatus:true  //全选状态，默认全选
  },
  onShow() {
      this.setData({
        hasList:true,
        carts:[
              {
                id:1,
                pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
                name:"日本资生堂洗颜",
                price:200,
                isSelect:true,
                count:1                
              },
              {
                id:2,
                pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
                name: "倩碧焕妍活力精华露",
                price: 340,
                isSelect: true,
                count:4
              }
          ]
      })
  },
  //计算总价=选中的商品1的价格*数量 + 选中的商品2的 价格*数量 + ... 根据公式;页面中的其他操作会导致总价格变化的都需要调用该方法
  getTotalPrice() {
    let carts = this.data.carts; //获取购物车列表

    let total = 0;
    //循环列表得到每个数据
    for(let i = 0,len = carts.length;i < len;i++){
      //判断选中才会计算价格
      if(carts[i].isSelect){
        //所有价格加起来
        total += carts[i].count * carts[i].price;
      }
    }

    this.setData({     //最后赋值到data中渲染到页面
      carts:carts,  
      totalPrice:total.toFixed(2)   
    })
  },
  onReady() {
    this.getTotalPrice()
  },
  //选择事件：点击时选中，载点击又变成没选中状态，其实就是改变isSelect字段，通过data-index="{{index}}"把当前商品在类表数组中的下标传给事件
  selectList(e) {
    const index = e.currentTarget.dataset.index;//获取data-传递进来的index
    let carts = this.data.carts;            //获取购物车列表
    const isSelect = carts[index].isSelect; //获取当前商品的选中状态
    carts[index].isSelect = !isSelect;      //改变状态

    this.setData({
      carts:carts
    })

    this.getTotalPrice()  //重新获取总价
  },
  //全选事件：全选就是根据全选状态selectAllStatus去改变每个商品的isSelect
  selectAll() {
    let selectAllStatus = this.data.selectAllStatus; //是否全选状态

    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for(let i = 0,len = carts.length;i < len;i++){
      carts[i].isSelect = selectAllStatus;//改变所有商品的状态
    }

    this.setData({
      selectAllStatus:selectAllStatus,
      carts:carts
    })

    this.getTotalPrice()  //重新获取总价
  },
//增减数量：点击+号，count加1，点击-号，如果count>1,则减1
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let count = carts[index].count;
    count = count + 1;
    carts[index].count = count;
    this.setData({
      carts:carts
    })
    this.getTotalPrice()  //重新获取总价
  },
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let count = carts[index].count;
    count = count - 1;
    if(count < 1){
      return false;
    }
    carts[index].count = count;
    this.setData({
      carts:carts
    })

    this.getTotalPrice();
  },
  //删除商品：点击删除按钮则从购物车类表中删除当前元素，删除只有如果购物车为空，改变购物车为空标识hasList为false

  
})