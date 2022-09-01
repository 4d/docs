---
id: Zahl
title: Numerisch (Zahl, Lange Ganzzahl, Ganzzahl)
---

Numerisch ist der Oberbegriff für:

- Datenfeld, Variable oder Ausdruck vom Typ Zahl. Der Typ Zahl umfasst den Bereich ±1,7e±308 mit 13 Stellen Genauigkeit.
- Datenfeld, Variable oder Ausdruck vom Typ Lange Ganzzahl. Der Typ Lange Ganzzahl (4 Bytes) umfasst den Bereich -2 147 483 648 bis 2 147 483 647 (-2^31..(2^31)-1).
- Datenfeld, Variable oder Ausdruck vom Typ Ganzzahl. Der Typ Ganzzahl (2 Bytes) umfasst den Bereich -32 768 bis 32 767 (2^15..(2^15)-1).

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

> Der Dezimaltrenner ist standardmäßig ein Punkt (.), unabhängig von der Sprache des Betriebssystems. Haben Sie die Option "Verwende regionale Systemeinstellungen" auf der Seite Methoden der Datenbankeigenschaften markiert, müssen Sie den Trenner verwenden, der in Ihrem System definiert ist.

Negative Zahlen werden mit dem Minuszeichen (-) angegeben. Beispiel:

```4d
-27
-123.76
-0.0076
```

## Zahlenoperatoren

| Operation               | Syntax       | Ergibt  | Ausdruck | Wert   |
| ----------------------- | ------------ | ------- | -------- | ------ |
| Addition                | Zahl + Zahl  | Zahl    | 2 + 3    | 5      |
| Subtraktion             | Zahl - Zahl  | Zahl    | 3 – 2    | 1      |
| Multiplikation          | Zahl * Zahl  | Zahl    | 5 * 2    | 10     |
| Division                | Zahl / Zahl  | Zahl    | 5 / 2    | 2.5    |
| Ganzzahlige Division    | Zahl \ Zahl | Zahl    | 5 \ 2   | 2      |
| Modulo                  | Zahl % Zahl  | Zahl    | 5 % 2    | 1      |
| Exponent                | Zahl ^ Zahl  | Zahl    | 2 ^ 3    | 8      |
| Gleichheit              | Zahl = Zahl  | Boolean | 10 = 10  | Wahr   |
|                         |              |         | 10 = 11  | Falsch |
| Ungleichheit            | Zahl # Zahl  | Boolean | 10 #11   | Wahr   |
|                         |              |         | 10 # 10  | Falsch |
| Größer als              | Zahl > Zahl  | Boolean | 11 > 10  | Wahr   |
|                         |              |         | 10 > 11  | Falsch |
| Kleiner als             | Zahl < Zahl  | Boolean | 10 < 11  | Wahr   |
|                         |              |         | 11 < 10  | Falsch |
| Größer als oder gleich  | Zahl >= Zahl | Boolean | 11 >= 10 | Wahr   |
|                         |              |         | 10 >= 11 | Falsch |
| Kleiner als oder gleich | Zahl <= Zahl | Boolean | 10 <= 11 | Wahr   |
|                         |              |         | 11 <= 10 | Falsch |

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

## Bit Operatoren

Bit Operatoren arbeiten mit Ausdrücken oder Werten vom Typ **Lange Ganzzahl**.

> Übergeben Sie einen Wert vom Typ Ganzzahl oder Zahl an einen Bit Operator, wertet 4D diesen vor der Berechnung mit einem Bit Operator als Lange Ganzzahl.

Beim Arbeiten mit Bit Operatoren müssen Sie sich den Wert vom Typ Lange Ganzzahl als Array mit 32 Bits vorstellen. Bits werden von rechts nach links von 0 bis 31 durchnummeriert.

Da jedes Bit entweder 0 oder 1 ist, können Sie sich einen Wert vom Typ Lange Ganzzahl auch als Wert vorstellen, der 32 Boolean Werte speichern kann. Ein Bit gleich 1 bedeutet **Wahr**, ein Bit gleich 0 bedeutet **Falsch**.

Ein Ausdruck mit Bit Operator gibt einen Wert von Typ Lange Ganzzahl zurück, mit Ausnahme des Operators Bit Test. Hier wird ein Wert vom Typ Boolean zurückgegeben. Es gibt folgende Bit Operatoren:

| Operation                 | Operator  | Syntax              | Ergibt                    |
| ------------------------- | --------- | ------------------- | ------------------------- |
| Bitweises UND             | &         | Lang & Lang         | Lang                      |
| Bitweises ODER (inklusiv) | &#124;    | Lang &#124; Lang    | Lang                      |
| Bitweises ODER (exklusiv) | \^&#124; | Lang \^&#124; Lang | Lang                      |
| Left Bit Shift            | <<        | Lang << Lang        | Lang (siehe Hinweis 1)    |
| Right Bit Shift           | >>        | Lang >> Lang        | Lang (siehe Hinweis 1)    |
| Bit setzen                | ?+        | Lang ?+ Lang        | Lang (siehe Hinweis 2)    |
| Bit löschen               | ?-        | Lang ?- Lang        | Lang (siehe Hinweis 2)    |
| Bit Test                  | ??        | Long ?? Long Lang   | Boolean (siehe Hinweis 2) |

#### Hinweise

1. Für die Operationen `Left Bit Shift` und `Right Bit Shift` gibt der zweite Operand die Stellen an, um die die Bits des ersten Operanden im Ergebniswert verschoben werden. Deshalb sollte dieser zweite Operand zwischen 0 und 31 liegen. Beachten Sie jedoch, dass Verschieben um 0 einen unveränderten Wert zurückgibt und um mehr als 31 Bits 0x00000000 zurückgibt, da hier alle Bits verloren gehen. Übergeben Sie als zweiten Operanden einen anderen Wert, ist das Ergebnis nicht signifikant.
2. Für die Operationen `Bit setzen`, `Bit löschen` und `Bit Test` gibt der zweite Operand die Stelle des entsprechenden Bit an. Deshalb muss dieser zweite Operand zwischen 0 und 31 liegen. Sonst ist das Ergebnis des Ausdrucks nicht signifikant.

Folgende Tabelle zeigt die Bit Operatoren und ihre Auswirkung:

| Operation     | Beschreibung                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Bitweises UND | Jedes resultierende Bit ist das logische UND der Bits in den beiden Operanden. Hier ist die logische UND Tabelle:<li>1 & 1 --> 1</li> |
<li>0 & 1 --> 0</li><li>1 & 0 --> 0</li><li>0 & 0 --> 0</li>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.| |Bitwise OR (inclusive)|Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:<li>1 &#124; 1 --> 1</li><li>0 &#124; 1 --> 1</li><li>1 &#124; 0 --> 1</li><li>0 &#124; 0 --> 0</li>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.| |Bitwise OR (exclusive)|Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:<li>1 \^&#124; 1 --> 0</li><li>0 \^&#124; 1 --> 1</li><li>1 \^&#124; 0 --> 1</li><li>0 \^&#124; 0 --> 0</li>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.| |Left Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. Die Bits auf der linken Seite gehen verloren, die neuen Bits auf der rechten Seite werden auf 0 gesetzt. 

**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.| |Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.| |Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. |Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. |Bit Test|Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Ergibt Falsch, wenn im ersten Operanden das Bit, dessen Stelle im zweiten Operanden angegeben ist, gleich 0 ist.|

### Beispiele

| Operation                 | Beispiel                        | Ergebnis   |
| ------------------------- | ------------------------------- | ---------- |
| Bitweises UND             | 0x0000FFFF & 0xFF00FF00         | 0x0000FF00 |
| Bitweises ODER (inklusiv) | 0x0000FFFF &#124; 0xFF00FF00    | 0xFF00FFFF |
| Bitweises ODER (exklusiv) | 0x0000FFFF \^&#124; 0xFF00FF00 | 0xFF0000FF |
| Left Bit Shift            | 0x0000FFFF << 8                 | 0x00FFFF00 |
| Right Bit Shift           | 0x0000FFFF >> 8                 | 0x000000FF |
| Bit setzen                | 0x00000000 ?+ 16                | 0x00010000 |
| Bit löschen               | 0x00010000 ?- 16                | 0x00000000 |
| Bit Test                  | 0x00010000 ?? 16 16             | Wahr       |
