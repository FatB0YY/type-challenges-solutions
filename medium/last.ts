// Необходимо написать типовую функцию Last, которая возвращает последний элемент переданного массива или кортежа

type Last<T extends any[]> = T extends [...infer _, infer Last] ? Last : never;

// ==== Примеры использования ====

const test11: Last<[1, 2, 3]> = 3;
const test22: Last<[1]> = 1;

// never
let test33: Last<[]>;
