# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/article-preview-component-bleD0ilA0L)
- Live Site URL: [Article preview component](https://codepen.io/nachogonzalia/pen/NWyZoXd)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- [SASS](https://sass-lang.com/) - CSS preprocessor

### What I learned

```js
const proudOfThisCodeBlock = () => {
  document.addEventListener('click', (e) => {
  if (e.target.id !== 'share-btn' && e.target.id !== 'share-active') {
    shareActive.classList.add('hide')
    shareMenu.classList.add('hide')
  }
}
```
## Author

- Frontend Mentor - [@nachogonzalia](https://www.frontendmentor.io/profile/nachogonzalia)
- Twitter - [@nachogonzalia_](https://www.twitter.com/nachogonzalia_)
