---
id: boolean
title: Boolean
---

Ein Datenfeld, Ausdruck oder eine Variable vom Typ Boolean kann entweder WAHR oder FALSCH sein.

## Boolean Funktionen

4D bietet die Boolean Funktionen `True`, `False` und `Not`. Weitere Informationen dazu finden Sie in der Beschreibung dieser Befehle.

### Beispiel

Dieses Beispiel setzt die Boolean Variable je nach Wert der Schaltfläche. Sie gibt Wahr zurück, wenn die Schaltfläche myButton angeklickt wurde und Falsch, wenn sie nicht angeklickt wurde. Ist die Schaltfläche angeklickt, hat die Variable für die Schaltfläche den Wert 1.

```4d
 If(myButton=1) //If the button was clicked
    myBoolean:=True //myBoolean is set to True
 Else //If the button was not clicked,
    myBoolean:=False //myBoolean is set to False
 End if
```

Obiges Beispiel lässt sich auch in einer Zeile zusammenfassen.

```4d
myBoolean:=(myButton=1)
```

## Logische Operatoren

4D unterstützt für Boolean Ausdrücke die beiden logischen Operatoren UND und ODER. Ein logisches UND ergibt WAHR, wenn beide Ausdrücke wahr sind. Ein logisches ODER ergibt WAHR, wenn mindestens einer der Ausdrücke wahr ist. Die folgende Übersicht erläutert die logischen Operatoren:

| Operation | Syntax                 | Ergibt  | Ausdruck                    | Wert   |
| --------- | ---------------------- | ------- | --------------------------- | ------ |
| UND       | Boolean & Boolean      | Boolean | ("A" = "A") & (15 # 3)      | Wahr   |
|           |                        |         | ("A" = "B") & (15 # 3)      | Falsch |
|           |                        |         | ("A" = "B") & (15 = 3)      | Falsch |
| ODER      | Boolean &#124; Boolean | Boolean | ("A" = "A") &#124; (15 # 3) | Wahr   |
|           |                        |         | ("A" = "B") &#124; (15 # 3) | Wahr   |
|           |                        |         | ("A" = "B") &#124; (15 # 3) | Falsch |

Für das logische UND gilt:

| Expr1  | Expr2  | Expr1 & Expr2 |
| ------ | ------ | ------------- |
| Wahr   | Wahr   | Wahr          |
| Wahr   | Falsch | Falsch        |
| Falsch | Wahr   | Falsch        |
| Falsch | Falsch | Falsch        |

Für das logische ODER gilt:

| Expr1  | Expr2  | Expr1 &#124; Expr2 |
| ------ | ------ | ------------------ |
| Wahr   | Wahr   | Wahr               |
| Wahr   | Falsch | Wahr               |
| Falsch | Wahr   | Wahr               |
| Falsch | Falsch | Falsch             |

**Tipp:** Zum Berechnen eines ausschließenden ODER zwischen Expr1 and Expr2 schreiben Sie:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```
