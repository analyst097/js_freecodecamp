// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  let lowercase = title.toLowerCase();
  let arr = (lowercase.split(/\s+/));
  for(let i=0;i<arr.length;i++){
    if(arr[i] == " " || arr[i] == ""){
      arr.splice(i,1);
    }  
  }
  return arr.join("-");

}

urlSlug(globalTitle);
// Only change code above this line

