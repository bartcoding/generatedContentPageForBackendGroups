const titleElement = document.querySelector("title");


const randomTitles = ["awesome title","crazy title","rediculous title", "PATATE! #Manuel/Izuna"]

randomizetitle();

function randomizetitle(){
    //number between 0-1 * 4 -> getal tussen 0 en 4, afronden naar beneden
    let randomnumber = Math.floor(Math.random()*4);
    let randomTitle = randomTitles[randomnumber];
    titleElement.text = randomTitle;
}