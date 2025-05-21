// Тип Unshift добавляет элемент типа U в начало массива типов T.

type Unshift<T extends any[], U> = [U, ...T];

// ==== Примеры использования ====

type Numbers2 = [2, 3, 4];
type Result1U = Unshift<Numbers, 1>; // [1, 2, 3, 4]

type Letters = ["b", "c"];
type Result2U = Unshift<Letters, "a">; // ['a', 'b', 'c']

type Users = [{ id: 2 }, { id: 3 }];
type NewUser = { id: 1 };
type Result3U = Unshift<Users, NewUser>; // [{ id: 1 }, { id: 2 }, { id: 3 }]
