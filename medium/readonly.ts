// Тип MyReadonly делает все свойства объекта T только для чтения (readonly).
// После применения такого типа изменение свойств будет запрещено на этапе компиляции.

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

// ==== Примеры использования ====

type User = {
  id: number;
  name: string;
  email: string;
};

type ReadonlyUser = MyReadonly<User>;
// Результат:
// {
//   readonly id: number;
//   readonly name: string;
//   readonly email: string;
// }

const user: ReadonlyUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// user.name = 'Bob'; // Нельзя изменить значение, свойство только для чтения
