(function readJS(win,doc){

    if(doc.querySelectorAll('.deletar')){
        for(let i = 0; i < doc.querySelectorAll('.deletar').lenght; i++){
            doc.querySelectorAll('.deletar')[i].addEventlistener('click', function(event){
                if(confirm("Deseja mesmo apagar este dado?")){
                    return true;
                }else{
                    event.preventDefault()
                };
            });
        }
    }

})(window.document);