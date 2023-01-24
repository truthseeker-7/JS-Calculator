function calculate() {
  let expression = document.getElementById("valueScreen");
  let result = eval(expression.value);
  console.log(result);
  expression.value = result;
}

function power(){
    let number = document.getElementById("valueScreen");
    result = Math.pow(number.value, 2);
    number.value = result;
}

function squareRoot(){
    let number = document.getElementById("valueScreen");
    result = Math.sqrt(number.value);
    number.value = result;
}

function backspace(){
    let expressionInput = document.getElementById("valueScreen");
    let expression = expressionInput.value.substring(0, expressionInput.value.length -1);
    expressionInput.value = expression;
}