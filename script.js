function calculate() {
  let expression = document.getElementById("valueScreen");
  let result = eval(expression.value);
  console.log(result);
  expression.value = result;
}

function operatorCheck(){
    let expression = document.getElementById("valueScreen").value;
    let lastLetter = expression.substring(expression.length - 1, expression.length);
    if(lastLetter == "*" || lastLetter == "/" || lastLetter == "-" || lastLetter == "%" || lastLetter == "+"){
        expression = expression.substring(0, expression.length - 1);
    }
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

function percent(){
    let number = document.getElementById("valueScreen");
    result = (number.value / 100)
    number.value = result;
}

function reciprocal(){
    let number = document.getElementById("valueScreen");
    result = (1 / number.value)
    number.value = result;
}

function backspace(){
    let expressionInput = document.getElementById("valueScreen");
    let expression = expressionInput.value.substring(0, expressionInput.value.length -1);
    expressionInput.value = expression;
}

