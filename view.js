
const renderBoard = () => {
    board = document.getElementById("board");
    strHTML = "";
    emptyCell = 0;
    for (let i = 0; i < mat.length; i++) {
        strHTML += '<tr>';
        for (let j = 0; j < mat[i].length; j++) {
            if (i === gamerPos.i && j === gamerPos.j) {
                strHTML += `<td class="cell ${mat[i][j].type}"><img src="gamer.png"></td>`;
            }
            else if (mat[i][j].ball === true) {
                strHTML += `<td class="cell ${mat[i][j].type}"><img src="ball.png"></td>`;
            }
            else {
                strHTML += `<td class="cell ${mat[i][j].type}"></td>`;
                emptyCell++;
            }
        }
        strHTML += '</tr>';
    }
    board.innerHTML = strHTML;
    document.getElementById("points").innerHTML = "points: " + points;
    document.getElementById("balls").innerHTML = "balls left: " + balls;
    if (balls === 0) {
        clearInterval(interval)
        document.getElementById("msg").innerHTML = "well done";
    }
    if (emptyCell - ((size - 1) * 4) === 0) {
        document.body.onkeyup = null;
        clearInterval(interval)
        document.getElementById("msg").innerHTML = "game over";
    }
}