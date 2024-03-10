console.log("Biglieto del treno");

// Chiedere al utente la DISTANZA da percorrere
// -Trasformare il dato dal "prompt" da "string" a "number" per potere fare i calcoli
const km = parseInt(prompt("Quanti Km devi percorrere?")) //number (prompt ritorna string | null) 
console.log(km, typeof km);

// Chiedere l'ETA del utente
// -Trasformare il dato dal "prompt" da "string" a "number" per potere fare i calcoli
const eta = parseInt(prompt("Quanti anni ha il passegiero"));//number (prompt ritorna string | null)
console.log(eta, typeof eta);

//validare i dati
// - km > 0
console.log(km > 0);
// - eta >= 0
console.log(eta >= 0);
// - km non è NaN
console.log(!isNaN(km));
// - età non è NaN
console.log(!isNaN(eta));

//SE i dati non sono validi
if(km > 0 && eta >= 0 && !isNaN(km) && !isNaN(eta)){

    // Calcolare il PREZZO TOTALE del biglieto del viaggio a seconda le seguenti condizioni:
    // -Dichiarare il PREZZOKM base del Km (0.21€ al Km)
    const prezzoKm = 0.21; //number
    const prezzoBase = prezzoKm * km;
    console.log(prezzoBase, typeof prezzoBase); //number

    // -Dichiara lo SCONTO per i MINORENI di 20% dal PREZZO BASE
    let sconto = 0; //number
    console.log(sconto, typeof sconto)

    // CALCOLO DELLO SOCONTO

    // "le variabili dichiarate dentro le condizionali non posono essere ragiunte dal di fuori di essa!""

    // SE ETA è < 18 => sconto 20%
    if(eta < 18){
      sconto = 0.2;// number
      
      //ALTRIMENTI SE ETA è >= 65 sconto 40%
    } else if (eta >= 65){
      sconto = 0.4;// number
      
    } 

    /* "bloco non indispensabile per che la variabile già dichiarata 
    ALTRIMENTI sconto 0%
    else{
      sconto = 0; // number
    } */

    const prezzoTotale = prezzoBase - prezzoBase * sconto; // number
    console.log(prezzoTotale.toFixed(2), prezzoTotale);// toFixed ritorna un string come dato
    
    //BONUS
    const priceElement = document.getElementById("price");
    console.log(priceElement);
    // nel inserimento non va il ";" altrimenti non va il codice!!
    priceElement.innerHTML = "Il prezzo del biglieto è: " + prezzoTotale.toFixed(2) + "&euro;"

  } else{
    //ALTRIMWNRTI 
    // -stampare che i dati non sono validi
    alert("I dati non sono validi");
  }
  