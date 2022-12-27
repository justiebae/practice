/**
 * Задача:
 * Реализуйте функцию, которая вычисляет положительные числа Фибоначчи. 
 * Аргументом является порядковый номер числа
 * 
 * Формула: Fn = Fn-1 + Fn-2
 */


// Рекурсивное решение по формуле
// Вычисляется долго
 export const fibRecursion = (n) => {
  return n <= 1 ? n : fibRecursion(n - 1) + fibRecursion(n - 2);
};

// Решение в цикле
// Вычисляется быстро
export const fibLoop = (n) => {
  // Возвращаем число, если меньше или равно 1
  if (n <= 1) return n;
  
  // Записываем первое и второе значение
  let first = 0;
  let second = 1;
  let result = first + second;

  for (let i = 2; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }

  return second;
};