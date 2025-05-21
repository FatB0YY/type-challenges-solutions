// Тип Push добавляет элемент типа U в конец массива типов T.
// Использует spread-синтаксис [...T, U] для расширения массива на уровне типов.

type Push<T extends any[], U> = [...T, U];

// ==== Примеры использования ====

type Numbers = [1, 2, 3];
type Result1 = Push<Numbers, "4">; // [1, 2, 3, "4"]

type Strings = ["a", "b"];
type Result2 = Push<Strings, "c">; // ['a', 'b', 'c']

type Items = [{ id: 1 }, { id: 2 }];
type NewItem = { id: 3 };
type Result3 = Push<Items, NewItem>; //  [{ id: 1 }, { id: 2 }, { id: 3 }]
