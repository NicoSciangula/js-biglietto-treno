// Assegnazioni variabili //

const etaPasseggero = prompt("Scrivi la tua età");
const percorrenza = prompt("Quanti Km vuoi percorrere?");
let prezzoBiglietto = 0.21 * percorrenza;

//

if (etaPasseggero < 18) {
  let scontoUnder18 = prezzoBiglietto * 0.8;
  console.log(`Il costo del biglietto è di : €${scontoUnder18.toFixed(2)}`);
} else if (etaPasseggero > 65) {
  let scontoOver65 = prezzoBiglietto * 0.6;
  console.log(`Il costo del biglietto è di : €${scontoOver65.toFixed(2)}`);
} else {
  console.log(`Il costo del biglietto è di : €${prezzoBiglietto.toFixed(2)}`);
}
