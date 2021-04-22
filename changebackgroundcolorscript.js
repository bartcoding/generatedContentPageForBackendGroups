const changeColorButton = document.querySelector("#changecolorbutton");




changeColorButton.addEventListener('click', changeBackgroundColor );

function changeBackgroundColor(){
    let body = document.querySelector('body');
    let color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    body.style.backgroundColor = color;
}