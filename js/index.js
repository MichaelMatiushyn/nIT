'use strict';

// Діалогове вікно / Так чи Ні
// const shouldConfirm = confirm('Хочете продовжити підписку');
// console.log(shouldConfirm);
// метод для підтвердження: Так/Ні

// const enterText = prompt('Enter your password');
// console.log(enterText);
// метод визову діалогового вікна для вводу тексту

// let quantity = prompt("Вкажіть кількість товару");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// -------------------------------
// Number.parseInt  зупиняється на першому не цифровому символі + парсить тільки ціле значення, до крапки
// Number.parseFloat також враховує знаки після крапки перед текстом

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);
// console.log(typeof elementWidth);

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);
// console.log(typeof elementHeight);

// ----------------------------------------------------------------

// Number.toFixed(digits) обмежує кількість знаків після крапки

// let salary = 1300.16472;
// salary = Number.parseFloat(salary.toFixed(3));
// console.log(salary);
// console.log(typeof salary);

// ----------------------------------------------------------------

// про NaN
// let quantity = "30";
// let value = "Цей текст не можливо перетворити в число";

// console.log(Number(quantity));
// console.log(Number(value));

// ----------------------------------------------------------------

// про об'єкт Math - піднесення до степеню

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power)
// console.log(result)

// новий оператор заміна для піднесення до ступеню -  " **  "

// console.log(2 ** 3);

// console.log(Math.sqrt(9)); // - корінь квадратний з числа
// ----------------------------------------------------------------

// const base = prompt("Давай число");
// const power = prompt("Давай степень");

// let result = base ** power;
// console.log(result);
// console.log(typeof result);

// або

// let base = prompt("Give the number");
// base = Number(base);

// let power = prompt("Give the power");
// power = Number(power);

// let result = Math.pow(base, power);

// console.log("result: ", result);
// console.table(typeof result);

// ----------------------------------------------------------------
// const max = 50;
// const min = 1;

// let result = Math.random() * (max - min) + min;
// result = Math.round(result);
// console.log(result);

// // math.random() * (max - min) + min

// ----------------------------------------------------------------

// Рандомний вибір фону

// const colors = [
//   "tomato",
//   "teal",
//   "orange",
//   "deeppink",
//   "lightgreen",
//   "skyblue",
// ];

// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// ----------------------------------------------------------------

// const message = "В этой строке 26 символов.";
// console.log(message.length);

// const firstName = "Chelsey";
// const secondName = "Emerald";

// const room = 716;
// const type = "VIP";
// const welcomeMsg = `Гость ${firstName} ${secondName} послеяется в ${type} номер ${room}`;

// console.log(welcomeMsg);

// ----------------------------------------------------------------

// let brand = prompt("Введіть пошук бренду");
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();

// console.log(brand);

// ----------------------------------------------------------------

// string.includes('xx');

// ----------------------------------------------------------------

// Цікаві методи для стрічки

// Метод string.endsWith('xx')

// перевіряє, чи конкретний файл закінчується вказаними символами
// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js"));

// Методи Replace() і ReplaceAll()

// Метод Replace замінює перше подібне значення на конкретному рядку
// Replace all замінює всі співпадіння

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// Метод  slice

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// =================================================================

// 6 хибних (falsy) значень:
// [    0,
//      NaN,
//      null,
//      undefined,
//      порожній рядок
//      false. ]

// ================================================

// Логічні оператори

// ===================================================================
// Оператори порівняння:   &&  ||  !

// ==================================
// Тернарний оператор

// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// або через тернарник

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// ще приклад

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

// ====================================

// Оператор SWITCH

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500


// Цикли
// while and do while

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }
// let password = "";
// ----------------------
// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);
// --------------------------

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// --------------------------

// Залишок від ділення
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// -------------------

// Оператор break
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");
// --------------
// оператор CONTINUE
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }