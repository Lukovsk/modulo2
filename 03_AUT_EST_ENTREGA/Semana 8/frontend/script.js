// acesso aos endpoints definidos em app_cv.js por meio do AJAX

api = 'http://127.0.0.1:2332'

$(document).ready(() => {
    users.list();
    academicos.list();
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
                    text += `<div class="title"> ${element.id} | ${element.title} | ${element.love} | ${element.time} </div>`
                    text += '<div class="actions">';
                    text += `<div class="action" onclick="user.update('${element.id}','${element.title}','${element.love}','${element.time}')"> EDITAR </div>`;

                    // text += '<div class="action" onclick="user.update(' + element.id + ',\'' + element.title + '\')"> EDITAR </div>';
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
        var id = prompt('Digite o id:');
        var title = prompt('Digite o nome:');
        var love = prompt('Digite o amor:');
        var time = prompt('Digite o tempo:');
        if (id) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {
                        id: id,
                        title: title,
                        love: love,
                        time: time,
                    },
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

    update(id, oldTitle, oldLove, oldTime) {
        var title = prompt('Digite o novo nome:', oldTitle);
        var love = prompt('Digite o novo amor:', oldLove);
        var time = prompt('Digite o novo tempo:', oldTime);
        if (title) {
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
        if (love) {
            if (love.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: { love: love, id: id },
                }).done(function () {
                    user.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
        if (time) {
            if (time.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: { time: time, id: id },
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

var academicos = {

    list() {
        $.ajax({
            url: api + '/readAcademico',
            type: 'GET',
            success: data => {
                var text = '';
                text += '<div class="insert" onclik="academico.insert()"> INSERIR </div>';
                data.forEach(element => {
                    text += '<div class="user">';
                    text += `<div class="title"> ${element.Curso} | ${element.Lugar} | ${element.Inicio} | ${element.Fim} | ${element.Status} | ${element.Love} </div>`
                    text += '<div class="actions">';
                    text += `<div class="action" onclick="academico.update('${element.Curso}','${element.Status}')"> EDITAR </div>`;

                    // text += '<div class="action" onclick="user.update(' + element.id + ',\'' + element.title + '\')"> EDITAR </div>';
                    text += '<div class="action" onclick="academico.delete(' + element.Curso + ')"> EXCLUIR </div>';
                    text += '</div>';
                    text += '</div>';
                });
                $('#adicionarInteli').html(text);
            }
        });

    }

};

var academico = {

    insert() {
        var Curso = prompt('Digite o Curso:');
        var Lugar = prompt('Digite o Lugar:');
        var Inicio = prompt('Digite o Inicio:');
        var Fim = prompt('Digite o Fim:');
        var Amor = prompt('Digite o amor:');
        var Status = prompt('Digite o Status:');
        if (Curso) {
            if (Curso.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/insertAcademico',
                    data: {
                        Curso: Curso,
                        Lugar: Lugar,
                        Inicio: Inicio,
                        Fim: Fim,
                        Amor: Amor,
                        Status: Status
                    },
                }).done(function () {
                    academicos.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    update(id, oldStatus) {
        var Status = prompt('Digite o novo status do curso:', oldStatus);
        if (Status) {
            if (Status.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/updateAcademico',
                    data: { Status: Status, Curso: Curso },
                }).done(function () {
                    Academicos.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    delete(Curso) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/deleteAcademico',
                data: { Curso: Curso },
            }).done(function () {
                Academicos.list();
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
    Experiencia = document.getElementById("Curso").value;
    Instituicao = document.getElementById("Lugar").value;
    Periodo = String(String(document.getElementById("Inicio").value) + String(document.getElementById("Fim").value));
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

