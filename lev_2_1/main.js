const navHome = document.getElementById("navHome");
const navNews = document.getElementById("navNews");
const navContact = document.getElementById("navContact");
const btnNavChange = document.getElementById("navChange");



let countClicks = 0; // counter for the btnNavChange

btnNavChange.addEventListener('click', () => {
    countClicks ++
    countClicks % 2 === 0 ? navHome.innerHTML = "Home" : navHome.innerHTML = "emoH"
    navHome.classList.toggle("navHomeBcg"); // changes styles for navHome (class added into css!!)
})


//===== mit onlick fn im html - change of color-styles does NOT go back to default !!! =====

// function changeHomeLinkStyle () {
//     let newBcg = "rgb(233, 147, 191)"
//     navHome.style.backgroundColor = newBcg;
//     navHome.style.color= "#000";
//     navHome.innerHTML = reverseString(navHome.innerHTML);
// }

// function reverseString (str) {
//     let splitString =str.split("");
//     let reverseCharacters = splitString.reverse();
//     let newOutput = reverseCharacters.join("")

//     return newOutput;
// }


/* 
In dieser Übung werden wir DOM Elements kennenlernen.
Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.
Der Code befindet sich im Kommentar.
Nutze:
onclick
getElementById
 */