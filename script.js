// Cotação da moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
    
    const hashCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hashCharactersRegex, "");

})

// Captando o evento de submit (enviar) do formulario.
form.onsubmit = (event) => {
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$");
            break;        
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
            
    }
}

// Função para converter a moeda.

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${price}`

        footer.classList.add("show-result")

    } catch (error) {
        footer.classList.remove("show-result")
        alert("Não foi possível converter a moeda.");
    }
}

function FormatCurrencyBRL(value) {

}
