function findBooks(){
	var query = document.getElementById("input").value
	$.ajax({
		dataType: "JSON",
		url: 'https://www.googleapis.com/books/v1/volumes?q=' + query,
		success: func
	})
}

function func(data){
	var html = ""
	for (var i = 0; i < data.items.length; i++) {
		html += "<div>"
		if (data.items[i].volumeInfo.title){
			var title = data.items[i].volumeInfo.title
			html += "<h4><b>" + title + "</b></h4>"
		} else {
			html += "<h4><b>" + "title not available" + "</b></h4>"
		}
		if (data.items[i].volumeInfo.subtitle){
			var sub = data.items[i].volumeInfo.subtitle
			html += "<h5><em><b>" + sub + "</b></em></h5>"
		}
		if (data.items[i].volumeInfo.authors){
			var authors = data.items[i].volumeInfo.authors
			html += "<em>" + "by " + authors + "</em>"
		}
		if (data.items[i].volumeInfo.description){
			var description = data.items[i].volumeInfo.description
			html += "<p>" + description.slice(0,400) + "..." + "</p>"
		} else {
			html += "<br>"
		}
		if (data.items[i].volumeInfo.infoLink){
			var link = data.items[i].volumeInfo.infoLink
			html += "<br><a href=" + link + " target='_blank'>"
		}
		if (data.items[i].volumeInfo.imageLinks){
			var img = data.items[i].volumeInfo.imageLinks.thumbnail
			html += "<img src=" + img + ">"
		} else {
			html += "<img src='http://static.surfazon.com/images/unavailable.png' width='128px'>"
		}
		if (data.items[i].volumeInfo.infoLink){
			var link = data.items[i].volumeInfo.infoLink
			html += "</a>"
		}
		html += "</div>"
	}
	var books = document.getElementById("books")
	books.innerHTML = html
}


