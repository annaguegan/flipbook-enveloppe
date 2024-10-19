const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.getElementById("letter");
const flipbook = document.getElementById("flipbook");

heart.addEventListener("click", () => {
    envelope.classList.toggle("flap");
  
    // Ajoute un délai pour commencer à déplacer l'enveloppe
    setTimeout(() => {
      // Fait coulisser l'enveloppe vers le haut en douceur
      envelope.style.transform = "translateY(-100px)"; // Ajuste la valeur selon le déplacement souhaité
      envelope.style.transition = "transform 1.5s ease-in-out"; // Durée et easing pour un mouvement fluide
  
      // Après le mouvement de l'enveloppe, ajoute l'effet de fondu de la lettre
      setTimeout(() => {
        letter.classList.add("fade-out");

  
        // Utilise un délai pour cacher complètement la lettre après l'effet de fondu
        setTimeout(() => {
          // Affiche le flipbook
          flipbook.classList.remove("hidden");
          setTimeout(function() {
            flipbook.classList.add("visible");
          }, 10); // Petit délai pour permettre la transition
  
          
          // Initialise le flipbook avec Turn.js
          $('#flipbook').turn({
            width: window.innerWidth * 0.6, // Ajuste à 80% de la largeur de l'écran
            height: (window.innerWidth * 0.6) * 2 / 3, // Ajuste la hauteur avec un ratio 4:3
            autoCenter: true
          });
        }, 2000); // Délai pour correspondre à la durée de l'effet de fondu
      }, 1500); // Délai correspondant à la durée du mouvement de l'enveloppe
    }, 2000); // Légère attente après l'animation de l'enveloppe
  });
  
  
  

