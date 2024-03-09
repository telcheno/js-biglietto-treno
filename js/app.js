// Chiedere al utente la DISTANZA da percorrere
let distanza = prompt("Quanti Km devi percorrere?") //string | null

  // Trasformare il dato dal "prompt" da "string" a "number" per potere fare i calcoli
    //Stampa nella console
    distanza = parseInt(distanza);//number
      console.log(distanza);

// Chiedere l'ETA del utente
let eta = prompt("Quanti anni ha il passegiero");//string | null

  // Trasformare il dato dal "prompt" da "string" a "number" per potere fare i calcoli
    //Stampa nella console
    eta = parseInt(eta);// number
      console.log(eta);

// Calcolare il PREZZO TOTALE del biglieto del viaggio a seconda le seguenti condizioni:
    // -Dichiarare il PREZZOKM base del Km (0.20€ al Km)
      //Stampa nella console

const prezzoKm = 0.20; //number
let prezzoTotale = prezzoKm * distanza; 
console.log(prezzoTotale); //number

  // -Dichiara lo SCONTO per i MINORENI di 20% dal PREZZO TOTALE
const sconto20 = 0.2; //number
let scontoMinoreni;
  // -Dichiara lo SCONTO per i OVER 65 di 40% dal PREZZO TOTALE
const sconto40 = 0.4;

// CALCOLO DELLO SOCONTO

// SE ETA è < 18
if(eta < 18){
  //SCONTOMINOTENI = PREZZOTOTALE - SCONTOMINORENI
  scontoMinoreni = prezzoTotale - (prezzoTotale * sconto20);
  console.log(scontoMinoreni);

    //Mostra in console il PREZZOTOTALE - SCONTOMINOTENI 
    //Arotonda il PREZZOTOTALE  con solo 2 decimali come centesimi
  let prezzoMinoreni = scontoMinoreni.toFixed(2);
  console.log(prezzoMinoreni);

  //ALTRIMENTI SE ETA è >= 65
} else if (eta >= 65){
    //SCONTOOVER_65 = PREZZOTOTALE * SCONTO65
  scontoOver_65 = prezzoTotale - (prezzoTotale * sconto40);
  console.log(scontoOver_65);

    //Mostra in console il PREZZOTOTALE - SCONTOOVER_65
    //Arotonda il PREZZOTOTALE  con solo 2 decimali come centesimi
  let prezzoOver_65 = scontoOver_65.toFixed(2);
  console.log(prezzoOver_65);
  //ALTRIMENTI
} else{
    //Mostra PREZZOTOTALE
    //Arotonda il PREZZOTOTALE  con solo 2 decimali come centesimi
  prezzoTotale = prezzoTotale.toFixed(2);
  console.log(prezzoTotale);
}





