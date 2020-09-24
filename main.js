'use strict'

const userValueOne = prompt('Введите строку!', 'Замылила глаз мама мыла раму');
const userValueTwo = prompt('Введите строку!', 'в Украине много интересных людей ;) ');
const letter = prompt('Введите букву!', 'a');

function getQuantity(str1, str2, value = 'а') {

  if (value.length > 1) {
    return 'Введите не больше одного символа';
  }

  if (!str1 || !str2) {
    return 'Вы не передали строки для поиска буквы ' + value;
  }

  function getMatch(str, value) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== value) {
        continue;
      }
      count++;
    }
    return count;
  }

  const countFirst = getMatch(str1, value);
  const countSecond = getMatch(str2, value);

  if (!countSecond || !countFirst) {
    return 'В Вашей строке нет ни единой буквы "а"';
  }

    if (countFirst === countSecond) {
      return `${str1} и ${str2}`;
    } else if(countFirst > countSecond){
      return str1;
    }  else {
      return str2;
    }

}

const result = getQuantity(userValueOne, userValueTwo, letter);

alert(result);