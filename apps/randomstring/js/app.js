function randStr(){
	var chars = document.getElementById('chars').value
	var length = parseInt(document.getElementById('length').value)
	var output = document.getElementById('output')
	var str = ""
	for (var i=0; i<length; i++) {
		str += chars.charAt(Math.floor(Math.random()*chars.length))
	}
	output.value = str
}