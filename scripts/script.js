
const error = [...document.querySelectorAll('.error')];
const errorText = [...document.querySelectorAll('.error-text')];

error.forEach((element) => {
console.log(element.nextElementSibling);
if (element) {
  element.nextElementSibling.style = "display: inline";
}
});


