window.addEventListener("load", function() { 
	var m=parseInt(prompt("Cantidad de segundos:"));
	var p=m*1000; 
	document.getElementById('calcular').addEventListener("click", function(){
        setInterval(fondo,p);});    
	 function fondo(){ 
        document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
});





