var player1 = true,
    pl1Wins = 0,
    pl2Wins = 0,
    tie = 0,
    cell1 = "",
    cell2 = "",
    cell3 = "",
    cell4 = "",
    cell5 = "",
    cell6 = "",
    cell7 = "",
    cell8 = "",
    cell9 = "",
    canvas,
    ctx,
    activeBoxNumber,
    convasContiner = document.getElementById('convasContiner');

function createCanvas() {
    convasContiner.innerHTML = '';
    canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.setAttribute('width', '500');
    canvas.setAttribute('height', '500');
    canvas.style = 'border:1px solid #000000';
    convasContiner.append(canvas);
    ctx = canvas.getContext("2d");
    canvas.onclick = onCanvasClicked;
    canvas.onmousemove = onCanvasMouseMove;
    canvas.onmouseleave = onCasvasMouseLeave;
    drawBoxBounds();
    drawInputs();
}

function onCanvasClicked(evt) {
    const pos = getMousePos(canvas, evt);
    const boxNumber = getBoxNumber(pos);
    input(boxNumber);
    createCanvas();
}

function getBoxNumber(pos) {
    let boxNumber;
    if (pos.x <= 160 && pos.y <= 160) {
        // console.log('cell 1');
        boxNumber = 1;
    } else if (pos.x > 160 && pos.x <= 340 && pos.y <= 160) {
        boxNumber = 2;
    } else if (pos.x > 340 && pos.x <= 500 && pos.y <= 160) {
        boxNumber = 3;
    } else if (pos.y > 160 && pos.y <= 340 && pos.x <= 160) {
        boxNumber = 4;
    } else if (pos.x > 160 && pos.y > 160 && pos.x <= 340 && pos.y <= 340) {
        boxNumber = 5;
    } else if (pos.x > 340 && pos.y > 160 && pos.x <= 500 && pos.y <= 340) {
        boxNumber = 6;
    } else if (pos.y > 340 && pos.x <= 160 && pos.y <= 500) {
        boxNumber = 7;
    } else if (pos.x > 160 && pos.y > 340 && pos.x <= 340 && pos.y <= 500) {
        boxNumber = 8;
    } else if (pos.x > 340 && pos.y > 340 && pos.x <= 500 && pos.y <= 500) {
        boxNumber = 9;
    }

    return boxNumber;
}

function highlightBox(boxNumber) {
    ctx.fillStyle = "rgba(233, 222, 71, 0.335)";
    switch (boxNumber) {
        case 1:
            ctx.fillRect(0, 0, 159, 159);
            break;
        case 2:
            ctx.fillRect(162, 0, 176, 159);
            break;
        case 3:
            ctx.fillRect(342, 0, 496, 159);
            break;
        case 4:
            ctx.fillRect(0, 161, 159, 179);
            break;
        case 5:
            ctx.fillRect(161, 161, 179, 179);
            break;
        case 6:
            ctx.fillRect(342, 161, 159, 179);
            break;
        case 7:
            ctx.fillRect(0, 341, 159, 159);
            break;
        case 8:
            ctx.fillRect(161, 341, 179, 159);
            break;
        case 9:
            ctx.fillRect(342, 341, 159, 159);
            break;

    }
}

function onCanvasMouseMove(evt) {
    const pos = getMousePos(canvas, evt);
    const newBoxNumber = getBoxNumber(pos);
    console.log(newBoxNumber, activeBoxNumber);
    if (newBoxNumber !== activeBoxNumber) {
        activeBoxNumber = newBoxNumber;
        createCanvas();
        highlightBox(activeBoxNumber);
    }
}

function onCasvasMouseLeave(evt) {
    const pos = getMousePos(canvas, evt);
    highlightBox(getBoxNumber(pos));
}

function AfterWinRestGame() {
    // 
    player1 = true;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    cell5 = "";
    cell6 = "";
    cell7 = "";
    cell8 = "";
    cell9 = "";
    document.getElementById("win").style.display = "none";
    document.getElementById("pl1win").style.display = "none";
    document.getElementById("pl2win").style.display = "none";
    document.getElementById("p1").style.color = "red";
    document.getElementById("p2").style.color = "black";
    clearCanvas();
    drawBoxBounds();
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function clearCanvas() {
    createCanvas();
}

function drawBoxBounds() {
    ctx.moveTo(160, 10);
    ctx.lineTo(160, 490);
    ctx.moveTo(340, 10);
    ctx.lineTo(340, 490);
    ctx.moveTo(10, 160);
    ctx.lineTo(490, 160);
    ctx.moveTo(10, 340);
    ctx.lineTo(490, 340);
    ctx.stroke();
}


function whichPlayerTurn() {
    document.getElementById("p1").style.color = "black";
    document.getElementById("p2").style.color = "black";
    if (player1) {
        document.getElementById("p1").style.color = "red";
    } else {
        document.getElementById("p2").style.color = "red";
    }

}

function writeOnDispalyPl1Wins() {
    pl1Wins += 1;
    document.getElementById("pl1").innerHTML = pl1Wins;
}

function writeOnDispalyPl2Wins() {
    pl2Wins += 1;
    document.getElementById("pl2").innerHTML = pl2Wins;
}

function drawInputs() {
    ctx.font = "100px Arial, Helvetica, sans-serif ";
    ctx.fontWidth = 10;
    ctx.textAlign = "center";
    if (cell1) {
        ctx.fillText(cell1, 80, 120);
    }

    if (cell2) {
        ctx.fillText(cell2, 245, 120);
    }

    if (cell3) {
        ctx.fillText(cell3, 410, 120);
    }

    if (cell4) {
        ctx.fillText(cell4, 80, 280);
    }

    if (cell5) {
        ctx.fillText(cell5, 245, 280);
    }

    if (cell6) {
        ctx.fillText(cell6, 410, 280);
    }

    if (cell7) {
        ctx.fillText(cell7, 80, 450);
    }

    if (cell8) {
        ctx.fillText(cell8, 245, 450);
    }

    if (cell9) {
        ctx.fillText(cell9, 410, 450);
    }
}

function chackInput(input) {
    const mark = player1 === true ? 'X' : 'O';
    switch (input) {
        case 1:
            if (cell1 === '') {
                cell1 = mark;
                player1 = !player1;
            }
            break;
        case 2:
            if (cell2 === '') {
                cell2 = mark;
                player1 = !player1;
            }
            break;
        case 3:
            if (cell3 === '') {
                cell3 = mark;
                player1 = !player1;
            }
            break;
        case 4:
            if (cell4 === '') {
                cell4 = mark;
                player1 = !player1;
            }
            break;
        case 5:
            if (cell5 === '') {
                cell5 = mark;
                player1 = !player1;
            }
            break;
        case 6:
            if (cell6 === '') {
                cell6 = mark;
                player1 = !player1;
            }
            break;
        case 7:
            if (cell7 === '') {
                cell7 = mark;
                player1 = !player1;
            }
            break;
        case 8:
            if (cell8 === '') {
                cell8 = mark;
                player1 = !player1;
            }
            break;
        case 9:
            if (cell9 === '') {
                cell9 = mark;
                player1 = !player1;
            }
    }
}

function chackForTie() {
    if (cell2.length !== 0 && cell2.length !== 0 && cell3.length !== 0 &&
        cell4.length !== 0 && cell5.length !== 0 && cell6.length !== 0 &&
        cell7.length !== 0 && cell8.length !== 0 && cell9.length !== 0) {
        tie += 1;
        document.getElementById("tie").innerHTML = tie;
        AfterWinRestGame();
    }
}

function chackWinForPlayer1() {
    if (conditionForWinPl1()) {
        document.getElementById("win").style.display = "block";
        document.getElementById("pl1win").style.display = "block";
        writeOnDispalyPl1Wins();

        // AfterWinRestGame();
    }
}

function chackWinForPlayer2() {
    if (conditionForWinPl2()) {
        writeOnDispalyPl2Wins();
        document.getElementById("win").style.display = "block";
        document.getElementById("pl2win").style.display = "block";
        // AfterWinRestGame();
    }
}

function conditionForWinPl1() {
    return cell1 === "X" && cell2 === "X" && cell3 === "X" ||
        cell4 === "X" && cell5 === "X" && cell6 === "X" ||
        cell7 === "X" && cell8 === "X" && cell9 === "X" ||
        cell1 === "X" && cell4 === "X" && cell7 === "X" ||
        cell2 === "X" && cell8 === "X" && cell5 === "X" ||
        cell3 === "X" && cell6 === "X" && cell9 === "X" ||
        cell1 === "X" && cell5 === "X" && cell9 === "X" ||
        cell3 === "X" && cell5 === "X" && cell7 === "X";
}

function conditionForWinPl2() {
    return cell1 === "O" && cell2 === "O" && cell3 === "O" ||
        cell4 === "O" && cell5 === "O" && cell6 === "O" ||
        cell7 === "O" && cell8 === "O" && cell9 === "O" ||
        cell1 === "O" && cell4 === "O" && cell7 === "O" ||
        cell2 === "O" && cell8 === "O" && cell5 === "O" ||
        cell3 === "O" && cell6 === "O" && cell9 === "O" ||
        cell1 === "O" && cell5 === "O" && cell9 === "O" ||
        cell3 === "O" && cell5 === "O" && cell7 === "O";
}

function input(input) {
    chackInput(input);
    chackWinForPlayer1();
    chackWinForPlayer2();
    chackForTie();
    whichPlayerTurn();
}

// [123, 456, 789, 147, 258, 149, 347]
// [].findIndex(789) !== -1
document.getElementById("p1").style.color = "red";

createCanvas();