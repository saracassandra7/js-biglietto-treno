const kmPercorso = parseInt(prompt('Quanti km devi percorrere per il tuo viaggio?'));
const etaUtente = parseInt(prompt('Quanti anni hai?'));

const prezzoAlKm = 0.21
const maggiorenne = 18
const over = 65
const scontoMaggiorenne = 0.2
const scontoOver = 0.4

const PrezzoBiglietto = kmPercorso * prezzoAlKm
let prezzoTot;
let sconto;

if (etaUtente < maggiorenne){
  sconto = PrezzoBiglietto * scontoMaggiorenne;
  prezzoTot = PrezzoBiglietto - sconto;
  
} else if (etaUtente > over){
  sconto = PrezzoBiglietto * scontoOver;
  prezzoTot = PrezzoBiglietto - sconto;
  
} else {
  prezzoTot = PrezzoBiglietto;

}

let prezzoFinale = prezzoTot.toFixed(2);

document.getElementById('dati_biglietto').innerHTML = `Ciao, per percorrere ${kmPercorso} km il costo del biglietto sarà di ${prezzoFinale} €. <br>
Grazie per aver scelto di viaggiare con noi :)`

