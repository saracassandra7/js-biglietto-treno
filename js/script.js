const kmPercorso = parseInt(prompt('Quanti km devi percorrere per il tuo viaggio?'));
const etaUtente = parseInt(prompt('Quanti anni hai?'));

const prezzoAlKm = 0.21
const maggiorenne = 18
const over = 65
const scontoMaggiorenne = 0.2
const scontoOver = 0.4

const PrezzoBiglietto = kmPercorso * prezzoAlKm
let prezzoTot;

if (etaUtente < maggiorenne){
  prezzoTot = PrezzoBiglietto * scontoMaggiorenne;
  console.log(PrezzoBiglietto);

} else if (etaUtente > over){
  prezzoTot = PrezzoBiglietto * scontoOver;
  console.log(PrezzoBiglietto);
  
} else {
  prezzoTot = PrezzoBiglietto;
  console.log(PrezzoBiglietto);
  
}

