function calculateRectangle(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return {
        area: area,
        perimeter: perimeter
    };
}

// Function to handle the calculation and updating the results
function handleCalculate() {
    // Get the input values
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    // Check if the inputs are valid numbers
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert('Please enter valid positive numbers for length and width.');
        return;
    }

    // Calculate the results
    const result = calculateRectangle(length, width);

    // Update the HTML with the results
    document.getElementById('area').textContent = 'Area: ' + result.area;
    document.getElementById('perimeter').textContent = 'Perimeter: ' + result.perimeter;
}
// Add event listener to the button
document.getElementById('calculateBtn').addEventListener('click', handleCalculate);