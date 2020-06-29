let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);


let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


//BY DEAFULT REGEX ARE GREEDY MATCHING I.E TO MATCH THE LONGEST STRING POSSIBLE.
//FOR LAZY MATCHING "?" IS USED