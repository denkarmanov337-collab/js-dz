"use strict";

const a = Number(prompt("Задача 1. Начало диапазона:"));
const b = Number(prompt("Задача 1. Конец диапазона:"));
let s = 0;
for (let i = a; i <= b; i++) s += i;
alert(`Сумма диапазона: ${s}`);

const base = Number(prompt("Задача 2. Основание:"));
const exp = Number(prompt("Задача 2. Степень:"));
let p = 1;
for (let i = 0; i < exp; i++) p *= base;
alert(`Результат: ${p}`);

const n = Number(prompt("Задача 3. Введите n:"));
let f = 1;
for (let i = 2; i <= n; i++) f *= i;
alert(`Факториал: ${f}`);

const from = Number(prompt("Задача 4. Начало диапазона:"));
const to = Number(prompt("Задача 4. Конец диапазона:"));
let cnt = 0;
for (let i = from; i <= to; i++) {
  if (i % 2 === 0) cnt++;
}
alert(`Чётных чисел: ${cnt}`);

const f1 = Number(prompt("Задача 5. Начало диапазона:"));
const t1 = Number(prompt("Задача 5. Конец диапазона:"));
const d = Number(prompt("Задача 5. Делитель:"));
let found = null;
for (let i = f1; i <= t1; i++) {
  if (i % d === 0) {
    found = i;
    break;
  }
}
alert(found === null ? "Не найдено" : `Первое число: ${found}`);

const num = Number(prompt("Задача 6. Число:"));
const k = Number(prompt("Задача 6. Количество:"));
let line = "";
for (let i = 1; i <= k; i++) {
  line += (i > 1 ? " " : "") + num * i;
}
alert(`Таблица: ${line}`);