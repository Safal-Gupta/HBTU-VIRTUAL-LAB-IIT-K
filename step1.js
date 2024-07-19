

var bgn = document.querySelector(".bg");
var part1 = document.querySelector(".part1");
var nxt1 = document.querySelector(".nxt1");



const imc = () => {
   
    part1.classList.remove("hide");
    
};


const pnc = () => {
    
    bgn.classList.add("hide");
    
};



/*
const animation = loadAnimation({
    container: '#lottie-container', // The container element
    path: 'https://lottie.host/13c44a80-fb02-4277-b17b-e29a88a4dd19/PiwEsljqLo.json', // The path to your Lottie file
    renderer: 'svg', // The renderer (svg, canvas, or html)
  });




/*
import { DotLottie } from '@lottiefiles/dotlottie-web';
const dotLottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "https://lottie.host/13c44a80-fb02-4277-b17b-e29a88a4dd19/PiwEsljqLo.json",
});
*/



nxt1.addEventListener("click", imc);
nxt1.addEventListener("click", pnc);


// nxt1.addEventListener("click",animation);







