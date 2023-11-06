var data = new Date();
var dia = data.getDate();
var mes = data.getMonth()+1;

function mostrarData() {

    //alert(dia + "/" +(mes+1));
    pData = document.getElementById('data');
    pData.innerHTML = dia + "/" + (mes);
}
function calcularValorBanner(item) {
    
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

function tela() {
    display = window.screen.width;
    var boxCard = document.getElementsByClassName(".box-card");
    let fundo_lonas = document.getElementById('fundo_lonas');
    if (display < 600) {


        fundo_lonas.style.background = '#cecece', fundo_lonas.style.padding = '10px';


        boxCard.style.width = '500px'

    }
}
function temaMes(){
    var classeNov = document.getElementsByClassName("nov");
    

    if(mes == 11){
        body = document.body
        body.style.backgroundColor = 'black';
        body.style.color = 'white'

        for ( i = 0 ; i < classeNov.length; i++){
            classeNov[i].style.backgroundColor = 'black';
        }
        
    }
    if(mes == 12){
        body = document.body
        body.style.backgroundColor = '#800000';
        body.style.color = 'white'

        for ( i = 0 ; i < classeNov.length; i++){
            classeNov[i].style.backgroundColor = '#501111';
        }
        
    }
}