const targetCurrencyEl = document.querySelector("#targetCurrency");
const baseCurrencyEl = document.querySelector("#baseCurrency");
const resetEl = document.querySelector("#btn-reset");
const countEl = document.querySelector("#btn-count");
const outputEl = document.querySelector("#count-output");
let selectedCurrency = "EUR";

document.getElementById("base").addEventListener("change", function () {
  selectedCurrency = this.value;
});

document.getElementById("btn-count").addEventListener("click", function () {
  let loader = `<div class="boxLoading"></div>`;
  document.getElementById("count-output").innerHTML = loader;
  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.rates[0].mid * baseCurrencyEl.value);
      outputEl.innerHTML = Number(
        data.rates[0].mid * baseCurrencyEl.value
      ).toFixed(2);
    })
    .catch((err) => {
      console.log(err);
    });
});

document.getElementById("btn-reset").addEventListener("click", function () {
  baseCurrencyEl.value = 0;
  targetCurrencyEl.value = 0;
  document.querySelector("#count-output").innerHTML = ":" + " " + 0;
});
