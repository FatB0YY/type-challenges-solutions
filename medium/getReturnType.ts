// Тип GetReturnType извлекает возвращаемое значение из функции T.
// Использует конструкцию infer для определения типа, который возвращает функция.

type GetReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer U
  ? U
  : never;

// ==== Примеры использования ====

const fn1 = () => 42;
type Result1 = GetReturnType<typeof fn1>; // number

const fn2 = () => ({ id: 1, name: "Alice" });
type Result2 = GetReturnType<typeof fn2>; // { id: number; name: string; }

const fn3 = async () => "done";
type Result3 = GetReturnType<typeof fn3>; // Promise<string>

function sumAll(...nums: number[]): number[] {
  return nums;
}
type Result4 = GetReturnType<typeof sumAll>; // number[]

// type NotFunction = string;
// type Result5 = GetReturnType<NotFunction>; // never
