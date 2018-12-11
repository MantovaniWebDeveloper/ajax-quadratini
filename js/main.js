$(document).ready(function(){
  //assegno variabili con le posizione dei tag
  var contenitore = $('.container');
  //genero i 36 quadrattini
  for (var i = 0; i < 36; i++) {
    console.log(i);
    var template = $('#griglia .quadrato').clone();
    contenitore.append(template);
  }
  //gestisco il click sul quadrato
  $('.quadrato').click(function(){
    alert("esisto");
  });


});
