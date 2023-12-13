// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
  }