var num 
var range
var html
var guess
var guesses
var maxGuesses
var counter = document.getElementById("guessCount")
var btns = document.getElementById("guessButtons")
var btn = document.getElementById('inputButton')
btn.addEventListener('click', getRange)

function getRange(){
	range = parseInt(prompt("Enter guess range (ex. 100 => range 1-100)"))
	num = Math.ceil(range*Math.random())
	maxGuesses = range.toString(2).length
	guesses = 0
	console.log(num)
	makeButtons()
}

function makeButtons(){
	html = "<br>"
	btns.innerHTML = html
	for (var i=0; i<range; i++) {
		html += "<button class=\"btn-xs btn-primary\"" + "id=" 
		+ (i+1) + " onclick=\"checkGuess(this)\">" + (i+1) + "</button>"
	}
	btns.innerHTML += html
	btns.innerHTML += "<h4>Guesses allowed: " + maxGuesses + "</h4>"
	counter.innerHTML = ""
}

function checkGuess(choice){
	guesses++
	guess = parseInt(choice.id)
	if (guess<num){
		for (var i=0; i<guess; i++) {
			document.getElementById((i+1)).className = "btn disabled btn-danger btn-xs"
			document.getElementById((i+1)).disabled = true
		}
	} else if (guess>num){
		for (var i=guess-1; i<range; i++) {
			document.getElementById((i+1)).className = "btn disabled btn-danger btn-xs"
			document.getElementById((i+1)).disabled = true
		}
	} else {
		document.getElementById(guess).className = "btn disabled btn-success btn-lg"
		document.getElementById(guess).disabled = true
		counter.innerHTML = "<h4>Guesses used: " + guesses + "</h4>"
		counter.innerHTML += "<h5>Correct! You should have been able to guess within " 
+ maxGuesses + " guesses. If you didn't, try a smaller range. And if you did, try a bigger one!</h5>"
	}
}


