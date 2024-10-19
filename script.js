const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.getElementById("letter");
const flipbook = document.getElementById("flipbook");

function adjustFlipbookSize() {
    const screenWidth = window.innerWidth;
    let flipbookWidth, flipbookHeight;

    // Adapte la taille en fonction de la largeur de l'écran
    if (screenWidth > 1024) {
        // Ordinateur : 80% de la largeur de l'écran
        flipbookWidth = screenWidth * 0.7;
        flipbookHeight = flipbookWidth * 2 / 3; // Ratio 2:3
    } else if (screenWidth > 768) {
        // Tablette : 90% de la largeur de l'écran
        flipbookWidth = screenWidth * 0.9;
        flipbookHeight = flipbookWidth * 4 / 5; // Ratio 4:5 pour une meilleure visibilité sur tablette
    } else {
        // Téléphone : 100% de la largeur de l'écran
        flipbookWidth = screenWidth * 0.98;
        flipbookHeight = flipbookWidth * 5/6; // Ratio 1:1.2 pour téléphone (plus grand en hauteur)
    }

    // Applique les nouvelles dimensions au flipbook
    $('#flipbook').turn("size", flipbookWidth, flipbookHeight);
}

envelope.addEventListener("click", () => {
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
  
          
          const screenWidth = window.innerWidth;
          let flipbookWidth, flipbookHeight;
      
          // Adapte la taille en fonction de la largeur de l'écran
          if (screenWidth > 1024) {
            // Ordinateur : 80% de la largeur de l'écran
            flipbookWidth = screenWidth * 0.7;
            flipbookHeight = flipbookWidth * 2 / 3; // Ratio 2:3
            } else if (screenWidth > 768) {
                // Tablette : 90% de la largeur de l'écran
                flipbookWidth = screenWidth * 0.9;
                flipbookHeight = flipbookWidth * 4 / 5; // Ratio 4:5 pour une meilleure visibilité sur tablette
            } else {
                // Téléphone : 100% de la largeur de l'écran
                flipbookWidth = screenWidth * 0.98;
                flipbookHeight = flipbookWidth * 5/6; // Ratio 1:1.2 pour téléphone (plus grand en hauteur)
            }

          // Initialise le flipbook avec Turn.js
          $('#flipbook').turn({
            width: flipbookWidth, // Ajuste à 80% de la largeur de l'écran
            height: flipbookHeight, // Ajuste la hauteur avec un ratio 4:3
            autoCenter: true
          });
            setTimeout(function(){
              $('#flipbook').turn("next");
          }, 3000);  // Adjust the delay time as needed
        }, 1000); // Délai pour correspondre à la durée de l'effet de fondu
      }, 1000); // Délai correspondant à la durée du mouvement de l'enveloppe
    }, 1000); // Légère attente après l'animation de l'enveloppe
  });
  
  window.addEventListener('resize', adjustFlipbookSize);
  
  

