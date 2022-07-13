# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What i learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/advice-generator-app-PQSKnr4viR)
- Live Site URL: [Advice generator app](https://codepen.io/nachogonzalia/full/rNdMRQE)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS
- JavaScript
- API calls


### What I learned

```html
<!-- use of the q tag to make quotes -->

<p class="card__advice">
  <q class="advice-quote" id="adviceQuote">It is easy to sit up and take notice, what's difficult isgetting up and taking action.</q>
</p>
```
```js
// called an api

fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
  .then(response => response.json())
  .then(data => {
    let advice = data.slip
    adviceId.innerHTML = `ADVICE #${advice.id}`
    adviceQuote.innerHTML = `${advice.advice}`
  })
```

## Author

- Frontend Mentor - [@nachogonzalia](https://www.frontendmentor.io/profile/nachogonzalia)
- CodePen - [@nachogonzalia](https://codepen.io/nachogonzalia)
- FreeCodeCamp - [@nachogonzalia](https://www.freecodecamp.org/nachogonzalia)
- Twitter - [@nachogonzalia_](https://www.twitter.com/nachogonzalia_)