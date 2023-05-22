Dies ist eine einfacher  JavaScript-Codedes Spiels "Schere, Stein, Papier". Es spielt ein Spieler, gegen einen computergesteuerten Gegner (NPC) für eine bestimmte Anzahl von Runden(5).

Spielregeln
Das Spiel folgt den Standardregeln von "Schere, Stein, Papier":

Schere schlägt Papier
Papier schlägt Stein
Stein schlägt Schere
Verwendung
Um das Spiel zu spielen, führen Sie den Code in einer JavaScript-Umgebung wie einer Webbrowser-Konsole.

Die Funktion rounds_game() fordert den Benutzer auf, die Anzahl der zu spielenden Runden einzugeben.

Die Funktion player() fordert den Benutzer auf, seinen Zug auszuwählen: 1 für Schere, 2 für Stein oder 3 für Papier.

Die Funktion computerplay() generiert einen zufälligen Zug für den computergesteuerten Gegner (NPC)

Die Funktion playround() simuliert eine einzelne Runde des Spiels. Sie ruft die Funktionen player() und computerplay() auf, um die Züge zu erhalten, vergleicht sie gemäß den Regeln und bestimmt den Gewinner. Der Rundenstand und die Punktzahlen für den Spieler und den NPC werden entsprechend aktualisiert.

Nachdem das Spiel beendet ist, wird die Funktion winner() aufgerufen, um den Gesamtgewinner basierend auf den endgültigen Punktzahlen zu ermitteln und anzuzeigen.

Schließlich gibt die Konsole eine Zusammenfassung des Spiels aus, einschließlich der endgültigen Punktzahlen.
