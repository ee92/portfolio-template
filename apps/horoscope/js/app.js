function getHoroscope() {
	var signs = [
		{
			sign : "Capricorn",
			url : "img/signs/capricorn.png"
		},
		{
			sign : "Aquarius",
			url : "img/signs/aquarius.png"
		},
		{
			sign : "Pisces",
			url : "img/signs/pisces.png"
		},
		{
			sign : "Aries",
			url : "img/signs/aries.png"
		},
		{
			sign : "Taurus",
			url : "img/signs/taurus.png"		
		},
		{
			sign : "Gemini",
			url : "img/signs/gemini.png"
		},
		{
			sign : "Cancer",
			url : "img/signs/cancer.png"
		},
		{
			sign : "Leo",
			url : "img/signs/leo.png"
		},
		{
			sign : "Virgo",
			url : "img/signs/virgo.png"
		},
		{
			sign : "Libra",
			url : "img/signs/libra.png"
		},
		{
			sign : "Scorpio",
			url : "img/signs/scorpio.png"
		},
		{
			sign : "Sagittarius",
			url : "img/signs/sagittarius.png"
		}
	]
	var horscope = ""
	month = document.getElementById('month').selectedIndex - 1
	sunsign = signs[month]['sign'].toLowerCase()
	$.ajax({
	  url: 'http://sandipbgt.com/theastrologer/api/horoscope/' + sunsign +'/today/',
	  dataType: 'json',
	  success: function(data) {
	    horoscope = data.horoscope
	  }
	}).then(function(){
	document.getElementById('sign').src = signs[month]['url']
	document.getElementById('horoscope').innerHTML = signs[month]['sign'] + " - " + horoscope.slice(0,-59)
	})
	    
	
}