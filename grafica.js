function tela() {
    display = window.screen.width;
    var boxCard = document.getElementsByClassName(".box-card");
    let fundo_lonas = document.getElementById('fundo_lonas');
    if (display < 600) {

        
        fundo_lonas.style.background = '#cecece', fundo_lonas.style.padding = '10px';

        
        boxCard.style.width = '500px'

    }
}
function comentario(){
    // cria um novo elemento div
    // e dá à ele conteúdo
    var box = [];
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    box.unshift(divNova.appendChild(conteudoNovo)); //adiciona o nó de texto à nova div criada
    console.log(box)
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
}
function rota(){
elemento = document.querySelector('#diego_designer');
elemento.style.transform =="rotate(320deg)";
elemento.style.transition == "5s"


}
function precos(){
    alert(document.querySelector("#vlor").firstChild.nodeValue);
    (document.querySelector("#vlor").firstChild.nodeValue) = (document.querySelector("#vlor").value * 0.05)
}

document.querySelectorAll(".preços > h2").value += (document.querySelectorAll(".preços > h2").value*0.10)