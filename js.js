'use strict';

var td = document.getElementsByTagName('td');
var tdFirst = document.getElementById('one');
tdFirst.style.background = 'red';
var a = 24;


document.onkeydown = function (event) {
	if(event.key == 'a'){
		moveLeft();	
	}
	if(event.key == 'w'){
		moveTop();
	}
	if(event.key == 'd'){
		moveRight();
	}
	if(event.key == 's'){
		moveDown();
	}
};
function moveBottom(){	
	
	setInterval(function moveEnemyBottom(){
	if(a <= 124){console.log(a)
		for(var i = 24 ; i < td.length ; i=i+20){			
			if(i == a){	
			td[i].style.background='black';
			td[i].classList = 'black';
			console.log(td[i])
			}
		}
	}if(a > 124){
		return false;			
	}
		a+=20;
	},1150);
}

function moveLeft(){

	for(var i = 0 ; i < td.length ; i++){
	if(td[142].style.background == 'red'&&
	 td[141].classList == 'door'
	 ){
		td[39].style.background = 'red';
		td[142].style.background = 'transparent';


		
		break;
		
	}}
	for(var i = 0 ; i < td.length ; i++){
	if(td[28].style.background == 'red'){
		moveBottom();
		td[141].classList.add('door');
		break;
		
	}}
	for(var i = 0 ; i < td.length ; i++){
	if(td[82].style.background == 'red'){
		td[223].classList.add('fruit');
		break;
	}};

	for(var i = 0 ; i < td.length ; i++){
		if(td[i].style.background == 'red'){
			td[i].style.background = 'transparent';
			td[i-1].style.background = 'red';
			if(td[i-1].classList == 'black'){
				alert('You Lost');
				location.reload();
			}
			break;
		}
	}
};

function moveTop(){
		for(var i = 0 ; i < td.length ; i++){
		if(td[174].style.background == 'transparent' ){
			td[53].classList.remove('black');
			
		}
	}
	for(var i = 0 ; i < td.length ; i++){
		if(td[i].style.background == 'red'){
			td[i].style.background = 'transparent';
			td[i-20].style.background = 'red';
			if(td[i-20].classList == 'black'){
				alert('You Lost');
				location.reload();
			}
			break;
		}
	}
};

function moveRight(){
	for(var i = 0 ; i < td.length ; i++){
		if(td[138].style.background == 'red'){
			alert('You Win , Congratulations');
			location.reload();
			break;
		}
	}
	for(var i = 0 ; i < td.length ; i++){
	if(td[222].style.background == 'red'){
		td[27].classList.add('fruit');
		break;
	}}
	for(var i = 0 ; i < td.length ; i++){
		if(td[i].style.background == 'red'){
			td[i].style.background = 'transparent';
			td[i+1].style.background = 'red';
			if(td[i+1].classList == 'black'){
				alert('You Lost');
				location.reload();
			}
			break;
		}
	}
};

function moveDown(){

	for(var i = 0 ; i < td.length ; i++){
		if(td[i].style.background == 'red'){
			td[i].style.background = 'transparent';
			td[i+20].style.background = 'red';
			if(td[i+20].classList == 'black'){
				alert('You Lost');
				location.reload();
			}
			break;
		}
	}
};

