window.addEventListener('load', function () {
	let page2 = document.getElementById("page2");
	let style = document.getElementById("style");
	page2.addEventListener('click', function (){
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO";
		});
	style.addEventListener('click', function (){
		document.body.style.backgroundColor = prompt('Введите цвет(на английском):', 'black');
	});
});