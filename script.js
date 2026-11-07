const input = document.querySelector('#yozuv');
const natija = document.querySelector('#chiqarish');

input.addEventListener('input', () => {
    natija.innerHTML = input.value;
});