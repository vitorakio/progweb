var n = parseInt(window.prompt('Informe um numero inteiro: ', 'Digite aqui'))
var n2 = parseInt(window.prompt('Informe um numero inteiro: ', 'Digite aqui'))

var soma = n + n2

if(soma > 100){
    alert(soma + " é maior que 100")
}
else if(soma == 100){
    alert(soma + " igual a 100")
}
else if(soma < 100){
    alert(soma + " é menor que 100")
}