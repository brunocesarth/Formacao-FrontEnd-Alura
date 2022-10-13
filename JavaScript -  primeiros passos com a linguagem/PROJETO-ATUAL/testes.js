function negrito(arrayStrings, ...valores) {

    return arrayStrings.reduce((acumulador, string, i) => {
     return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`;
   }, '');
}

const nome = 'Paulo Scalercio';
const redeSocial = '@PauloScalercio';

console.log(negrito`${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);