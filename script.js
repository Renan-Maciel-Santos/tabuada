function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c<=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}

// // function tabuada() {
// //     var num = document.getElementById('txtn'); // Obtém o elemento de entrada
// //     var tab = document.getElementById('seltab'); // Obtém o elemento select
// //     if (num.value.length == 0) { // Verifica se o campo de entrada está vazio
// //         window.alert('Por favor, digite um número!'); // Alerta se nenhum número for digitado
// //     } else {
// //         var n = Number(num.value); // Converte o valor de entrada para número
// //         var c = 1; // Inicializa o contador
// //         tab.innerHTML = ''; // Limpa os resultados anteriores no elemento select
// //         while (c <= 10) { // Loop para criar a tabuada de 1 a 10
// //             var item = document.createElement('option'); // Cria um novo elemento option
// //             item.text = `${n} x ${c} = ${n * c}`; // Define o texto da opção
// //             item.value = `tab${c}`; // Define o valor da opção (pode ser usado depois, se necessário)
// //             tab.appendChild(item); // Adiciona a opção ao elemento select
// //             c++; // Incrementa o contador
// //         }
// //     }
// // } 