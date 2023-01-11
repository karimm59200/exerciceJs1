let diametreDuCercle = Number(prompt("veuillez saisir le diametre du cercle : "));

 let airDuCercle = Math.PI * diametreDuCercle // pi*Math.pow((circonference/2),2)
 let circonference = 2 * Math.PI * (diametreDuCercle/2)*(diametreDuCercle/2);

alert(`l'air du cercle qui a pour diamètre ${diametreDuCercle} est de ${airDuCercle}`);
alert(`sa circonference est de ${circonference}`);


