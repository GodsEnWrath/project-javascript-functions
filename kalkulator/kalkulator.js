function add() {
  let x = prompt("Masukkan bilangan pertama untuk pertambahan"),
    y = prompt("Masukkan bilangan kedua untuk pertambahan"),
    res = parseInt(x) + parseInt(y),
    show = `Hasil ${x} - ${y} = ${res}`;

  alert(show);
}

function subtract() {
  let x = prompt("Masukkan bilangan pertama untuk pengurangan"),
    y = prompt("Masukkan bilangan kedua untuk pengurangan"),
    res = parseInt(x) - parseInt(y),
    show = `Hasil ${x} - ${y} = ${res}`;

  alert(show);
}

function multiply() {
  let x = prompt("Masukkan bilangan pertama untuk perkalian"),
    y = prompt("Masukkan bilangan kedua untuk perkalian"),
    res = parseInt(x) * parseInt(y),
    show = `Hasil ${x} x ${y} = ${res}`;

  alert(show);
}

function divide() {
  let x = prompt("Masukkan bilangan pertama untuk pembagian"),
    y = prompt("Masukkan bilangan kedua untuk pembagian"),
    res = parseInt(x) / parseInt(y),
    show = `Hasil ${x} : ${y} = ${res}`;

  alert(show);
}

function calculator() {
  choice = prompt(
    "Masukkan pilihan operasi yang Anda inginkan (1: pertambahan, 2: pengurangan, 3: perkalian, 4: pembagian"
  );

  switch (choice) {
    case "1":
      add();
      break;
    case "2":
      subtract();
      break;
    case "3":
      multiply();
      break;
    case "4":
      divide();
      break;
  }

  let retry = prompt("Apakah anda ingin mengulang (Yes/No)?");

  if (retry === "Yes" || retry === "yes") {
    calculator();
  }
}

calculator();
