const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Jagienka", "Dobrawa(Dobrusia)", "Ania", "Maja", "Liliana", "Ola", "Zosia"];

const index = Math.floor(Math.random() * 7);



const nameGenerator = () => {
 const index = Math.floor(Math.random() * names.length);
div.textContent = `Najfajniejsze imię to ${names[index]}`
}

btn.addEventListener('click', nameGenerator)