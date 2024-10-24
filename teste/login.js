let bancoDeDados = [];

function login(){
    let username = document.getElementById("user").value;
    if (existe(username) == false) {
        alert("Usuário não encontrado.")
    } else {
        alert("Bem vindo, "+username+".")
        window.location.href="main.html"
    }
}

function add() {
    let username = document.getElementById("username").value;
    if (existe(username) == false) {
        bancoDeDados.push(username.toUpperCase());
        alert("Usuário cadastrado com sucesso.")
        window.close("register.html")
    } else {
        alert("Esse usuário já foi cadastrado.")
    }
}

function abrirRegistro(){
    window.open("register.html")
}

function existe(username){
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if (pos == -1) {
        return false;
    }else{
        return true;
    }
}