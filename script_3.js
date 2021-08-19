function pyramid(number) {
  for (let i = 1; i <= number; i++) {
    console.log(" ".repeat(number - i) + "#".repeat(i));
  }
}

number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if (!number) {
  console.log("Entrez un nombre svp!");
} else if (number == 0) {
  console.log("Le nombre est nul");
} else if (number < 0) {
  console.log("Entrez un nombre positif");
} else {
  pyramid(number);
}
