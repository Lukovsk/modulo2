// Declaração de variáveis
var kokoro = "kokoro";
var adicionarFormacaoAcademica = "adicionarInteli";


function registrarFormacaoAcademica() {
    Experiencia = document.getElementById("adicionarExperiência").value;
    Instituicao = document.getElementById("adicionarInstituição").value;
    Periodo = document.getElementById("adicionarTempo").value;
    adicionarFormacaoAcademica(Experiencia, Instituicao, Periodo);
}


}

// Função que cria um coração no meu nome
function criar(coracao) {
    document.getElementById(kokoro).innerHTML = `<br/> 
    <p style="font-size: 100px"> ${coracao} </p>`;
};