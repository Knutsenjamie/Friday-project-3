
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
    rangeArray.push(i + "");
  }
  return rangeArray.map(x => x.includes("2") ? "Boop" : x.includes("1") ? "Beep" : x);
}


console.log(rangeOfNumbers(0,12));

