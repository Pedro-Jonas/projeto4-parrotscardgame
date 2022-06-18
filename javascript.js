let quantidade = prompt("Digite a quantidade de cartas")
while (quantidade < 4 || quantidade > 14 || quantidade%2 != 0) {
    quantidade = prompt("Digite a quantidade de cartas")
}
let primeiralinha = document.querySelector(".linha1")
let segundalinha = document.querySelector(".linha2")
if (quantidade > 7){
    for (let i = 0; i < 7; i++){
        primeiralinha.innerHTML += `<div class="card frente" onclick="virar(this)"><img src="imagens/front.png"></div>`
    }
    let novaquantidade = quantidade - 7
    for (let i = 0; i < novaquantidade; i++){
        segundalinha.innerHTML += `<div class="card frente" onclick="virar(this)"><img src="imagens/front.png"></div>`
    }
} else {
    for (let i = 0; i < quantidade; i++){
        primeiralinha.innerHTML += `<div class="card frente" onclick="virar(this)"><img src="imagens/front.png"></div>`
    }
}

function virar(elemento){
    elemento.classList.toggle("virada")
    elemento.innerHTML = `<img src="imagens/front.png" class="escondido"></img><img src="imagens/explodyparrot.gif">`
}
