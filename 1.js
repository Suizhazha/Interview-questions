let items=[
  {id:1,price:1,num:1},
  {id:2,price:2,num:2},
  {id:2,price:3,num:3}
]
let reducers={
  toMeiYuan:(state,init)=>{
    state.MeiYuan+=init.num*init.price*0.7
    returnstate
  },
  toYingbang:(state,init)=>{
    state.Yingbang+=init.num*init.price*0.15
    returnstate
  }
}
let xxx=yyy(reducers)
let initDate={
  MeiYuan:0,
  Yingbang:0
}
let a=items.reduce(xxx,initDate)
console.log(a)//{MeiYuan：37.29，Yingbang：39.23}

就是换算成美元，英镑是多少钱