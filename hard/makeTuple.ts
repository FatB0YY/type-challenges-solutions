// Тип MakeTuple создаёт кортеж (массив фиксированной длины) из элементов типа T длиной N.
// Использует рекурсию на уровне типов и собирает массив длиной N путём добавления T в аккумулятор R.
// Полезен для генерации массивов нужной длины с однотипными значениями на этапе компиляции.

type MakeTuple<T, N extends number, R extends T[] = []> = R["length"] extends N
  ? R
  : MakeTuple<T, N, [...R, T]>;

// ==== Примеры использования ====

type FiveStrings = MakeTuple<string, 5>; // [string, string, string, string, string]

type ThreeNumbers = MakeTuple<number, 3>; //  [number, number, number]
