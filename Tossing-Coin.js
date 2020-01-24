//vars
// images

const img1 = "http://www.parkquarters.com/wp-content/uploads/2009/11/Park-Quarter-Obverse-Design-199x200.jpg";

const img2 = "https://cardinalcollectibles.com/wp-content/uploads/2019/03/us-quarter.jpg"

const imgAnimation = "https://d33wjekvz3zs1a.cloudfront.net/wp-content/uploads/2017/06/US-coin-Spin.gif"

// HTML Values

const toss = document.getElementById('tossIt');

const boxOut = document.getElementById('box-out');

const coin1 = document.getElementById('coin-1');

const coin2 = document.getElementById('coin-2');

const coin3 = document.getElementById('coin-3');

// for the functions

let i = 0;

let imgtoss;

let drop1 = 0;

let drop2 = 0;


// Init Function

function Init(){
    
    toss.src = img1;

    boxOut.src = imgAnimation;

    document.getElementById('option-1').value = '';
    document.getElementById('option-2').value = '';
    document.getElementById('box-option').innerHTML = '';
    document.getElementById('box-result').innerHTML = '';

    document.getElementById('box-option-final').innerHTML = '';
    document.getElementById('box-result-final').innerHTML = '';
    document.getElementById('warning').style.visibility = 'hidden';

    coin1.style.visibility = 'hidden';
    coin2.style.visibility = 'hidden';
    coin3.style.visibility = 'hidden';

    i = 0;
    drop1 = 0;
    drop2 = 0;

}
// main

function TossingCoin(){

    let arr = ['faces', 'crowns'];

    let tossed = arr[Math.floor(Math.random()*arr.length)];

        if (tossed === arr[0]) {

            toFaces();

            drop1++;

        } else {

            toCrown();

            drop2++;

        }
};

// Flipping Coin to Faces

function toCrown() {

            toss.src = imgAnimation;

            imgtoss = setTimeout(() => {
                
                toss.src = img2;
                boxOut.src = img2;
                ShowOption2();

            }, 2000);

            imgtoss = setTimeout(() => {
                
                toss.src = imgAnimation;

            }, 8000);

}

//Flipping Coin to Crowns

function toFaces() {

            toss.src = imgAnimation;

            imgtoss = setTimeout(() => {
                
                toss.src = img1;
                boxOut.src = img1;
                ShowOption1();

            }, 2000);

            imgtoss = setTimeout(() => {
                
                toss.src = imgAnimation;

            }, 8000);

}

// Showing Results

function ShowOption1() {

    const option = document.getElementById('option-1').value;

    const outPut = document.getElementById('box-option').innerHTML = "You Should take the Option 1";

    const optionOut = document.getElementById('box-result').innerHTML = option;

}

function ShowOption2() {

    const option = document.getElementById('option-2').value;

    const outPut = document.getElementById('box-option').innerHTML = "You Should take the Option 2";

    const optionOut = document.getElementById('box-result').innerHTML = option;

}

// Showing the 3 options

function ThreeOptions(){

    if (drop1 === 2) {
        imgtoss = setTimeout(() => { 
        coin1.src = img1;
        coin1.style.visibility = 'visible';
        coin2.src = img1;
        coin2.style.visibility = 'visible';
        coin3.src = img1;
        coin3.style.visibility = 'visible';
        document.getElementById('box-option-final').innerHTML = "You Should Definitely take the Option 1";
        document.getElementById('box-result-final').innerHTML = document.getElementById('option-1').value;
        document.getElementById('warning').style.visibility = 'visible';
        imgtoss = setTimeout(() => {
            Init();
        }, 10000);
    }, 2000);
    }

    else if (drop2 === 2) {
        imgtoss = setTimeout(() => {
        coin1.src = img2;
        coin1.style.visibility = 'visible';
        coin2.src = img2;
        coin2.style.visibility = 'visible';
        coin3.src = img2;
        coin3.style.visibility = 'visible';
        document.getElementById('box-option-final').innerHTML = "You Should Definitely take the Option 2";
        document.getElementById('box-result-final').innerHTML = document.getElementById('option-2').value;
        document.getElementById('warning').style.visibility = 'visible';
        imgtoss = setTimeout(() => {
            Init();
        }, 10000);
    }, 2000);
    }

}

// Call

function Tossed() {

    i++;

    document.getElementById('tossIt').addEventListener("click", TossingCoin());
    
    document.getElementById('coin-' + i).src = imgAnimation;

    document.getElementById('coin-' + i).style.visibility = 'visible';

    ThreeOptions();

};