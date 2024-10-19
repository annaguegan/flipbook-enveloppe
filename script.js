const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.getElementById("letter");
const flipbook = document.getElementById("flipbook");

heart.addEventListener("click", () => {
  envelope.classList.toggle("flap");

  // Ajoute un délai pour cacher la lettre après l'animation
  setTimeout(() => {
    // Cache la lettre après l'ouverture de l'enveloppe
    letter.style.display = "none";

    // Affiche le flipbook
    flipbook.style.display = "block";

    // Initialise le flipbook avec Turn.js
    $('#flipbook').turn({
      width: 400,
      height: 300,
      autoCenter: true
    });
  }, 2000); // Délai correspondant à la durée de l'animation de l'enveloppe
});
