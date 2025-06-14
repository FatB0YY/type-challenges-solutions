# Решение задач `Type Challenges`

Этот файл содержит решения и краткие описания задач из проекта [Type Challenges](https://github.com/type-challenges/type-challenges).  
Каждый тип — это самостоятельное решение на уровне типов, повторяющее или расширяющее функциональность стандартных утилит TypeScript.

---

## 📦 Список типов

### `Concat<T, U>`

Объединяет два массива/кортежа в один: `[...T, ...U]`.

### `MyExclude<T, U>`

Удаляет из типа `T` все члены, которые присутствуют в `U`.

### `FirstOfArray<T>`

Возвращает первый элемент массива `T`. Если массив пустой, возвращает `never`.

### `If<C, T, F>`

Простая условная логика. Если `C` — `true`, возвращает `T`, иначе `F`.

### `LengthOfTuple<T>`

Возвращает длину кортежа `T` на уровне типов (`T["length"]`).

### `MakeTuple<T, N>`

Создаёт кортеж из `N` элементов типа `T`, используя рекурсию.

### `MyParameters<T>`

Извлекает типы параметров из функции `T`. Аналог `Parameters<T>`.

### `MyPick<T, K>`

Создаёт объект с подмножеством ключей `K` из объекта `T`. Аналог `Pick<T, K>`.

### `Push<T, U>`

Добавляет элемент `U` в конец массива `T`: `[...T, U]`.

### `Unshift<T, U>`

Добавляет элемент `U` в начало массива `T`: `[U, ...T]`.

### `TupleToObject<T>`

Преобразует кортеж литеральных значений в объект: `{ key: key }`.

### `GetArrayItem<T>`

Извлекает тип одного элемента из массива `T`. Работает также с кортежами.

### `GetReturnType<T>`

Извлекает тип возвращаемого значения функции `T`. Аналог `ReturnType<T>`.

### `MyReadonly<T>`

Делает все свойства объекта `T` только для чтения (`readonly`). Аналог `Readonly<T>`.

### `hasTail`

Возвращает `true`, если у переданного массива или кортежа есть хвостовая часть

### `Last`

Возвращает последний элемент переданного массива или кортежа
