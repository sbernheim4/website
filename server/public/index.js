(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');ga('create', 'UA-90187710-1', 'auto');ga('send', 'pageview');
var btn = document.querySelector('#login-submit');
btn.addEventListener('click', login);

function login(e) {
	const userEmail = document.querySelector('#login-email').value;

	//TODO: The password should be encrypted eventually here on the browser before being sent to the server
	const userPassword = document.querySelector('#login-password').value;
	const finalPassword = hashPassword(getSalt() + userPassword);

	const obj = {
		email: userEmail,
		password: userPassword
	};

	// URL for post request
	var url = 'http://localhost:5000/api/login';

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	// Ensure the article has at least a title and  text
	if (obj.email === "" || obj.password === "") {
		alert('Missing email and or password');
	} else {
		xhr.send(JSON.stringify(obj));
	}
}

function getSalt() {
	const url = 'http://localhost:5000/api/salt';
	let salt = '';
	const userEmail = document.querySelector('#login-email').value;

	let xhr = new XMLHttpRequest();

	const obj = {
		email: userEmail
	};

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			salt = xhr.responseText;
		}
	};

	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(obj));

	return salt;
}

function hash(pass) {}
// Desktop navbar
const desktopBtns = document.querySelector('.navbar').querySelectorAll('p');
desktopBtns.forEach(btns => {
	btns.addEventListener('click', scroll);
});

const mobileToggle = document.querySelector('.fa-bars');
mobileToggle.addEventListener('click', toggleMobileNavbar);

// Mobile navbar
const mobileBtns = document.querySelector('.mobile-navbar').querySelectorAll('p');
mobileBtns.forEach(btn => {
	btn.addEventListener('click', scroll);
});

function toggleMobileNavbar() {
	const text = document.querySelector('.mobile-navbar--text');
	text.classList.toggle('display');
}

// Scrolling function
function scroll() {
	let name = this.getAttribute('name');
	let section = document.querySelector("." + name);
	let amtToScroll = section.getBoundingClientRect().top;
	let offset = navbar.clientHeight;
	window.scrollBy(0, amtToScroll - offset);
}
window.addEventListener('load', debounce(slide, 15));
window.addEventListener('scroll', debounce(slide, 15));

var elements = document.querySelectorAll('.slideFromLeft');
var elements2 = document.querySelectorAll('.slideFromRight');

function slide() {
	elements.forEach(element => {
		// Check to see if the window y position is greater than the top of the element
		if (window.scrollY % window.innerHeight / 2 + window.innerHeight * 0.6 > element.getBoundingClientRect().top) {
			// add the move class to the element
			element.classList.add('move');
		}
	});

	elements2.forEach(element => {
		// Check to see if the window y position is greater than the top of the element
		if (window.scrollY % window.innerHeight / 2 + window.innerHeight * 0.6 > element.getBoundingClientRect().top) {
			// add the move class to the element
			element.classList.add('move');
		}
	});
}

// Debounce function grabbed from the interweb so the scroll function doesn't fire so often
// ruining performance
function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
		    args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
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

	//TODO: Change url to production URL when it goes live
	var url = 'http://localhost:5000/api/submit-article';

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