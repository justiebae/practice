/**
 * Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число
 */

const reverseNumber = (num) => {
  const reversedNumberAsString = String(Math.abs(num)).split('').reverse().join('')
  return reversedNumberAsString * Math.sign(num);
};

console.log(reverseNumber(13));
console.log(reverseNumber(-123));
console.log(reverseNumber(8900));