// 1. Функция formattedUserData принимает ряд
// аргументов и выводит форматированную
// информацию о пользователе. Опишите
// аргументы этой функции таким образом,
// чтобы в случае отсутствия информации
// о возрасте или родном городе, в
// информации о юзере было указано
// "Нет данных"

function formattedUserData1(firstName: string, lastName: string, age: string = 'Нет данных', hometown: string = 'Нет данных') {
    return `
      Имя: ${firstName};
      Фамилия: ${lastName};
      Возраст: ${age};
      Родной город: ${hometown};
    `;
  }
  
  // 2. Ниже перепишите функцию formattedUserData2 таким
  // образом чтобы данные выводились в консоль
  
  function formattedUserData2(firstName: string, lastName: string, age: string = 'Нет данных', hometown: string = 'Нет данных') {
    console.log( `
      Имя: ${firstName};
      Фамилия: ${lastName};
      Возраст: ${age};
      Родной город: ${hometown};
    `)
  }
  
  