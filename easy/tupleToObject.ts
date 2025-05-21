// Тип TupleToObject преобразует кортеж литеральных значений в объект,
// где ключи и значения совпадают и берутся из элементов кортежа.
// Работает только с литеральными значениями (string | number | symbol),
// потому что используется индексация T[number].

type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key;
};

// ==== Примеры использования ====

const fruits = ["apple", "banana", "orange"] as const;
type FruitObject = TupleToObject<typeof fruits>;
// Результат:
// {
//   apple: 'apple';
//   banana: 'banana';
//   orange: 'orange';
// }

const numbers = [10, 20, 30] as const;
type NumberObject = TupleToObject<typeof numbers>;
// Результат:
// {
//   10: 10;
//   20: 20;
//   30: 30;
// }

const mixed = ["a", 1, "b", 2] as const;
type MixedObject = TupleToObject<typeof mixed>;
// Результат:
// {
//   a: 'a';
//   1: 1;
//   b: 'b';
//   2: 2;
// }

// ❗Важно: обязательно использовать `as const` при передаче литералов,
// иначе TypeScript интерпретирует значения как `string` или `number`, а не как литералы.
