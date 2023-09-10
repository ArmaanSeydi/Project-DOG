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
const dogPic = document.querySelector(".dog-pic");
// const imageGenerator = () => {
//     return new promise ((resolve, reject) => {
//     })
// }
btn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch("http://localhost:4444/")
        .then(response => response.json())
        .then(data => {
        dogPic.src = data.src;
    });
}));
// btn.addEventListener("click", () => {
//     fetch('/')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// })
