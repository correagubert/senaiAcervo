document.getElementById("formFilme").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const nota = document.getElementById("nota").value;
    const descricao = document.getElementById("descricao").value;
    const imagemInput = document.getElementById("imagem");
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const imagem = event.target.result;
        
        let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
        filmes.push({ nome, nota, descricao, imagem });
        localStorage.setItem("filmes", JSON.stringify(filmes));
        
        window.location.href = 'home.html';
    };
    
    reader.readAsDataURL(imagemInput.files[0]);
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