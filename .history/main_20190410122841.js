const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Jagienka", "Dobrawa(Dobrusia)", "Ania", "Maja", "Liliana", "Ola", "Zosia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Myślę, że", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];



const nameGenerator = () => {
 const indexName = Math.floor(Math.random() * names.length);
 const indexPrefix = Math.floor(Math.random() * names.length);
div.textContent = `Najfajniejsze imię to ${names[index]}`
}

btn.addEventListener('click', nameGenerator)