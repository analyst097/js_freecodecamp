function largestOfFour(arr) {
    let larr = [];
    let temp=null;
    for(let i=0;i<4;i++){
      temp=arr[i][0];
      for(let j=0;j<arr[i].length;j++){
        if(temp < arr[i][j]){
          temp = arr[i][j];
        }
      }
      larr.push(temp);
    }
    console.log(larr)
    return larr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  