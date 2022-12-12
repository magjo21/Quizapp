console.clear();

const form = document.querySelector('[data-js="input-question"]');

form.addEventListener("submit", (/*event*/) => {
  // event.preventDefault();

  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);

  const li = document.createElement("li");
  li.classList.add("addQuestion");
  li.textContent = "Im a message";
  toastContainer.append(li);
});

const questionElement = document.querySelector('[data-js="input-question"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const amountleft = document.querySelector('[data-js="amountleft"]');
const maxLength = questionElement.getAttribute("maxlength");
const answerElement = document.querySelector('[data-js="input-answer"]');

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

const updateAmountleft = (value) => {
  amountleft.innerText = value;
};

updateAmountleft(maxLength);

answerElement.addEventListener("input", () => {
  updateAmountleft(maxLength - answerElement.value.length);
});
