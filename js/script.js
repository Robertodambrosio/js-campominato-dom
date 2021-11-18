document.getElementById('play').addEventListener('click', function () {
    playFunction()
});

const container = document.querySelector('.container');

// ======================== Funzioni

function playFunction() {
    container.innerHTML = "";
    const levelSelected = document.getElementById('gameLevel').value;


    if (levelSelected == 1) {
        container.classList.remove("medium", "hard")

        addSquare(100);
        bombGenerator(100);
        insertBomb(100);
    } else if (levelSelected == 2) {
        container.classList.add("medium")
        container.classList.remove("hard")

        addSquare(81);
        bombGenerator(81);
        insertBomb(81);
    } else if (levelSelected == 3) {
        container.classList.add("hard")
        container.classList.remove("medium")

        addSquare(49);
        bombGenerator(49);
        insertBomb(49);
    }
}









// ************funzione per aggiungere i quadrati dentro il container
function addSquare(num) {
    for (let i = 1; i <= num; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.textContent = i;
        container.appendChild(square);
        square.addEventListener('click', function () {
            square.classList.add('correct');
        });
    }
}

// ****************funzione per creare le bombe
function bombGenerator(num) {
    const bombArray = [];

    while (bombArray.length < 16) {
        const randomNum = Math.floor(Math.random() * num) + 1;
        if (!bombArray.includes(randomNum)) {
            bombArray.push(randomNum)
        }
    }
    return bombArray;
}


// ****************funzione per inserire le bombe nella tabella
function insertBomb(num) {
    const squareArray = document.getElementsByClassName("square");
    const bombe = bombGenerator(num);
    for (let i = 0; i < bombe.length; i++) {
        const bigBomb = bombe[i];
        squareArray[bigBomb].addEventListener('click', function () {      
            for (let j = 0; j < bombe.length; j++) {
                console.log(j);
                squareArray[bombe[j]].classList.add("wrong");
            }
            squareArray[bigBomb].classList.add("wrongest");
        });
    }
}





