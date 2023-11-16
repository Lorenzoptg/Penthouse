var path = document.querySelector('#star-path');


var pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;


path.getBoundingClientRect();

var tempoCostruzione = 10; // 7 secondi
var passaggi = 2000; // Numero di passaggi

var intervallo = tempoCostruzione * 100 / passaggi;

var passaggiCompletati = 0;

function eseguiPasso() {
  var progresso = passaggiCompletati / passaggi;

  var drawLength = pathLength * progresso;

  path.style.strokeDashoffset = pathLength - drawLength;

  if (passaggiCompletati >= passaggi) {
    clearInterval(intervalloCostruzione);
    path.style.strokeDasharray = "none";
    path.style.fill = "#FDFDFD";
  } else {
    passaggiCompletati++;
  }
}

var intervalloCostruzione = setInterval(eseguiPasso, intervallo);
