
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

$(document).ready(function() {  
  $("#formRobo").submit(function(event) {
    event.preventDefault();
    const numberInput = $("#numberInput").val();
    $("#result").text(rangeOfNumbers(0, numberInput));
  });
})





