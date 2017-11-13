var btn = document.querySelector('#submit-article-btn');
btn.addEventListener('click', btnClick);

function btnClick(e) {
	const articleTitle = document.querySelector('#article-title').value;
	const articleText = document.querySelector('#article-text').value;
	const articleImage = document.querySelector('#article-image').value;

	const obj = {
		title: articleTitle,
		text: JSON.stringify(articleText),
		image: articleImage,
		date: new Date()
	};


	var url = `http://sambernheim.tech/api/login`;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	// Ensure the article has at least a title and  text
	if (obj.text === "" || obj.title === "") {
		alert('Missing Article Title and/or Text');
	} else {
		xhr.send(JSON.stringify(obj));

		// Hide the button after the post request is submitted
		btn.style.display = 'none';
	}
}