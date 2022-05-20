


// Bubble sort:
function sortItems(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function buscaBinaria(list, foco) {
    let min = 0;
    let max = Number(list.lenght - 1);
    let chute = Math.floor((max + min) / 2);
    while (chute != foco) {
        chute = Math.floor((max + min) / 2);
        if (max < min) {
            return -1;
        } else if (list[chute] == foco) {
            return chute;
        } else if (list[chute] < foco) {
            min = chute + 1;
        } else if (list[chute] > foco) {
            max = chute - 1;
        };
    };
};


function Calculate() {
    debugger
    var lista = Array.from(document.getElementById("numberArray").value);
    var ordenados = sortItems(lista);

    var foco = Number(document.getElementById("focusValue").value);

    // buscaBinaria(lista, foco);

    ShowOrdem(ordenados);
    ShowFoco(posicaoFoco);
};


function ShowOrdem(array) {
    $("#listaOrdenada").append(`<br /> ${array}`);
};
function ShowFoco(pos) {
    $("#Foco").append(`e o valor foco está na ${pos}° posição`);
};