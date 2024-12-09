function cad() {
    let usuario = document.getElementById("cadUser").value;
    let senha = document.getElementById("cadSenha").value;
    const imagemInput = document.getElementById("cadImagem");
    const bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

    if (imagemInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imagem = event.target.result;
            const cadUsuario = { usuario, senha, imagem };
            bancoDeDados.push(cadUsuario);
            localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "index.html";
        };
        reader.readAsDataURL(imagemInput.files[0]);
    } else {
        const cadUsuario = { usuario, senha, imagem: "" }; // Adiciona um valor vazio para a imagem se não for fornecida
        bancoDeDados.push(cadUsuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "index.html";
    }
}

function logar() {
    let username = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;
    const bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

    for (let usuario of bancoDeDados) {
        if (username === usuario.usuario && senha === usuario.senha) {
            localStorage.setItem("usuarioLogado", username);
            alert("Parabéns, você logou!");
            window.location.href = "home.html";
            return;
        }
    }
    alert("Usuário/Senha incorretos!");
}

function cadLocation() {
    window.location.href = "cad.html";
}

function voltar() {
    window.location.href = "index.html";
}
