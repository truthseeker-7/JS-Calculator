function calculate() {
  let expression = document.getElementById("valueScreen");
  let result = eval(expression.value);
  console.log(result);
  expression.value = result;
}
