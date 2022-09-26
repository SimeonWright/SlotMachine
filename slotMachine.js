

document.querySelector('.Auto').addEventListener('click', runIt,  )
document.querySelector('.Spin').addEventListener('click', getRandomNumber)
document.querySelector('.PowerUp').addEventListener('click', Upgrade)
document.querySelector('.SuperPowerUp').addEventListener('click', SuperUpgrade)



const pics =[
    'pictures/pic1.png',
    'pictures/pic2.png',
    'pictures/pic3.png',
    'pictures/pic4.png',
    'pictures/pic5.png'
 ];

let FirstImage = document.getElementById("slot1");
let SecondImage = document.getElementById("slot2");
let ThirdImage = document.getElementById("slot3");
let total= parseInt(Balance);

function runIt(event) {
    event.preventDefault() 
    const Balance= document.querySelector(".StartingPot").value
    let total= parseInt(Balance)
    // const Bet = document.querySelector(".Bet").value
    document.querySelector('#TotalBet').innerText = total
    console.log("working")
}

function getRandomNumber(event) {
        event.preventDefault()     
        let FirstImage = Math.floor(Math.random()*pics.length);
        console.log(pics);
        console.log(FirstImage);

        let SecondImage = Math.floor(Math.random()*pics.length);
        console.log(pics);
        console.log(SecondImage);

        let ThirdImage = Math.floor(Math.random()*pics.length);
        console.log(pics);
        console.log(ThirdImage)

        document.getElementById('slot1').src =pics[FirstImage]
        document.getElementById('slot2').src =pics[SecondImage]
        document.getElementById('slot3').src =pics[ThirdImage]

        if (FirstImage === SecondImage && SecondImage=== ThirdImage) {
            alert("GUESS WHO?")
        }
}

function Upgrade(e){
    e.preventDefault() 
    const Balance= document.querySelector(".StartingPot").value
    let total= parseInt(Balance)
    total = total + 100
    document.querySelector('#TotalBet').innerText = total
    console.log('idk')

}
function SuperUpgrade(e){
    e.preventDefault() 
    const Balance= document.querySelector(".StartingPot").value
    let total= parseInt(Balance)
    total = total + 1000
    document.querySelector('#TotalBet').innerText = total
    console.log('idk')

}

















// function getElement(id) {
//     return document.getElementById(id);  
// }

// function SpinPhotos() {
//     const FirstImage= document.querySelector('#slot1');
//     const SecondImage = document.querySelector('#slot2');
//     const ThirdImage = document.querySelector('#slot3');

//     const num1 = getRandomNumber();
//     const num2 = getRandomNumber();
//     const num3 = getRandomNumber();

//     // slot1.innerHTML = 'num1';
//     // slot2.innerHTML = `num2`;
//     // slot3.innerHTML = `num3`;
// }

// //     if (num1 === num2 && num1 === num3) {
// //         playBoing();
// //         showMessage();
// //     } else {
// //         hideMessage();
// //     }
// // }
// // }
// // function horse() {
// //   total = total + 0
// //   document.querySelector('#placeToPutResult').innerText = total
// // }
// // function baskets() {
// //   total = total + -2
// //   document.querySelector('#placeToPutResult').innerText = total
// // 