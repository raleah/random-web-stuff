var myRadius = parseFloat(prompt("Please enter a radius in cm: "))

function calculateArea(myRadius) {
    var myArea = Math.PI * myRadius ** 2
    myArea = myArea.toFixed(1)
    return "A circle with a " + myRadius + " centimeter radius has an area of " + myArea + " square centimeters.";
}
calculateArea();

alert(calculateArea(myRadius))