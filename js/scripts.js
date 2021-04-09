
function convertToNumber(input) {
  let parsedInput = parseInt(input);
  console.log(input);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    return false;
  }
}
function rangeOfNumbers(start,end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i + " ");
  }
    return rangeArray.map(x => x.includes("1") ? "Beep" : x);
  }
//   if (rangeArray.includes("1")); {
//     rangeArray.forEach (function (number) {
//       rangeArray.splice(1,'1',"Beep");
//     }); return rangeArray;
//   };
// }


console.log(rangeOfNumbers(0,12));

