const multipliers = [1.21, 1.53, 1.96, 2.53, 3.33, 4.45, 6, 8.3, 11.8, 17.16, 25.74, 40, 65, 110, 200];
let currentStep = 0;

function revealCell(cell, type) {
    if (type === 1) {
        cell.innerText = "🍗"; // رمز الطعام
        cell.style.backgroundColor = "#2ecc71";
        document.getElementById('multiplier-display').innerText = 
            "الخطوة القادمة: " + (multipliers[currentStep + 1] || "نهاية");
        currentStep++;
    } else {
        cell.innerText = "☠️"; // رمز السم
        cell.style.backgroundColor = "#e74c3c";
        alert("للأسف! لقد خسرت.");
    }
}
// باقي الدوال كما هي...
