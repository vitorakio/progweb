function enviarFormulario(){
    var nome = document.contato.nome.value;
    var email = document.contato.email.value;
    var mensagem = document.contato.mensagem.value;

    if (nome == "") {
        alert('Preencha o campo com seu nome');
        return false;
    }
    if (email == "") {
        alert('Preencha o campo de email');
        return false;
    }
    if (mensagem == "") {
        alert('Preencha o campo de mensagem');
        return false;
}
}
