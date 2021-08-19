while (true) {
  let query = prompt("Que dire...");

  if (query[query.length - 1] === "?") {
    console.log("Ouais Ouais...");
  } else if (query && query === query.toUpperCase()){
    console.log("Pwa, calme-toi...");
  } else if (query.toLowerCase().includes("fortnite")) {
    console.log("on s’fait une partie soum-soum ?");
  } else if (!query) {
    console.log("t'es en PLS ?");
  } else {
    console.log("balek");
  }
}
