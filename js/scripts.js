// Business Logic (Take this out before submission)
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
    rangeArray.push(i);
  }
  return rangeArray;
}

console.log(rangeOfNumbers(0,12));



// UI Logic (Take this out before submission)