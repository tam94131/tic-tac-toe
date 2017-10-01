var b=[];		//this is the board array
var oTurn = true;

// wait for the DOM to finish loading
$(document).ready(function() {
	console.log("We be loaded");
  // all code to manipulate the DOM
  // goes inside this function

function sayWhosTurn() {
	if (oTurn===true){
		$(banner).text("It is O's turn.");
	} else {
		$(banner).text("It is X's turn.");		
	}
}

function clearBoard() {
	for (var i=0; i<9; i++ ) {
		b[i] = -1;
	}
	var allBoxes = document.getElementsByClassName('box');
	// console.log("boxes " + allBoxes.length);
	for (var i=0; i<allBoxes.length; i++) {
		allBoxes[i].innerHTML="";
		// console.log("cleared");
	}
	sayWhosTurn();
}

// $(button).on("click",clearBoard);

function checkPlayer(a) {
	if ((b[0]===a && b[1]===a && b[2]===a) ||
		(b[3]===a && b[4]===a && b[5]===a) || 
		(b[6]===a && b[7]===a && b[8]===a) ||
		(b[0]===a && b[3]===a && b[6]===a) ||
		(b[1]===a && b[4]===a && b[7]===a) ||
		(b[2]===a && b[5]===a && b[8]===a) ||
		(b[0]===a && b[4]===a && b[8]===a) ||
		(b[2]===a && b[4]===a && b[6]===a)) {
		return true;
	} else {
		return false;
	}
}

function allPlayed() {
	var success = true;
	for (var i=0; i<9; i++) {
		if (b[i]===-1) {
			success = false;
		}
	}
	return success;
}

function evaluateBoard() {
	// this function takes the var b[] 
	// where each element is a -1 (no play), 0, 1 
	// and it returns "inPlay", "xWon", "oWon", or 
	// "draw".
	
	if (checkPlayer(0)===true) {
		return "OMG O Won";
	} else if (checkPlayer(1)===true) {
		return "OMG X Won";
	} else if (allPlayed()===true) {
		return "Players Draw";
	} else {
		return "InPlay";
	}
}

$("#board").on('mouseenter',function() {
	$("#anticipation").text("This is getting exciting!");
});
$("#board").on('mouseleave',function() {
	$("#anticipation").text("");
});

$(".box").on('click',function() {
	var id = $(this).attr('id');
	numb = parseInt(id[1]);
	// console.log("Number is " + numb + " and id is " + id);

	if (oTurn===true) {
		b[numb]=0;
		$(this).html('<p class="piece">O</p>');
	} else {
		b[numb]=1;
		$(this).html('<p class="piece">X</p>');
	}
	var result = evaluateBoard();
	// console.log("Evaluation is " + result);
	if (result!="InPlay") {
		$(banner).text(result + "!");
		$(anticipation).text("");
		setTimeout(clearBoard,6000);
	} else {
		oTurn = !oTurn;
		sayWhosTurn();
	}
});


// INITIALIZE! 
clearBoard();		//clear the board

/* X wins
b[0]=0; console.log( evaluateBoard() );
b[4]=1; console.log( evaluateBoard() );
b[6]=0; console.log( evaluateBoard() );
b[3]=1; console.log( evaluateBoard() );
b[2]=0; console.log( evaluateBoard() );
b[5]=1; console.log( evaluateBoard() );
*/

/* O wins 
b[2]=0; console.log( evaluateBoard() );
b[5]=1; console.log( evaluateBoard() );
b[1]=0; console.log( evaluateBoard() );
b[0]=1; console.log( evaluateBoard() );
b[4]=0; console.log( evaluateBoard() );
b[6]=1; console.log( evaluateBoard() );
b[7]=0; console.log( evaluateBoard() );
*/

/* draw
b[0]=0; console.log( evaluateBoard() );
b[5]=1; console.log( evaluateBoard() );
b[2]=0; console.log( evaluateBoard() );
b[4]=1; console.log( evaluateBoard() );
b[3]=0; console.log( evaluateBoard() );
b[6]=1; console.log( evaluateBoard() );
b[7]=0; console.log( evaluateBoard() );
b[1]=1; console.log( evaluateBoard() );
b[8]=0; console.log( evaluateBoard() );
*/

});

