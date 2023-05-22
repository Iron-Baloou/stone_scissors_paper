let count_player = 0;
let count_npc = 0;
let counter = 0;

function computerplay() {
    console.log("1 für Schere, 2 für Stein, 3 für Papier");
    let input = prompt("Bitte geben Sie eine Zahl ein:");

    input = parseInt(input);

    let npc = Math.floor(Math.random() * 3) + 1;
    // Rückgabe der Eingabe
    return [input, npc];
}

function playround() {
    const [input, npc] = computerplay();
    console.log(counter)
    if (input === 1) {
        if (input + npc === 3) {
            console.log("Schere verliert gegen Stein. Sie haben verloren"); count_npc++; counter++;
        } else if (input + npc === 4) {
            console.log("Schere gewinnt gegen Papier. Sie haben gewonnen"); count_player++; counter++;
        } else {
            console.log("Unentschieden, nochmal");counter++;
        }
    } else if (input === 2) {
        if (input + npc === 4) {
            console.log("Stein gewinnt gegen Schere. Sie haben gewonnen"); count_player++; counter++;
        } else if (input + npc === 5) {
            console.log("Stein verliert gegen Papier. Sie haben verloren"); count_npc++; counter++;
        } else {
            console.log("Unentschieden, nochmal");counter++;
        }
    } else if (input === 3) {
        if (input + npc === 4) {
            console.log("Papier verliert gegen Schere. Sie haben verloren"); count_npc++; counter++;
        } else if (input + npc === 5) {
            console.log("Papier gewinnt gegen Stein. Sie haben gewonnen"); count_player++; counter++;
        } else {
            console.log("Unentschieden, nochmal");counter++;
        }
    }
    console.log("Aktueller Spielstand: Spieler " + count_player + " - " + count_npc + " NPC");
}

function game() {
    while (counter < 5) {
        playround();
    }
}
game();

console.log("Spiel beendet");
console.log("Endstand: Spieler " + count_player + " - " + count_npc + " NPC");
