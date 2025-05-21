// Тип MyPick создаёт новый тип, содержащий только указанные ключи K из исходного объекта T.
// Работает с помощью mapped types: проходим по каждому ключу из K и берем соответствующее значение из T.

type MyPick<T extends object, K extends keyof T> = {
  [Key in K]: T[Key];
};

// ==== Примеры использования ====

// Исходный тип
type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

type UserPreview = MyPick<User, "id" | "name">; // { id: number; name: string; }

type ContactInfo = MyPick<User, "email">; //  { email: string; }

// type Invalid = MyPick<User, "nonexistent">; // Ошибка: "nonexistent" не существует в типе User
