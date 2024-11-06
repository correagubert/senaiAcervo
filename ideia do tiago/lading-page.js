let dados = [];
let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('senha');
let inputcadEmail = document.getElementById('cadEmail');
let inputcadSenha = document.getElementById('cadSenha');

function logar(){
    let dadosLogados = {
        email:inputEmail.value,
        senha:inputSenha.value,
    }
    informações();
    if (dadosLogados.email === inputcadEmail  && dadosLogados.senha === inputcadSenha) {
        alert('Seja bem vindo!')
    }else{
        alert('acesso negado!')
    }
    inputEmail.value = null;
    inputSenha.value = null;
    cadastrar();
}
function cadastrar(){
    let dadosPessoais = {
        cadEmail:inputcadEmail.value,
        cadSenha:inputcadSenha.value
    }
    dados.push(dadosPessoais);
    informações();
    alert('Cadastro feito com sucesso!')
}
function informações(){

}

