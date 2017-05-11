//acá tiene que ponerse creativxs
//revisen lo que hicimos en la clase 7
//https://github.com/profesorfaco/dno037-2017-07
var data;

function preload() {
   data = loadTable("data/a.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(600,500);
   canvas.parent('top');
   noLoop();
   noStroke();
}


function draw() {
   background(0);
   var sobre_promedio = 0;
   var bajo_promedio = 0;

   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) {
      if (data.get(a, 10) == 262) {
         sobre_promedio++
      } else if (data.get(a, 10) == 260) {
        bajo_promedio++
      }
   }

   //todo esto se imprime en su consola de JavaScript
   print("En Chile hay " + data.getRowCount() + " Regiones.");
   print("De estas " + sobre_promedio + " regiones están sobre el promedio país en el SIMCE de matemáticas, mientras que " + bajo_promedio + "están bajo el mismo. ");
   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(255);
    ellipse((width / 4), (height / 2), (15 * 12), (15 * 12));
    ellipse((width / 4 * 3), (height / 2), (15 * 12), (15 * 12));

    //estos dibuja los círculos negros, de total de facellecidos.
    fill(117,17,132);
    ellipse((width / 4), (height / 2), (sobre_promedio * 12), (sobre_promedio * 12));
    ellipse((width / 4 * 3), (height / 2), (bajo_promedio * 12), (bajo_promedio * 12));


}
