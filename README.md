# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![screenshot](./assets/images/Screenshot%202025-02-02%20215437.png)

### Links

- Solution URL: (https://github.com/Recomagnesius/frontendmentor-faq-accordion)
- Live Site URL: (https://recomagnesius.github.io/frontendmentor-faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Learned about *details* and *summary* elements, how to use and style them.

```html
<details class="faq__list-details">
                <summary class="faq__list-item__title">What is Frontend Mentor, and how will it help me?</summary>
                <p class="faq__list-item__text">
                  Frontend Mentor offers realistic coding challenges to help developers
                  improve their frontend coding skills with projects in HTML, CSS, and JavaScript.
                  It's suitable for all levels and ideal for portfolio building.
                </p>
              </details>
```
```css
    .faq__list-details[open] > .faq__list-item__title::after{
      content: url('./assets/images/icon-minus.svg');
    }
```

### Continued development

I want to continue improving my responsive css. It takes me a lot of time to figure out styling at the moment

## Author

- Website - [Danil](https://www.your-site.com)
- Frontend Mentor - [@Recomagnesius](https://www.frontendmentor.io/profile/Recomagnesius)