
var displayText = "";
var $display = $("#screen");
var operator;
var operand1;
var operand2;

var calcObj = {

 "x": function(op1, op2) {
  return op1 * op2;

},
"÷": function(op1, op2) {
  return op1 / op2;

},
"+": function(op1, op2) {
  return op1 + op2;

},
"-": function(op1, op2) {
  return op1 - op2;

}
};

$(".buttons span").on('click', function(event) {
  var thisButton = event.target;
  console.log(this);
  if (thisButton.innerText === "C") {
    displayText = "";
    $display.text(displayText);
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    return;
  } else if (thisButton.className === "operator") {
    if (this.id === "calc") {
      console.log("calc");
      operand2 = parseInt(displayText);
      $display.text(calcObj[operator](operand1, operand2));
      operand1;
      operand2;
      operator;
      return;
    }
    else {
      operator = $(this).text();
      console.log(operator);
      if (operand1 === undefined) {
        operand1 = parseInt(displayText);
        displayText = "";
        $display.text(displayText);
        return;
      } else {
        operand2 = parseInt(displayText);
      }
    }
  }

  displayText += thisButton.innerText;
  console.log(displayText);
  $display.text(displayText);
})
