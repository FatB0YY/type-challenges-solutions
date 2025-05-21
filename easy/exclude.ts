// Тип MyExclude исключает из типа T те члены, которые также присутствуют в типе U.
// Работает по принципу: если T расширяет U (extends U), то результат never, иначе T.

type MyExclude<T, U> = T extends U ? never : T;

// ==== Примеры использования ====

type Original = "a" | "b" | "c" | "d";
type ToRemove = "a" | "c";

type Result = MyExclude<Original, ToRemove>; // 'b' | 'd'

type Result2 = MyExclude<string | number | boolean, number>; // string | boolean

type Result3 = MyExclude<{ name: string } | { age: number }, { age: number }>; // { name: string }
