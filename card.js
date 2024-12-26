const card1 = document.querySelector('.card1');
const maxScroll = 600; // Maximum scroll value to fully expand the card

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Calculate progress based on scroll position (0 to 1)
  const progress = Math.min(scrollY / maxScroll, 1);

  // Dynamically calculate properties based on progress
  const width = 94 * progress; // Final width will cover 96% of viewport width (in vw)
  const height = 200 * progress; // Final height will cover 96% of viewport height (in vh)
  const top = 10 * (1 - progress); // Top position in vh
  const left = (100 - width) / 2; // Center horizontally in vw
  
  const borderRadius = 10 + (20 - 10) * progress; // Border radius in vh units

  // Rotation calculations
  const rotateX = 20 + (0 - 20) * progress; // Rotate between 20° and 0° on X-axis

  // Adjust translateY to move the card upward as you scroll
  const translateY = 150 - ( 50* progress); // Starts at 100px, ends at -50px

  // Color and opacity adjustments
  const red = 136 + (255 - 136) * progress; // From red to white
  const green = 54 + (255 - 54) * progress; // From dark red to white
  const blue = 54 + (255 - 54) * progress; // From dark red to white
  const opacity = 1 - 1 * progress;

  // Apply styles dynamically
  card1.style.width = `${width}vw`; // Width adjusted to percentage of viewport width
  card1.style.height = `${height}vh`; // Height adjusted to percentage of viewport height
  card1.style.top = `${top}vh`; // Top position in vh units
  card1.style.left = `${left}vw`; // Left position in vw units for centering
  card1.style.borderRadius = `${borderRadius}px`; // Border-radius in vh
  card1.style.transform = `rotateX(${rotateX}deg) translateY(${translateY}px)`; // Adjust translateY dynamically
  card1.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`; // Color and opacity transition
  
  card1.style.backdropFilter = `blur(${10 * progress}px)`;
  card1.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)`; // Adds soft shadow for depth
  card1.style.zIndex = '1';
});
