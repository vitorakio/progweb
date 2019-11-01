$(document).ready(function() {
    var result = $("#password-strength");
  
    $('#password').keyup(function(){
        $(".bar-text").html(checkStrength($('#password').val()))
    })  
 
    function checkStrength(password){
 
    //initial strength
    var strength = 0
    
    if (password.length == 0) {
        result.removeClass()
        return ''
    }
    //if the password length is less than 7, return message.
    if (password.length < 9) {
        result.removeClass()
        result.addClass('normal')
        return 'Normal'
    }
 
    //length is ok, lets continue.
 
    //if length is 8 characters or more, increase strength value
    if (password.length > 9) strength += 1
 
    //if password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
 
    //if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
 
    //if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1
 
    //now we have calculated strength value, we can return messages
 
    //if value is less than 2
    if (strength < 2) {
        result.removeClass()
        result.addClass('medium')
        return 'Médio'
    } else if (strength == 2 ) {
        result.removeClass()
        result.addClass('strong')
        return 'Forte'
    } else {
        result.removeClass()
        result.addClass('vstrong')
        return 'Muito Forte'
    }
  }
});
