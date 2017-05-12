function countLetters(){
	var html = ""
	var count = {}
	var text = document.getElementById("text").value
	var chars = document.getElementById("chars")
	var sens = document.getElementById('case').checked
	var letters = document.getElementById('letters').checked

	if (!sens){
		text = text.toLowerCase()
	}

	if (letters){
		text = text.replace(/[^a-zA-Z]/g,'')
	}

	for (var i=0; i<text.length; i++){
		var char = text.charAt(i)
		if (count[char]) {
			count[char]++
		}
		else {
			count[char] = 1
		}
	}
	for (i in count) {
		html += "<h5>" + "\"" + i + "\"" + " => " + count[i] + "</h5>"
	}
	chars.innerHTML = html
}