function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const scriptURL = 'https://script.google.com/macros/s/AKfycbzn58SLHjTo6AVa9kpqdAwOY75urtSEgYTUUuDzO0JORkqx_KZfoUmDfC3Gw-3RDBdUKw/exec'

const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {

  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })

    .then(response => console.log('Success!', response))

    .catch(error => console.error('Error!', error.message))

})