# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./desktop-preview.jpg)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/interactive-rating-component-sibRuynOmv)
- Live Site URL: [Interactive rating component](https://codepen.io/nachogonzalia/pen/poaXKjP)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- [SASS](https://sass-lang.com/) - CSS preprocessor

### What I learned

this is my first component with javascript ever!

```js
submit.addEventListener('click', () => {
  card.classList.add('hidden')
  thankYou.classList.remove('hidden')
  number.textContent = `You selected ${rate} out of 5`
})
```
## Author

- Frontend Mentor - [@nachogonzalia](https://www.frontendmentor.io/profile/nachogonzalia)
- Twitter - [@nachogonzalia_](https://www.twitter.com/nachogonzalia_)
