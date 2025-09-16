function initGame() {
    if (size < 4) {
        alert("to small size of board")
        return;
    }
    interval = setInterval(() => {
        do {
            i = Math.floor(Math.random() * (size - 2)) + 1;
            j = Math.floor(Math.random() * (size - 2)) + 1;
        } while (mat[i][j].ball === true || (i === gamerPos.i && j === gamerPos.j));
        mat[i][j].ball = true;
        balls++;
        renderBoard()
    }, 2000);
    createMat()
    for (let index = 0; index < 2; index++) {
        do {
            i = Math.floor(Math.random() * (size - 2)) + 1;
            j = Math.floor(Math.random() * (size - 2)) + 1;
        } while (mat[i][j].ball === true || (i === gamerPos.i && j === gamerPos.j));
        mat[i][j].ball = true;
    }
    balls = 2;
    renderBoard()
}

const createMat = () => {
    mat = new Array(size)
    for (let i = 0; i < size; i++) {
        mat[i] = new Array(size)
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let cell = { type: "floor", ball: false }
            if (i === 0 || i === mat.length - 1 || j === 0 || j === mat[i].length - 1) {
                cell.type = "wall";
            }
            mat[i][j] = cell;
        }
    }
}

function handleKey(event) {
    var i = gamerPos.i;
    var j = gamerPos.j;
    switch (event.key) {
        case 'ArrowLeft':
            moveTo(i, j - 1);
            break;
        case 'ArrowRight':
            moveTo(i, j + 1);
            break;
        case 'ArrowUp':
            moveTo(i - 1, j);
            break;
        case 'ArrowDown':
            moveTo(i + 1, j);
            break;
    }
}

function moveTo(i, j) {
    if (i === 0) {
        i = 1;
    }
    if (i === size - 1) {
        i = size - 2;
    }
    if (j === 0) {
        j = 1;
    }
    if (j === size - 1) {
        j = size - 2;
    }
    gamerPos.i = i;
    gamerPos.j = j;
    if (mat[i][j].ball === true) {
        points++;
        mat[i][j].ball = false;
        balls--;
    }
    renderBoard();
}

function newGame() {
    document.getElementById("msg").innerHTML = ""
    clearInterval(interval);
    initGame();
}