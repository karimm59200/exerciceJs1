let age, anciennete,  dernierSalaire, indemnite=0; // indemnité à 0 par defaut

// récupération et stockage des saisie utilisateur.
age = Number(prompt("Veuillez saisir votre âge : "));
anciennete = Number(prompt("Veuillez saisir votre ancienneté en nombre d'année: "));
dernierSalaire = Number(prompt("Veuillez saisir votre dernier salaire : "));

if ( anciennete >=1 && anciennete <=10) {
  indemnite = (salaire/2) *anciennete
}

if (anciennete > 10 ) {
  indemnite = salaire * anciennete ;
  //si on veut les 10 premieres années
}

if(  age >=  46 && age <= 49){
  indemnite = indemnite + salaire*2;// indeminte += salaire*2;
} else if ( age >= 50 ) {
  indemnite += salaire * 5;   
}