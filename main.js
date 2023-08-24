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

    //elenco variabili utili ai fini dei calcoli
    const priceForKm = 0.21;
    const userIdentity = document.getElementById("user_identity").value;
    const distanceKm = document.getElementById("distance").value;
    const userAge = document.getElementById("age").value;
    let priceTicket = priceForKm * distanceKm;
    let salePrice;

    //operazione per ottenere lo sconto
    if (userAge === "Minorenne") {
        salePrice = (priceTicket / 100) * 20;
        //sconto per minorenne
    } else if (userAge === "Over65") {
        salePrice = (priceTicket / 100) * 40;
        //sconto per over 65
    } else {
        salePrice = 0;
        //nessuno sconto
    }

    //calcolo del prezzo finale
    let finalPrice = Number (priceTicket - salePrice);
    finalPrice = finalPrice.toFixed(2);

    document.getElementById("ticket_name").innerHTML = userIdentity;
    document.getElementById("price").innerHTML = finalPrice + "€";

    //operazione per far apparire il biglietto che si genera
    const element = document.getElementById("dnone");
    element.style.display = "block";

    
    console.log("Nome e Cognome:", userIdentity);
    console.log("Distanza da Percorrere:", distanceKm, "KM");
    console.log(userAge);
    console.log("Sconto Applicato:", salePrice, "euro");
    console.log("Prezzo Finale:", finalPrice, "euro");

  });

  //operazione per resettare completamente il biglietto

  document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("user_identity").value = "";
        document.getElementById("distance").value = "";
        const element = document.getElementById("dnone");
        element.style.display = "none";
  });






