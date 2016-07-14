//2016 07 13
//taller de p5.js
//vamos a hacer un liezo verde con una elipse que sigue el mouse

//en javascript existen funciones y variables
// las variables ahy que declararlas
//esto se hace una sola vez
//equivale a decirle al computador
//oye, guarda un espacio en memoria y ponle este nombre
var radioCirculo;
// asignacion de un valor de una variable 
radioCirculo = 50;
//declaracion de una funcion en javascript

//una variable declarada fuera de una funcion
// es una variable global
//todas las funciones pueden leerla y modificarla
//manera corta de declarar y asignar un valor inicial
var extra = 10;

//function setup
// corre una vez, al principio
function setup() {
	//createCanvas(dimHor, dimVer)
	createCanvas(windowWidth, windowHeight);
	//background(red, green, blue)
	background(0,255,0);
	//ellipse(posX, posY, width, height)
	//ellipse(200, 100, 200, 50)

	console.log(extra);
	//declaremos una variable local
	var noSe = 40;
	//imprimir en consola
	console.log(noSe);
	frameRate(1);
}


// funcion draw
// se ejecuta 60 veces por segundo
function draw() {
	background(0,255,0);
	//decidir con que borde se dibuja
	if (mouseIsPressed){
		borde1();
    } else {
    	borde2();
	} 
	ellipse(mouseX, mouseY, radioCirculo, radioCirculo);
	
    ellipse(100, 100, radioCirculo * 2, radioCirculo);
    muchosRectangulos(1000);
}


function nombreFuncion(){
	//aqui va lo que hace la funcion
}

function borde1() {
	//stroke elige el color del trazo
	stroke(255, 255, 0);
	//fill() elige el relleno
	fill (0, 255, 255);
	//strokeWeight(px) define el tamaño del trazado
	strokeWeight(10);
}
function borde2() {
	//stroke elige el color del trazo
	noStroke();
	//fill() elige el relleno
	fill (120, 255, 255);
	//strokeWeight(px) define el tamaño del trazado
	strokeWeight(10);
}
//funcion que aumenta en 10 el radio del circulo
function aumentarRadio(aumento){
	radioCirculo = radioCirculo + aumento;
}
function muchosRectangulos(numero){
	//rect(posx, posy, width, height)
	//sin borde
	noStroke();
	//color aleatorio
	fill(random(255), random(255), random(255))
	//loop o bucle
	for (i =0  ; i < numero; i++ ){

//rect en posicion aleatoria
	rect(random(width), random(height), 20, 20);
}


}
