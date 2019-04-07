// prettier-ignore
let matrix = [
  ["а", "б", "ы", "р", "в", "а", "л", "г"],
  ["и", "а", "д", "р", "к", "л", "и", "н"],
  ["с", "л", "ы", "р", "в", "в", "р", "г"],
  ["к", "к", "м", "р", "в", "а", "т", "г"],
  ["р", "а", "с", "к", "а", "т", "и", "г"],
  ["а", "п", "п", "л", "е", "т", "л", "г"],
];
/*
Если хотите воспользоваться случайно матрицей,
просто раскомментируйте следующую строку
*/
//let matrix = null;

// НЕ ИЗМЕНЯЙТЕ НИЧЕГО НИЖЕ ЭТОЙ СТРОКИ
const alphabet = "авбвгдеёжзиклмнопрстуфхцчшщъьыэюя";
function prepareMatrix() {
  if (matrix) {
    return matrix;
  }

  const width = Math.floor(Math.random() * 10) + 1;
  const height = Math.floor(Math.random() * 10) + 1;

  const result = [];
  for (let j = 0; j < height; j++) {
    const line = [];
    for (let i = 0; i < width; i++) {
      line.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    result.push(line);
  }
  return result;
}

function visualizeMatrix(node, matrix) {
  const table = document.createElement("table");
  matrix.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(v => {
      const cell = document.createElement("td");
      cell.textContent = v;
      tr.appendChild(cell);
    });
    table.appendChild(tr);
  });
  node.appendChild(table);
}

const data = prepareMatrix();
visualizeMatrix(document.querySelector("[data-field]"), data);
const result = document.querySelector("[data-result]");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const text = document.querySelector("input").value;

  if (!text) {
    alert("Введите текст");
  }

  if (findWord(text, data)) {
    result.setAttribute("class", "found");
    result.removeAttribute("hidden");
    result.textContent = "Строка найдена";
  } else {
    result.setAttribute("class", "notfound");
    result.removeAttribute("hidden");
    result.textContent = "Строка не найдена";
  }
});

window.addEventListener("error", () => {
  result.setAttribute("class", "error");
  result.textContent =
    "Выполнение вашего кода завершилось с ошибкой. Проверьте консоль браузера";
  result.removeAttribute("hidden");
});
