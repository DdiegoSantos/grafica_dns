function tela() {
    display = window.screen.width;
    var boxCard = document.getElementsByClassName(".box-card");
    let fundo_lonas = document.getElementById('fundo_lonas');
    if (display < 600) {

        
        fundo_lonas.style.padding = '10px';

        
        boxCard.style.width = '500px'

    }
}
function calcularValorBanner(item) {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth()+1;
    
    if (dia >= 1 && dia <= 8 ) {
        var ValorFinal = ["R$55,00", "R$75,00", "R$100,00"];

        var preco = document.getElementById('preco' + item);
        let semana = document.getElementById('semana');
        semana.innerHTML = "semana de promoção 1 à 8"
        semana.style.backgroundColor = 'red';
        semana.style.color = 'white';
        semana.style.textTransform = 'uppercase'

        preco.innerHTML = ValorFinal[item]
    }

}
