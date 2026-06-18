// التوزيع الدقيق حسب طلبك: 1 للطعام، 0 للسم
const boardLayout = [
    1, 0, 0, 1, 0, // الصف الأول: لحمة، سم، سم، لحمة، سم
    1, 0, 1, 0, 1, // الصف الثاني: تورتة، سم، بيتزا، سم، حواوشي
    1, 0, 1, 1, 1, // الصف الثالث: تورتة، سم، فراخ، بيتزا، حواوشي
    1, 1, 1, 0, 0, // الصف الرابع: تورتة، حواوشي، بيتزا، سم، سم
    1, 1, 0, 0, 1  // الصف الخامس: فراخ، لحمة، سم، سم، تورتة
];

const foods = ["🥩", "🍗", "🍕", "🫓", "🍰"];
const multipliers = [1.21, 1.53, 1.96, 2.53, 3.33, 4.45, 6, 8.3, 11.8, 17.16, 25.74, 40, 65, 110, 200];
let currentStep = 0;
let gameOver = false;

function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    // رسم 25 خلية
    boardLayout.forEach((item) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.onclick = () => revealCell(cell, item);
        board.appendChild(cell);
    });
}

function revealCell(cell, type) {
    if (gameOver || cell.innerText !== "") return; // منع التكرار واللعب بعد الخسارة
    
    if (type === 1) {
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        cell.innerText = randomFood;
        cell.style.backgroundColor = "#27ae60"; 
        document.getElementById('multiplier-display').innerText = 
            "المضاعف الحالي: " + multipliers[currentStep];
        currentStep++;
    } else {
        cell.innerText = "☠️"; 
        cell.style.backgroundColor = "#c0392b"; 
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
