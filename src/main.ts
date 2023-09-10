const btn = document.querySelector(".submit-btn") as HTMLButtonElement;
const dogPic = document.querySelector(".dog-pic") as HTMLImageElement;

const imageGenerator = async() => {
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        dogPic.src = data.message;
    }) 
}

document.addEventListener("DOMContentLoaded", () => {
    imageGenerator()
    })



btn.addEventListener("click", () => {
    imageGenerator()
})