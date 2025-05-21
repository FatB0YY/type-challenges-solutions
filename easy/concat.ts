// Тип Concat объединяет два массива типов T и U в один общий массив.
// Работает по принципу: вариадические / вариативные кортежные типы (variadic tuple types)

type Concat<T extends any[], U extends any[]> = [...T, ...U];

// ==== Примеры использования ====

type A = [1, 2, 3];
type B = ["a", "b"];

type AB = Concat<A, B>; // [1, 2, 3, 'a', 'b']

type Users = [{ name: string }, { name: string }];
type Admins = [{ name: string; admin: true }];

type AllUsers = Concat<Users, Admins>; // массив с типами и пользователей, и админов
