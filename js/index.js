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

// перевіряє, чи крнкретний файл закінчується вказаними символами
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

// Логічні оператори

// 6 хибних (falsy) значень:
// [    0,
//      NaN,
//      null,
//      undefined,
//      порожній рядок
//      false. ]

// Оператори порівняння:   &&  ||  !


