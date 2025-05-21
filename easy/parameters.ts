// Тип MyParameters извлекает типы параметров из функции T.
// Использует infer для "вытаскивания" типа аргументов (в виде кортежа) из сигнатуры функции.

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;

// ==== Примеры использования ====

const fn1 = (a: number, b: string, c: boolean) => true;
type Params1 = MyParameters<typeof fn1>; // [number, string, boolean]

const fn2 = () => 42;
type Params2 = MyParameters<typeof fn2>; // []

const fn3 = (x: number, y?: string) => {};
type Params3 = MyParameters<typeof fn3>; // [x: number, y?: string | undefined]

const fn4 = (...values: string[]) => values.join(",");
type Params4 = MyParameters<typeof fn4>; // string[]
