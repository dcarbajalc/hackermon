addEventListener('keydown', function(event){
	if(event.keyCode === 13 && pantalla == "inicio" && frames >= 180){
			
			pantalla ="tranceUno"
			frames = 0;
	};

	if(event.keyCode === 13 && pantalla == "seleccion" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9){
	
		pantalla ="tranceDos"
		frames = 0;
};

// el listener cuando seleccionas ataque:

if(event.keyCode === 81 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9  && subPantalla == 1 ){
	frames = 0; 
	movtoRed = 1; turno ++; subPantalla = 2; movtoBlue = Math.floor((Math.random() * 4) + 1 )
	};	

if(event.keyCode === 87 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9  && subPantalla == 1 ){
	frames = 0; 
	movtoRed = 2; turno ++; subPantalla = 2; movtoBlue = Math.floor((Math.random() * 4) + 1 )
	};
	
if(event.keyCode === 69 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9  && subPantalla == 1 ){
	frames = 0; 
	movtoRed = 3; turno ++; subPantalla = 2; movtoBlue = Math.floor((Math.random() * 4) + 1 )
	};	
	
if(event.keyCode === 82 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9  && subPantalla == 1 ){
	frames = 0; 
	movtoRed = 4; turno ++; subPantalla = 2; movtoBlue = Math.floor((Math.random() * 4) + 1 )
	};	
if(event.keyCode === 84 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9  && subPantalla == 1 ){
	frames = 0;
	hpRed = 0; 
	movtoRed = 4; subPantalla = 9; movtoBlue = Math.floor((Math.random() * 4) + 1 )
	};	
	

	// El listener activo durante la subPantalla 2:

	if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 2
		&& pokeRed.speed >= pokeBlue.speed){
		frames = 0;
			var danio = damage(pokeRed.num,movtoRed,pokeBlue.num)
			dmgBlueI = dmgBlueF;
			dmgBlueF = dmgBlueF + danio;
			subPantalla = 3;
			hpBlue = hpBlue-danio;
		
	};

	if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 2
	&& pokeRed.speed < pokeBlue.speed){
	frames = 0;
		var danio = damage(pokeBlue.num,movtoBlue,pokeRed.num);
		dmgRedI = dmgRedF;
		dmgRedF = dmgRedF + danio
		hpRed = hpRed - danio;
		subPantalla = 3;		
};

// el listener activo solo durante la pantalla 3:
if(event.keyCode === 13 && pantalla == "battle" && subPantalla == 3 && frames >= fps * 2){
if(hpRed <= 0 || hpBlue <= 0){subPantalla = 9;};
if(hpBlue > 0 && hpRed > 0){subPantalla = 4;}
frames = 0;
};
// el listener que hará saltar de la pantalla 4 a la 5:


if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 4
&& pokeRed.speed < pokeBlue.speed){
frames = 0;
	subPantalla = 5;
};

if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 4
&& pokeRed.speed >= pokeBlue.speed){
frames = 0;
	var danio = damage(pokeBlue.num,movtoBlue,pokeRed.num);
	subPantalla = 5;
	
};

// El listener que saltará de la pantalla 5 a la pantalla 6:
if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 5
&& pokeRed.speed < pokeBlue.speed){
frames = 0;
	subPantalla = 6;
};

if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 5
&& pokeRed.speed >= pokeBlue.speed){
frames = 0;
	var danio = damage(pokeBlue.num,movtoBlue,pokeRed.num);
	subPantalla = 6;	
};
// El listener que saltará de la pantalla 6 a la pantalla 7:

if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 6
&& pokeRed.speed < pokeBlue.speed && frames > fps){
frames = 0;
subPantalla = 7;
	var danio = damage(pokeRed.num,movtoRed,pokeBlue.num);
	dmgBlueI = dmgBlueF;
	dmgBlueF = dmgBlueF + danio;
	hpBlue = pokeBlue.MaxHP - dmgBlueF;
	

};

if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 6
&& pokeRed.speed >= pokeBlue.speed && frames > fps){
frames = 0;
subPantalla = 7;
	var danio = damage(pokeBlue.num,movtoBlue,pokeRed.num);
	dmgRedI = dmgRedF;
	dmgRedF = dmgRedF + danio;
	hpRed = pokeRed.MaxHP - dmgRedF;

};

// El listener que saltará de la pantalla 7, de nuevo a la pantalla 1:

if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 7
&& pokeRed.speed < pokeBlue.speed && frames > fps){
frames = 0;
	turno = turno++
	if(hpBlue <= 0 || hpRed <= 0){subPantalla = 9;};
	if(hpBlue > 0 && hpRed > 0){subPantalla = 1;}
};

if(event.keyCode === 13 && pantalla == "battle" && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9 && subPantalla == 7
&& pokeRed.speed >= pokeBlue.speed && frames > fps){
frames = 0;
turno = turno ++
if(hpBlue <= 0|| hpRed <= 0){subPantalla = 9;};
if(hpBlue > 0 && hpRed > 0){subPantalla = 1;}	
};


// botòn de reincio:
if(event.keyCode === 16 && pantalla == "battle" && subPantalla == 9 && pokemonRed >0 && pokemonRed <= 9 && pokemonBlue > 0 && pokemonBlue <= 9){
	frames = -1; pantalla = "tranceUno";
	};

});

addEventListener('mousedown',onDown,false);

function onDown(event){
if( pantalla == "seleccion"){

	let ancho = 45 / 7 / 100 * w;
	let alto = 75 / 7 / 100 * h;

	cx = event.pageX;
	cy = event.pageY;

	// hacer las iteraciones por pokemon:

	if (cx >= ancho && cx<= 2* ancho && cy >= alto + 0.15 * h && cy <= 2* alto + 0.15 * h){pokemonRed = 1; hpRed = arrayPokemon[1].Hp};
	if (cx >= ancho * 3 && cx<= 4 * ancho && cy >= alto + 0.15 * h && cy <= 2* alto + 0.15 * h){pokemonRed = 2; hpRed = arrayPokemon[2].Hp};
	if (cx >= ancho * 5 && cx<= 6* ancho && cy >= alto + 0.15 * h && cy <= 2* alto + 0.15 * h){pokemonRed = 3; hpRed = arrayPokemon[3].Hp};
	if (cx >= ancho && cx<= 2* ancho && cy >= 3 * alto + 0.15 * h && cy <= 4* alto + 0.15 * h){pokemonRed = 4; hpRed = arrayPokemon[4].Hp};
	if (cx >= ancho * 3 && cx<= 4* ancho && cy >= 3 * alto + 0.15 * h && cy <= 4* alto + 0.15 * h){pokemonRed = 5; hpRed = arrayPokemon[5].Hp};
	if (cx >= ancho * 5 && cx<= 6* ancho && cy >= 3 * alto + 0.15 * h && cy <= 4* alto + 0.15 * h){pokemonRed = 6; hpRed = arrayPokemon[6].Hp};
	if (cx >= ancho && cx<= 2* ancho && cy >= 5 * alto + 0.15 * h && cy <= 6* alto + 0.15 * h){pokemonRed = 7; hpRed = arrayPokemon[7].Hp};
	if (cx >= ancho * 3 && cx<= 4* ancho && cy >= 5 * alto + 0.15 * h && cy <= 6* alto + 0.15 * h){pokemonRed = 8; hpRed = arrayPokemon[8].Hp};
	if (cx >= ancho * 5 && cx<= 6* ancho && cy >= 5 * alto + 0.15 * h && cy <= 6* alto + 0.15 * h){pokemonRed = 9; hpRed = arrayPokemon[9].Hp};

	if (cx >= ancho + 0.55 * w && cx<= 2* ancho + 0.55 * w  && cy >= alto + 0.15 * h && cy <= 2* alto + 0.15 * h){pokemonBlue = 1; hpBlue = arrayPokemon[1].Hp};
	if (cx >= ancho * 3 + 0.55 * w  && cx<= 4 * ancho + 0.55 * w  && cy >= alto + 0.15 * h && cy <= 2* alto + 0.15 * h){pokemonBlue = 2; hpBlue = arrayPokemon[2].Hp};
	if (cx >= ancho * 5 + 0.55 * w && cx<= 6* ancho + 0.55 * w  && cy >= alto + 0.15 * h && cy <= 2* alto + 0.15 * h){pokemonBlue = 3; hpBlue = arrayPokemon[3].Hp};
	if (cx >= ancho + 0.55 * w && cx<= 2* ancho + 0.55 * w && cy >= 3 * alto + 0.15 * h && cy <= 4* alto + 0.15 * h){pokemonBlue = 4; hpBlue = arrayPokemon[4].Hp};
	if (cx >= ancho * 3 + 0.55 * w && cx<= 4* ancho+ 0.55 * w  && cy >= 3 * alto + 0.15 * h && cy <= 4* alto + 0.15 * h){pokemonBlue = 5; hpBlue = arrayPokemon[5].Hp};
	if (cx >= ancho * 5 + 0.55 * w && cx<= 6* ancho + 0.55 * w && cy >= 3 * alto + 0.15 * h && cy <= 4* alto + 0.15 * h){pokemonBlue = 6; hpBlue = arrayPokemon[6].Hp};
	if (cx >= ancho + 0.55 * w && cx<= 2* ancho+ 0.55 * w  && cy >= 5 * alto + 0.15 * h && cy <= 6* alto + 0.15 * h){pokemonBlue = 7; hpBlue = arrayPokemon[7].Hp};
	if (cx >= ancho * 3 + 0.55 * w && cx<= 4* ancho + 0.55 * w && cy >= 5 * alto + 0.15 * h && cy <= 6* alto + 0.15 * h){pokemonBlue = 8; hpBlue = arrayPokemon[8].Hp};
	if (cx >= ancho * 5 + 0.55 * w && cx<= 6* ancho + 0.55 * w && cy >= 5 * alto + 0.15 * h && cy <= 6* alto + 0.15 * h){pokemonBlue = 9; hpBlue = arrayPokemon[9].Hp};

	if (cx >= 0.75 * w && cx<= w * 0.85 && cy >= 0.16* h  && cy <= (30/576 * h) + 0.16 * h){player(players)};
	//if (cx >= 0.75 * w && cx<= w * 0.85 && cy >= 0.16* h  && cy <= (30/576 * h) + 0.16 * h && players === 2 && Math.floor(frames /2) !== frames /2){players = 1; console.log(cx,cy,w)};

}

if (pantalla == "inicio"){
	cx = event.pageX;
	cy = event.pageY;

	if (cx >= 0 && cx <= w && cy >= 0 && cy <= h && frames >= 180){
		pantalla ="tranceUno"
		frames = 0;
	}
}

};