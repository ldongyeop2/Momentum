const body = document.querySelector("body");
const IMG_Number = 2;



function paintImage(imgNumber) {
    const image = new Image();
    image.src =`img2.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}


function getRandom(){
    const number = Math.floor(Math.random() * IMG_Number);

    return number;

}
function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();