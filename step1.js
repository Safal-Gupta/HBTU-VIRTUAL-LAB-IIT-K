var bgn = document.querySelector(".bg");
var part1 = document.querySelector(".part1");
var nxt1 = document.querySelector(".nxt1");
const imc = () => {
    part1.classList.remove("hide");
};
nxt1.addEventListener("click", imc);
