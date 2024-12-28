// Function to apply the columnEnter animation
function columnEnter(element) {
    element.classList.add('column-enter');  // Add the animation class
}

// Function to apply the columnExit animation
function columnExit(element) {
    element.classList.add('column-exit');  // Add the animation class
}

// Function to create or update .card33 position over the third card in column-3
function updateCard33Position() {
    const column3 = document.querySelector('.column-3');
    const card3 = column3 ? column3.querySelector('.card:nth-child(3)') : null;  // Select the third card

    if (card3) {
        const rect = card3.getBoundingClientRect();  // Get position of card3 relative to the viewport

        // Check if .card33 exists, if not, create it
        let card33 = document.querySelector('.card33');
        if (!card33) {
            // Create .card33 dynamically
            card33 = document.createElement('div');
            card33.classList.add('card33');  // Add the class to apply the styles
            document.body.appendChild(card33);  // Append to the body (or adjust container as needed)
        }

        // Update the position of .card33
        card33.style.position = 'absolute';
        card33.style.top = `${rect.top + window.scrollY}px`;  // Offset by scroll position
        card33.style.left = `${rect.left + window.scrollX}px`;  // Offset by scroll position
        card33.style.width = '500px';  // Initial size
        card33.style.height = '400px';  // Initial size
        card33.style.backgroundColor = 'pink';
        card33.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        card33.style.zIndex = '3';  // Ensure it's above other elements
        card33.style.opacity = '0';  // Keep it invisible until the animation starts
    }
}

// Example usage of the anlog function
function anlog() {
    const column1 = document.querySelector('.column-1');
    const column2 = document.querySelector('.column-2');
    const column3 = document.querySelector('.column-3');
    const column4 = document.querySelector('.column-4');
    const column5 = document.querySelector('.column-5');

    // Apply the animations to columns
    columnEnter(column5);
    columnExit(column4);
    columnEnter(column3); // Animate column-3 entry
    columnExit(column2);  // Animate column-2 exit
    columnEnter(column1); // Animate column-1 entry

    // After all column animations finish (e.g., 4s), start tracking the position of .card33
    setTimeout(() => {
        // Start updating the position in real-time
        updateCard33Position(); // Update once after the animations
        setInterval(updateCard33Position, 100);  // Update every 100ms to track position
        
        // Trigger the expandToCover animation after 4 seconds
        const card33 = document.querySelector('.card33');
        if (card33) {
            // Add the 'expandToCover' class to trigger the animation
            card33.classList.add('expandToCover');
        }
    }, 4000); // Wait for the animations to complete before starting the real-time update
}
