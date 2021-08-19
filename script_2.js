function factorial(number) {
  var total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
}

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

if (!number) {
  console.log("Entrez un nombre svp!");
} else if (number == 0) {
  console.log("Le nombre est nul");
} else if (number < 0) {
  console.log("Entrez un nombre positif");
} else {
  console.log("Le factoriel de " + number + " est " + factorial(number));
}
