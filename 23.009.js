"use strict";

function sumRange(from, to) {
  let s = 0;
  for (let i = from; i <= to; i++) s += i;
  return s;
}

function power(base, exponent) {
  let res = 1;
  for (let i = 0; i < exponent; i++) res *= base;
  return res;
}

function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function countEven(from, to) {
  let count = 0;
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) count++;
  }
  return count;
}

function findFirstDivisible(from, to, divisor) {
  for (let i = from; i <= to; i++) {
    if (i % divisor === 0) return i;
  }
  return null;
}

function multiplicationLine(number, count) {
  let str = "";
  for (let i = 1; i <= count; i++) {
    str += (i > 1 ? " " : "") + number * i;
  }
  return str;
}

module.exports = {
  sumRange,
  power,
  factorial,
  countEven,
  findFirstDivisible,
  multiplicationLine,
};