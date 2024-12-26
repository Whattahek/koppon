// A flag to track whether the flip animation is in progress
let isFlipping = false;

// Function to handle mouse enter
function handleMouseEnter(event) {
  const stadium = event.currentTarget;

  // If not already flipping, start the flip animation
  if (!isFlipping) {
    isFlipping = true; // Set the flipping state to true
    stadium.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";
    
    // Apply the hover effect styles
    stadium.style.transform = "rotateY(180deg) scale(2) translateY(50px)";
    stadium.style.width = "200px";
    stadium.style.height = "500px";
    stadium.style.zIndex = "2"; // Bring to the front

    // Wait for the animation to complete
    setTimeout(() => {
      isFlipping = false; // Animation is complete
      if (!stadium.matches(':hover')) {
        // If the mouse is no longer hovering, revert the styles
        revertStadium(stadium);
      }
    }, 500); // Match the animation duration
  }
}

// Function to handle mouse leave
function handleMouseLeave(event) {
  const stadium = event.currentTarget;

  // If the animation is still in progress, do nothing (it will handle itself after completion)
  if (isFlipping) return;

  // Otherwise, revert immediately if the mouse is not hovering
  if (!stadium.matches(':hover')) {
    revertStadium(stadium);
  }
}

// Function to revert the stadium to its original state
function revertStadium(stadium) {
  stadium.style.transition = "transform 0.5s ease, width 0.5s ease, height 0.5s ease";
  stadium.style.transform = "rotateY(0deg) scale(1) translateY(0)";
  stadium.style.width = "80px";
  stadium.style.height = "350px";
  stadium.style.zIndex = "1"; // Reset z-index to normal
}

// Add event listeners to each stadium for mouse enter and leave
const stadiums = document.querySelectorAll('.stadium');
stadiums.forEach(stadium => {
  stadium.addEventListener('mouseenter', handleMouseEnter);
  stadium.addEventListener('mouseleave', handleMouseLeave);
});
