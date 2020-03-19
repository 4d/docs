---
id: version-18.0-number
title: Numerisch (Zahl, Lange Ganzzahl, Ganzzahl)
original_id: number
---

Numerisch ist der Oberbegriff für:

- Datenfeld, Variable oder Ausdruck vom Typ Zahl. Der Typ Zahl umfasst den Bereich ±1,7e±308 mit 13 Stellen Genauigkeit. 
- Datenfeld, Variable oder Ausdruck vom Typ Lange Ganzzahl. Der Typ Lange Ganzzahl (4 Bytes) umfasst den Bereich -2 147 483 648 bis 2 147 483 647 (-2^31..(2^31)-1). 
- Datenfeld, Variable oder Ausdruck vom Typ Lange Ganzzahl. Der Typ Ganzzahl (2 Bytes) umfasst den Bereich -32 768 bis 32 767 (2^15..(2^15)-1).

**Hinweis:** Feldwerte vom Typ Ganzzahl werden in der 4D Programmiersprache automatisch in Lange Ganzzahl umgewandelt.

Sie können numerische Datentypen untereinander zuweisen. 4D erledigt die Konvertierung und kürzt oder rundet bei Bedarf. Jedoch gibt die Konvertierung bei Werten außerhalb des entsprechenden Bereichs keinen gültigen Wert zurück. Sie können numerische Datentypen in Ausdrücken miteinander mischen.

**Hinweis:** Bei der Beschreibung von Befehlen im Handbuch 4D Programmiersprache gilt der Begriff numerisch für alle Datentypen der Art Zahl, Ganzzahl und Lange Ganzzahl, wenn nichts anderes angegeben ist.

## Zahlenformate

Eine numerische Konstante wird als einfache Zahl geschrieben. Hier sehen Sie ein paar Beispiele:

```4d
27
123.76
0.0076
```

**Hinweis:** Seit 4D v15 ist der Dezimaltrenner standardmäßig ein Punkt (.), unabhängig von der Sprache des Betriebssystems. Haben Sie die Option "Verwende regionale Systemeinstellungen" (siehe Seite Methoden) markiert, müssen Sie den Trenner verwenden, der in Ihrem System definiert ist.

Negative Zahlen werden mit dem Minuszeichen (-) angegeben. Beispiel:

```4d
-27
-123.76
-0.0076
```

## Zahlenoperatoren

| Operation               | Syntax         | Ergibt  | Ausdruck | Wert   |
| ----------------------- | -------------- | ------- | -------- | ------ |
| Addition                | Zahl + Zahl    | Zahl    | 2 + 3    | 5      |
| Subtraktion             | Zahl - Zahl    | Zahl    | 3 – 2    | 1      |
| Multiplikation          | Zahl * Zahl    | Zahl    | 5 * 2    | 10     |
| Division                | Zahl / Zahl    | Zahl    | 5 / 2    | 2.5    |
| Ganzzahlige Division    | Zahl \ Zahl   | Zahl    | 5 \ 2   | 2      |
| Modulo                  | Zahl % Zahl    | Zahl    | 5 % 2    | 1      |
| Exponent                | Zahl ^ Zahl    | Zahl    | 2 ^ 3    | 8      |
| Gleichheit              | Zahl = Zahl    | Boolean | 10 = 10  | Wahr   |
|                         |                |         | 10 = 11  | Falsch |
| Ungleichheit            | Zahl # Zahl    | Boolean | 10 #11   | Wahr   |
|                         |                |         | 10 # 10  | Falsch |
| Größer als              | Zahl > Zahl    | Boolean | 11 > 10  | Wahr   |
|                         |                |         | 10 > 11  | Falsch |
| Kleiner als             | Zahl < Zahl    | Boolean | 10 < 11  | Wahr   |
|                         |                |         | 11 < 10  | Falsch |
| Größer als oder gleich  | Zahl >= Zahl   | Boolean | 11 >= 10 | Wahr   |
|                         |                |         | 10 >= 11 | Falsch |
| Kleiner als oder gleich | Zahl <= Number | Boolean | 10 <= 11 | Wahr   |
|                         |                |         | 11 <= 10 | Falsch |


Der Modulo Operator % dividiert die erste Zahl durch die zweite und übergibt den ganzzahligen Restwert. Hier sehen Sie ein paar Beispiele:

- 10 % 2 ergibt 0, da kein Restwert übrigbleibt.
- 10 % 3 ergibt 1, da der Restwert 1 ist.
- 10.5 % 2 ergibt 0, da der Restwert keine Ganzzahl ist.

**WARNUNG:**

- Der Modulo Operator % gibt signifikante Werte mit Zahlen aus dem Bereich Lange Ganzzahl (von - 2^31 bis + 2^31 - 1) zurück. Verwenden Sie bei Berechnungen des Restwerts mit Zahlen außerhalb dieses Bereich die Funktion `Mod`.
- Der Operator für ganzzahlige Division \ gibt nur für Ganzzahlen signifikante Werte zurück. 

### Rangfolge

Die Reihenfolge, in der ein Ausdruck berechnet wird, heißt Rangfolge. 4D hat eine Rangfolge von links-nach-rechts, die algebraische Rangfolge wird nicht berücksichtigt. Beispiel:

```4d
 3+4*5
```

ergibt 35, da der Ausdruck von links nach rechts berechnet wird: 3 + 4 ist gleich 7, multipliziert mit 5 ergibt als Endergebnis 35.

Wollen Sie die Rangfolge von links nach rechts ändern, MÜSSEN Sie Klammern setzen. Beispiel:

```4d
 3+(4*5)
```

ergibt 23, da der Ausdruck (4 * 5) aufgrund der Klammer zuerst berechnet wird. Zum Ergebnis 20 wird dann 3 hinzugezählt. Das ergibt als Endergebnis 23.

Sie können Klammern auch innerhalb anderer Klammern setzen. Achten Sie darauf, dass eine geöffnete Klammer auch immer wieder geschlossen wird. Fehlende oder falsch gesetzte Klammern können ungültige Ausdrücke oder unerwartete Ergebnisse hervorrufen. Außerdem können Sie Ihre Anwendungen nur kompilieren, wenn die Klammern zusammenpassen. Bei fehlenden Klammern meldet 4D Compiler einen Syntaxfehler.