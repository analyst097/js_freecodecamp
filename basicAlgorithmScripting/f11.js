function titleCase(str) {
    let arr = str.split(/\s+/);
    console.log(arr);
    for(let i=0;i<arr.length;i++){
      let str=arr[i];
      str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      arr[i] = str;
    }
    console.log(arr.join(" "));
    return arr.join(" ")
}

titleCase("I'm a little tea pot");
