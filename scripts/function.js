function imprimirMsg(texto){
    alert('Você clicou no botão ' + texto);
}
function login(){
    const emailCorreto = "gab@gmail.com";
    const senhaCorreta = 'senha';
    var email = document.getElementById('email').value;
    //alert('E-mail digitado: ' + email)
    var senha = document.getElementById('pwd').value;
    //alert('Senha digitada: ' + senha)
//     if(email == emailCorreto && senha == senhaCorreta){
//         alert('E-mail e senha corretos.' );
//     } else print('E-mail ou senha incorretos.')
    if(email == emailCorreto){
        if(senha == senhaCorreta)
            alert('Foi feito login com sucesso, Redirecionando...');
            window.location.href = '../../index.html'
    } 
    else {
        alert('E-mail incorreto.')
    }
}
