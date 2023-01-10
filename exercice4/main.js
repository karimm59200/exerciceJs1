let largeur = Number(prompt("quel est la largeur de votre quadrilatère :"));
let longeur = Number(prompt("quel est la longeur de votre quadrilatère :"));

let perimetreCarre = largeur * 4;
let airCarre = largeur * largeur;
let perimetreRectangle = (largeur + longeur) * 2;
let airRectangle = longeur * largeur;

console.log(`l'air du caré est qui a pour coté ${largeur} :${airCarre}`);
console.log(
  `l'air du rectangle est qui a pour longeur ${longeur} et ${largeur} :${airRectangle}`
);
console.log(`le périmètre du carré :${perimetreCarre}`);
console.log(`le périmètre du rectangle : ${perimetreRectangle}`);
