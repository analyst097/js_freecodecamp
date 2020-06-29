// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);


// Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);


//exactly four number of m's
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
