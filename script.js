const startEl = document.querySelector("#startCount");
const resetEl = document.querySelector("#btnReset");
const countEl = document.querySelector("#btnResult");
const scoreEl = document.querySelector("#score");
let firstChoose = "EUR";

document.getElementById("start").addEventListener("change", function () {
  firstChoose = this.value;
});

document.getElementById("btnResult").addEventListener("click", function () {
  let loader = `<div></div>`;
  document.getElementById("score").innerHTML = loader;
  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${firstChoose}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.rates[0].mid * startEl.value);
      scoreEl.innerHTML = Number(data.rates[0].mid * startEl.value).toFixed(2);
    })
    .catch((err) => {
      console.log(err);
    });
});

document.getElementById("btnReset").addEventListener("click", function () {
  startEl.value = 0;

  document.querySelector("#score").innerHTML = ":" + " " + 0;
});
