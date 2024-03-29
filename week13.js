//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

let currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

let birthday = new Date("2024-11-09");
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

let futureDate = new Date(2024, 2, 08);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

let a = Math.floor((futureDate - currentDate) / (1000 * 60 * 60 * 24));
console.log(a);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

let pastDate = new Date(2023, 11, 25);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

let b = Math.floor((currentDate - pastDate) / (1000 * 60 * 60 * 24));
console.log(b);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

let nextWeek = new Date(2024, 1, 02);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek

let weekDay = nextWeek.getDay();
console.log(weekDay);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

let futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

let futureDateInFutureYear = new Date("2025-11-09");
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

console.log(futureYear - currentYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.

const strDate = "2023-06-15T08:30:00.000Z";
console.log(new Date(Date.parse(strDate)));

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

console.log(Date.parse(strDate));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else

const date = "2023/06/15";
const getDate = new Date(Date.parse(date));

if (getDate === NaN) {
  console.log("Неправильный формат даты");
} else {
  console.log("Правильный формат даты");
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.

const number = 231;

if (number > 0) {
  console.log("Переменная number является положительным числом");
} else {
  console.log("Переменная number является отрицательным числом");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number % 2 === 0) {
  console.log("Переменная number является чётным числом");
} else {
  console.log("Переменная number является не чётным числом");
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

if (number % 3 === 0) {
  console.log("Переменная number является кратной 3");
} else {
  console.log("Переменная number не является кратной 3");
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.

if (number < 10) {
  console.log("Переменная number является однозначным числом");
} else {
  console.log("Переменная number не является однозначным числом");
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

if (number > 9 && number < 100) {
  console.log("Переменная number является двузначным числом");
} else {
  console.log("Переменная number не является двузначным числом");
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

if (number >= 0) {
  console.log("Переменная number является положительным числом");
} else {
  console.log("Переменная number является отрицательным числом");
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

if (number % 5 === 0 || number % 7 === 0) {
  console.log("Переменная number является числом кратным 5 или 7");
} else {
  console.log("Переменная number не является числом кратным 5 или 7");
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

if (number <= 0) {
  console.log("Переменная number является отрицательным числом");
} else {
  console.log("Переменная number является положительным числом");
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

if (number >= 100) {
  console.log("Переменная number является трёхзначным положительным числом");
} else {
  console.log("Переменная number не является трёхзначным положительным числом");
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

let day = 6;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Такого дня недели нет");
}
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = "W";
let fullName;

switch (direction) {
  case "N":
    console.log("Север");
    break;
  case "S":
    console.log("Юг");
    break;
  case "E":
    console.log("Восток");
    break;
  case "W":
    console.log("Запад");
    break;
  default:
    console.log("Такого направления нет");
}
