let canvas;
let URL = '';
let catFact = null;
let randomUser = null;
let bitcoinPrice = null;
let usPopulation = null;
let dogImage = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    createButtons();
    /*console.log(fetch(URL).then(response => response.json()));
    fetch(URL)
        .then(response => response.json())
        .then(data => {catFact=data
                        console.log(catFact.fact)                
        } )*/
}
function draw() {
    //background(0, 50);
    background(35,34,35);
    newCursor();
    infoBox();
    if(catFact != null){
        textSize(20);
        textWrap(WORD);
        text(catFact.fact, 50, 50, 300)
    }
    
    
}

function infoBox(){
    rectMode(CENTER);
    rect(windowWidth/2, 260, 1100, 320);
    textSize(10);
    fill(248,50,107);
    textAlign(CENTER, CENTER);
    text('SELECT A BUTTON', windowWidth/2, 140);
}

function createButtons(){

    let buttonCat = createButton('Fact about cats 😺');
    buttonCat.position(220, 520);
    buttonCat.size(180,50);
    buttonCat.style('font-size', '15px');
    buttonCat.style('color', color(224,222,218));
    buttonCat.style('background-color', color(248,50,107));
    buttonCat.style('border-color', color(248,50,107));
    buttonCat.mousePressed(generateCatFact);
     
    let buttonUser = createButton('Random user 🤷🏻‍♀️');
    buttonUser.position(450, 520);
    buttonUser.size(180,50);
    buttonUser.style('font-size', '15px');
    buttonUser.style('color', color(224,222,218));
    buttonUser.style('background-color', color(248,50,107));
    buttonUser.style('border-color', color(248,50,107));
    buttonUser.mousePressed(generateRandomUser);
    
    let buttonBitcoin = createButton('Bitcoin price 💲');
    buttonBitcoin.position(680, 520);
    buttonBitcoin.size(180,50);
    buttonBitcoin.style('font-size', '15px');
    buttonBitcoin.style('color', color(224,222,218));
    buttonBitcoin.style('background-color', color(248,50,107));
    buttonBitcoin.style('border-color', color(248,50,107));
    buttonBitcoin.mousePressed(generateBitcoinPrice);
   
    let buttonUS = createButton('US population 🌎');
    buttonUS.position(910, 520);
    buttonUS.size(180,50);
    buttonUS.style('font-size', '15px');
    buttonUS.style('color', color(224,222,218));
    buttonUS.style('background-color', color(248,50,107));
    buttonUS.style('border-color', color(248,50,107));
    buttonUS.mousePressed(generateUSPopulation);

    let buttonDog = createButton('Dog image 🐶');
    buttonDog.position(1140, 520);
    buttonDog.size(180,50);
    buttonDog.style('font-size', '15px');
    buttonDog.style('color', color(224,222,218));
    buttonDog.style('background-color', color(248,50,107));
    buttonDog.style('border-color', color(248,50,107));
    buttonDog.mousePressed(generateDogImage);

}

function generateCatFact(){
    URL = 'https://catfact.ninja/fact'
    fetch(URL)
        .then(response => response.json())
        .then(data => {catFact=data
                        console.log(catFact.fact)                
        } )
}

function generateRandomUser(){
   // console.log('funciono') 
    URL = 'https://randomuser.me/api/'
    console.log('funciono') 
    fetch(URL)
        .then(response => response.json())
        .then(data => {randomUser=data
                        console.log(randomUser.results[0].name)                
        } )
}

function generateBitcoinPrice(){
    URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(URL)
        .then(response => response.json())
        .then(data => {bitcoinPrice=data
                        console.log(bitcoinPrice.bpi.USD.rate)                
        } )
}

function generateUSPopulation(){
    URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    fetch(URL)
        .then(response => response.json())
        .then(data => {usPopulation=data
                        console.log(usPopulation.data[0].Population)                
        } )
}

function generateDogImage(){
    URL = 'https://dog.ceo/api/breeds/image/random'
    fetch(URL)
        .then(response => response.json())
        .then(data => {dogImage=data
                        console.log(dogImage)                
        } )
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(224,222,218);
    ellipse(pmouseX, pmouseY, 5, 5);
    //text(pmouseX, " " + " " ,pmouseY, 10, 10,10);
}