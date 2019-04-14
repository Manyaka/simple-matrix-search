function findWord(text, data) {
  console.log('text=', text);
  // console.log('data=', data);
  let dataLength = data.length;
  let reverseData = [];
  let verticalData = [];
  let reverseVerticalData = [];

  let matrix = [
    "абырвалг",
    "иадрклин",
    "слырвврг",
    "ккмрватг",
    "раскатиг",
    "апплетлг",
  ];

  //реверс строк в массиве
  data.forEach(function(element) {
    reverseData.push(element.split("").reverse().join(""));
  });

  //сбор вертикальных массивов из обычного и реверсного
  // data.forEach(function(element) {
  //   console.log(typeof element, '**');
  // });

  //дата - массив -> искать внутри массива
  if (data.some(element => element.indexOf(text) > -1)) {
    // return true;
  } else if (reverseData.some(element => element.indexOf(text) > -1)) {
    // return true;
  } else {
    // return false;
  }

  //сделать массив по вертикали -> искать внутри массива
  let table = new Array(10);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
  }
  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      table[row][col] = row * col;
    }
  }
  // console.log(table);
  //let ta = table[8][8];

  // return masha;
}
