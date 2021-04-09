
function convertToNumber(input) {
  let parsedInput = parseInt(input);
  console.log(input);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    return false;
  }
}
function rangeOfNumbers(start,numberInput) {
  let rangeArray = [];
  for (let i = start; i <= numberInput; i++) {
    rangeArray.push(i + "");
  }
  return rangeArray.map(x => x.includes("3") ? "Won't you be my neighbor?" : x.includes("2") ? "Boop" : x.includes("1") ? "Beep": x);
}
// console.log(rangeOfNumbers(0,13));

$(document).ready(function () {
  const numberInput = $("#numberInput").val();
  $("#formRobo").submit(function (event) {
    $("#result").html(rangeOfNumbers(0-numberInput))
    event.preventDefault();
  });
})






