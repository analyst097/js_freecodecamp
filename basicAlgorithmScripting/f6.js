function confirmEnding(str, target) {
    let check = str.substring(str.length - target.length);
    console.log(check == target);
    return check == target;
  }
  
  confirmEnding("Bastian", "n");
  