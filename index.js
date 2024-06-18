/* // Utilizando if/ else if

let nomePersonagem = "Naskar";
let nivel = 900;
let nomeNivel;

if (nivel <= 1000) {
  nomeNivel = "Ferro";
} else if (nivel <= 1000) {
  nomeNivel = "Bronze";
} else if (nivel <= 2000) {
  nomeNivel = "Prata";
} else if (nivel <= 5000) {
  nomeNivel = "Ouro";
} else if (nivel <= 7000) {
  nomeNivel = "Platina";
} else if (nivel <= 9000) {
  console.log(
    nomeNivel = "Ascendente"
  );
} else if (nivel <= 10000) {
  nomeNivel = "Imortal";
} else {
  nomeNivel = "Radiante";
}


console.log(`O Heroi ${nomePersonagem} está no nível de ${nomeNivel}`);  */


// Utilizando Switch case
const nomePersonagem = "Herbert";
const nivel = 8010;
let nomeNivel;

switch (true) {
  case nivel <= 1000:
    nomeNivel = "Ferro";
    break;
  case nivel <= 2000:
    nomeNivel = "Bronze";
    break;
  case nivel <= 5000:
    nomeNivel = "Prata";
    break;
  case nivel <= 7000:
    nomeNivel = "Ouro";
    break;
  case nivel <= 8000:
    nomeNivel = "Platina";
    break;
  case nivel <= 9000:
    nomeNivel = "Ascendente";
    break;
  case nivel <= 10000:
    nomeNivel = "Imortal";
    break;
  default:
    nomeNivel = "Radiante";
}

console.log(`O Heroi ${nomePersonagem} está no nível de ${nomeNivel}`); 


