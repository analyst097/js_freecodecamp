function factorialize(num) {
    let temp =1;
    for(let i=num;i>0;i--){
      temp*=i;
    }
    num = temp;
    console.log(num)
    return num;
  }
  
  factorialize(5);
  