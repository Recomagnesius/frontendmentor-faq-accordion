const faqButtons = document.getElementsByClassName('faq-toggle');
const faqButtonsArr = Array.from(faqButtons);
const plusPath = './assets/images/icon-plus.svg';
const minusPath = './assets/images/icon-minus.svg';

faqButtonsArr.forEach((e) => {
  e.addEventListener('click', ToggleTextAndSign);
});

function ToggleTextAndSign(e) { 
  
  toggleSign(e);
  toggleText(e);
}

function toggleText(e) {
  const parent = e.target.closest('li');
  const textForToggle = parent.querySelector('.faq__list-item__text');
  
  textForToggle.classList.toggle('hide');
  textForToggle.classList.toggle('show');
}

function toggleSign(e) { 
  const parent = e.target.closest('li');
  console.log(parent)
  const img = parent.querySelector('.faq-icon');
  console.log(img)
  if (img.src.includes('icon-plus.svg')) {
    img.src = minusPath;
  }
  else { 
    img.src = plusPath;
  }

}
