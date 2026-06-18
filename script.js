const boardLayout = [
    1, 0, 0, 1, 0, // الصف 1: لحم، سم، سم، لحم، سم
    1, 0, 1, 0, 1, // الصف 2: تورتة، سم، بيتزا، سم، حواوشي
    1, 0, 1, 1, 1, // الصف 3: تورتة، سم، فراخ، بيتزا، حواوشي
    1, 1, 1, 0, 0, // الصف 4: تورتة، حواوشي، بيتزا، سم، سم
    1, 1, 0, 0, 1  // الصف 5: فراخ، لحم، سم، سم، تورتة
];

const multipliers = [1.21, 1.53, 1.96, 2.53, 3.33, 4.45, 6, 8.3, 11.8, 17.16, 25.74, 40, 65, 110, 200];
let currentStep = 0;

function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    boardLayout.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.onclick = () => revealCell(cell, item);
        board.appendChild(cell);
    });
}

function revealCell(cell, type) {
    if (type === 1) {
        cell.style.backgroundColor = "green"; 
        document.getElementById('multiplier-display').innerText = "المضاعف: " + multipliers[currentStep++];
    } else {
        cell.style.backgroundColor = "red";
        alert("للأسف، هذا سم! يمكنك المحاولة مرة أخرى بالضغط على إعادة بدء.");
    }
}

function resetGame() {
    currentStep = 0;
    document.getElementById('multiplier-display').innerText = "المضاعف: 1.00";
    createBoard();
}

createBoard();
