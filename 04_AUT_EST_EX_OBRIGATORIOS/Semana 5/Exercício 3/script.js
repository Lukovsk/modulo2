
// Função que o botão do index vai chamar
function Calculate() {
    var lista = document.getElementById("numberArray").value; // recebe a lista em formato string "6,2,5,4,1"
    var arr = JSON.parse("[" + lista + "]"); // coloca essa lista no formato de um array [6, 2, 5, 4, 1]
    var ordenados = sortItems(arr); // roda a função que ordena os itens [1, 2, 4, 5, 6]

    var posicaoFoco = Number(buscaBinaria(ordenados)); // roda a busca binária para encontrar a posição do valor foco

    ShowOrdem(ordenados); // mostra a lista com os elementos ordenados 
    ShowFoco(posicaoFoco); // mostra a posição do valor-foco
};


// Bubble sort: (função que ordena os elementos de uma lista)
function sortItems(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    };
    return array;
}



// função que procura 
function buscaBinaria(list) { // [1, 2, 3, 8]
    debugger
    var min = 0; // min = 0
    console.log(list);
    var tamanho = 0;
    for (let key in list) {
        if (list.hasOwnProperty(key)) {
            tamanho++;
        }

    }
    console.log(tamanho);
    console.log(Object.keys(list).lenght);
    var max = tamanho; // max = 5-1 = 4
    console.log(max);
    var chute = Math.floor((max + min) / 2); // chute = 2
    var foco = Number(document.getElementById("focusValue").value); // 8, por exemplo

    while (list[chute] != foco) {
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
    // $("#listaOrdenada").append(`<br /> ${array}`);
    document.getElementById("listaOrdenada").innerHTML = `<br /> ${array}`;
};
function ShowFoco(pos) {
    // $("#Foco").append(`e o valor foco está na ${pos + 1}° posição`);
    document.getElementById("Foco").innerHTML = `e o valor-foco está na ${pos + 1}°posição`;
};