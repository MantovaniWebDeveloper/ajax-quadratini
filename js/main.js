$(document).ready(function(){
  //assegno variabili con le posizione dei tag
  var contenitore = $('.container');
  //genero i 36 quadrattini
  for (var i = 0; i < 36; i++) {
    var template = $('#griglia .quadrato').clone();
    contenitore.append(template);
  }
  //gestisco il click sul quadrato
  $('.quadrato').click(function(){
    //richiamo il this dal principio perchè se no si perde
    var thisQuadratoScelto = $(this);
    //alert("esisto");
    //invoco la chiamata
    $.ajax({
      url: "https://www.boolean.careers/api/random/int",
      method: "GET",
      success: function(data,stato){
        console.log(data.response);
        var risultatoChiamata = data.response;
        //setto lo sfondo in base al valore restituito dalla chiamata
        if(risultatoChiamata <= 5){
          console.log($(this));
          thisQuadratoScelto.css("background-color", "yellow")
        } else {
          thisQuadratoScelto.css("background-color", "green")
        }
      },
      error: function(richiesta,stato,errori){
        console.log("c'è stato un errore " + errori);
      }
    });
  });


});
