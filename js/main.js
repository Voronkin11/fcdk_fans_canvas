(function(){
	'use strict'
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	//голова
	ctx.fillStyle = "#fff";
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.ellipse(150, 50, 30, 40, 0 * Math.PI/180, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
	

	//глаза
	ctx.strokeStyle = "#999"
	ctx.fillStyle = '#35f';
	ctx.beginPath();
	ctx.ellipse(140, 35, 5, 3, 0 * Math.PI/180, 0, 2 * Math.PI);
	ctx.moveTo(164, 35);
	ctx.ellipse(160, 35, 5, 3, 0 * Math.PI/180, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	

	//нос
	ctx.beginPath();
	ctx.moveTo(150, 40);
	ctx.lineTo(147, 55);
	ctx.lineTo(153, 55);
	ctx.stroke();
	ctx.closePath();

	//рот
	ctx.strokeStyle = '#f99';
	ctx.beginPath();
	ctx.arc(150, 70, 10, 0, 1 * Math.PI, false);
	ctx.bezierCurveTo(153, 75, 154, 75, 158, 71);
	ctx.stroke();
	ctx.closePath();

	//шея
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.moveTo(150, 90);
	ctx.lineTo(150, 110);
	ctx.lineWidth = 15;
	ctx.stroke();
	ctx.closePath();

	//туловище
	ctx.strokeStyle = '#00f';
	ctx.fillStyle = '#fff';
	ctx.beginPath();
	ctx.rect(100, 110, 100, 140);
	ctx.lineWidth = 1;
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	//NB & FCDK
	window.onload = function() {
    var dk = document.getElementById("fcdk");
    var nb = document.getElementById("nb");
    ctx.drawImage(nb, 110, 135, 20, 15);
    ctx.drawImage(dk, 170, 130, 20, 30);
	};

	//руки
	ctx.strokeStyle = '#000';
	ctx.beginPath();
	ctx.moveTo(70, 160);
	ctx.lineTo(85, 240);
	ctx.moveTo(230, 160);
	ctx.lineTo(215, 240);
	ctx.lineWidth = 20;
	ctx.stroke();
	ctx.closePath();

	//рукава
	ctx.strokeStyle = '#09f';
	ctx.beginPath();
	ctx.moveTo(100, 110);
	ctx.lineTo(70, 170);
	ctx.moveTo(200, 110);
	ctx.lineTo(230, 170);
	ctx.lineWidth = 30;
	ctx.stroke();
	ctx.closePath();

	//плечи
	ctx.beginPath();
	ctx.moveTo(91, 110);
	ctx.lineTo(210, 110);
	ctx.lineWidth = 15;
	ctx.lineCap="round";	
	ctx.stroke();
	ctx.closePath();

	//ноги
	ctx.lineCap="butt";
	ctx.strokeStyle = '#000';
	ctx.beginPath();
	ctx.moveTo(130, 251);
	ctx.lineTo(90, 450);
	ctx.moveTo(170, 251);
	ctx.lineTo(210, 450);
	ctx.lineWidth = 55;
	ctx.stroke();
	ctx.closePath();

	//пояс
	ctx.strokeStyle = '#09f';
	ctx.beginPath();
	ctx.moveTo(100, 255);
	ctx.lineTo(200, 255);
	ctx.lineWidth = 19;
	ctx.stroke();
	ctx.closePath();

})();