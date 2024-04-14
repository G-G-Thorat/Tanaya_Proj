// Append the value to the display when a button is pressed
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display when the 'C' or 'AC' button is pressed
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate the result when the '=' button is pressed
function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace any instance of x² with **2 for exponentiation before evaluation
        let expression = display.value.replace('x²', '**2');

        // If the last character is a '%' sign, we perform a percentage calculation
        if (expression.endsWith('%')) {
            // Remove the '%' sign
            expression = expression.slice(0, -1);

            // Perform the percentage calculation by dividing the number by 100
            expression += "/100";
        }

        // Evaluate the modified expression
        display.value = new Function('return ' + expression)();
    } catch (error) {
        // If there's an error during evaluation, show 'Error' in the display
        display.value = 'Error';
    }
}

// Function to handle a key press
function handleKeyPress(event) {
    const { key } = event;
    // Check if the key is a number or an arithmetic operator
    if ((key >= '0' && key <= '9') || ['/', '*', '-', '+', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        // If the Enter key or equals sign is pressed, calculate the result
        event.preventDefault(); // Prevent the default action of the Enter key
        calculate();
    } else if (key === 'Backspace') {
        // If Backspace is pressed, clear the display
        event.preventDefault(); // Prevent the default action of the Backspace key
        clearDisplay();
    } else if (key === 'Escape') {
        // If Escape is pressed, clear everything
        clearDisplay();
    }
}

// Add the keypress event listener to the document
document.addEventListener('keydown', handleKeyPress);