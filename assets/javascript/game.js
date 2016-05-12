// Waits until html is finished loading then starts JS

$(document).ready(function(){

	//game object to contain variables and methods

	var game = {

		// Array with game pieces

		pieces: [
			{name: "rock",
			image: "<img src='assets/images/rock.png'>"},
			{name: "rock",
			image: "<img src='assets/images/rock.png'>"},
			{name: "rock",
			image: "<img src='assets/images/rock.png'>"},
			{name: "scissors",
			image: "<img src='assets/images/scissors.png'>"},
			{name: "scissors",
			image: "<img src='assets/images/scissors.png'>"},
			{name: "scissors",
			image: "<img src='assets/images/scissors.png'>"},
			{name: "paper",
			image: "<img src='assets/images/paper.png'>"},
			{name: "paper",
			image: "<img src='assets/images/paper.png'>"},
			{name: "paper",
			image: "<img src='assets/images/paper.png'>"},
			{name: "lizard",
			image: "<img src='assets/images/lizard.png'>"},
			{name: "lizard",
			image: "<img src='assets/images/lizard.png'>"},
			{name: "lizard",
			image: "<img src='assets/images/lizard.png'>"},
			{name: "spork",
			image: "<img src='assets/images/spork.png'>"},
			{name: "spork",
			image: "<img src='assets/images/spork.png'>"},
			{name: "spork",
			image: "<img src='assets/images/spork.png'>"},
			{name: "bomb",
			image: "<img src='assets/images/bomb.png'>"},
			{name: "bomb",
			image: "<img src='assets/images/bomb.png'>"},
			{name: "pinch",
			image: "<img src='assets/images/pinch.png'>"},
			{name: "pinch",
			image: "<img src='assets/images/pinch.png'>"},
			{name: "flag",
			image: "<img src='assets/images/flag.png'>"},
			],

		// method to generate pieces for placement on the board

		genPieces: function() {

			for (var i = 0; i < game.pieces.length; i++) {

				var p = $('<button>');
				p.addClass("piece ");
				p.attr('data-index', i);
				p.attr('data-name', game.pieces[i].name);
				p.append('<p>' + game.pieces[i].name + '</p>');
				p.append(game.pieces[i].image);

				$("#pieces").append(p);

			} // ends for loop

		}, // ends genPieces method

	} // Ends game object

	game.genPieces();

}); // Ends document.ready function