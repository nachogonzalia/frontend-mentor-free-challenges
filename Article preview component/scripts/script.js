// buttons
const shareBtn = document.getElementById('share-btn')
const shareActive = document.getElementById('share-active')

// share menu
const shareMenu = document.getElementById('share-menu')

shareBtn.addEventListener('click', () => {
  shareActive.classList.remove('hide')
  shareMenu.classList.remove('hide')

  document.addEventListener('click', (e) => {
    if (e.target.id !== 'share-btn' && e.target.id !== 'share-active') {
      shareActive.classList.add('hide')
      shareMenu.classList.add('hide')
    }
  })
})

shareActive.addEventListener('click', () => {
  shareActive.classList.add('hide')
  shareMenu.classList.add('hide')
})