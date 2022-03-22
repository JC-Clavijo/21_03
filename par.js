//total = n1 % n2; operação que mostra o resto da divisão

const ALUNO = 14

for(let x = 0; x <= ALUNO; x++){
    if (x == 0) {
        console.log("O numero é ZERO " + x);       
    }
    else if (x % 2 == 0) {
        console.log("O numero é PAR " + x);     
    }
    else {
        console.log("O numero é IMPAR " + x);       
    }
}