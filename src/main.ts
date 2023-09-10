const btn = document.querySelector(".submit-btn") as HTMLButtonElement;
const auto = document.querySelector(".auto-btn") as HTMLButtonElement;
const dogPic = document.querySelector(".dog-pic") as HTMLImageElement;

let intervalId: any;

const imageGenerator = async() => {
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        dogPic.src = data.message;
    }) 
}

const autoImageGenerator = () => {
    intervalId = setInterval(imageGenerator, 4000)
}


document.addEventListener("DOMContentLoaded", () => {
    imageGenerator()
})



btn.addEventListener("click", () => {
    imageGenerator()
})
auto.addEventListener("click", () => {
    if (!auto.classList.contains("active")) {
        auto.classList.add("active");
        autoImageGenerator()
    } else {
        auto.classList.remove("active");
        clearInterval(intervalId);
    }
})