
// Função que o botão do index vai chamar
function Calculate() {
    var lista = document.getElementById("numberArray").value; // recebe a lista em formato string ex.:  "6,2,5,4,1"
    var arr = JSON.parse("[" + lista + "]"); // coloca essa lista no formato de um array ex.: [6, 2, 5, 4, 1]
    var ordenados = sortItems(arr); // roda a função que ordena os itens ex.: [1, 2, 4, 5, 6]

    var posicaoFoco = Number(buscaBinaria(ordenados)); // roda a busca binária para encontrar a posição do valor foco e armazena essa informação na variável "posicaoFoco" 

    ShowOrdem(ordenados); // mostra a lista com os elementos ordenados 
    ShowFoco(posicaoFoco); // mostra a posição do valor-foco
};


// Bubble sort: (função que ordena os elementos de uma lista) peguei da internet mesmo, mas basicamente ele procura pra cada item da lista se um é maior que o outro, se for, eles trocam de lugar, se não, eles passam pro próximo item e repetem isso até todos os itens forem um maior que outro
function sortItems(lista) { // 
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    };
    return lista;
}



// função que procura o valor-foco com o algoritmo de busca binária
// a ideia é estabelecer o mínimo como a primeira posição do array e o máximo como a última posição, depois disso, chutamos um valor central (entre esse mínimo e máximo) e comparamos ele com o valor foco.
// Repetindo isso até o valor da posição do chute for exatamente igual ao valor foco, retornamos o chute (que será a posição do valor-foco no array ORDENADO)
function buscaBinaria(list) { // ex.: [1, 2, 4, 5, 6]
    debugger
    var min = 0; // mínimo, inicialmente, é a primeira posição do array (0)

    var max = 0; // para o máximo, vamos rodar um loop que conta cada opção do array
    for (let key in list) { // para cada elemetno da lista
        if (list.hasOwnProperty(key)) { // se existe um elemento na posição "max"
            max++; // adiciona 1 ao max e roda dnv o "for"
        } // roda isso até chegar em uma posição que não existe, daí para

    }
    // com isso a gnt tem o máximo, ex.: 5
    var chute = Math.floor((max + min) / 2); // chute é a média dos dois valores ex.: 5/2 = 2
    var foco = Number(document.getElementById("focusValue").value); // 5, por exemplo

    while (list[chute] != foco) { // 
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