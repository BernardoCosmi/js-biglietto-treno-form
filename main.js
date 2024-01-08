//DEFINIZIONE VARIABILI 
const nomePasseggero = document.getElementById( "name" )
const kmPercorso = document.getElementById( "km" )
const etaPasseggero = document.getElementById( "eta" )
const sendButton = document.getElementById( "send-btn" )
const cancelButton = document.getElementById ( "cancel-btn" )
const prezzoBase = (kmPercorso * 0.21);
let prezzoBiglietto = 0
let prezzoOver = 0
let prezzoUnder = 0

console.log(prezzoBase)
//Applicazione sconti
sendButton.addEventListener("click",
    function () {
        if (etaPasseggero.value <= 18){
            prezzoUnder = (prezzoBase.value * (80/100));
            prezzoBiglietto = prezzoUnder.toFixed(2)
            console.log('Prezzo biglietto under 18 ' + prezzoBiglietto.value + '€');
            
            document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value
            document.getElementById("offerta").innerHTML = "Tariffa ridotta Minorenni"
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 1;
            document.getElementById("price").innerHTML = prezzoBiglietto.value

        } else if (etaPasseggero.value >= 65){
            prezzoOver = (prezzoBase.value * (60/100));
            prezzoOver = prezzoOver.toFixed(2)
            console.log('Prezzo biglietto over 65 ' + prezzoBiglietto.value + '€');
            
            document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value
            document.getElementById("offerta").innerHTML = "Tariffa ridotta Over 65"
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 1;
            document.getElementById("price").innerHTML = prezzoBiglietto

        } else{
            prezzoBiglietto = prezzoBase.toFixed(2)
            console.log('Prezzo del biglietto non soggetto a sconti ' + prezzoBase.value + '€');
            
            document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value
            document.getElementById("offerta").innerHTML = "Tariffa standard"
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById("CP").innerHTML = Math.floor(Math.random() * 99999) + 1;
            document.getElementById("price").innerHTML = prezzoBiglietto
        }

})

cancelButton.addEventListener("click", function(){
    location.reload()
})








//Applicazione sconti

