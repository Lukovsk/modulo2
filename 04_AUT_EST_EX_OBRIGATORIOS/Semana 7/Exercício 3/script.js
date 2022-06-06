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
    inpute = document.getElementById("phone").value
    if (inpute.includes("(") && inpute.includes(")") && inpute.includes("-")) {
        alert("Pronto, entraremos em contato nesse telefone em breve!")
    } else {
        alert("Hmm, parece que o formato do telefone informado não está correto")
    };
} 