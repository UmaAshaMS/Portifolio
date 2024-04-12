function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const scriptURL = 'https://script.google.com/macros/s/AKfycbzn58SLHjTo6AVa9kpqdAwOY75urtSEgYTUUuDzO0JORkqx_KZfoUmDfC3Gw-3RDBdUKw/exec'

const form = document.forms['submit-to-google-sheet']

//Form submission
form.addEventListener('submit', e => {

  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })

    .then(response => console.log('Success!', response))

    .catch(error => console.error('Error!', error.message))

})

//Validation
document.getElementById("submit-button").addEventListener("click", function() {
  // Get the value of the input field
  var Name = document.getElementById("name").value;

  // Regular expression pattern to match alphabetic characters only
  var pattern = /^[A-Za-z]+$/;

  // Test if the name matches the pattern
  if (pattern.test(Name)) {
      console.log("Name contains only alphabetic characters.");
  } else {
    console.log("Non alphabetic name")
      alert("Name contains non-alphabetic characters.");
  }
});

