(function(){

	var 

		letters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
			
		letterBox,
		
		getLetterBox = function(){
			
			if (letterBox)
				return letterBox;
			
			letterBox = document.getElementById("LetterBox");
			
			return letterBox;
		},
		
		setLetter = function(letter){

			getLetterBox().innerHTML = letter.toUpperCase();
		},

		getRandomNumber = function(min, max){
				
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
			
		setRandomLetter = function(){
		
			setLetter(letters[getRandomNumber(0, letters.length-1)]);
		},
		
		getCurrentLetter = function(){
			
			return getLetterBox().innerHTML.toLowerCase();
		},
		
		onkeydown  = function (e){

			if (e.key != getCurrentLetter())
				return;
			
			setRandomLetter();
		};

	setRandomLetter();
	
	document.body.onkeydown = onkeydown;
})();
