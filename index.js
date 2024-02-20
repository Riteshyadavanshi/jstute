 
 
// // const arr=["sfs",23,true,3,4,5];

// // //methods

// // arr.push("SF");
 


// // // arr.pop();
// // // console.log(arr)

// // // //length

// // // console.log(arr.length) 


// // // arr.forEach((items,index)=>{
 
// // // }) 
 
// // const test=arr.map((items)=>items*2)

// // const numbers=[1,3,4,5,6,"",true];
// // const total=numbers.reduce((init,items)=>init+=items,0)
// // const data=numbers.filter((items)=>items>7).length

// //  //reduce ,filter forEach


// //  // map func, if

// //  function tests(name,age){
// //       console.log(name+age)
// //  }
// // // tests()

// //  var x="sdf"
// // console.log(x)

// // tester()
// // function tester(){
      
// //     const x="sds"
// //     console.log(x)
    
      
       
// // }
// // var x="ds"
// // console.log(x)

// // const str="hi i am ritesh"
// //  const email="ritesh@gmail.com"
// // const test=str.split(" ").map(item=>{
// //     item= item.charAt(0).toUpperCase()+item.slice(1)
// //      return item
// // })
// // console.log(str.replace("h","H"))
// //  console.log(str.at(9))
// //  console.log(str.endsWith("ish"))
// //  console.log(test.toLocaleString().includes("s"))
// //   console.log(test.join(" "))

// // 

// // string methodes
 

//  const func=()=>{
    
//      const name="hi i am john"
//      const email="outlook@gmail.com"
    
//      //1.length
//      const length=name.length
      
//    //2.split  => it will convert our string into array

//     const arr=name.split(" ")  //["j","o","h","n"]
  
//    //3.slice
 

//     console.log(name.slice(-1))
//   const regex=
  
     
//     //4.toUpperCase 5 >toLowerCase
//     console.log(name.toLowerCase())
//     console.log(name.charAt(1))

//     // console.log(name.match("j").length)
//   console.log(arr)
//    const newArr=  arr.map(item=>{
//          item=item.charAt(0).toUpperCase()+item.slice(1)  //item=hi hi=>Hi
//          return item
//      })
//      console.log(newArr.join(" "))

   

//  }

//  //splite string => arr
//  //join arr=>string

//  func()
// //1.length
// //2.splite()
// //3.toUpperCase()
// //4.toLowerCase()
// //5.slice()


// // callback  


//
 
function test(){
    const name= [2,4,5,6]
    // function callback(value,index ){
    //       console.log(value+" "+index)
    // }
    
    name.map((value,index)=>{
         console.log(value+" "+index)
    })
    
}

test()