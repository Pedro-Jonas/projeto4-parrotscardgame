//pedir a quantidade e sortear os pares//
let quantidade = prompt("Digite a quantidade de cartas (Somente valores pares entre 4 e 14)")
while (quantidade < 4 || quantidade > 14 || quantidade%2 != 0) {
    quantidade = prompt("Digite a quantidade de cartas (Somente valores pares entre 4 e 14)")
}
function comparador() { 
	return Math.random() - 0.5; 
}
let paresincial = ["explodyparrot.gif", "bobrossparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif","unicornparrot.gif"]
paresincial.sort(comparador)
let pares = []
for (let i = 0; i < (quantidade/2); i++){
    pares.push(paresincial[i])
    pares.push(paresincial[i])
}
pares.sort(comparador)
let primeiralinha = document.querySelector(".linha1")
let segundalinha = document.querySelector(".linha2")
let contador = 0;

for (let i = 0; i < (quantidade/2); i++){
    primeiralinha.innerHTML += `<div class="card frente" onclick="jogar(this)"><img src="imagens/front.png" class="inicial"><img src="imagens/${pares[contador]}" class="verso escondido"></div>`
    contador++
}
for (let i = 0; i < (quantidade/2); i++){
    segundalinha.innerHTML += `<div class="card frente" onclick="jogar(this)"><img src="imagens/front.png" class="inicial"><img src="imagens/${pares[contador]}" class="verso escondido"></div>`
    contador++
}

let count = 0;

function jogar(elemento){
    const verifcagifvirado = document.querySelector(".virada .verso")
    if (verifcagifvirado !== null){
        const vimagem = document.querySelector(".virada .inicial")
        const verifcavirado = verifcagifvirado.parentNode
        vimagem.classList.remove("inicial")
        vimagem.classList.remove("escondido")
        verifcagifvirado.classList.remove("verso")
        elemento.classList.add("virada")
        const gif = document.querySelector(".virada .verso")
        const imagem = document.querySelector(".virada .inicial")
        vimagem.classList.add("inicial")
        vimagem.classList.add("escondido")
        verifcagifvirado.classList.add("verso")
        imagem.classList.add("escondido")
        gif.classList.remove("escondido")
        const carta1 = verifcavirado.innerHTML
        const carta2 = elemento.innerHTML
        if (carta1 !== carta2){
            setTimeout(tempodacartaerrada, 700, verifcavirado, elemento, imagem, gif, vimagem, verifcagifvirado) 
            count++   
        } else {
            cartacerta(vimagem, verifcagifvirado, imagem, gif)
            count++
            setTimeout(verificarfim, 700, count) 
        }
    } else {
        virarcarta(elemento) 
    }
}
function virarcarta(elemento){
    elemento.classList.add("virada")
    const gif = document.querySelector(".virada .verso")
    const imagem = document.querySelector(".virada .inicial")
    imagem.classList.add("escondido")
    gif.classList.remove("escondido")
}
function tempodacartaerrada(verifcavirado, elemento, imagem, gif, vimagem, verifcagifvirado){
    verifcavirado.classList.remove("virada")
    elemento.classList.remove("virada")
    imagem.classList.remove("escondido")
    gif.classList.add("escondido")  
    vimagem.classList.remove("escondido")
    verifcagifvirado.classList.add("escondido")
}
function cartacerta(vimagem, verifcagifvirado, imagem, gif){
    vimagem.classList.remove("inicial")
    verifcagifvirado.classList.remove("verso")
    imagem.classList.remove("inicial")
    gif.classList.remove("verso")
}
function verificarfim(count){
    const procurar = document.querySelector(".inicial")
    if (procurar === null){
        alert(`"Você ganhou em ${count} jogadas!"`)
    }
}
