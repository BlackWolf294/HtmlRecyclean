$(document).ready(function() {
  $(".botonF1").hover(function () {
    $(".btn").addClass("animacionVer");
    $(".botonF1").addClass("rotarimagen")
  });

  $(".contenedor").mouseleave(function () {
    $(".btn").removeClass("animacionVer");
    $(".botonF1").removeClass("rotarimagen")
  });
});

function mostrarTexto() {
  var textoEfecto = document.querySelector('.texto-efecto');
  textoEfecto.style.display = 'block';
}

function ocultarTexto() {
  var textoEfecto = document.querySelector('.texto-efecto');
  textoEfecto.style.display = 'none';
}