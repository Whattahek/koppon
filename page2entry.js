let lineAppeared = false; // To track if the black line has appeared

// Get the black line element
const blackLine = document.querySelector('.bg');

// Function to handle mouse wheel event (without page scrolling)
function handleMouseWheel(event) {
  event.preventDefault(); // Prevent the default scroll behavior (page scroll)

  const delta = event.deltaY || event.detail || -event.wheelDelta; // Handle different browsers
  const scrollPosition = window.scrollY || window.pageYOffset; // Get the scroll position

  // Scroll down (delta > 0)
  if (delta > 0) {
    // If the scroll position reaches 70vh and the black line hasn't appeared yet
    if (scrollPosition >= window.innerHeight * 0.7 && !lineAppeared) {
      lineAppeared = true;

      // Expand the black line and make it visible
      blackLine.style.opacity = '1'; // Make it visible
      blackLine.style.height = '50px'; // Start with a small height
      console.log('Black line appeared and expanded to 50px');
    }

    // Enlarge the black line as the user continues to scroll down
    if (lineAppeared) {
      // Calculate how much the line should grow based on scroll position
      const maxHeight = window.innerHeight; // Max height the black line should grow to
      const newHeight = Math.min(scrollPosition - (window.innerHeight * 0.7), maxHeight);
      
      blackLine.style.height = `${newHeight}px`; // Adjust height based on scroll position
      console.log('Black line height:', newHeight); // Log the height as it changes
    }
  }

  // Scroll up (delta < 0)
  else if (delta < 0) {
    // If the scroll position is below 70vh, reset the black line (if it was triggered)
    if (scrollPosition < window.innerHeight * 0.7 && lineAppeared) {
      lineAppeared = false;
      blackLine.style.height = '0'; // Collapse the black line
      blackLine.style.opacity = '0'; // Make it invisible
      console.log('Black line collapsed');
    }
  }
}

// Listen for mouse wheel events (scrolling up or down) but prevent default scroll behavior
let isScrolling = false;
window.addEventListener('wheel', function (event) {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function () {
      // Handle the mouse wheel event for scroll animation
      handleMouseWheel(event);

      isScrolling = false;
    });
  }
}, { passive: false });
