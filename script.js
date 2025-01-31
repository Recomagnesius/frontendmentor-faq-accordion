const faqAnswers = document.getElementsByClassName('faq__list-item__text')
const faqAnswersArr = Array.from(faqAnswers);
const faqIcons = document.getElementsByClassName('faq-toggle');
const faqIconsArr = Array.from(faqIcons);
console.log(faqIconsArr);
faqIconsArr.forEach((e) => {
  e.addEventListener('click', toggleText);
});

function toggleText(e){
  e.classList.toggle(hide);
}