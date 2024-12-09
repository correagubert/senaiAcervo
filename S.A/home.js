document.addEventListener("DOMContentLoaded", function() {
    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

    const conteudo = document.getElementById("conteudo");

    if (filmes.length === 0) {
        conteudo.innerHTML = `
            <p>Você não gostaria de criar uma análise?</p>
            <button onclick="redAnalise()">Criar Análise</button>
        `;
    } else {
        filmes.forEach((filme, index) => {
            const button = document.createElement("div");
            button.className = "filme-button";
            button.innerHTML = `<img src="${filme.imagem}" alt="${filme.nome}">`;
            button.onclick = function() {
                mostrarModal(filme);
            };
            conteudo.appendChild(button);
        });
    }
});

function redPerfil() {
    window.location.href = 'perfil.html';
}

function redHome() {
    window.location.href = 'home.html';
}

function redAnalise() {
    window.location.href = 'review.html';
}

function mostrarModal(filme) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
        <div style="display: flex;">
            <img src="${filme.imagem}" alt="${filme.nome}">
            <div style="flex-grow: 1;">
                <h2>${filme.nome}</h2>
                <span class="nota">${filme.nota}</span>
            </div>
        </div>
        <p class="descricao">${filme.descricao}</p>
    `;
    modal.style.display = "block";

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
