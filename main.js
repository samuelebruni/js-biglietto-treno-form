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

    const priceForKm = 0.21;
    const userIdentity = document.getElementById("user_identity").value;
    const distanceKm = document.getElementById("distance").value;
    const userAge = document.getElementById("age").value;
    let priceTicket = priceForKm * distanceKm;
    let salePrice;

    if (userAge === "2") {
        salePrice = (priceTicket / 100) * 20;
        //sconto per minorenne
    } else if (userAge === "1") {
        salePrice = (priceTicket / 100) * 40;
        //sconto per over 65
    } else {
        salePrice = 0;
        //nessuno sconto
    }

    const finalPrice = priceTicket - salePrice;

    console.log(priceForKm, userIdentity, distanceKm, userAge, priceTicket, salePrice, finalPrice);

  });




