const btn = document.querySelector(".submit-btn") as HTMLButtonElement;
const dogPic = document.querySelector(".dog-pic") as HTMLImageElement;

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dog.ceo/api/breeds/image/random')
})

btn.addEventListener("click", () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
})