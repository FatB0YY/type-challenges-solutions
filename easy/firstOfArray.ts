// Тип FirstOfArray извлекает первый элемент из переданного массива типов T.
// Если массив пустой (T extends []), возвращает never.

type FirstOfArray<T extends any[]> = T extends [] ? never : T[0];

// ==== Примеры использования ====

type Numbers = [1, 2, 3];
type FirstNumber = FirstOfArray<Numbers>; // 1

type Letters = ["a", "b", "c"];
type FirstLetter = FirstOfArray<Letters>; // 'a'

type Empty = [];
type NoFirst = FirstOfArray<Empty>; // never

type Objects = [{ id: number }, { id: string }];
type FirstObject = FirstOfArray<Objects>; // { id: number }
