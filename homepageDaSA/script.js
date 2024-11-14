const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorretos."
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null){
        mensagem = "Nenhum usuário cadastrado."
    } else {
        for (let usuario of bancoDeDados){
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Login realizado.";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "home.html"
                break;
            }
        }
    }
    alert(mensagem);
}

function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value,
        }
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null){
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso.")
    } else {
        alert("As senhas são diferentes.");
    }
}

function sair() {
    if (confirm("Deseja mesmo sair?") == true){
    localStorage.setItem("logado", JSON.stringify(null));
    window.location.href = "login.html";
    }
}

function username() {
    let usuarioLogado = JSON.parse(localStorage.getItem("logado"));
    let nome = usuarioLogado.login;
    document.getElementById("nome").innerHTML = nome;
}

