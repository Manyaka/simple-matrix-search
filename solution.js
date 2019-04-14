function findWord(text, data) {
  //проверка входных данных
  if (0 === text.length || 99 < text.length) {
    return;
  }
  if (0 === data.length || 99 < data.length) {
    return;
  }

  let isStringLengthSmallerThen100 = data.every(element => element.length < 99);

  if (!isStringLengthSmallerThen100) {
    return;
  }

  let dataLength;
  let reverseData = [];
  let verticalData = [];
  let reverseVerticalData = [];

  //реверс строк в массиве
  data.forEach(function(element) {
    reverseData.push(element.split("").reverse().join(""));
  });

  //вычисление длины строки для длины массива
  for (let i = 0; i < data.length; i++) {
    dataLength = data[i].length;
  }

  //сбор вертикального массива из обычного
  for (let i = 0; i < dataLength; i++) {
    verticalData[i] = new Array(data.length);
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      verticalData[j][i] = data[i][j];
    }
  }
  for (let i = 0; i < verticalData.length; i++) {
    verticalData[i] = verticalData[i].join('');
  }

  //реверс строк в массиве
  verticalData.forEach(function(element) {
    reverseVerticalData.push(element.split('').reverse().join(''));
  });

  // поиск внутри массивов
  if (data.some(element => element.indexOf(text) > -1)) {
    return true;
  } else if (reverseData.some(element => element.indexOf(text) > -1)) {
    return true;
  } else if (verticalData.some(element => element.indexOf(text) > -1)) {
    return true;
  } else if (reverseVerticalData.some(element => element.indexOf(text) > -1)) {
    return true;
  } else {
    return false;
  }
}
