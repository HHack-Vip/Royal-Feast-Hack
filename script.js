const boardLayout = [
    1, 0, 0, 1, 0, // الصف 1
    1, 0, 1, 0, 1, // الصف 2
    1, 0, 1, 1, 1, // الصف 3
    1, 1, 1, 0, 0, // الصف 4
    1, 1, 0, 0, 1  // الصف 5
];

const foods = ["🥩", "🍗", "🍕", "🫓", "🍰"]; // لحمة، فراخ، بيتزا، حواوشي، تورتة
const multipliers = [1.21, 1.53, 1.96, 2.53, 3.33, 4.45, 6, 8.3, 11.8, 17.16, 25.74, 40, 65, 110, 200];
let currentStep = 0;
let gameOver = false;

function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    boardLayout.forEach((item) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.onclick = () => revealCell(cell, item);
        board.appendChild(cell);
    });
}

function revealCell(cell, type) {
    if (gameOver) return;
    
    if (type === 1) {
        // اختيار طعام عشوائي
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        cell.innerText = randomFood;
        cell.style.backgroundColor = "#27ae60"; // أخضر عند النجاح
        document.getElementById('multiplier-display').innerText = 
            "المضاعف الحالي: " + multipliers[currentStep];
        currentStep++;
    } else {
        cell.innerText = "☠️"; // رمز السم
        cell.style.backgroundColor = "#c0392b"; // أحمر عند الخسارة
        gameOver = true;
        alert("للأسف! هذا سم.");
    }
}

function resetGame() {
    currentStep = 0;
    gameOver = false;
    document.getElementById('multiplier-display').innerText = "المضاعف الحالي: 1.00";
    createBoard();
}

createBoard();
