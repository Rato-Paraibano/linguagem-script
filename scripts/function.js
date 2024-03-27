function digitarValor(valor){
    valorDisplay = document.getElementById("display");

    if(valorDisplay.value == 0){
        valorDisplay.value = valor;
    } else {
        valorDisplay.value += valor;
    }
}
function imprimirMsg(texto){
    alert('Vc clicou no botão ' + texto);
}

function engual(){
    let conta = valorDisplay.value
    // if (valorDisplay.value.indexOf("/")){
    //         var numeros = conta.split("/")
    //         num1 = numeros[0]
    //         num2 = numeros[1]
    //         valorDisplay.value = num1/num2
    // }else if (valorDisplay.value.indexOf("-"));{
    //     var numeros = conta.split("-")
    //         num1 = numeros[0]
    //         num2 = numeros[1]
    //         valorDisplay.value = num1-num2
    // }else if (valorDisplay.value.indexOf("+"));{
    //     var numeros = conta.split("+")
    //         num1 = numeros[0]
    //         num2 = numeros[1]
    //         valorDisplay.value = num1+num2
    // }else if (valorDisplay.value.indexOf("x"));{
    //     var numeros = conta.split("x")
    //         num1 = numeros[0]
    //         num2 = numeros[1]
    //         valorDisplay.value = num1*num2
    // }

    let nums = conta.replace("/", " ").replace("-", " ").replace("+", " ").replace("x", " ")
    var numeros = nums.split(" ")
    if (conta.includes(".")){
        var num1 = parseFloat(numeros[0])
        var num2 = parseFloat(numeros[1])
    }else{
        var num1 = parseInt(numeros[0])
        var num2 = parseInt(numeros[1])
    }
        
    switch (true){
        case valorDisplay.value.includes("/"):
            var numeros = conta.split("/")
            valorDisplay.value = num1/num2
            break;
        case valorDisplay.value.includes("+"):
            var numeros = conta.split("+")
            valorDisplay.value = num1+num2
            break;
        case valorDisplay.value.includes("-"):
            var numeros = conta.split("-")
            valorDisplay.value = num1-num2
            break;
        case valorDisplay.value.includes("x"):
            valorDisplay.value = num1*num2
            break;   
    }

}

function zerar(){
    valorDisplay.value = "0"
}

function login(){
    const emailCorreto = "luciano@gmail.com";
    const senhaCorreta = "senha";
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if(email == emailCorreto){        
        if(senha == senhaCorreta){

            alert("E-mail e senha corretos");
            window.location.href = "../index.html";

        } else {
            alert("Senha incorreta.");
        }

    } else {
        alert("E-mail incorreto");
    }

    /*
    if(email == emailCorreto && senha == senhaCorreta ){
        alert("E-mail e senha corretos");
    } else {
        alert("E-mail ou senha incorretos.");
    }

    alert("E-mail digitado: " + email);
    alert("Senha digitada: " + senha);
*/
}