
function enviarFormulario(){
    var validar = document.anun.combustivel.value;
    var titulo = document.anun.titulo.value;
    var desc = document.anun.desc.value;
    var ano = document.anun.ano.value;
    var val = document.anun.val.value;

    if (titulo == "") {
        alert('Preencha o campo com o titulo');
        return false;
    }
    if (desc == "") {
        alert('Preencha o campo com seu nome');
        return false;
    }
    if (ano == "") {
        alert('Preencha o campo com o ano');
        return false;
    }
    if (val == "") {
        alert('Preencha o campo com com o valor');
        return false;
    }

    if (validar == 'Gasolina'){
        alert('Selecione um tipo de combustivel');
    }
    else if (validar == 'Etanol'){
        alert('Selecione um tipo de combustivel');
    }
    else if (validar == 'Diesel'){
        alert('Selecione um tipo de combustivel');
    }
    else if (validar == 'Flex'){
        alert('Selecione um tipo de combustivel');
    }
    else{
        alert('Selecione uma opção');
    }
}
