const nameInput = document.getElementById("vorname");
const surnameInput = document.getElementById("nachname");
const selectCountry = document.getElementById("land");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
  console.log(`Full Name: ${nameInput.value} ${surnameInput.value}, Country: ${selectCountry.value}`);
})


/* 
In dieser Übung werden wir DOM Elements und Forms Value kennenlernen.
Schreibe eine Funktion, die beim Anklicken des Button die Werte in der Konsole ausgibt.
Der Code befindet sich im Kommentar.
Nutze
getElementById
.value;
 */