const btn = document.querySelector(".submit-btn") as HTMLButtonElement;
const dogPic = document.querySelector("pic-container") as HTMLDivElement;

document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM kar mikone")
    await fetch("/localhost4444").then(response => response.json()).then(data => console.log("data kar mikone"))
    })



btn.addEventListener("click", () => {
    fetch('/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
})