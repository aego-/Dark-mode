console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
const fondo = document.querySelector('body');
const titulo = document.querySelector('h1');
if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
	console.log('dark mode');
	fondo.setAttribute('class', 'bg-dark');
	titulo.setAttribute('class', 'text-light text-center');
} else {
	console.log('light mode');
	fondo.setAttribute('class', 'bg-white');
	titulo.setAttribute('class', 'text-dark text-center');
}
