function validate() {

    var nome = form.nome.value;
    var email = form.email.value;
    var telefone = form.telefone.value;
    
    if (nome == "") {
        alert("Preencha o campo nome");
        form.nome.focus();
        return false;
    }
    
    if (email == "" && email.indexOf('@') == -1) {
        alert("Preencha carretamente o campo email");
        form.email.focus();
        return false;
    }
    
    if (telefone == "") {
        alert("Preencha corretamente o campo telefone");
        form.telefone.focus();
        return false;
    }
    
    }