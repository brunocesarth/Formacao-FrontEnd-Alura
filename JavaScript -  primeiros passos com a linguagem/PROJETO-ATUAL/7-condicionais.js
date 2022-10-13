console.log(`Trabalhando com condicionais  \n \n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item 
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem! \n \n");
    listaDeDestinos.splice(2, 1); //removendo item 
} else {
    console.log("Não é maior de idade e não posso vender \n \n");
}
console.log("Embarque:");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem")
}else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18 );
// console.log(idadeComprador < 18 );
// console.log(idadeComprador <= 18 );
// console.log(idadeComprador >= 18 );
// console.log(idadeComprador == 18 );