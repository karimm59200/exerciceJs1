let email = "Karim-megri@hotmail.fr",
  mdp = "Karim991";

emailUser = prompt("Veuillez entrer votre email.");
mdpUser = prompt("Veuillez entrer votre mot de passe.");

if (email === emailUser && mdp === mdpUser) {
  alert("Welcome, bienvenue à vous ! ");
} else {
  alert("Oups, il y a un problème ! ");
}
