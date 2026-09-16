"use strict";

function compareNumbers(a, b) {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else {
    return "=";
  }
}

function isInRange(value, min, max) {
  return value >= min && value <= max;
}

function canAccess(age, hasTicket, isBlocked) {
  return age >= 18 && hasTicket && !isBlocked;
}

function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Ошибка";
  } else if (score >= 90) {
    return "5";
  } else if (score >= 75) {
    return "4";
  } else if (score >= 60) {
    return "3";
  } else {
    return "2";
  }
}

function getDiscountPercent(total) {
  if (total >= 10000) {
    return 10;
  } else if (total >= 5000) {
    return 5;
  } else if (total >= 1000) {
    return 1;
  } else {
    return 0;
  }
}

function getDayType(day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Рабочий день";
    case 6:
    case 7:
      return "Выходной день";
    default:
      return "Ошибка";
  }
}

module.exports = {
  compareNumbers,
  isInRange,
  canAccess,
  getGrade,
  getDiscountPercent,
  getDayType,
};