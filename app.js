const fq1 = document.querySelector(".fq1 .faqs-question i");
const fq2 = document.querySelector(".fq2 .faqs-question i");
const fq3 = document.querySelector(".fq3 .faqs-question i");
const fq4 = document.querySelector(".fq4 .faqs-question i");
const fq5 = document.querySelector(".fq5 .faqs-question i");

const fq1a = document.querySelector(".fq1 .faqs-answer");
const fq2a = document.querySelector(".fq2 .faqs-answer");
const fq3a = document.querySelector(".fq3 .faqs-answer");
const fq4a = document.querySelector(".fq4 .faqs-answer");
const fq5a = document.querySelector(".fq5 .faqs-answer");

fq1.addEventListener("click", () => {
  toggleAnswer(fq1, fq1a);
});

fq2.addEventListener("click", () => {
  toggleAnswer(fq2, fq2a);
});

fq3.addEventListener("click", () => {
  toggleAnswer(fq3, fq3a);
});

fq4.addEventListener("click", () => {
  toggleAnswer(fq4, fq4a);
});

fq5.addEventListener("click", () => {
  toggleAnswer(fq5, fq5a);
});

function toggleAnswer(icon, ans) {
  icon.classList.toggle("fa-circle-plus");
  icon.classList.toggle("fa-circle-minus");
  ans.classList.toggle("active");
}
