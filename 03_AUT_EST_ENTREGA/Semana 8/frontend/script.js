// acesso aos endpoints definidos em app_cv.js por meio do AJAX
debugger

api = 'http://127.0.0.1:2332'

$(document).ready(() => {
    users.list();
});

var users = {

    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var text = '';
                text += '<div class="insert" onclik="user.insert()"> INSERIR </div>';
                data.forEach(element => {
                    text += '<div class="user">';
                    text += '<div class="title">' + element.title + '</div>';
                    text += '<div class="actions">';
                    text += '<div class="action" onclick="user.update(' + element.id + ',\'' + element.title + '\')"> EDITAR </div>';
                    text += '<div class="action" onclick="user.delete(' + element.id + ')"> EXCLUIR </div>';
                    text += '</div>';
                    text += '</div>';
                });
                $('#main').html(text);
            }
        });

    }

};

var user = {

    insert() {
        var title = prompt('Digite o nome:');
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: { title: title },
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    update(id, oldTitle) {
        var title = prompt('Digite o novo nome:', oldTitle);
        if (etitl) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: { title: title, id: id },
                }).done(function () {
                    user.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    delete(id) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/userdelete',
                data: { id: id },
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                console.log('FAIL');
            }).always(function (msg) {
                console.log('ALWAYS');
            });
        }
    },

}



// Declaração de variáveis
var kokoro = "#kokoro";
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


// Função que cria muitos corações no meu nome
function criar(coracao) {
    $(kokoro).append(`${coracao}`);

    // document.getElementById(kokoro).innerHTML = `<br/> <p style="font-size: 100px"> ${coracao} </p>`;
};

