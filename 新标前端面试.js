

let arr = [{type:'a',value:1},{type: 'b',value: 2},{type: 'a',value: 3},{type: 'b',value: 4}]
function sumByType(arr){
let arrTemp = []
  arr.map(item=>{
    let a = arrTemp.filter(itemTemp => item.type===itemTemp.type)
    if (a.length<= 0 ){
      arrTemp.push(item)
    }else {
      a[0].value +=item.value
    }
  })

  return arrTemp
}

console.log(sumByType(arr))