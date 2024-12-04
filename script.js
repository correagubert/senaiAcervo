function cad(){
    let cadUser = document.getElementById("cadUser").value;
    let cadSenha = document.getElementById("cadSenha").value;
    const cadUsuario = { cadUser, cadSenha};
    const bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || [];
    bancodeDados.push(cadUsuario);
    localStorage.setItem("bancodeDados", JSON.stringify(bancodeDados));
    alert("usuario cadastrado com sucesso!");
    window.location.href = "index.html";
}
function logar(){
    let username = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;
    const bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || [];
    for (let usuario of bancodeDados){
        if (username == usuario.cadUser && senha == usuario.cadSenha){
            alert("parabéns, você logou!")
            break;
        }
    }
}
function cadLocation() {
    window.location.href = "cad.html"
}
function voltar(){
    window.location.href = "index.html"
}
