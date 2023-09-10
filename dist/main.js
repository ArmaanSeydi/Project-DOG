"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const btn = document.querySelector(".submit-btn");
const auto = document.querySelector(".auto-btn");
const dogPic = document.querySelector(".dog-pic");
let intervalId;
const imageGenerator = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
        dogPic.src = data.message;
    });
});
const autoImageGenerator = () => {
    intervalId = setInterval(imageGenerator, 4000);
};
document.addEventListener("DOMContentLoaded", () => {
    imageGenerator();
});
btn.addEventListener("click", () => {
    imageGenerator();
});
auto.addEventListener("click", () => {
    if (!auto.classList.contains("active")) {
        auto.classList.add("active");
        autoImageGenerator();
    }
    else {
        auto.classList.remove("active");
        clearInterval(intervalId);
    }
});
