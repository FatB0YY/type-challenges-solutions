// Тип If реализует простую условную логику на уровне типов.
// Если условие C (должно быть boolean) — true, возвращается тип T,
// иначе возвращается тип F (ветвление по условию).

type If<C extends boolean, T, F> = C extends true ? T : F;

// ==== Примеры использования ====

type Case1 = If<true, "Да", "Нет">; // 'Да'

type Case2 = If<false, "Да", "Нет">; // 'Нет'

type Case3 = If<boolean, "Да", "Нет">; // "Да" | "Нет"

type Case4 = If<true, 1, 0>; // 1
type Case5 = If<false, 1, 0>; // 0

type User = { role: "user" };
type Admin = { role: "admin"; access: "all" };

type ConditionalUser<C extends boolean> = If<C, Admin, User>;

type Test1 = ConditionalUser<true>; // Admin
type Test2 = ConditionalUser<false>; // User
