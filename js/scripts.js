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
function rangeOfNumber(start,input) {
  let rangeArray = [];
  for (let i = start; i <= input; i++) {
      rangeArray.push(i);
      return rangeArray;
  }
}








// function toBeepBoopWont(number)
// const numberValues = []
// convertToNumber();



// UI Logic (Take this out before submission)