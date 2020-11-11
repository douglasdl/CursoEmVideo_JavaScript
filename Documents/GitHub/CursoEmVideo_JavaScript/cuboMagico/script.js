var canvas = document.getElementById('retangulo');
var context = canvas.getContext("2d");

/* Linha
context.beginPath();    // Começa o caminho a ser desenhado
context.moveTo(0, 0);   // Move para o ponto inicial
context.lineTo(60, 40); // Traça um linha do ponto inicial até esse ponto
context.stroke();       // Pinta no Canvas a linha
*/

/* Retângulo
context.beginPath();
context.moveTo(20, 20);
context.lineTo(200, 20);
context.lineTo(200, 100);
context.lineTo(20, 100);
context.lineTo(20, 20);
context.stroke();
*/

/* Triângulo Isóceles
var lado = 100;
context.beginPath();
context.moveTo(50, 100); // Ponto inicial
context.lineTo(50 + lado, 100);
context.lineTo(50 + lado, 100 - lado);
context.lineTo(50, 100);
context.stroke();
*/

/* Cubo
var l = 10;
var L = 20 + (l/2);

context.strokeRect(20, 20, l, l);
context.strokeRect(L, L, l, l);

context.beginPath();
context.moveTo(20, 20);
context.lineTo(L, L);
context.stroke();

context.beginPath();
context.moveTo(20, 20+l);
context.lineTo(L, L+l);
context.stroke();

context.beginPath();
context.moveTo(20+l, 20);
context.lineTo(L+l, L);
context.stroke();

context.beginPath();
context.moveTo(20+l, 20+l);
context.lineTo(L+l, L+l);
context.stroke();
*/
context.fillStyle = "blue";
context.fillRect(10, 20, 270, 150);