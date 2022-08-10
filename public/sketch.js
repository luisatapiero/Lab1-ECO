let canvas;
let URL = '';
let catFact = null;
let randomUser = null;
let bitcoinPrice = null;
let usPopulation = null;
let dogImage = null;
let img = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    createButtons();



}
function draw() {

    background(35, 34, 35);
    newCursor();
    infoBox();
    showInfo();
}

function infoBox() {
    rectMode(CENTER);
    rect(windowWidth / 2, 260, 1100, 320);
    textSize(10);
    fill(248, 50, 107);
    textAlign(CENTER, CENTER);



}

function showInfo() {
    if (catFact != null) {
        text('FACT ABOUT CATS', windowWidth / 2, 140);
        fill(35, 34, 35);
        textSize(20);
        textWrap(WORD);
        text(catFact.fact, windowWidth / 2, 260)

    }

    if (randomUser != null) {
        text('RANDOM USER', windowWidth / 2, 140);
        fill(35, 34, 35);
        textSize(20);
        text(randomUser.results[0].name.first + ' ' + randomUser.results[0].name.last, windowWidth / 2, 260)

    }

    if (bitcoinPrice != null) {
        text('BITCOIN PRICE', windowWidth / 2, 140);
        fill(35, 34, 35);
        textSize(20);
        text(bitcoinPrice.bpi.USD.rate + ' ' + bitcoinPrice.bpi.USD.code, windowWidth / 2, 260)

    }

    if (usPopulation != null) {
        text('US POPULATION', windowWidth / 2, 140);
        fill(35, 34, 35);
        textSize(20);
        text(usPopulation.data[0].Population, windowWidth / 2, 260)

    }

    if (dogImage != null) {
        text('RANDOM DOG PIC', windowWidth / 2, 140);
        imageMode(CENTER);
        image(img, windowWidth / 2, 300, img.width * 0.4, img.height * 0.4);

    }
}

function createButtons() {

    let buttonCat = createButton('Fact about cats 😺');
    buttonCat.position(220, 520);
    buttonCat.size(180, 50);
    buttonCat.style('font-size', '15px');
    buttonCat.style('color', color(224, 222, 218));
    buttonCat.style('background-color', color(248, 50, 107));
    buttonCat.style('border-color', color(248, 50, 107));
    buttonCat.mousePressed(generateCatFact);

    let buttonUser = createButton('Random user 🤷🏻‍♀️');
    buttonUser.position(450, 520);
    buttonUser.size(180, 50);
    buttonUser.style('font-size', '15px');
    buttonUser.style('color', color(224, 222, 218));
    buttonUser.style('background-color', color(248, 50, 107));
    buttonUser.style('border-color', color(248, 50, 107));
    buttonUser.mousePressed(generateRandomUser);

    let buttonBitcoin = createButton('Bitcoin price 💲');
    buttonBitcoin.position(680, 520);
    buttonBitcoin.size(180, 50);
    buttonBitcoin.style('font-size', '15px');
    buttonBitcoin.style('color', color(224, 222, 218));
    buttonBitcoin.style('background-color', color(248, 50, 107));
    buttonBitcoin.style('border-color', color(248, 50, 107));
    buttonBitcoin.mousePressed(generateBitcoinPrice);

    let buttonUS = createButton('US population 🌎');
    buttonUS.position(910, 520);
    buttonUS.size(180, 50);
    buttonUS.style('font-size', '15px');
    buttonUS.style('color', color(224, 222, 218));
    buttonUS.style('background-color', color(248, 50, 107));
    buttonUS.style('border-color', color(248, 50, 107));
    buttonUS.mousePressed(generateUSPopulation);

    let buttonDog = createButton('Dog image 🐶');
    buttonDog.position(1140, 520);
    buttonDog.size(180, 50);
    buttonDog.style('font-size', '15px');
    buttonDog.style('color', color(224, 222, 218));
    buttonDog.style('background-color', color(248, 50, 107));
    buttonDog.style('border-color', color(248, 50, 107));
    buttonDog.mousePressed(generateDogImage);

}

function generateCatFact() {
    URL = 'https://catfact.ninja/fact'
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            catFact = data
            console.log(catFact.fact)
        })

    resetInfo()
}

function generateRandomUser() {
    // console.log('funciono') 
    URL = 'https://randomuser.me/api/'
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            randomUser = data
            console.log(randomUser.results[0].name)
        })

    resetInfo()
}

function generateBitcoinPrice() {
    URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            bitcoinPrice = data
            console.log(bitcoinPrice.bpi.USD.rate)
        })

    resetInfo()
}

function generateUSPopulation() {
    URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            usPopulation = data
            console.log(usPopulation.data[0].Population)
        })

    resetInfo()


}

function generateDogImage() {
    URL = 'https://dog.ceo/api/breeds/image/random'
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            dogImage = data
            console.log(dogImage.message)
            //img.resize(12, 12); 
            img = loadImage(dogImage.message);

        })

    resetInfo()


}

function resetInfo() {
    catFact = null;
    randomUser = null;
    bitcoinPrice = null;
    usPopulation = null;
    dogImage = null;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(224, 222, 218);
    ellipse(pmouseX, pmouseY, 5, 5);
}