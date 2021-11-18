// PROVA
// let level = 0;

// do {
//     level = parseInt(prompt("Scegli il tuo livello di difficoltà"));
// } while (level < 0 || level > 3) {}
// console.log(level);

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

    } else if (levelSelected == 2) {       
        container.classList.add("medium")
        container.classList.remove("hard")

        addSquare(81);

    } else if (levelSelected == 3) {       
        container.classList.add("hard")
        container.classList.remove("medium")

        addSquare(49);
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
function bombGenerator() {
    const bombArray = [];

    while(bombArray.length < 16) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if (!bombArray.includes(randomNum)) {
            bombArray.push(randomNum)
        }
        // console.log(bombArray);
        // bombArray.addEventListener('click', function () {
        // bombArray.classList.add('wrong');
        // });
    }
}

// function bombInsert() {
//     const bombe = bombGenerator();
//     console.log(bombe);
//     const squareArray = document.getElementsByClassName("square");
// }

