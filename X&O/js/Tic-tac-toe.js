jQuery('document').ready(function() {
	var step, rnd, counter, difficulty, gamebot, botstep, a, b, dstep;
	var Xwins, Owins;
	Xwins = 0;
	Owins = 0;
	var field = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	gamebot = false;
	function firstStep() {
		rnd = Math.round(Math.random());
		if (rnd == 1) {
			step = 0;
			jQuery('h1').html('Առաջինը խաղը սկսում են Օ');
		} else {
			step = 1;
			jQuery('h1').html('Առաջինը խաղը սկսում են Х');
		}
	}
	firstStep();
	function clearField() {
		jQuery('#td0').html('');
		jQuery('#td1').html('');
		jQuery('#td2').html('');
		jQuery('#td3').html('');
		jQuery('#td4').html('');
		jQuery('#td5').html('');
		jQuery('#td6').html('');
		jQuery('#td7').html('');
		jQuery('#td8').html('');
		for (var i = 0;i<field.length;i++) {
			field[i] = -1;
		}
	}
	function winner () {
		if (field[0] == 1 && field[1] == 1 && field[2] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[3] == 1 && field[4] == 1 && field[5] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[6] == 1 && field[7] == 1 && field[8] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[0] == 1 && field[3] == 1 && field[6] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[1] == 1 && field[4] == 1 && field[7] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[2] == 1 && field[5] == 1 && field[8] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[2] == 1 && field[4] == 1 && field[6] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[0] == 1 && field[4] == 1 && field[8] == 1) {
			alert('Հաղթեցին իքսերը!');
			clearField();
			firstStep();
			Xwins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[0] == 0 && field[1] == 0 && field[2] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[3] == 0 && field[4] == 0 && field[5] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[6] == 0 && field[7] == 0 && field[8] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[0] == 0 && field[3] == 0 && field[6] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[1] == 0 && field[4] == 0 && field[7] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[2] == 0 && field[5] == 0 && field[8] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[2] == 0 && field[4] == 0 && field[6] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		} if (field[0] == 0 && field[4] == 0 && field[8] == 0) {
			alert('Հաղթեցին Զրոնորը!');
			clearField();
			firstStep();
			Owins+=1;
			jQuery('h2').html('X - '+Xwins+' O - '+Owins);
		}
		counter = 0;
		for (var j = 0;j<field.length;j++) {
			if (field[j] != -1) {
				counter+=1;
			}
		} if (counter == 9) {
			alert(' Ոչվոքի ');
			clearField();
			firstStep();
		}
		if (gamebot == true) {
			if (step == 0) {
				bot();
			}
		}
	}
	//Сложность бота и прочее
	jQuery('#button1').on('click', function () {
		if (jQuery("#lelvel1").prop('checked')) {
			difficulty = 1;
		} if (jQuery("#lelvel2").prop('checked')) {
			difficulty = 2;
		} if (jQuery("#lelvel3").prop('checked')) {
			difficulty = 3;
		} if (jQuery("#lelvel4").prop('checked')) {
			difficulty = 4;
		}
		gamebot = true;
		clearField();
		firstStep();
		if (step == 0) {
			bot();
		}
	});
	function drawbot (member2) {
	switch (member2) {
		case 0:
				jQuery('#td0').html('0');
				field[member2] = 0;
			break;
		case 1:
				jQuery('#td1').html('0');
				field[member2] = 0;
			break;
		case 2:
				jQuery('#td2').html('0');
				field[member2] = 0;
			break;
		case 3:
				jQuery('#td3').html('0');
				field[member2] = 0;
			break;
		case 4:
				jQuery('#td4').html('0');
				field[member2] = 0;
			break;
		case 5:
				jQuery('#td5').html('0');
				field[member2] = 0;
			break;
		case 6:
				jQuery('#td6').html('0');
				field[member2] = 0;
			break;
		case 7:
				jQuery('#td7').html('0');
				field[member2] = 0;
			break;
		case 8:
				jQuery('#td8').html('0');
				field[member2] = 0;
			break;
	}	
	}
	function stupidStepBot() {
		botstep = Math.round(Math.random()*8);
		a = 0;
		for (var l=0;l<field.length;l++) {
			if (field[l] == -1) {
				a+=1;
			}
		}
		if (a>0) {
			while (field[botstep] != -1) {
				botstep = Math.round(Math.random()*8);
			}
			drawbot(botstep);
		}
	}
	function cleverStepBot() {
	var huPlayer = "X";
	var aiPlayer = "O";
	var origBoard = [];
	for (var i=0;i<field.length;i++) {
		if (field[i] == 1) {
			origBoard[i] = "X";
		} else if (field[i] == 0) {
			origBoard[i] = "O";
		} else {
			origBoard[i] = i;
		}
	}
	// console.log(origBoard);
	var fc = 0;
	var bestSpot = minimax(origBoard, aiPlayer);
	// console.log("index: " + bestSpot.index);
	// console.log("function calls: " + fc);
	b = bestSpot.index;
	drawbot(b);
	function minimax(newBoard, player){
		fc++;
		var availSpots = emptyIndexies(newBoard);
		if (winning(newBoard, huPlayer)){
			return {score:-10};
		}
		else if (winning(newBoard, aiPlayer)){
			return {score:10};
		}
		else if (availSpots.length === 0){
			return {score:0};
		}
		var moves = [];
		for (var i = 0; i < availSpots.length; i++){
			var move = {};
			move.index = newBoard[availSpots[i]];
			newBoard[availSpots[i]] = player;
			if (player == aiPlayer){
				var result = minimax(newBoard, huPlayer);
				move.score = result.score;
			}
			else{
				var result = minimax(newBoard, aiPlayer);
				move.score = result.score;
			}
			newBoard[availSpots[i]] = move.index;
			moves.push(move);
		}
		var bestMove;
		if(player === aiPlayer){
			var bestScore = -10000;
			for(var i = 0; i < moves.length; i++){
				if(moves[i].score > bestScore){
					bestScore = moves[i].score;
					bestMove = i;
				}
			}
		} else {
			var bestScore = 10000;
			for(var i = 0; i < moves.length; i++){
				if(moves[i].score < bestScore){
					bestScore = moves[i].score;
					bestMove = i;
				}
			}
		}
			return moves[bestMove];
	}
	function emptyIndexies(board){
		return  board.filter(s => s != "O" && s != "X");
	}
	function winning(board, player){
	if (
		(board[0] == player && board[1] == player && board[2] == player) ||
		(board[3] == player && board[4] == player && board[5] == player) ||
		(board[6] == player && board[7] == player && board[8] == player) ||
		(board[0] == player && board[3] == player && board[6] == player) ||
		(board[1] == player && board[4] == player && board[7] == player) ||
		(board[2] == player && board[5] == player && board[8] == player) ||
		(board[0] == player && board[4] == player && board[8] == player) ||
		(board[2] == player && board[4] == player && board[6] == player)
		) {
			return true;
		} else {
			return false;
		}
	}
	}
	function bot() {
		step++;
		dstep = Math.round(Math.random()*9);
		if (difficulty == 1) {
			stupidStepBot();
		} if (difficulty == 2) {
			if (dstep>=0 && dstep<=4) {
				stupidStepBot();
			} else {
				cleverStepBot();
			}
		} if (difficulty == 3) {
			if (dstep>=0 && dstep<=7) {
				cleverStepBot();
			} else {
				stupidStepBot();
			}
		} if (difficulty == 4) {
			cleverStepBot();
		}
	}
	function game(number) {
		step++;
		if (gamebot == false) {
			if (step%2==0) {
				switch (number) {
					case 0:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td0').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 1:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td1').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 2:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td2').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 3:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td3').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 4:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td4').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 5:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td5').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 6:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td6').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 7:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td7').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
					case 8:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td8').html('X');
							field[number] = 1;
						} else {
							step--;
						}
						break;
				}
			} else {
				switch (number) {
					case 0:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td0').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 1:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td1').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 2:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td2').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 3:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td3').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 4:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td4').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 5:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td5').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 6:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td6').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 7:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td7').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
					case 8:
						if (field[number]!=1 && field[number]!=0) {
							jQuery('#td8').html('0');
							field[number] = 0;
						} else {
							step--;
						}
						break;
				}
			}
		} else {
			if (step%2==0) {
				switch (number) {
					case 0:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td0').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 1:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td1').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 2:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td2').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 3:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td3').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 4:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td4').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 5:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td5').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 6:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td6').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 7:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td7').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
					case 8:
						if (field[number]!=0 && field[number]!=1) {
							jQuery('#td8').html('X');
							field[number] = 1;
							bot();
						} else {
							step--;
						}
						break;
				}
			}
		}
		winner();
	}
	jQuery('#td0').on('click', function () {
		game(0);
	});
	jQuery('#td1').on('click', function () {
		game(1);
	});
	jQuery('#td2').on('click', function () {
		game(2);
	});
	jQuery('#td3').on('click', function () {
		game(3);
	});
	jQuery('#td4').on('click', function () {
		game(4);
	});
	jQuery('#td5').on('click', function () {
		game(5);
	});
	jQuery('#td6').on('click', function () {
		game(6);
	});
	jQuery('#td7').on('click', function () {
		game(7);
	});
	jQuery('#td8').on('click', function () {
		game(8);
	});
});