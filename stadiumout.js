// Function to handle scroll event for flipping, scaling, opacity, and height
function handleScroll() {
  const stadiums = document.querySelectorAll('.stadium');
  const scrollY = window.scrollY;

  // Iterate over each stadium element
  stadiums.forEach((stadium, index) => {
    const scaleValue = Math.min(0.2 + scrollY * 0.01, 1.3);
    const opacityValue = 0;
    const heightValue = 0;
    const gapValue = 35;
    const translateYValue = 1000;

    stadium.style.transition = 'transform 1s ease-out, opacity 0.5s ease-out, height 0.5s ease-out, margin-bottom 0.5s ease-out';
    stadium.style.transform = `rotateY(${scrollY * 4}deg) translateY(${translateYValue}px) scale(${scaleValue})`;
    stadium.style.opacity = opacityValue.toString();
    stadium.style.height = `${heightValue}px`;
    stadium.style.marginBottom = `${gapValue}px`;
  });
}

// Function to trigger the "landAnimation" when scrolling back up
function landAnimation() {
  const stadiums = document.querySelectorAll('.stadium');

  stadiums.forEach(stadium => {
    // Apply landing animation when scrolling up
    stadium.style.transition = 'transform 1s ease, opacity 1s ease, height 1s ease'; // Slow transition for landing effect
    stadium.style.transform = 'rotateY(0deg) scale(1)'; // Reset to original size and rotation
    stadium.style.opacity = '1'; // Restore opacity to 1 (fully visible)
    stadium.style.height = '300px'; // Restore original height (300px)

    // Add the landing animation class to restore the animation
    stadium.classList.add('land-animation');
    
    // Restart the random height animation after land animation
    setTimeout(() => {
      stadium.classList.remove('land-animation'); // Remove land animation class after it's done
      stadium.classList.add('random-height'); // Reapply random height animation
    }, 1000); // Ensure the land animation runs before random height restarts
  });
}

// Listen for scroll events
let isScrolling = false;
window.addEventListener('scroll', function () {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function () {
      // Handle scroll logic for flipping, scaling, opacity, and height
      handleScroll();

      // If we are near the top of the page, trigger the "landAnimation"
      if (window.scrollY === 0) {
        landAnimation();
      }

      isScrolling = false;
    });
  }
});
