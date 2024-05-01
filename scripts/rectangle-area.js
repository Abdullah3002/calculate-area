function calculateRectangleArea(){
    // Get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value; // Corrected 'Value' to 'value'
    const length = parseFloat(lengthText);

    // Get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value; // Corrected 'Value' to 'value'
    const width = parseFloat(widthText);

    // Calculate rectangle area
    const area = length * width;

    // Display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
