function cad(){
    let cadUser = document.getElementById("cadUser").value;
    let cadSenha = document.getElementById("cadSenha").value;
    const cadUsuario = { cadUser, cadSenha}
    const bancodeDados = JSON.parse(localStorage.getIem("bancodeDados")) || [];
    bancodeDados.push(cadUsuario)
    alert("usuario cadastrado com sucesso!")
    window.location.href = "index.html"
}
function logar(){
    let usuario = { 
        username:username.value,
        senha:senha.value
    }
    let bancodeDados = JSON.parse(localStorage.getItem("bancodeDados"));
        if(bancodeDados == null){
            bancodeDados = [];
        }
    bancodeDados.push(usuario);
    localStorage.setItem("bancodeDados", JSON.stringify(bancodeDados));
    alert("usuário cadastrado com sucesso!");
}
function cadLocation() {
    window.location.href = "cad.html"
}
function voltar(){
    window.location.href = "index.html"
}
