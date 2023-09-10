const btn = document.querySelector(".submit-btn") as HTMLButtonElement;
const dogPic = document.querySelector(".dog-pic") as HTMLImageElement;

btn.addEventListener("click", async () => {
    await fetch("http://localhost:4444/")
    .then(response => response.json())
    .then(data => {
        dogPic.src = data.src;
    })
    })
