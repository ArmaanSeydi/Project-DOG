const btn = document.querySelector(".submit-btn") as HTMLButtonElement;
const dogPic = document.querySelector(".dog-pic") as HTMLImageElement;

// const imageGenerator = () => {
//     return new promise ((resolve, reject) => {

//     })
// }

document.addEventListener("DOMContentLoaded", async () => {
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        dogPic.src = data.message;
    })
    })



btn.addEventListener("click", () => {
    fetch('/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
})