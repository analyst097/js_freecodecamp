function findLongestWordLength(str) {
    let arr = str.split(' ');
    console.log(arr)
    let hi = 0;
    for(let i=0;i<arr.length;i++){
      let t = arr[i];
      if(hi< t.length){
        hi = t.length;
      }
    }
    return hi;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  