var pokemonIni =[];
var subPantalla = 0;
var turno = 0;
var movtoRed = 0;
var movtoBlue = 0;
var players = 1;

var player = function(p){
    if (p==1){return players = 2}
    if (p==2){return players = 1}
}


drawPantallaInicio = function(){
    var t = fps/ips // seràn las iteraciones por segundo
        function generaPokemonInicio() {
            if(Math.floor(frames/t) === frames/t || frames === 0){
                 pokeIni = new Pokemon (Math.floor((Math.random() * 9) + 1 ,0))
                pokemonIni.push(pokeIni);
            };

            if (Math.floor(frames/t) === frames/t && frames >= 0 && pokemonIni.length > 1){
                  pokemonIni.splice(0,1);
           };
        };
    generaPokemonInicio();
 
  drawLogo = function(){
        let v = 5;
        let swidth = 496;
        let sheight = 153;
        
        let y = canvas.height * 0.1;
        let width = canvas.width * 0.5;
        let x = (canvas.width - width)/2;
        let height = canvas.height * sheight / (0.5 * canvas.height)
        widthLogo = function(){
            if (frames*v <= swidth){return frames*v}
            if (frames*v > swidth){return swidth}
        }
        var imgLogo = new Image();
        imgLogo.src = 'sprites/logo.png';
        ctx.drawImage(imgLogo,0,0,widthLogo(),height,x,y,width,height);
        var imgVersion = new Image();
        imgVersion.src = 'sprites/iron.png'
        drawVersion = function(){
            if(frames * v > swidth)
            ctx.drawImage(imgVersion,x,y + 150 ,width,30);
        }

        drawVersion();
  };

  drawTrainer = function() {
      let escala = 0.60;
      let swidth = 250 ;
      let sheight = 351 ;
      let x = canvas.width * 0.3;
      let y = canvas.height * 0.47;
      let height = escala * sheight;
      let width = escala * swidth;
      var imgTrainer = new Image();
      imgTrainer.src = 'sprites/red.png';
      ctx.drawImage(imgTrainer, x,y, width, height);
  };

  var dibujapk = function() {if ( pokemonIni.length > 0) {pokemonIni[pokemonIni.length-1].drawAnimado(0.5*w,0.45*h,w*0.40,h*0.4,1);
}}

    var drawStart = function(){
        let vel = 2;
        let tiempo = Math.floor(frames/fps);
        let escala = 0.30;
        let swidth = 901;
        let sheight = 105;
        let y = canvas.height * 0.85;
        let height = escala * sheight;
        let width = escala * swidth;
        let x = (canvas.width - width)/2; // Asì irà centrado
        var imgStart = new Image();
        imgStart.src = 'sprites/enter.png';

    var draw = function(){
        if (Math.floor(tiempo /vel) === tiempo / vel && tiempo > 3)
        {ctx.drawImage(imgStart, x,y, width, height)} 
     }

     draw();
    }
;
  
  drawLogo();
  drawTrainer();
  dibujapk();
  drawStart();
    };
  

drawSelection = function(){
    selectionSound.play();
var imgRed = new Image();
imgRed.src ='sprites/red.jpg';
let redSwidth = 1280 / 2;
let redSheight = 720;
let redSx =0;
let redSy =0;
let redX =0;
let redY = 0.15 * h;
let redWidth = w * 0.45;
let redHeight = h * 0.75;
ctx.drawImage(imgRed,redSx,redSy,redSwidth,redSheight,redX,redY,redWidth,redHeight);

var imgBlue = new Image();
imgBlue.src = 'sprites/blue.jpg';
let blueSwidth = 1280 / 2;
let blueSheight = 720;
let blueSx = 1280 / 2;
let blueSy = 0;
let blueX = w * 0.55;
let blueY = 0.15 * h;
let blueWidth = w * 0.45;
let blueHeight = h * 0.75;
ctx.drawImage(imgBlue,blueSx,blueSy,blueSwidth,blueSheight,blueX,blueY,blueWidth,blueHeight);

var imgSelect = new Image ();
imgSelect.src = 'sprites/select.png';
let selectY = 0;
let selectX =0;
let selectWidth = w;
let selectHeight = h * 0.15;
ctx.drawImage(imgSelect,selectX,selectY,selectWidth,selectHeight);

var imgVersus = new Image();
imgVersus.src ='sprites/versus.png';
let versusX = w * 0.45;
let versusY = h * 0.15;
let versusW = w * 0.1;
let versusH = h * 0.75;
ctx.drawImage(imgVersus,versusX,versusY,versusW,versusH);

borraCuadros = function(n,k){ // 0 para el pokemon rojo, 1 para el pokemon azul;

    let sepX = 45/7/100 * w
    let sepY = 75/7/100 * h

     Fnx = function () {
     if (n == 1 || n == 4 || n == 7)   { return k*0.55*w + sepX}
     if (n == 2 || n == 5 || n == 8)   { return k*0.55*w + sepX * 3}
     if (n == 3 || n == 6 || n == 9)   { return k*0.55*w + sepX * 5}
    };
     Fny = function () {
        if (n == 1 || n == 2 || n == 3)   { return h * 0.15 + sepY}
        if (n == 4 || n == 5 || n == 6)   { return h * 0.15 + sepY * 3}
        if (n == 7 || n == 8 || n == 9)   { return h * 0.15 + sepY * 5 }
       };
    let width = sepX
    let height = sepY
    ctx.clearRect (Fnx(),Fny(),width,height)
};

for (let i = 1; i <= 9; i++) {
    borraCuadros(i,1);
};

for (let i = 1; i <= 9; i++) {
    borraCuadros(i,0);
};

drawPokeSelected = function (n,k){

    let sepX = 45/7/100 * w
    let sepY = 75/7/100 * h

     Fnx = function () {
     if (n == 1 || n == 4 || n == 7)   { return k*0.55*w + sepX}
     if (n == 2 || n == 5 || n == 8)   { return k*0.55*w + sepX * 3}
     if (n == 3 || n == 6 || n == 9)   { return k*0.55*w + sepX * 5}
    };
     Fny = function () {
        if (n == 1 || n == 2 || n == 3)   { return h * 0.15 + sepY}
        if (n == 4 || n == 5 || n == 6)   { return h * 0.15 + sepY * 3}
        if (n == 7 || n == 8 || n == 9)   { return h * 0.15 + sepY * 5 }
       };
    let width = sepX
    let height = sepY

    var pokeS = new Pokemon (n);
     if(k == 1 && pokemonBlue == n) {pokeS.drawAnimado(Fnx(),Fny(),width,height*0.8,1)}
     if(k == 0 && pokemonRed == n) {pokeS.drawAnimado(Fnx(),Fny(),width,height*0.8,1)}
     if (k == 1 && pokemonBlue !== n) {pokeS.draw(Fnx(),Fny(),width,height*0.8,1)}
     if (k == 0 && pokemonRed !== n) {pokeS.draw(Fnx(),Fny(),width,height*0.8,1)}
    }

for (let i = 1; i <= 9; i++) {
    drawPokeSelected(i,0);
};
for (let i = 1; i <= 9; i++) {
    drawPokeSelected(i,1);
};

drawNamePokeSelectScreen = function (n,k){

    let sepX = 45/7/100 * w
    let sepY = 75/7/100 * h

     Fnx = function () {
     if (n == 1 || n == 4 || n == 7)   { return k*0.55*w + sepX}
     if (n == 2 || n == 5 || n == 8)   { return k*0.55*w + sepX * 3}
     if (n == 3 || n == 6 || n == 9)   { return k*0.55*w + sepX * 5}
    };
     Fny = function () {
        if (n == 1 || n == 2 || n == 3)   { return h * 0.15 + sepY + 0.9 * sepY}
        if (n == 4 || n == 5 || n == 6)   { return h * 0.15 + sepY * 3 + 0.9 * sepY}
        if (n == 7 || n == 8 || n == 9)   { return h * 0.15 + sepY * 5 + 0.9 * sepY}
       };
    let width = sepX
    let height = sepY

    var pokeS = new Pokemon (n);
       pokeS.writeName(Fnx(),Fny(),"10px Georgia");
};

for (let i = 1; i <= 9; i++) {
    drawNamePokeSelectScreen(i,1);
};
for (let i = 1; i <= 9; i++) {
    drawNamePokeSelectScreen(i,0);
};

var pokeRed = new Pokemon(pokemonRed);
var pokeBlue = new Pokemon (pokemonBlue);

if(pokemonRed > 0 && pokemonRed <= 9){pokeRed.writeName( 0.5 * (0.45 * w - arrayPokemon[pokemonRed].Name.length/2 * 25)  , 0.95 * h, "25px Georgia")};
if(pokemonBlue > 0 && pokemonBlue <= 9){pokeBlue.writeName( 0.55 * w + 0.5 * (0.45 * w - arrayPokemon[pokemonBlue].Name.length/2 * 25)  , 0.95 * h, "25px Georgia")};

if(pokemonRed > 0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9)
{
    var drawStart = function(){
        let vel = 2;
        let tiempo = Math.floor(frames/fps);
        let escala = 0.10;
        let swidth = 901;
        let sheight = 105;
        let y = canvas.height * 0.95;
        let height = escala * sheight;
        let width = escala * swidth;
        let x = (canvas.width - width)/2; // Asì irà centrado
        var imgStart = new Image();
        imgStart.src = 'sprites/enter.png';

    var draw = function(){
        if (Math.floor(tiempo /vel) === tiempo / vel )
        {ctx.drawImage(imgStart, x,y, width, height)} 
     }

     draw();
    }
    drawStart();
}

var player = function(){
    if(players == 1){return "Blue: PC"}
    if(players == 2){return "Blue: 2P"}
};
var canvasPlayer = document.getElementById('canvas');
var ctxPlayer = canvasPlayer.getContext('2d'); 
ctxPlayer.font = "20px Georgia";
ctxPlayer.fillStyle = "black";
ctxPlayer.fillText(player(),w*0.75,h* 0.20)

ctxPlayer.strokeRect(w*0.75, h*0.16, w*0.10,(30/576) * h)

}

drawTranceUno = function(){ // En este dibujo será donde reinciemos el juego
    audioBattle.currentTime = 0;
    audioBattle.pause();
    pokemonRed = 0;
    pokemonBlue = 0;
    dmgBlueI = 0;
    dmgBlueF = 0;
    dmgRedI = 0;
    dmgRedF = 0
    turno = 0;
    hpRed =0;
    hpBlue =0;
    subPantalla = 0;
    ctx.fillStyle = "black";
    let v = 50;
    let swidth = 2286;
    let sheight = 106;
    let y = canvas.height * 0.5;
    let width = canvas.width * 0.5;
    let x = (canvas.width - width)/2;
    let height = canvas.height * sheight / (1 * canvas.height)
    widthSelect = function(){
        if (frames*v <= swidth){return frames*v}
        if (frames*v > swidth){return swidth}
    }
     var imgSelect = new Image();
    imgSelect.src = 'sprites/select.png';
    ctx.drawImage(imgSelect,0,0,widthSelect(),height,x,y,width,height);

}

drawTranceDos = function(){ 
    selectionSound.currentTime =0;
    selectionSound.pause();
    audioBattle.play();
    let contador = 3;
    let v = 20;
    let swidth =989 ;
    let sheight = 919 ;
    let y = canvas.height * 0.25;
    let width = canvas.width * 0.5;
    let x = (canvas.width - width)/2;
    let height = canvas.height * sheight / (1 * canvas.height)
    widthSelect = function(){
        if (frames*v <= swidth){return frames*v}
        if (frames*v > swidth){return swidth}
    }
     var imgSelect = new Image();
    imgSelect.src = 'sprites/ready.png';
    ctx.drawImage(imgSelect,0,0,widthSelect(),height,x,y,width,height);

    if (frames >= fps*2 && frames < fps * 3) {contador = 2};
    if (frames >= fps*3 && frames < fps * 4) {contador = 1};
    if (frames >= fps*4 && frames < fps * 5) {contador = 0};
   
    if (frames*v > swidth && frames >= fps){
        ctx.font = "50px Georgia";
        ctx.fillText (contador,0.6 * h,0.5 * w - 25)}
    
    if (frames == fps * 5) {pantalla = "battle" ; frames = 0};

}

drawBattle = function(){
    turf = new Terreno(terreno);
    turf.draw();
    pokeRed = new Pokemon (pokemonRed,0);
    pokeBlue = new Pokemon (pokemonBlue,1);
    blueBarra = new Barra (0.1,h*0.005,pokeBlue);
    redBarra = new Barra (w*0.55,h*0.63,pokeRed);
    if (Math.floor(frames * fps) % 3 == 0) {audioBattle.play()};

    dialog = new Image();
    dialog.src ="sprites/dialog.png";
    ctx.drawImage(dialog,0,h*0.8,w,h*0.2);

    ;

    if (frames >= fps && frames < fps * 4 && turno == 0 && subPantalla ==0){pokeRed.drawAnimado (0,h * 0.4, w * 0.5, h * 0.39,2);}
    if (frames >= fps * 4 && turno == 0 && subPantalla ==0){pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);redBarra.drawStatic()};
    if (frames >= fps * 4 && frames < fps * 7 && turno == 0 && subPantalla == 0){pokeBlue.drawAnimado (0.5*w,0.2*h, w * 0.5, h * 0.3,1)}
    if (frames >= fps * 7 && turno == 0 && subPantalla == 0){pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1); blueBarra.drawStatic()};
  
    if (frames > 0*fps && frames <= 4*fps && subPantalla == 0){writeDialog ("Lets go "+ arrayPokemon[pokemonRed].Name + ", I trust you!!!")};
    if (frames > 4*fps && frames <= 7*fps && (subPantalla == 0)){writeDialog ("Blue chooses "+ arrayPokemon[pokemonBlue].Name + "!!!")}
    if (frames >= 7*fps && subPantalla == 0 ) {subPantalla = 1};

    if (subPantalla == 1 && players == 1){pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1); blueBarra.drawStatic("E");
        pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);redBarra.drawStatic("E");
        var canvasSelectAtaque = document.getElementById('canvas');
        var ctxSelectAtaque = canvasSelectAtaque.getContext('2d');
        ctxSelectAtaque.fillStyle = "black";
        ctxSelectAtaque.font ="12px Georgia"
        //ctxSelectAtaque.fillText("Select you Atack:",w*0.1,h*0.83);
        ctxSelectAtaque.fillText("Q - " + pokeRed.move1,w*0.1,h*0.85);
        ctxSelectAtaque.fillText("W - " + pokeRed.move2,w*0.1,h*0.88);
        ctxSelectAtaque.fillText("E - " + pokeRed.move3,w*0.1,h*0.91);
        ctxSelectAtaque.fillText("R - " + pokeRed.move4,w*0.1,h*0.94);
        ctxSelectAtaque.fillText("T - Give up on Battle",w*0.1,h*0.97);
        var canvasSelectAtaqueHP = document.getElementById('canvas');
        var ctxSelectAtaqueHP = canvasSelectAtaqueHP.getContext('2d');
        ctxSelectAtaqueHP.fillStyle = "black";
        ctxSelectAtaqueHP.font ="35px Georgia"
        ctxSelectAtaqueHP.fillText("HP: " + pokeRed.hp +"/"+ redBarra.maxHP,w*0.5,h*0.93);
    } ;

    if (subPantalla == 1 && players == 2){pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1); blueBarra.drawStatic("E");
    pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);redBarra.drawStatic("E");
    var canvasSelectAtaque = document.getElementById('canvas');
    var ctxSelectAtaque = canvasSelectAtaque.getContext('2d');
    ctxSelectAtaque.fillStyle = "black";
    ctxSelectAtaque.font ="12px Georgia"
    //ctxSelectAtaque.fillText("Select you Atack:",w*0.1,h*0.83);
    ctxSelectAtaque.fillText("Q - " + pokeRed.move1,w*0.1,h*0.85);
    ctxSelectAtaque.fillText("W - " + pokeRed.move2,w*0.1,h*0.88);
    ctxSelectAtaque.fillText("E - " + pokeRed.move3,w*0.1,h*0.91);
    ctxSelectAtaque.fillText("R - " + pokeRed.move4,w*0.1,h*0.94);
    var canvasSelectAtaqueHP = document.getElementById('canvas');
    var ctxSelectAtaqueHP = canvasSelectAtaqueHP.getContext('2d');
    ctxSelectAtaqueHP.fillStyle = "black";
    ctxSelectAtaqueHP.font ="35px Georgia"
    ctxSelectAtaqueHP.fillText("Red HP: " + pokeRed.hp +"/"+ redBarra.maxHP,w*0.5,h*0.93);
} ;

if (subPantalla == 1.5 && players == 2){pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1); blueBarra.drawStatic("E");
pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);redBarra.drawStatic("E");
var canvasSelectAtaque = document.getElementById('canvas');
var ctxSelectAtaque = canvasSelectAtaque.getContext('2d');
ctxSelectAtaque.fillStyle = "black";
ctxSelectAtaque.font ="12px Georgia"
//ctxSelectAtaque.fillText("Select you Atack:",w*0.1,h*0.83);
ctxSelectAtaque.fillText("Q - " + pokeBlue.move1,w*0.1,h*0.85);
ctxSelectAtaque.fillText("W - " + pokeBlue.move2,w*0.1,h*0.88);
ctxSelectAtaque.fillText("E - " + pokeBlue.move3,w*0.1,h*0.91);
ctxSelectAtaque.fillText("R - " + pokeBlue.move4,w*0.1,h*0.94);
var canvasSelectAtaqueHP = document.getElementById('canvas');
var ctxSelectAtaqueHP = canvasSelectAtaqueHP.getContext('2d');
ctxSelectAtaqueHP.fillStyle = "black";
ctxSelectAtaqueHP.font ="35px Georgia"
ctxSelectAtaqueHP.fillText(" Blue HP: " + pokeBlue.hp +"/"+ blueBarra.maxHP,w*0.5,h*0.93);
} ;

    if (subPantalla == 2 && pokeRed.speed >= pokeBlue.speed) {
    if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeRed.drawAnimado (0,h * 0.4, w * 0.5, h * 0.39,2);}
    if (frames >= fps * 4 && turno >=1){pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);};
    redBarra.drawStatic("E");
    blueBarra.drawStatic("E");
    pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1);
    var atq = function (){
        if (movtoRed == 1) {return pokeRed.move1}
        if (movtoRed == 2) {return pokeRed.move2}
        if (movtoRed == 3) {return pokeRed.move3}
        if (movtoRed == 4) {return pokeRed.move4}
    }
    
    pokeRed.Move = movtoRed;
    writeDialog(pokeRed.name + " used " + atq() )

    if (frames >= fps * 2 && turno >= 1 && subPantalla == 2){drawContinue()}
    
    }
    if (subPantalla == 2 && pokeRed.speed < pokeBlue.speed) {
        if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeBlue.drawAnimado (0.5*w,0.2*h, w * 0.5, h * 0.3,1);}
        if (frames >= fps * 4 && turno >=1){pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);};
        blueBarra.drawStatic("E");
        redBarra.drawStatic("E");
        pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
        var atq = function (){
            if (movtoBlue == 1) {return pokeBlue.move1}
            if (movtoBlue == 2) {return pokeBlue.move2}
            if (movtoBlue == 3) {return pokeBlue.move3}
            if (movtoBlue == 4) {return pokeBlue.move4}
        }
        
        pokeBlue.Move = movtoBlue;
        writeDialog(pokeBlue.name + " used " + atq() )
    
        if (frames >= fps * 2 && turno >= 1 && subPantalla == 2){drawContinue()}
        
        }
        // esta es la pantalla 3:
        if (subPantalla == 3 && pokeRed.speed >= pokeBlue.speed) {
            var msj = function(){
                if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 0){return "It didn`t worked"};
                if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 0.25){return "It was not effective at all"};
                if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 0.5){return "It was not effective"};
                if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 1){return "It caused a normal damage"};
                if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 2){return "It was very effective"};
                if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 3){return "It was its best move"};
            }

            writeDialog(msj());

            pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
            pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);
            blueBarra.drawStatic();
            redBarra.drawStatic("E");
            drawContinue();
        };

        if (subPantalla == 3 && pokeRed.speed < pokeBlue.speed) {
            var msj = function(){
                if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 0){return "It didn`t worked"};
                if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 0.25){return "It was not effective at all"};
                if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 0.5){return "It was not effective"};
                if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 1){return "It caused a normal damage"};
                if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 2){return "It was very effective"};
                if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 3){return "It was its best move"};
            }

           

            pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
            pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);
            blueBarra.drawStatic("E");
            redBarra.drawStatic();
            writeDialog(msj());
            drawContinue();
        };
        // Esta es la pantalla 4

        if (subPantalla == 4 && pokeRed.speed < pokeBlue.speed) {
            if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeRed.drawAnimado (0,h * 0.4, w * 0.5, h * 0.39,2);}
            if (frames >= fps * 4 && turno >=1){pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);};
            redBarra.drawStatic("E");
            blueBarra.drawStatic();
            pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1);
            var atq = function (){
                if (movtoRed == 1) {return pokeRed.move1}
                if (movtoRed == 2) {return pokeRed.move2}
                if (movtoRed == 3) {return pokeRed.move3}
                if (movtoRed == 4) {return pokeRed.move4}
            }
            
            pokeRed.Move = movtoRed;
            writeDialog(pokeRed.name + " used " + atq() )
        
            if (frames >= fps * 4 && turno >= 1 && subPantalla == 4){drawContinue()}
            
            }
            if (subPantalla == 4 && pokeRed.speed >= pokeBlue.speed) {
            if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeBlue.drawAnimado (0.5*w,0.2*h, w * 0.5, h * 0.3,1);}
            if (frames >= fps * 4 && turno >=1){pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);};
            blueBarra.drawStatic("E");
            redBarra.drawStatic();
            pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
            var atq = function (){
                if (movtoBlue == 1) {return pokeBlue.move1}
                if (movtoBlue == 2) {return pokeBlue.move2}
                if (movtoBlue == 3) {return pokeBlue.move3}
                if (movtoBlue == 4) {return pokeBlue.move4}
                }
                
            pokeBlue.Move = movtoBlue;
            writeDialog(pokeBlue.name + " used " + atq() )
            
            if (frames >= fps * 4 && turno >= 1 && subPantalla == 4){drawContinue()}
                
            };

            // la 5 Esta es una copia de la subpatalla 2:



    if (subPantalla == 5 && pokeRed.speed < pokeBlue.speed) {
        if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeRed.drawAnimado (0,h * 0.4, w * 0.5, h * 0.39,2);}
        if (frames >= fps * 4 && turno >=1){pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);};
        redBarra.drawStatic();
        blueBarra.drawStatic("E");
        pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1);
        var atq = function (){
            if (movtoRed == 1) {return pokeRed.move1}
            if (movtoRed == 2) {return pokeRed.move2}
            if (movtoRed == 3) {return pokeRed.move3}
            if (movtoRed == 4) {return pokeRed.move4}
        }
        
        pokeRed.Move = movtoRed;
        writeDialog(pokeRed.name + " used " + atq() )
    
        if (frames >= fps * 2 && turno >= 1 && subPantalla == 2){drawContinue()}
        
        }
        if (subPantalla == 5 && pokeRed.speed >= pokeBlue.speed) {
            if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeBlue.drawAnimado (0.5*w,0.2*h, w * 0.5, h * 0.3,1);}
            if (frames >= fps * 4 && turno >=1){pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);};
            blueBarra.drawStatic("E");
            redBarra.drawStatic();
            pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
            var atq = function (){
                if (movtoBlue == 1) {return pokeBlue.move1}
                if (movtoBlue == 2) {return pokeBlue.move2}
                if (movtoBlue == 3) {return pokeBlue.move3}
                if (movtoBlue == 4) {return pokeBlue.move4}
            }
            
            pokeBlue.Move = movtoBlue;
            writeDialog(pokeBlue.name + " used " + atq() )
        
            if (frames >= fps * 2 && turno >= 1 && subPantalla == 2){drawContinue()}
            
            }

            if (frames >= fps * 3 && turno >= 1 && subPantalla == 5){drawContinue()}
             
// Esta es una copia de la 4:

if (subPantalla == 6 && pokeRed.speed < pokeBlue.speed) {
    if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeRed.drawAnimado (0,h * 0.4, w * 0.5, h * 0.39,2);}
    if (frames >= fps * 4 && turno >=1){pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);};
    redBarra.drawStatic("E");
    blueBarra.drawStatic("E");
    pokeBlue.draw(0.5*w,0.2* h, w * 0.5, h * 0.3,1);
    var atq = function (){
        if (movtoRed == 1) {return pokeRed.move1}
        if (movtoRed == 2) {return pokeRed.move2}
        if (movtoRed == 3) {return pokeRed.move3}
        if (movtoRed == 4) {return pokeRed.move4}
    }
    
    pokeRed.Move = movtoRed;
    writeDialog(pokeRed.name + " used " + atq() )

    //if (frames >= fps * 4 && turno >= 1 && subPantalla == 4){drawContinue()}
    
    }
    if (subPantalla == 6 && pokeRed.speed >= pokeBlue.speed) {
    if (frames >= 0 && frames < fps * 4 && turno >=1 ){pokeBlue.drawAnimado (0.5*w,0.2*h, w * 0.5, h * 0.3,1);}
    if (frames >= fps * 4 && turno >=1){pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);};
    blueBarra.drawStatic("E");
    redBarra.drawStatic("E");
    pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
    var atq = function (){
        if (movtoBlue == 1) {return pokeBlue.move1}
        if (movtoBlue == 2) {return pokeBlue.move2}
        if (movtoBlue == 3) {return pokeBlue.move3}
        if (movtoBlue == 4) {return pokeBlue.move4}
        }
        
    pokeBlue.Move = movtoBlue;
    writeDialog(pokeBlue.name + " used " + atq() )
    
    if (frames >= fps * 4 && turno >= 1 && subPantalla == 6){drawContinue()}
        
    };
 // la pantalla 7 es similar a la pantalla 3:

 if (subPantalla == 7 && pokeRed.speed < pokeBlue.speed) {
    var msj = function(){
        if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 0){return "It didn`t worked"};
        if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 0.25){return "It was not effective at all"};
        if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 0.5){return "It was not effective"};
        if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 1){return "It caused a normal damage"};
        if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 2){return "It was very effective"};
        if (efectividad(pokeRed.num,movtoRed,pokeBlue.num) == 3){return "It was its best move"};

    }


    writeDialog(msj());
    pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
    pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1);
    blueBarra.drawStatic();
    redBarra.drawStatic("E");
    drawContinue();
};

if (subPantalla == 7 && pokeRed.speed >= pokeBlue.speed) {
    var msj = function(){
        if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 0){return "It didn`t worked"};
        if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 0.25){return "It was not effective at all"};
        if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 0.5){return "It was not effective"};
        if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 1){return "It caused a normal damage"};
        if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 2){return "It was very effective"};
        if (efectividad(pokeBlue.num,movtoBlue,pokeRed.num) == 3){return "It was its best move"};

    };
    blueBarra.drawStatic("E");
    redBarra.drawStatic();
    pokeRed.draw(0,h * 0.4, w * 0.5, h * 0.39,3);
    pokeBlue.draw(0.5*w,0.2*h, w * 0.5, h * 0.3,1); 
    writeDialog(msj());
    drawContinue();
};

if (subPantalla == 9){
     gameOver = function(resultado){ // Resultado won o lose
        var res = resultado;

        var x = w * 0.2;
        var y = h * 0.2;
        var width = w * 0.6;
        var height = h * 0.4;

        fnSx = function(){
             if (res == "win"){return 0}
             if (res == "lose") {return 529/2}
        };

        ctx.clearRect(w*0.1,h*0.05,w*0.175,h*0.07);
        ctx.fillText("Turn: "+ turno,w*0.1,h*0.1)

        var Sx = fnSx();
        var Sy = 0;
        var swidth = 529 / 2;
        var sheight = 259;

        var img = new Image();
        img.src = "sprites/gameover.jpg";

        ctx.drawImage(img,Sx,Sy,swidth,sheight,x,y,width,height)

    };

    if(pokeRed.hp <= 0 || hpRed <= 0){gameOver("lose"); writeDialog("Red Loses... PRESS SHIFT TO RESTART")};
    if(pokeBlue.hp <= 0 || hpBlue <= 0){gameOver("win"); writeDialog("Red Won... PRESS SHIFT TO RESTART")};

};

};
