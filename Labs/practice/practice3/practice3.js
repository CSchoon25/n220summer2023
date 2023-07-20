let pHealth = document.getElementById("playerHealth");
let eHealth = document.getElementById("enemyHealth");

let player = {
    attack: 10,
    hp: 100,
    defense: 5
}

let enemy = {
    attack: 10,
    hp: 100,
    defense: 5
}

function updateEnemy() {
    eHealth.textContent = "Enemy health is now " + enemy.hp;
    if(enemy.hp == 0) {
        alert("ENEMY IS DEFEATED");
    }  
}

function updatePlayer() {
    pHealth.textContent = "Player health is now " + player.hp;
    if(player.hp == 0) {
        alert("YOU WERE DEFEATED");
    }
}

function eRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

function playerAttack() {
    enemy.hp -= player.attack - enemy.defense;
    updateEnemy();
        
}

function enemyAttack() {
    player.hp -= eRandom(6, 15) - player.defense;
    updatePlayer();
}
