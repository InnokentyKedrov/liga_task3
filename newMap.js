const arr = [1, 3, 5, 7, 9];
const cb = (el) => el * 2;

// Прототип для массивов

Array.prototype.newMap = function (cb) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(cb(this[i], i, this));
  }
  return array;
};

console.log(arr.newMap(cb)); // [ 2, 6, 10, 14, 18]

// Отдельная функция - forEach можно заменить на for, возможно будет быстрее

const myMap = (arr, cb) => {
  const array = [];
  arr.forEach((el) => {
    array.push(cb(el));
  });
  return array;
};

console.log(myMap(arr, cb)); // [ 2, 6, 10, 14, 18]
