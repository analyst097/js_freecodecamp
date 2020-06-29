let arr = [];
arr.push(); //add at tail 
arr.unshift(); //add at head

arr.pop();
arr.shift();    

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  function forecast(arr) {
    // Only change code below this line
    let narr= arr.slice(2,4);
    return narr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 4));

  function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem)==-1){
      return false;
    };
    return true;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    
    for( let i=0; i<arr.length; i++ ){
      let index = arr[i].indexOf(elem);
      if(index == -1){
        newArr.push(arr[i]);
      }
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  