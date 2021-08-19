const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

const abandonned = (element) => element.rented < 1;

if (books.some(abandonned)) {
  console.log("Un livre n’a jamais été emprunté !");
} else  {
  console.log("Tout les livres ont au moins été emprunté une fois.");
}

function getMostRentedTitle(books) {
  let most_rented = 0;
  let name;

  books.forEach(book => {
   if(book.rented > most_rented) {
     most_rented = book.rented;
     name = book.title;
   }
  });
  return name;
}

console.log("Quel est livre le plus emprunté ?");
console.log(getMostRentedTitle(books));


function getMostRented(books) {
  let most_rented = 0;

  books.forEach(book => {
   if(book.rented > most_rented) {
     most_rented = book.rented;
   }
  });
  return most_rented;
}


function getLeastRentedTitle(books) {
  let least_rented = getMostRented(books);
  let name;

  books.forEach(book => {
   if(book.rented < least_rented) {
     least_rented = book.rented;
     name = book.title;
   }
  });
  return name;
}

console.log("Quel est le livre le moins emprunté ?");
console.log(getLeastRentedTitle(books));

let id_name = books.find(book => book.id == 873495).title;
console.log("Trouve le livre avec l’ID: 873495");
console.log(id_name);

for( var i = 0; i < books.length; i++){ 
    if ( books[i].id == 133712) { 
        books.splice(i, 1); 
        i--; 
    }
}
console.log("Supprime le livre avec l’ID: 133712")
console.log(books);

let sorted = books.sort(function(a, b) {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
});

console.log("Trie les livres par ordre alphabétique");
console.log(sorted);
