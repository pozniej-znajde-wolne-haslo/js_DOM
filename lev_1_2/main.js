const mainContainer = document.querySelector(".style");
const examples = document.querySelectorAll(".example");
const btn = document.querySelector("#btn");


// function myFunction () {

//   const textNewBcg = "salmon";

//   for (let text of examples) {
//     text.style.backgroundColor = textNewBcg;
//   } 

//   /*  if (textNewBcg) {
//     for (let text of examples) {
//       text.style.backgroundColor = "#6f6f6f";
//     } 
  
//     btn.style.backgroundColor = "#e9e9ed";
//   } */
// }

// version oben funkioniert halb - bcg changes beim click to 'salmon', aber doesnt go back to default..


// ==== ohne onlclick-function in HTML, but with added class in CSS =====
btn.addEventListener("click", () => {
  examples.forEach((example) => {
    example.classList.toggle("newBcg")
  })
})



/* Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.

HTML- und CSS-Code findest du im Kommentarbereich.
Nutze zum Beispiel
getElementsByClassName
for loop
length
Bonus: Wenn man nochmal den Button anklickt, ändert sich die Hintergrundfarbe wieder zurück.
 */