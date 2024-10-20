<<<<<<< HEAD
const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.getElementById("letter");
const flipbook = document.getElementById("flipbook");

function adjustFlipbookSize() {
    const screenWidth = window.innerWidth;
    let flipbookWidth, flipbookHeight;

    if (screenWidth > 1024) {
        flipbookWidth = screenWidth * 0.7;
        flipbookHeight = flipbookWidth * 2 / 3;
    } else if (screenWidth > 768) {
        flipbookWidth = screenWidth * 0.9;
        flipbookHeight = flipbookWidth * 4 / 5;
    } else {
        flipbookWidth = screenWidth * 0.98;
        flipbookHeight = flipbookWidth * 5/6;
    }

    $('#flipbook').turn("size", flipbookWidth, flipbookHeight);
}

// envelope.addEventListener("click", () => {
window.onload = function() {
    envelope.classList.toggle("flap");
  
    setTimeout(() => {
      envelope.style.transform = "translateY(-100px)";
      envelope.style.transition = "transform 1.5s ease-in-out";
  
      setTimeout(() => {
        letter.classList.add("fade-out");

        setTimeout(() => {
          flipbook.classList.remove("hidden");
          setTimeout(function() {
            flipbook.classList.add("visible");
          }, 10);
  
          
          const screenWidth = window.innerWidth;
          let flipbookWidth, flipbookHeight;
      
          if (screenWidth > 1024) {
            flipbookWidth = screenWidth * 0.7;
            flipbookHeight = flipbookWidth * 2 / 3; 
            } else if (screenWidth > 768) {
                flipbookWidth = screenWidth * 0.9;
                flipbookHeight = flipbookWidth * 4 / 5;
            } else {
                flipbookWidth = screenWidth * 0.98;
                flipbookHeight = flipbookWidth * 5/6;
            }

          $('#flipbook').turn({
            width: flipbookWidth,
            height: flipbookHeight,
            autoCenter: true,
            duration: 2000
          });
            setTimeout(function(){
              $('#flipbook').turn("next");
          }, 2500);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  window.addEventListener('resize', adjustFlipbookSize);
  
  

=======
const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.getElementById("letter");
const flipbook = document.getElementById("flipbook");

function adjustFlipbookSize() {
    const screenWidth = window.innerWidth;
    let flipbookWidth, flipbookHeight;

    if (screenWidth > 1024) {
        flipbookWidth = screenWidth * 0.7;
        flipbookHeight = flipbookWidth * 2 / 3;
    } else if (screenWidth > 768) {
        flipbookWidth = screenWidth * 0.9;
        flipbookHeight = flipbookWidth * 4 / 5;
    } else {
        flipbookWidth = screenWidth * 0.98;
        flipbookHeight = flipbookWidth * 5/6;
    }

    $('#flipbook').turn("size", flipbookWidth, flipbookHeight);
}

// envelope.addEventListener("click", () => {
window.onload = function() {
    envelope.classList.toggle("flap");
  
    setTimeout(() => {
      envelope.style.transform = "translateY(-100px)";
      envelope.style.transition = "transform 1.5s ease-in-out";
  
      setTimeout(() => {
        letter.classList.add("fade-out");

        setTimeout(() => {
          flipbook.classList.remove("hidden");
          setTimeout(function() {
            flipbook.classList.add("visible");
          }, 10);
  
          
          const screenWidth = window.innerWidth;
          let flipbookWidth, flipbookHeight;
      
          if (screenWidth > 1024) {
            flipbookWidth = screenWidth * 0.7;
            flipbookHeight = flipbookWidth * 2 / 3; 
            } else if (screenWidth > 768) {
                flipbookWidth = screenWidth * 0.9;
                flipbookHeight = flipbookWidth * 4 / 5;
            } else {
                flipbookWidth = screenWidth * 0.98;
                flipbookHeight = flipbookWidth * 5/6;
            }

          $('#flipbook').turn({
            width: flipbookWidth,
            height: flipbookHeight,
            autoCenter: true,
            duration: 2000
          });
            setTimeout(function(){
              $('#flipbook').turn("next");
          }, 2500);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  window.addEventListener('resize', adjustFlipbookSize);
  
  

>>>>>>> c84c68c6b7c6655fcf6a9d32efc8a80ed32028f0
