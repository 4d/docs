---
id: number
title: Numerisch (Zahl, Lange Ganzzahl, Ganzzahl)
---

Numerisch ist der Oberbegriff für:

- Datenfeld, Variable oder Ausdruck vom Typ Zahl. Der Typ Zahl umfasst den Bereich ±1,7e±308 mit 13 Stellen Genauigkeit.
- Datenfeld, Variable oder Ausdruck vom Typ Lange Ganzzahl. Der Typ Lange Ganzzahl (4 Bytes) umfasst den Bereich -2 147 483 648 bis 2 147 483 647 (-2^31..(2^31)-1).
- Datenfeld, Variable oder Ausdruck vom Typ Lange Ganzzahl. Der Typ Ganzzahl (2 Bytes) umfasst den Bereich -32 768 bis 32 767 (2^15..(2^15)-1).

**Note:** Integer field values are automatically converted in Long integers when used in the 4D Language.

Sie können numerische Datentypen untereinander zuweisen. 4D erledigt die Konvertierung und kürzt oder rundet bei Bedarf. Jedoch gibt die Konvertierung bei Werten außerhalb des entsprechenden Bereichs keinen gültigen Wert zurück. Sie können numerische Datentypen in Ausdrücken miteinander mischen.

**Note:** In the 4D Language Reference manual, no matter the actual data type, the Real, Integer, and Long Integer parameters in command descriptions are denoted as number, except when marked otherwise.


## Zahlenformate

Eine numerische Konstante wird als einfache Zahl geschrieben. Hier sehen Sie ein paar Beispiele:

```4d
27
123.76
0.0076
```

> The default decimal separator is a period (.), regardless of the system language. If you have checked the "Use regional system settings" option in the Methods Page of the Preferences, you must use the separator defined in your system.

Negative Zahlen werden mit dem Minuszeichen (-) angegeben. Beispiel:

```4d
-27
-123.76
-0.0076
```

## Zahlenoperatoren

| Operation               | Syntax           | Ergibt  | Ausdruck | Wert   |
| ----------------------- | ---------------- | ------- | -------- | ------ |
| Addition                | Zahl + Zahl      | Zahl    | 2 + 3    | 5      |
| Subtraktion             | Zahl - Zahl      | Zahl    | 3 – 2    | 1      |
| Multiplikation          | Zahl * Zahl      | Zahl    | 5 * 2    | 10     |
| Division                | Number / Number  | Zahl    | 5 / 2    | 2.5    |
| Ganzzahlige Division    | Zahl \ Zahl     | Zahl    | 5 \ 2   | 2      |
| Modulo                  | Zahl % Zahl      | Zahl    | 5 % 2    | 1      |
| Exponent                | Zahl ^ Zahl      | Zahl    | 2 ^ 3    | 8      |
| Gleichheit              | Zahl = Zahl      | Boolean | 10 = 10  | Wahr   |
|                         |                  |         | 10 = 11  | Falsch |
| Ungleichheit            | Zahl # Zahl      | Boolean | 10 #11   | Wahr   |
|                         |                  |         | 10 # 10  | Falsch |
| Größer als              | Number > Number  | Boolean | 11 > 10  | Wahr   |
|                         |                  |         | 10 > 11  | Falsch |
| Kleiner als             | Number < Number  | Boolean | 10 < 11  | Wahr   |
|                         |                  |         | 11 < 10  | Falsch |
| Größer als oder gleich  | Number >= Number | Boolean | 11 >= 10 | Wahr   |
|                         |                  |         | 10 >= 11 | Falsch |
| Kleiner als oder gleich | Number <= Number | Boolean | 10 <= 11 | Wahr   |
|                         |                  |         | 11 <= 10 | Falsch |

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


## Bitwise operators

The bitwise operators operates on **Long Integer** expressions or values.

> If you pass an Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left.

Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:

| Operation              | Operator  | Syntax              | Ergibt               |
| ---------------------- | --------- | ------------------- | -------------------- |
| Bitwise AND            | &         | Long & Long         | Long                 |
| Bitwise OR (inclusive) | &#124;    | Long &#124; Long    | Long                 |
| Bitwise OR (exclusive) | \^&#124; | Long \^&#124; Long | Long                 |
| Left Bit Shift         | <<        | Long << Long        | Long (see note 1)    |
| Right Bit Shift        | >>        | Long >> Long        | Long (see note 1)    |
| Bit Set                | ?+        | Long ?+ Long        | Long (see note 2)    |
| Bit Clear              | ?-        | Long ?- Long        | Long (see note 2)    |
| Bit Test               | ??        | Long ?? Long        | Boolean (see note 2) |

#### Notes

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.



The following table lists the bitwise operators and their effects:

| Operation              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitwise AND            | Each resulting bit is the logical AND of the bits in the two operands. <p>Here is the logical AND table:<li>1 & 1 --> 1<li>0 & 1 --> 0<li>1 & 0 --> 0<li>0 & 0 --> 0<p>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.                                           |
| Bitwise OR (inclusive) | Each resulting bit is the logical OR of the bits in the two operands.<p>Here is the logical OR table:<li>1 &#124; 1 --> 1<li>0 &#124; 1 --> 1<li>1 &#124; 0 --> 1<li>0 &#124; 0 --> 0<p>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.           |
| Bitwise OR (exclusive) | Each resulting bit is the logical XOR of the bits in the two operands.<p>Here is the logical XOR table:<li>1 \^&#124; 1 --> 0<li>0 \^&#124; 1 --> 1<li>1 \^&#124; 0 --> 1<li>0 \^&#124; 0 --> 0<p>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0. |
| Left Bit Shift         | The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. <p>**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.                                                                   |
| Right Bit Shift        | The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.<p>**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.                                                                      |
| Bit Set                | The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.                                                                                                                                                                                                                                                                                |
| Bit Clear              | The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.                                                                                                                                                                                                                                                                                |
| Bit Test               | Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.                                                                                                                                                                                                                                   |

### Beispiele

| Operation              | Beispiel                        | Result     |
| ---------------------- | ------------------------------- | ---------- |
| Bitwise AND            | 0x0000FFFF & 0xFF00FF00         | 0x0000FF00 |
| Bitwise OR (inclusive) | 0x0000FFFF &#124; 0xFF00FF00    | 0xFF00FFFF |
| Bitwise OR (exclusive) | 0x0000FFFF \^&#124; 0xFF00FF00 | 0xFF0000FF |
| Left Bit Shift         | 0x0000FFFF << 8                 | 0x00FFFF00 |
| Right Bit Shift        | 0x0000FFFF >> 8                 | 0x000000FF |
| Bit Set                | 0x00000000 ?+ 16                | 0x00010000 |
| Bit Clear              | 0x00010000 ?- 16                | 0x00000000 |
| Bit Test               | 0x00010000 ?? 16                | Wahr       |
