Descrizione:
/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

/* STRUMENTI

- const / let
- consolelog
- condizioni
- 

*/



document.getElementById("generate").addEventListener("click", function() {
   let userIdentity = document.getElementById("user_identity").value;
   let distanceKm = document.getElementById("distance").value;
   let userAge = document.getElementById("age").value;

   let ticketName = document.getElementById("ticket_name");
   
   
   ticketName.innerHTML = userIdentity;

   


   
  });




