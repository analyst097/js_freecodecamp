function reverseString(str) {
    let arr = str.split(/\s+/);
    console.log(arr);
    for (let i=0;i<arr.length;i++){
      let temp = arr[i].split('');
      temp.reverse();
      console.log(temp);
      arr[i] = temp.join('');
    }
    str = arr.reverse().join(" ");
    console.log(str)
    return str;
  }
  
  reverseString("Greetings from Earth");
  