const btn = document.querySelector('button');

const names = ["Jagienka", "Dobrawa(Dobrusia)", "Ania", "Maja", "Liliana", "Ola", "Zosia"];

const index = Math.floor(Math.random() * 7);



const nameGenerator = () => {
 const index = Math.floor(Math.random() * 7);
}

btn.addEventListener('click', nameGenerator)