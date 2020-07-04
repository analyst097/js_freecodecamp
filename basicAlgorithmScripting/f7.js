function repeatStringNumTimes(str, num) {
    if(num>0){
       console.log(str.repeat(num))
       return str.repeat(num);
    }
    return "";
   }
   
   repeatStringNumTimes("abc", 3);

   //******************************************************************/   

   function repeatStringNumTimes(str, num) {
    let arr = [];
    if(num>0){
      for(let i=0;i<num;i++){
        arr.push(str);
      }
      return arr.join("")
    }
    console.log(arr.join(""))
    return "";
   }
   
   repeatStringNumTimes("abc", 3);
   