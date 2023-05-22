let count_player = 0;
let count_npc = 0;
let counter = 0;

function player(){
    console.log("1 für Schere, 2 für Stein, 3 für Papier");
    let input = prompt("Bitte geben Sie eine Zahl ein:");
    input = parseInt(input);
    return [input]
}

function computerplay() {
    let npc = Math.floor(Math.random() * 3) + 1;
    return [npc];
}

function playround() {
    const [input] = player();
    const [npc] = computerplay();
    //console.log(counter)
    if (input === 1) {
        if (input + npc === 3) {
            console.log("Schere verliert gegen Stein. Sie haben verloren"); count_npc++;
        } else if (input + npc === 4) {
            console.log("Schere gewinnt gegen Papier. Sie haben gewonnen"); count_player++;
        } else {
            console.log("Unentschieden, nochmal");
        }
    } else if (input === 2) {
        if (input + npc === 4) {
            console.log("Stein gewinnt gegen Schere. Sie haben gewonnen"); count_player++;
        } else if (input + npc === 5) {
            console.log("Stein verliert gegen Papier. Sie haben verloren"); count_npc++;
        } else {
            console.log("Unentschieden, nochmal");
        }
    } else if (input === 3) {const [input, npc] = computerplay();
        if (input + npc === 4) {
            console.log("Papier verliert gegen Schere. Sie haben verloren"); count_npc++;
        } else if (input + npc === 5) {
            console.log("Papier gewinnt gegen Stein. Sie haben gewonnen"); count_player++;
        } else {
            console.log("Unentschieden, nochmal");
        }
    }
    console.log("Aktueller Spielstand: Spieler " + count_player + " - " + count_npc + " NPC");
}

function game() {
    while (counter < 5) {
        counter++;
        playround();
        
    }
}

game();
winner();

function winner() {
    if (count_player > count_npc) {
        console.log("Spieler hat gewonnen")
    } else if (count_npc > count_player) {
        console.log("NPC hat gewonnen")
    }
    else {
        console.log("Das Spiel ging unendschieden aus")
    }
}
console.log("Spiel beendet");
console.log("Endstand: Spieler " + count_player + " - " + count_npc + " NPC");
