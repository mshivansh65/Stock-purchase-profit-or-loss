const form = document.querySelector(".form");
const initalValueEl = document.querySelector(".initalValue");
const initialQuantityEl = document.querySelector(".initialQuantity");
const finalValueEl = document.querySelector(".finalValue");
const messageEl = document.querySelector(".message");
// overlay
const overlay = document.querySelector(".overlay");
const message = document.querySelector("#message");
const backdrop = document.querySelector(".backdrop");
const overlayBtn = document.querySelector("#overlay-btn");

function showMessageOverlay(recivedMessage = "") {
  overlay.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  message.innerHTML = recivedMessage;
}
function hideOverlay() {
  overlay.classList.add("hidden");
  backdrop.classList.add("hidden");
}
hideOverlay();
overlayBtn.addEventListener("click", hideOverlay);
backdrop.addEventListener("click", hideOverlay);
// END OVERLAY CODE
form.addEventListener("submit", submitHandler);
function submitHandler(e) {
  e.preventDefault();
  const initalValue = Number(initalValueEl.value);
  const initialQuantity = Number(initialQuantityEl.value);
  const finalValue = Number(finalValueEl.value);
  if (initalValue === 0 || initialQuantity === 0) {
    showMessageOverlay(`Initial Quantity Can't be zero`);
  } else if (initalValue < 0 || initialQuantity < 0 || finalValue < 0) {
    showMessageOverlay("Number's cant be negative");
  } else if (initalValue && initialQuantity && finalValue === 0) {
    calculateProfitAndLoss(initalValue, initialQuantity, finalValue);
  } else if (initalValue && initialQuantity && finalValue) {
    calculateProfitAndLoss(initalValue, initialQuantity, finalValue);
  } else {
    showMessageOverlay("Please Enter Something");
  }
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
