//DEFINIZIONE VARIABILI 
const nomePasseggero = document.getElementById('name');
const kmPercorso = document.getElementById('km');
const etaPasseggero = document.getElementById('eta');
const sendButton = document.getElementById('send-btn');
const cancelButton = document.getElementById ('cancel-btn');
let prezzoBiglietto = document.getElementById('price');


//Applicazione sconti
sendButton.addEventListener('click',
    function () {
        console.log(nomePasseggero.value, kmPercorso.value, etaPasseggero.value,)
        if (etaPasseggero.value <= 18){
            prezzoBiglietto = (((kmPercorso.value)*0.21) * (80/100)).toFixed(2);
            console.log('Prezzo biglietto under 18 ' + prezzoBiglietto + '€');
            
            document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value;
            document.getElementById("offerta").innerHTML = "Tariffa ridotta Minorenni";
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 1;
            document.getElementById("price").innerHTML = prezzoBiglietto + "€";

        } else if (etaPasseggero.value >= 65){
            prezzoBiglietto = (((kmPercorso.value)*0.21) * (60/100)).toFixed(2);
            console.log('Prezzo biglietto over 65 ' + prezzoBiglietto + '€');
            
            document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value;
            document.getElementById("offerta").innerHTML = "Tariffa ridotta Over 65";
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 1;
            document.getElementById("price").innerHTML = prezzoBiglietto + "€";

        } else{
            prezzoBiglietto = ((kmPercorso.value)*0.21).toFixed(2);
            console.log('Prezzo del biglietto non soggetto a sconti ' + prezzoBiglietto + '€');
            
            document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value;
            document.getElementById("offerta").innerHTML = "Tariffa standard";
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 1;
            document.getElementById("price").innerHTML = prezzoBiglietto + "€";
        }
})

cancelButton.addEventListener("click", function(){
    location.reload();
})



