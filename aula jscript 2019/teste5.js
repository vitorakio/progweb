function soma(a, b){
    var res = a + b
    console.log("A soma é " + res)
}

function dif(a ,b){
    var dif = Math.abs (a - b)
    console.log("A diferença é " + dif)
}

function produto(a, b){
    var prod = a * b
    console.log("O produto é " + prod)
}

function divisao(a, b){
    var div;
    if(b === 0){
    console.log("O denominador não pode ser zero")
    }
    else{
        div = a/b
        console.log("A divisão é " + div)
    }
}

console.log("Digite o 1o valor: ")
var v1 = Number(prompt())
console.log("Digite o 2o valor: ")
var v2 = Number(prompt())

console.log("Escolha uma opção:\nA- Soma de 2 números. \nB- A diferença entre dois números(maior pelo menos): \nC- O produto de dois números: \nD- A divisão entre dois números: ")
var opcao = prompt()
switch(opcao, toUpperCase()){
    case "A": soma(v1, v2)
    break
    case "B": dif(v1, v2)
    break
    case "C": produdo(v1, v2)
    break
    case "D": divisao(v1, v2)
    break
    default : console.log("Opção inválida!")
    break
}