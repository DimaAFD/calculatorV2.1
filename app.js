let num = 42;
let firstName = "Dima"; // строчка
const isProgrammer = true; // логическое значение

// /* Разрешенные имена переменных
// let $ = 'test';
// let $num = 42;
// let num$ = 42;
// let _ = 49;
// let _num = 50;
// let num_ = 51;
// let first_name = "Elena";
// let myNum = 334; // good
// let num42 = 10;
// */

// Запрещенные имена переменных
//  let 42num = '11'
//  let my-num = 1
//  let const
// */

// firstName = "Max";
//isProgrammer = false;// error because isProgrammer is a constant

//alert(firstName);
// console.log('Test:',num,isProgrammer,firstName);

// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log (num)

// let num2 = num + 10;
// console.log(num2, num2);
// num = num2 - num; // новое значение переменной num
// num2 = num2 + 10; // новое значение переменной num2
// console.log(num, num2);

// let num3 = (num + 10 * 2) / (5 - 1);
// console.log(num3);
// const fullName = firstName + " Prokopchuk";
// const fullName = firstName + " " + "Prokopchuk";

//const resultElement = document.getElementById("result");
// Получаем элементы со страницы
const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");

// Переменная для хранения последней операции
let lastOperation = "+"; // По умолчанию сложение

// Обработчики для кнопок операций
document.getElementById("plus").onclick = function () {
  lastOperation = "+";
  resultElement.textContent = Number(input1.value) + Number(input2.value);
};

document.getElementById("minus").onclick = function () {
  lastOperation = "-";
  resultElement.textContent = Number(input1.value) - Number(input2.value);
};

document.getElementById("multiply").onclick = function () {
  lastOperation = "×";
  resultElement.textContent = Number(input1.value) * Number(input2.value);
};

document.getElementById("divide").onclick = function () {
  lastOperation = "÷";
  const num2 = Number(input2.value);
  if (num2 === 0) {
    resultElement.textContent = "На ноль делить нельзя!";
  } else {
    resultElement.textContent = Number(input1.value) / num2;
  }
};

// Обработчик для кнопки "Вычислить" (теперь работает для всех операций)
submitBtn.onclick = function () {
  // обработчик события клика по кнопке
  if (input1.value === "" || input2.value === "") {
    resultElement.textContent = "Введите оба числа!";
    return;
  }

  // Получаем значения из полей ввода и преобразуем их в числа
  const num1 = Number(input1.value); // Берём первое число из поля input1
  const num2 = Number(input2.value); // Берём второе число из поля input2

  // Выбираем действие в зависимости от последней нажатой операции (+, -, ×, ÷)
  switch (lastOperation) {
    case "+": // Если была нажата кнопка "+"
      resultElement.textContent = num1 + num2; // Складываем числа
      break; // Выходим из switch
    case "-": // Если была нажата кнопка "-"
      resultElement.textContent = num1 - num2; // Вычитаем числа
      break; // Выходим из switch
    case "×": // Если была нажата кнопка "×"
      resultElement.textContent = num1 * num2; // Умножаем числа
      break; // Выходим из switch
    case "÷": // Если была нажата кнопка "÷"
      resultElement.textContent = // Делим числа
        num2 === 0 ? "На ноль делить нельзя!" : num1 / num2; // Если num2 равно 0, выводим сообщение, иначе делим
      break; // Выходим из switch
    default: // Если не была нажата ни одна из кнопок операций
      resultElement.textContent = "Ошибка операции"; // Выводим сообщение об ошибке
  }
};

// console.log(resultElement.textContent);
// resultElement.textContent = (42 - 2) / num;

// console.log(typeof sum); // конкатенация строк

submitbtn.onclick = function () {
  // обработчик события клика по кнопке
  const sum = Number(input1.value) + Number(input2.value); // конкатенация строк
  resultElement.textContent = sum; // конкатенация строк
}; // Обработка касаний для мобильных
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("touchstart", function () {
    this.style.transform = "scale(0.95)";
  });
  btn.addEventListener("touchend", function () {
    this.style.transform = "";
  });
});
