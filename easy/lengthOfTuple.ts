// Тип LengthOfTuple возвращает длину кортежа T.
// Использует встроенное свойство "length" у кортежей/массивов.
// Полезен для определения количества элементов в типе-кортежe на этапе компиляции.

type LengthOfTuple<T extends readonly any[]> = T["length"];

// ==== Примеры использования ====

type Tuple1 = [string, number, boolean];
type Length1 = LengthOfTuple<Tuple1>; // 3

type Tuple2 = [42];
type Length2 = LengthOfTuple<Tuple2>; // 1

type EmptyTuple = [];
type Length3 = LengthOfTuple<EmptyTuple>; // 0

type ReadonlyTuple = readonly [1, 2, 3, 4];
type Length4 = LengthOfTuple<ReadonlyTuple>; // 4
