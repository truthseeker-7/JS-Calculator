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
