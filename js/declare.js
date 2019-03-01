// Función para escribir Texto animado:


writeDialog = function (string){
    var canvasT = document.getElementById('canvas');
    var ctxT = canvasT.getContext('2d');
var x = 0.05 * w;
var y = 0.95 * h;
var vel = 0.025; // letras por segundo
var largo = string.length;
var tamanio = 15;
var fuente = "Georgia";
var estilo = tamanio + "px" + fuente;
ctxT.font = estilo;
ctxT.fillStyle = "black"
let ti = 0;
let t = ti + frames / fps / vel;
let pos = Math.floor(t);
let posicion = function (){
    if( pos < largo-1) {return pos}
    if(pos >= largo-1) {return largo};

}
ctxT.fillText (string.substring(0,posicion()),x,y);
};

drawContinue = function(){
    cont = new Image();
    cont.src = "sprites/continue.png";
    if (Math.floor(frames/fps) % 2 == 0 )
    {ctx.drawImage(cont,w * 0.75,h*0.85,w*0.2,h*0.1)};
};

