# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./desktop-preview.jpg)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/nft-preview-card-component-solution-gE2OtnkAW2)
- Live Site URL: [NFT preview card component](https://codepen.io/nachogonzalia/pen/RwQzewm)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<div class="card__images">
  <div id="box" class="card__box">
        
  </div>
  <div id="eye" class="card__eye">
    <img src="./images/icon-view.svg" alt="View">
  </div>
  <div id="eth" class="card__img">
    <img src="./images/image-equilibrium.jpg" alt="Equilibrium">
  </div>
</div>
```
```css
.proud-of-this-css {
  .active {
    opacity: 1 !important;
  }
  .mid-opacity {
    opacity: 0.5 !important;
  }
}
```
```js
eye.addEventListener ('mouseenter', () => {
  eye.classList.add('active')
  box.classList.add('mid-opacity')
})

eye.addEventListener ('mouseleave', () => {
  eye.classList.remove('active')
  box.classList.remove('mid-opacity')
})
}
```

## Author

- Frontend Mentor - [@nachogonzalia](https://www.frontendmentor.io/profile/nachogonzalia)
- Twitter - [@nachogonzalia_](https://www.twitter.com/nachogonzalia_)
