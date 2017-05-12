function addComment(){
	var commentSection = document.getElementById("commentSection")
	var commentItem = document.createElement("li")
	var nameLine = document.createElement("h4")
	var commentArea = document.createElement("p")

	var name = document.createTextNode(document.getElementById("nameInput").value)
	nameLine.appendChild(name)

	var comment = document.createTextNode(document.getElementById("commentInput").value)
	commentArea.appendChild(comment)
	var br = document.createElement("br")
	commentArea.appendChild(br)
	var date = document.createTextNode(Date().slice(0, -14))

	commentItem.appendChild(nameLine)
	commentItem.appendChild(commentArea)
	commentItem.appendChild(date)
	commentSection.insertBefore(commentItem, commentSection.firstChild);
	document.getElementById("nameInput").value = ""
	document.getElementById("commentInput").value = ""
}
