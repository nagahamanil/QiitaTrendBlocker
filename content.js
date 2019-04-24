var blockAuthor = "/nagahamanil" // ← replace block user id

var trItems = document.getElementsByClassName("tr-Item");

for (var i = 0; i < trItems.length; i++){

	var author = trItems[i].getElementsByTagName('a')[0].getAttribute('href')

	if (blockAuthor == author) {
		trItems[i].style.display = "none"
	}
}