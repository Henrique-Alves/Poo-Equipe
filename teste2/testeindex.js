const arrayIdade = [32, 34, 35, 36, 33, 30];

const pegaNome = arrayIdade.map((idade, index, tudo) =>{
    console.log(`${index}-${idade}`);
});

const soma = function(A, B){
    return console.log(A + B);
}

soma(30, 40);

const pegaPar = arrayIdade.filter(idadePar => idadePar % 2 === 0);

console.log(pegaPar);