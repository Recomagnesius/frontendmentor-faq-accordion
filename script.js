const faqAnswers = document.getElementsByClassName('faq__list-item__text')
const faqAnswersArr = Array.from(faqAnswers);
const faqIcons = document.getElementsByClassName('faq-toggle');
const faqIconsArr = Array.from(faqIcons);
faqIconsArr.forEach((e) => {
  e.addEventListener('click', toggleText);
});

function toggleText(e) {
  const parent = e.target.closest('li');
  console.log(parent)
  const textForToggle = parent.querySelector('.fac__list-item__text');
  console.log(textForToggle)
  textForToggle.classList.toggle('hide');
}