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
console.log(convertToNumber);
convertToNumber("Hi");



// UI Logic (Take this out before submission)