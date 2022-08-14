const submitBtn = document.getElementById("submit-button");
const completeContainer = document.querySelector(".complete");
const continueBtb = document.querySelector(".continue");

const cvcCard = document.querySelector(".cvc");
const cardCard = document.querySelector(".card-number");
const nameCard = document.querySelector(".name");
const dateCard = document.querySelector(".date");

const form = document.querySelector(".form");

const cvcInput = document.querySelector(".cvc-input");
const cardInput = document.querySelector(".number-input");
const nameInput = document.querySelector(".name-input");
const mmInput = document.querySelector(".mm-input");
const yyInput = document.querySelector(".yy-input");

const reload = function () {
  window.location.reload();
};

continueBtb.addEventListener("click", reload);

const confirm = function () {
  if (
    nameInput.value != 0 &&
    cardInput.value != 0 &&
    mmInput.value != 0 &&
    yyInput.value != 0 &&
    cvcInput.value != 0
  ) {
    nameCard.textContent = nameInput.value;
    cardCard.textContent = cardInput.value;
    dateCard.textContent = `${mmInput.value}/${yyInput.value}`;
    cvcCard.textContent = cvcInput.value;
    completeContainer.classList.remove("hidden");
  }
};

form.addEventListener("submit", function (e) {
  confirm();
  e.preventDefault();
});

// submitBtn.addEventListener("click", confirm);
