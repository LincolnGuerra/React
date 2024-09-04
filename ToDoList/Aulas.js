// ALTERAR OS VALORES DE A PARA B E DE B PARA A!
var a = "3";
var b = "8";

var c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);

//LENGTH - CONTADOR DE CARACTERES

var tweet = prompt("Escreva aqui seu tweet:");
var tweetCount = tweet.length;

alert(
  "Voce ja digitou " +
    tweetCount +
    "caracteres, voce tem " +
    (140 - tweetCount) +
    " para digitar"
);

//Variacao do codigo

var tweet = prompt("escreva aqui seu tweet:");

alert(
  "Voce ja digitou " +
    tweet.length +
    " caracteres, voce tem " +
    (140 - tweet.length) +
    " para digitar"
);

//SLICE - DIVISOR DE CARACTERES

var tweet = prompt("Escreva aqui seu tweet:");
var limite = tweet.slice(0, 140);
alert(limite);

//Variacao do codigo

alert(prompt("escreva aqui seu tweet:").slice(0, 140));

//TOUPPERCASE

var name = "Lincoln";
name = name.toUpperCase();

// Deixar so a primeira letra em maiuscula e o restante em minuscula

// 1 Criar uma variavel para guardar o nome do usuario via prompt.

var name = prompt("Digite seu nome");

// 2 Deixar em letra maiuscula somente a primeira letra do nome digitado.

// A - isolar o 1o caractere;

var primeiroCaract = name.slice(0, 1);

// B - Deixa-lo em maiuscula;

var primCaractMaiusculo = primeiroCaract.toUpperCase();

// C - Isolar o resto dos caracteres;

var restanteDosCaract = name.slice(1, name.length);

// D Alterar o resto do nome para minusculo.

var restanteDosCaract = restanteDosCaract.toLowerCase();

// E - Cooncatenar o 1o caractere com o restante;

var nomeCaps = primCaractMaiusculo + restanteDosCaract;

// 3- Usar a versao em maiuscula do nome para sauda-lo usando um alerta.

alert("Ola, pessoa " + nomeCaps);

//OPERACOES MATEMATICAS

// DOG AGE

var dogAge = prompt("Digite a idade do seu cahorro:");
humanAge = (dogAge - 2) * 4 + 21;
alert("Seu cachorro tem " + humanAge + " anos" + " em anos humanos");

// FUNCTIONS

// Exercicio quantos dias dias, semanas e meses tem para viver ate 90

function lifeInWeeks(age) {
  var tempoRestante = 90 - age;
  var dias = tempoRestante * 365;
  var semanas = tempoRestante * 52;
  var meses = tempoRestante * 12;

  console.log(
    "Voce tem " +
      dias +
      " dias," +
      semanas +
      " semanas, e " +
      meses +
      " meses restantes."
  );
}

lifeInWeeks(43);

// GET MILK (la ele)

function getMilk(money) {
  console.log("leveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");

  var numberOfBotles = Math.floor(money / 1.5);

  console.log("Compre " + numberOfBotles + " garrafas de leite");

  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
}

getMilk(5);

// Variacao

function getMilk(money) {
  console.log("leveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");

  var numberOfBotles = Math.floor(money / 1.5);

  console.log("Compre " + numberOfBotles + " garrafas de leite");

  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
}

getMilk(5);

//Variacao

function getMilk(money) {
  console.log("leveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");

  console.log("Compre " + calcBottles(money, 1.5) + " garrafas de leite");

  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");

  return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBotle) {
  var numberOfBotle = Math.floor(startingMoney / costPerBotle);

  return numberOfBotle;
}

function calcChange(startingAmount, costPerBotle) {
  var change = startingAmount % costPerBotle;
  return change;
}

console.log("Hello master, here is your " + getMilk(5) + " change.");

// Variacao

function getMilk(money, costPerBotle) {
  console.log("leveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");

  console.log(
    "Compre " + calcBottles(money, costPerBotle) + " garrafas de leite"
  );

  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");

  return calcChange(money, costPerBotle);
}

function calcBottles(startingMoney, costPerBotle) {
  var numberOfBotle = Math.floor(startingMoney / costPerBotle);

  return numberOfBotle;
}

function calcChange(startingAmount, costPerBotle) {
  var change = startingAmount % costPerBotle;
  return change;
}

console.log("Hello master, here is your " + getMilk(5, 1.5) + " change.");

// BMI CALCULADORA

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}

// Outro exemplo

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

// Arredondar resultado

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

var bmi = bmiCalculator(95, 1.85);
console.log(bmi);

// THE DICE

var n = Math.random();
n = n * 6;
console.log(n);

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// LOVE CALC

var primNome = prompt("Digite o primeiro nome:");
var segNome = prompt("Digite o segundo nome:");

var resultadoNome = Math.random() * 100;
resultadoNome = Math.floor(resultadoNome) + 1;
alert("A porcentagem de amor e: " + resultadoNome + "%");

// Outro exemplo

var primNome = prompt("Digite o primeiro nome:");
var segNome = prompt("Digite o segundo nome:");

var resultadoAmor = Math.random() * 100;
resultadoAmor = Math.floor(resultadoAmor) + 1;

if (resultadoAmor > 70) {
  alert(
    "Sua porcentagem de amor e: " +
      resultadoAmor +
      "%." +
      " Voces se amam como Kanye se ama."
  );
} else {
  alert("Sua porcentagem de amor e: " + resultadoAmor + "%");
}

// Outro exemplo

var primNome = prompt("Digite o primeiro nome:");
var segNome = prompt("Digite o segundo nome:");

var resultadoAmor = Math.random() * 100;
resultadoAmor = Math.floor(resultadoAmor) + 1;

if (resultadoAmor > 70) {
  alert(
    "Sua porcentagem de amor e: " +
      resultadoAmor +
      "%." +
      " Voces se amam como Kanye se ama."
  );
}

if (resultadoAmor > 30 && resultadoAmor <= 70) {
  alert("Sua porcentagem de amor e: " + resultadoAmor + "%");
}

if (resultadoAmor <= 30) {
  alert(
    "Sua porcentagem de amor e: " +
      resultadoAmor +
      "%" +
      " Voces sao como oleo e agua"
  );
}

// ANO BISSEXTO

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not a leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

//ARRAY

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList); //Traz todos os nomes

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList.length); //Traz a quantidade de dados do array

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList[2]); // Traz a posicao do array comecando em 0

// Verificar se convidado esta na lista

var listaConvidados = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var nomeConvidado = prompt("Digite seu nome:");

if (listaConvidados.includes(nomeConvidado)) {
  alert("Seja bem-vindo(a)");
} else {
  alert("Desculpe, voce nao foi convidado(a)");
}

// Verifica se convidado esta na lista
// Se o usuario digitar o primeiro caractere do nome em minusculo
// Mudar para maiusculo

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("Digite seu nome:");

var primeiroCaract = guestName.slice(0, 1);
var primCaractMaiusculo = primeiroCaract.toUpperCase();
var restanteDosCaract = guestName.slice(1, guestName.length);
restanteDosCaract = restanteDosCaract.toLowerCase();

var nomeCaps = primCaractMaiusculo + restanteDosCaract;

if (guestList.includes(nomeCaps)) {
  alert("Seja bem-vindo(a) " + nomeCaps);
} else {
  alert("Desculpe, " + nomeCaps + " você não foi convidado(a)");
}

// FIZZBUZZ ARRAY

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  count++;

  console.log(output);
}

// WHOS PAYING THE LUNCH

function whosPaying(names) {
  var numberOfPeople = name.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is goind to buy lunch today!";
}

// FIZZBUZZ ARRAY LOOP

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  while ((count < 100, count++)) console.log(output);
}

// WHILE

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count++;
  }

  console.log(output);
}

// 99 BOTTLES OF BEER

//WHILE

function beer() {
  let i = 99;
  while (i >= 1) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    i--;
    if (i > 0) {
      console.log(
        "Take one down and pass it around, " +
          i +
          " bottles of beer on the wall.\n"
      );
    } else {
      console.log(
        "Take one down and pass it around, no more bottles of beer on the wall.\n"
      );
    }
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

// FOR

function beer() {
  for (let i = 99; i >= 1; i--) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    if (i > 1) {
      console.log(
        "Take one down and pass it around, " +
          (i - 1) +
          " bottles of beer on the wall.\n"
      );
    } else {
      console.log(
        "Take one down and pass it around, no more bottles of beer on the wall.\n"
      );
    }
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

//FOR

var output = [];

function fizzBuzz() {
  for (count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }

  console.log(output);
}

// FIBONACCI GENERATOR

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

output = fibonacciGenerator(5);
console.log(output);
