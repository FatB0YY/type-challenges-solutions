// Тип GetArrayItem извлекает тип элемента из массива T.
// Работает с помощью конструкции infer, которая извлекает тип элемента из массива.
// Если T — это массив вида ItemType[], то результат — ItemType, иначе never.

type GetArrayItem<T extends any[]> = T extends (infer ItemType)[]
  ? ItemType
  : never;

// ==== Примеры использования ====

type Strings = string[];
type Item1 = GetArrayItem<Strings>; // string

type Numbers = number[];
type Item2 = GetArrayItem<Numbers>; // number

type Users = { id: number }[];
type Item3 = GetArrayItem<Users>; // { id: number }

type Tuple = [number, string];
type Item4 = GetArrayItem<Tuple>; // number | string

type EmptyArray = [];
type Item5 = GetArrayItem<EmptyArray>; // never
