/* 
=======================
Funções
======================= 
*/

function mascara(i) {


    var v = i.value;

    // if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    //     i.value = v.substring(0, v.length - 1);
    //     return;
    // }

    i.setAttribute("maxlength", "14");
    if (v.length == 3) {
        i.value += ") ";
    };
    if (v.length == 9) {
        i.value += "-";
    }
}