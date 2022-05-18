// Declaração de variáveis
var kokoro = "kokoro";
var adicionarFormacaoAcademica = "adicionarInteli";

// Função que vai registrar uma formação acadêmica no currículo
function registrarFormacaoAcademica() {
    Experiencia = document.getElementById("adicionarExperiência").value;
    Instituicao = document.getElementById("adicionarInstituição").value;
    Periodo = document.getElementById("adicionarTempo").value;
    addFormacaoAcademica(Experiencia, Instituicao, Periodo);
}

function addFormacaoAcademica(Experiencia, Instituicao, Periodo) {
    document.getElementById(adicionarFormacaoAcademica).innerHTML = `<h5 class="w" style="padding-top: 20px"><strong>${Experiencia}</strong></h5><h6 class="w">${Instituicao}</h6><h6 class="w" style="padding-bottom: 10px">${Periodo}</h6>`;

    // $(adicionarFormacaoAcademica).append(`<h5 class="w" style="padding-top: 20px"><strong>${Experiencia}</strong></h5><h6 class="w">${Instituicao}</h6><h6 class="w" style="padding-bottom: 10px">${Periodo}</h6>`);

}

// Função que cria um coração no meu nome
function criar(coracao) {
    document.getElementById(kokoro).innerHTML = `<br/> 
    <p style="font-size: 100px"> ${coracao} </p>`;
};