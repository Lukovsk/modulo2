


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


function Calculate() {
    debugger
    var lista = document.getElementById("numberArray").value; // ['1', '3', '2', '8']
    var arr = JSON.parse("[" + lista + "]"); // [1, 3, 2, 8]
    var ordenados = sortItems(arr); // [1, 2, 3, 8]

    var posicaoFoco = Number(buscaBinaria(arr)); // se foco = 3 // posicaoFoco = 2

    console.log(posicaoFoco);

    ShowOrdem(ordenados);
    ShowFoco(posicaoFoco);
};

function buscaBinaria(list) { // [1, 2, 3, 8]
    debugger
    var min = 0; // min = 0
    var max = list[list.lenght - 1]; // max = 5-1 = 4
    console.log(max);
    var chute = Math.floor((max + min) / 2); // chute = 2
    var foco = Number(document.getElementById("focusValue").value); // 8, por exemplo

    while (list[chute] != foco) { // 3 != 8 // 8 == 8
        chute = Math.floor((max + min) / 2); // chute = (4+3)/2 = 3.5 = 3
        if (max < min) { // 4 < 0 (false)
            return -1;
        } else if (list[chute] == foco) { // 3 == 8 (false)
            return chute;
        } else if (list[chute] < foco) { // 3 < 8 (true)
            min = chute + 1; // min = 2+1 = 3
        } else if (list[chute] > foco) { // 
            max = chute - 1; // 
        };
    };
};

function ShowOrdem(array) {
    $("#listaOrdenada").append(`<br /> ${array}`);
};
function ShowFoco(pos) {
    $("#Foco").append(`e o valor foco está na ${pos}° posição`);
};