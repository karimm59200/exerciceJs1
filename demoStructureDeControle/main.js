// console.log("***********les structures conditionnelles***********");
// //les instruction if else if et else, si sinon alors
// let compte = 15000;

// //avec pliseur vérifications
// if(compte>0)
//     console.log("Votre compte est créditeur");

// if(compte<0)
//     console.log("votre compte est débiteur");

// if(compte>0){
//   console.log("votre compte est crédieteur");
//   console.log(`votre avec ${compte} euros.`);
// }
// else{
//   console.log("votre compte est débiteur ou null");
//   console.log(`vous avez ${compte} euros.`);
// }

// //avec un booléen
// let estCrediteur=(compte>0)
//   if(estCrediteur){
//     console.log("votre compte est créditeur (avec un bool)")
// } else {
//   console.log("votre compte est débiteur (avec un bool)")
// }

let age = 0;

age = Number(prompt("veuillez saisir votre âge : "));
console.log(typeof(age))// vérifie le type de ma variable age

if(age<13){
  console.log("vous êtes un enfant")
} else if (age>=18){
  console.log("vous êtes un adulte");
} else {
  console.log("vous êtes un adolescent");
}

//switch case 

const civilite = "Mme";

switch (civilite) {
  case 'Mme': 
        console.log("Bonjour Madame");
    
    break;
    
  case 'Mr': 
        console.log("Bonjour Monsieur");
    break;

  default:
      console.log("Bonjour Mademoiselle");
    break;
}