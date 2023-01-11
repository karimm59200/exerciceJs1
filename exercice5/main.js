let coteA= Number(prompt("quel est la longeur du coté adjacent A : "));
let coteB= Number(prompt("quel est la longeur du coté adjacent B : "));

let hypotenuse = (Math.sqrt((Math.pow(coteA,2))+(Math.pow(coteB,2))));

 let res =hypotenuse.toFixed(2);

alert(`l'hypotènuse du triangle qui a pour cote A d'une longeur de ${coteA} cm et de coté B de ${coteB} est egale à ${res}`)