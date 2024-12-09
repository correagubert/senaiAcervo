document.addEventListener("DOMContentLoaded", function() {
    exibirInformacoesUsuario();
});

function exibirInformacoesUsuario() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];
    let usuarioAtual = bancoDeDados.find(usuario => usuario.usuario === usuarioLogado);

    if (usuarioAtual) {
        document.getElementById("infoUsuario").innerHTML = `
            <img src="${usuarioAtual.imagem}" alt="Foto do Usuário" style="width: 100px; height: 100px; border-radius: 50%;">
            <p><strong>Nome de Usuário:</strong> ${usuarioAtual.usuario}</p>
        `;
    }
}

function redAnalise() {
    window.location.href = 'analise.html';
}

function redHome() {
    window.location.href = 'home.html';
}

function redPerfil() {
    window.location.href = 'perfil.html';
}

function mostrarModalModificar() {
    document.getElementById("modalModificar").style.display = "block";
}

function mostrarModalDeletar() {
    document.getElementById("modalDeletar").style.display = "block";
}

function mostrarModalDeslogar() {
    document.getElementById("modalDeslogar").style.display = "block";
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.getElementById("formModificar").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioAntigo = document.getElementById("usuarioAntigo").value;
    const usuarioNovo = document.getElementById("usuarioNovo").value;
    const senhaAntiga = document.getElementById("senhaAntiga").value;
    const senhaNova = document.getElementById("senhaNova").value;
    const imagemInput = document.getElementById("imagem");

    const reader = new FileReader();
    reader.onload = function(event) {
        const novaImagem = event.target.result;

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

        for (let i = 0; i < bancoDeDados.length; i++) {
            if (bancoDeDados[i].usuario === usuarioAntigo && bancoDeDados[i].senha === senhaAntiga) {
                bancoDeDados[i].usuario = usuarioNovo;
                bancoDeDados[i].senha = senhaNova;
                bancoDeDados[i].imagem = novaImagem;
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                localStorage.setItem("usuarioLogado", usuarioNovo);
                alert("Dados atualizados com sucesso!");
                fecharModal('modalModificar');
                exibirInformacoesUsuario();
                return;
            }
        }

        alert("Usuário ou senha incorretos.");
    };

    if (imagemInput.files.length > 0) {
        reader.readAsDataURL(imagemInput.files[0]);
    } else {
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

        for (let i = 0; i < bancoDeDados.length; i++) {
            if (bancoDeDados[i].usuario === usuarioAntigo && bancoDeDados[i].senha === senhaAntiga) {
                bancoDeDados[i].usuario = usuarioNovo;
                bancoDeDados[i].senha = senhaNova;
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                localStorage.setItem("usuarioLogado", usuarioNovo);
                alert("Dados atualizados com sucesso!");
                fecharModal('modalModificar');
                exibirInformacoesUsuario();
                return;
            }
        }

        alert("Usuário ou senha incorretos.");
    }
});

function deletarConta() {
    let usuarioLogado = localStorage.getItem("usuarioLogado");
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

    bancoDeDados = bancoDeDados.filter(usuario => usuario.usuario !== usuarioLogado);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
    localStorage.removeItem("usuarioLogado");
    window.location.href = 'index.html';
}

function deslogar() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = 'index.html';
}
