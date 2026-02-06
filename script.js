// Wait for the document to fully load before running our script
// This ensures all HTML elements exist before we try to use them.
document.addEventListener('DOMContentLoaded', () => {

    // 1. Get references to or HTML elements
    // We use document.getElementById to find elements by their 'id' attribute from the HTML.
    const unsafeInput = document.getElementById('unsafe-input');
    const safeInput = document.getElementById('safe-input');
    const consoleOutput = document.getElementById('console-output');

    // Helper function to add text to our fake Hacker Console
    function logToConsole(message, isWarning = false) {
        // Create a new paragraph element for the log line
        const newLine = document.createElement('p');
        newLine.classList.add('log-line');
        
        // If it's a warning (like a captured key), add a special class for styling
        if (isWarning) {
            newLine.classList.add('highlight');
        }

        newLine.textContent = message;

        // Append the new line to the console window
        consoleOutput.appendChild(newLine);

        // Auto-scroll to the bottom so we always see the newest text
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    // 2. Listen for typing in the 'Unsafe' input
    // The 'input' event triggers every time the value of the text box changes.
    unsafeInput.addEventListener('input', (event) => {
        // Get the current value inside the input box
        const currentText = event.target.value;
        
        // To make it look like a keylogger, we'll log the last character typed
        // (This is a simplified simulation)
        if (currentText.length > 0) {
            const lastChar = currentText[currentText.length - 1];
            logToConsole(`[CAPTURED] Key pressed: "${lastChar}"`, true);
        } else {
            // If text was deleted
            logToConsole(`[SYSTEM] User cleared input.`);
        }
    });

    // 3. Listen for typing in the 'Safe' input
    // This demonstrates what happens when you use a secure field or simulation
    safeInput.addEventListener('input', (event) => {
        // We do trigger an event, but the logger can't "see" it clearly in this verified simulation
        logToConsole(`[ENCRYPTED] *******`, false);
    });

    // Initial message
    logToConsole("System Ready. Monitoring inputs...");

});
