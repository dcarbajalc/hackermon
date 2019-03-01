
window.onload = function() {



	interval = setInterval(function(){
		frames ++;
		ctx.clearRect (0,0,canvas.width,canvas.height);
		if (pantalla === "inicio"){
		drawPantallaInicio();}
		if (pantalla === "tranceUno"){
			drawTranceUno();}
		if (pantalla === "tranceUno" && frames > 3* fps){
			pantalla = "seleccion";
			frames = 0;
			terreno = Math.floor((Math.random() * 11) + 1 )
		};
		if (pantalla === "seleccion"){
			drawSelection();
		}
		if (pantalla === "tranceDos"){
			drawTranceDos();}
		if (pantalla === "battle"){
			drawBattle();
		}
			
	},1000/fps )

}
