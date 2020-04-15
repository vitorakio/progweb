var vetor = new Array()
//leitura dos valores
for(var j = 0; j < 10; j++){
    console.log("Digite a " + j + " posição do vetor:")
    vetor[j] = Number(prompt())
}
//ordenação
for(var i=0; i<vetor.length; i++){
    for(var k = i; k > 0 && vetor[k] < vetor[k-1]; k--){
        var aux = vetor[k-1]
        vetor[k-1] = vetor[k]
        vetor[k] = aux
    }
}
//resultado
console.log("o vetor ordenado é " + vetor)