const form = document.querySelector(".form");
const initalValueEl = document.querySelector(".initalValue");
const initialQuantityEl = document.querySelector(".initialQuantity");
const finalValueEl = document.querySelector(".finalValue");
const messageEl = document.querySelector(".message");
form.addEventListener("submit", submitHandler);
function submitHandler(e) {
  e.preventDefault();
  const initalValue = Number(initalValueEl.value);
  const initialQuantity = Number(initialQuantityEl.value);
  const finalValue = Number(finalValueEl.value);
  if (initalValue && initialQuantity && finalValue)
    calculateProfitAndLoss(initalValue, initialQuantity, finalValue);
}
function calculateProfitAndLoss(initalValue, initialQuantity, finalValue) {
  if (initalValue < finalValue) {
    // profit
    const profit = (finalValue - initalValue) * initialQuantity;
    const profitPercentage = (profit / (initalValue * initialQuantity)) * 100;
    showMessage(
      `Hey the profirt is ${profit} and the percentage is ${profitPercentage}%`,
      "profit"
    );
  } else if (initalValue > finalValue) {
    // loss
    const loss = (initalValue - finalValue) * initialQuantity;
    const lossPercentage = (loss / (initalValue * initialQuantity)) * 100;
    showMessage(
      `hey the loss is ${loss} and the percent is ${lossPercentage}%`,
      "loss"
    );
    console.log(`loss`);
  } else {
    showMessage("No pain no gan and no gain no pain", null);
    console.log(`No change`);
  }
}
function showMessage(message, classToBeAdded) {
  if (classToBeAdded) {
    messageEl.classList.add(`${classToBeAdded}`);
  } else {
    messageEl.classList.remove("profit");
    messageEl.classList.remove("loss");
  }
  messageEl.innerHTML = message;
}
