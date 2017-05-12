$("#clicker").hide()
var clicks

function start(){
	clicks = 0
	$("#count").html("")
	$("#start").hide()
	$("#clicker").show()
	setTimeout(function(){
		$("#clicker").hide()
		$("#start").show()
		$("#count").html("Clicks: " + clicks)
	},5000)
}

function count(){
	clicks++
}