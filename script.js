var typed = new Typed("#element", {
  strings: ["<b>unite</b> ", "<b>share</b>", "<b>and inspire</b>"],
  typeSpeed: 70,
  loop: true,
});


function toggleCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('active');}