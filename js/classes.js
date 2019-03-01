var fps = 60;
var ips = 0.3; // Serà el nùmero de veces que se mueva tu pokemon por segundo!!!
var frames = 0;
var pantalla = 'inicio';
var pokemonRed = 0;
var pokemonBlue = 0;
var terreno = 0;
var dmgBlueI = 30;
var dmgBlueF = 0;
var dmgRedI = 0;
var dmgRedF = 0;
var hpRed = 0;
var hpBlue = 0;

// Definiremos nuestras Clases:

class Pokemon {
  constructor(num,parametro){ // el parámetro me indicará si es de Red 0 o de Blue 1
    this.num = num;
    this.parametro = parametro;
    this.name = arrayPokemon[num].Name;
    this.type1 = NomTipo(arrayPokemon[num].Type1);
    this.type2 = NomTipo(arrayPokemon[num].Type2);
    this.move1 = NomAtack(arrayPokemon[num].Move1);
    this.move2 = NomAtack(arrayPokemon[num].Move2);
    this.move3 = NomAtack(arrayPokemon[num].Move3);
    this.move4 = NomAtack(arrayPokemon[num].Move4);
    this.MaxHP = arrayPokemon[num].Hp; 
    this.calcDmg = function(){
      if (this.parametro == 0){return dmgRedF};
      if (this.parametro == 1){return dmgBlueF};
    };
    this.calcHpi = function(){
      if (this.parametro == 0){return dmgRedI};
      if (this.parametro == 1){return dmgBlueI};
    };
    
    this.hpACT = function(){
      if (this.parametro == 0){return hpRed};
      if (this.parametro == 1){return hpBlue};
    };
    this.f = this.hpACT();
    this.hpIni = this.MaxHP - this.calcHpi();
    this.dmg = this.calcDmg();
    this.actHP = function(){
      var hpi = this.hpIni;
      var hpf = this.MaxHP - this.dmg;
      var g = this.f
 
       var fnhp = function(p){
     var h = p;
     if (hpi - frames > hpf && g== hpf){return hpi-frames};
     if (hpi - frames <= hpf){return hpf};
     if ( g == hpf){return hpf}
        };
        if (fnhp()> 0) {return fnhp()};
        if (fnhp() <= 0) {return 0};
        //if (h == "E"){return hpf}
    };
    this.hp = this.actHP();
    this.speed = arrayPokemon[num].Spd;
    this.specialAtack = arrayPokemon[num].SpAtk;
    this.atack = arrayPokemon[num].Atk;
    this.specialDefense = arrayPokemon[num].SpDef;
    this.defense = arrayPokemon[num].Def;
    // Las siguientes funciones seran para ubicar al pokemon dentro del sprite:
    this.sx1 = arrayPokeFrame[num].CuadroUnoX; // ok
    this.sy1 = arrayPokeFrame[num].CuadroUnoY;
    this.sx2 = arrayPokeFrame[num].CuadroDosX;
    this.sy2 = this.sy1
    this.sx3 = arrayPokeFrame[num].EspaldaUnoX;
    this.sy3 = arrayPokeFrame[num].EspaldaUnoY;
    this.swidth1 = this.sx2;
    this.sheight1 = arrayPokeFrame[num].CuadroDosY;
    this.swidth2 = this.sx3 - this.swidth1;
    this.sheight2 = arrayPokeFrame[num].CuadroDosY;
    this.swidth3 = arrayPokeFrame[num].EspaldaDosX;
    this.sheight3 = arrayPokeFrame[num].EspaldaDosY;
    this.Move = 0;
  };
  // Este serà el gran dibujador de pokemon!!! 
  draw(x,y,width,height,silueta){
    this.img = new Image;
    this.img.src = 'sprites/pokemon.png';
    this.sx = function(){
      if(silueta == 1) {return this.sx1}
      if(silueta == 2) {return this.sx2}
      if(silueta == 3) {return this.sx3}
    }; // ok
    this.sy = function(){
      if(silueta == 1) {return this.sy1}
      if(silueta == 2) {return this.sy2}
      if(silueta == 3) {return this.sy3}
    };
    this.swidth = function(){
      if(silueta == 1) {return this.swidth1}
      if(silueta == 2) {return this.swidth2}
      if(silueta == 3) {return this.swidth3 - arrayPokeFrame[this.num-1].EspaldaUnoX}
    };
    this.sheight = function(){
      if(silueta == 1) {return this.sheight1 - arrayPokeFrame[this.num-1].CuadroDosY}
      if(silueta == 2) {return this.sheight2 - arrayPokeFrame[this.num-1].CuadroDosY}
      if(silueta == 3) {return this.sheight3 - arrayPokeFrame[this.num-1].EspaldaDosY}
    }; 
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.silueta = silueta;
    ctx.drawImage(this.img, this.sx(), this.sy(),this.swidth(),this.sheight(),this.x,this.y,this.width,this.height)

    //Ojo, cuando dibujes, haz proporcional al width y al height del pokemon, te voy a madrear si salen deformes!!!
  }
  // hay que tener cuidado con el tiempo que se está animando, si no se delimita, nunca se dejará de mover!!!
  drawAnimado (xA,yA,widthA,heightA,posicionA){ // la posicion solo podrà ser 1 ó 2, 1 para pokemon de frente y 2 para el pokemon de espaldas
    var pasos = 2; // la cantidad de veces que se moverá el pokemon por segundo
    var cuadro = frames;  // me va a devolver el frame relativo desde el momento en que se empieza a dibujar
    cuadro = cuadro +1;
    const vel = 8;
    var cuadroEntero = Math.floor(cuadro/vel); 
    this.xA = xA;
    this.yA = yA;
    this.widthA = widthA;
    this.heightA = heightA;
    this.posicionA = posicionA;
    this.xFinal = function(){ // esta será la silueta a mandar llamar en la función de dibujo cuando vemos al pokemon de frente
      if (this.posicionA == 2 && Math.floor(cuadroEntero/vel) == cuadroEntero/vel ){return this.xA + canvas.width / 20}
      if (this.posicionA == 2 && Math.floor(cuadroEntero/vel) !== cuadroEntero/vel ){return this.xA}
      if (this.posicionA == 1) {return this.xA}
    } 
    this.dibujo = function(){ // esta será la silueta a mandar llamar en la función de dibujo cuando vemos al pokemon de frente
      if (this.posicionA == 1 && Math.floor(cuadroEntero/vel) == cuadroEntero/vel ) {return 2}
      if (this.posicionA == 1 && Math.floor(cuadroEntero/vel) !== cuadroEntero/vel) {return 1}
      if (this.posicionA == 2) {return 3}
    } 

    this.draw(this.xFinal(),this.yA,this.widthA,this.heightA, this.dibujo())
    }

    writeName (xW,yW,font){
      this.xW = xW;
      this.yW = yW;
      this.font = font;
    ctx.font = this.font;
    ctx.fillText (this.name,this.xW,this.yW)
    };

};

class Terreno  {
  constructor (num){
    this.num = num;
    this.width = w;
    this.height = 0.8 * h;
    this.x = 0;
    this.y = 0;
    this.img = new Image();
    this.img.src = 'sprites/battlebackground.png';
    this.swidth = 775/3;
    this.sheight = 585/4;
    this.sx = function (){
      if (this.num == 1 || this.num == 4 || this.num == 7 || this.num == 10){return 0}
      if (this.num == 2 || this.num == 5 || this.num == 8 || this.num == 11){return this.swidth}
      if (this.num == 3 || this.num == 6 || this.num == 9 ){return this.swidth * 2}
    }
    this.sy = function (){
      if (this.num == 1 || this.num == 2 || this.num == 3){return 0}
      if (this.num == 4 || this.num == 5 || this.num == 6){return this.sheight}
      if (this.num == 7 || this.num == 8 || this.num == 9){return this.sheight * 2}
      if (this.num == 10|| this.num == 11){return this.sheight * 3}
    }
  }

  draw() {
    ctx.drawImage(this.img, this.sx(), this.sy(),this.swidth,this.sheight,this.x,this.y,this.width,this.height)
  }

}

class Barra {

  constructor(x,y,Item){
    this.x = x;
    this.y = y;
    this.width = w * 0.45
    this.height = h * 0.2
    this.swidth = 500;
    this.sheight = 210;
    this.img = new Image();
    this.img.src = 'sprites/bar.png';
    this.nro = Item.num;
    this.hpEstatic = Item.f;
    this.hp = Item.hp;
    this.maxHP = Item.MaxHP;
    this.x1Barra =  this.x + (150 * (this.width) /this.swidth)  
    this.y1Barra =  this.y + (61 * this.height / this.sheight)
    this.x2Barra =  this.x + this.width - (52 * (this.width) /this.swidth) 
    this.y2Barra =  this.y + this.height - (72 * this.height / this.sheight)
    
  }
drawStatic(b){
  let a = b;
    this.porcent = function (){if(this.hp/this.maxHP >= 1) {return 1}
                              if(this.hp/this.maxHP < 1) {return this.hp/this.maxHP}
                              if (this.hp/this.maxHP < 0 ){return 0}};
    this.estilo = function(){
    if (this.hpEstatic/this.maxHP<= 1.01 && this.hpEstatic/this.maxHP >= 0.5 && a == "E") {return "green"}
    if (this.hpEstatic/this.maxHP< 0.5 && this.hpEstatic/this.maxHP >= 0.25 && a == "E") {return "yellow"}
    if (this.hpEstatic/this.maxHP < 0.25 && this.hpEstatic/this.maxHP >= 0 && a == "E") {return "red"}
    if (this.porcent()<= 1.01 && this.porcent() >= 0.5 && a !== "E") {return "green"}
    if (this.porcent()< 0.5 && this.porcent() >= 0.25 && a !== "E" ) {return "yellow"}
    if (this.porcent() < 0.25 && this.porcent() >= 0 && a !== "E" ) {return "red"}
    };

    var canvasHP = document.getElementById('canvas');
    var ctxHP = canvasHP.getContext('2d');
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);  
    ctxHP.fillStyle = this.estilo();
    
    if (a !== "E"){ctxHP.fillRect (this.x1Barra,this.y1Barra,(this.x2Barra - this.x1Barra ) * this.porcent(),this.y2Barra-this.y1Barra);}
    if (a == "E" && this.hpEstatic > 0){ctxHP.fillRect (this.x1Barra,this.y1Barra,(this.x2Barra - this.x1Barra ) * this.hpEstatic/this.maxHP,this.y2Barra-this.y1Barra);}
    if (a == "E" && this.hpEstatic <= 0){ctxHP.fillRect (this.x1Barra,this.y1Barra,(this.x2Barra - this.x1Barra ) * 0,this.y2Barra-this.y1Barra);}
  };

}
