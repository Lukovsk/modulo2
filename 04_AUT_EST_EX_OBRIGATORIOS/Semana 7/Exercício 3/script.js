/* 
=======================
Funções
======================= 
*/
// Função que facilita a escrita (máscara de input)
function mascaraTelefone(i) {
    i.setAttribute("maxlength", "14");
    if ((i.value).length == 3) {
        i.value += ")";
    };
    if ((i.value).length == 9) {
        i.value += "-";
    }
}
// Função que notifica/parabeniza por escrever certo uai
function notificar() {
    alert("Pronto, entraremos em contato nesse telefone em breve!")
}