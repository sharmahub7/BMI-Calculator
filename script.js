function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let showOutput = document.getElementById('output');
    let classification;

    // BMI Calculation
    let bmiRange = weight / (height / 100) ** 2; // BMI Formula
    bmiRange = bmiRange.toFixed(2);

    if (bmiRange < 16) {
        classification = 'Severe Thinness';
    } else if (bmiRange > 16 && bmiRange < 17) {
        classification = 'Moderate Thinness';
    } else if (bmiRange > 17 && bmiRange < 18.5) {
        classification = 'Mild Thinness';
    } else if (bmiRange > 18.5 && bmiRange < 25) {
        classification = 'Normal';
    } else if (bmiRange > 25 && bmiRange < 30) {
        classification = 'Overweight';
    } else if (bmiRange > 30 && bmiRange < 34) {
        classification = 'Obese Class I';
    } else if (bmiRange > 35 && bmiRange < 40) {
        classification = 'Obese Class II';
    } else if (bmiRange > 40) {
        classification = 'Obese Class III';
    }
    showOutput.innerHTML = `BMI Range: ${bmiRange} | ${classification} `;
}