function cadastrar(){
    let cadEmail = document.getElementById("cadEmail");
    let cadSenha = document.getElementById("cadSenha");
    let bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || []
    let cadUsuario = {cadEmail, cadSenha}
    for(let usuario of bancodeDados){
        bancodeDados.push(cadUsuario)
    }
    alert("Usuário cadastrado")
    window.location.href = "index.html"
}
function logar(){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let bancodeDados = JSON.parse(localStorage.getItem("bancodeDados"))
    let usuario = {email, senha}
    if(bancodeDados == null){
        alert("email ou senha incorreto!");
    }
    else{
        alert("seja bem vindo!")
    }
}
function cadLocation() {
    window.location.href = "cad.html"
}
