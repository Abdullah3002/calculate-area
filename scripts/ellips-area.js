function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellips-major-radius');
    const minorRadius = getInputValueById('ellips-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}