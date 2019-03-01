
// Funcion para nombrar a un pokemon por su tipo:

function NomTipo (num_tipo) {
  return arrayType[num_tipo].TypeAtk
};

function NomAtack (num_atk) {
  return arrayAtack[num_atk].Name
};

// Función STAB :

function stab (pk,at){ // ID de pokemon, ID de ataque de pokemon, 1, 2 3 ó 4

  var atq = function (){ 
    if (at == 1) {return arrayPokemon[pk].Move1}
    if (at == 2) {return arrayPokemon[pk].Move2}
    if (at == 3) {return arrayPokemon[pk].Move3}
    if (at == 4) {return arrayPokemon[pk].Move4}
  };
  var tipo_atk  = arrayAtack[atq()].Type;
  var tipo1 = arrayPokemon[pk].Type1;
  var tipo2 = arrayPokemon[pk].Type2;
  if (tipo1 == tipo_atk || tipo2 == tipo_atk) {return 1.5} else {return 1}

};

// Función Efectividad:

function pivot_tipos (m,n){
  if (n === 0) {return arrayType[m].NoType;}
  if (n === 1) {return arrayType[m].Normal;} 
  if (n === 2) {return arrayType[m].Fire;}
  if (n === 3) {return arrayType[m].Water;}
  if (n === 4) {return arrayType[m].Electric;}
  if (n === 5) {return arrayType[m].Grass;}
  if (n === 6) {return arrayType[m].Ice;}
  if (n === 7) {return arrayType[m].Fight;}
  if (n === 8) {return arrayType[m].Poison;}
  if (n === 9) {return  arrayType[m].Ground;}
  if (n === 10) {return arrayType[m].Flying;}
  if (n === 11) {return arrayType[m].Psyquic;}
  if (n === 12) {return arrayType[m].Bug;}
  if (n === 13) {return arrayType[m].Rock;}
  if (n === 14) {return arrayType[m].Ghost;}
  if (n === 15) {return arrayType[m].Dragon;}
  if (n === 16) {return arrayType[m].Dark;}
  if (n === 17) {return arrayType[m].Steel;}
  if (n === 18) {return arrayType[m].Fairy;}
  };

  function efectividad (pk,at,enemy) { //pokemon que ataca, número de ataque y enemigo que recibe

    var atq = function (){ 
      if (at == 1) {return arrayPokemon[pk].Move1}
      if (at == 2) {return arrayPokemon[pk].Move2}
      if (at == 3) {return arrayPokemon[pk].Move3}
      if (at == 4) {return arrayPokemon[pk].Move4}
    };
    var tipo_atk  = arrayAtack[atq()].Type;
    var tipo1 = arrayPokemon[enemy].Type1;
    var tipo2 = arrayPokemon[enemy].Type2;
    
    if (pivot_tipos (tipo_atk,tipo1)=== 1 && pivot_tipos (tipo_atk,tipo2) === 1
    ) {return 1;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 1 && pivot_tipos (tipo_atk,tipo2) === 2
    ) {return 2;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 2 && pivot_tipos (tipo_atk,tipo2) === 1
    ) {return 2;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 2 && pivot_tipos (tipo_atk,tipo2) === 2
    ) {return 3;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 1 && pivot_tipos (tipo_atk,tipo2) === 0.5
    ) {return 0.5;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 0.5 && pivot_tipos (tipo_atk,tipo2) === 1
    ) {return 0.5;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 2 && pivot_tipos (tipo_atk,tipo2) === 0.5
    ) {return 1;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 0.5 && pivot_tipos (tipo_atk,tipo2) === 2
    ) {return 1;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 0.5 && pivot_tipos (tipo_atk,tipo2) === 0.5
    ) {return 0.25;}
    
    else if (
    pivot_tipos (tipo_atk,tipo1)=== 0 || pivot_tipos (tipo_atk,tipo2) === 0
    ) {return 0;}
    };
    


// Funciòn de Daño: // Daño = 0.01 * Satb * Efectividad * Random (85 y 100) *((0.2 * N +1)* Ataque * magnitud mmovimiento / (25* Defensa) + 2)

function damage (pk,at,enemy) {

  var atq = function (){ 
    if (at == 1) {return arrayPokemon[pk].Move1}
    if (at == 2) {return arrayPokemon[pk].Move2}
    if (at == 3) {return arrayPokemon[pk].Move3}
    if (at == 4) {return arrayPokemon[pk].Move4}
  };

var B = stab(pk,at);
var E = efectividad (pk,at,enemy);
var V = Math.floor((Math.random() * (100 - 85) + 85)) ;
var N = 25;
function devuelveDefensas (){
if ( arrayAtack[atq()].Base == "sp" ){return arrayPokemon[enemy].SpDef};
if ( arrayAtack[atq()].Base == "atk" ){return arrayPokemon[enemy].Def};
};
function devuelveAtaque (){
  if ( arrayAtack[atq()].Base == "sp" ){return arrayPokemon[pk].SpAtk};
  if ( arrayAtack[atq()].Base == "atk" ){return arrayPokemon[pk].Atk};
  };  
var A = devuelveAtaque();
var P = arrayAtack[atq()].Power;
var D = devuelveDefensas();

return Math.floor(0.01 * B * E * V * (((0.2 * N +1)*A*P/(25*D))+2))

}
