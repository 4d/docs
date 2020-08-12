---
id: null-undefined
title: Null und Undefiniert
---

## Null

Null ist ein spezieller Datentyp mit nur einem möglichen Wert: **Null**. Dieser Wert wird von einem Ausdruck zurückgegeben, der gar keinen Wert enthält.

In der 4D Programmiersprache und für Objekt Feldattribute werden Nullwerte über die Funktion `Null` verwaltet. Sie lässt sich mit folgenden Ausdrücken zum Setzen oder Vergleichen des Nullwerts verwenden:

- Objekt Attribute
- Collection Elemente
- Variablen vom Typ Objekt, Collection, Zeiger, Bild oder Variant.

## Undefiniert

Undefiniert ist kein Datentyp. Er bezeichnet eine Variable, die noch nicht definiert ist. Eine Funktion (eine Projektmethode, die ein Ergebnis zurückgibt) kann einen undefinierten Wert zurückgeben, wenn in der Methode dem Ergebnis der Funktion ($0) ein undefinierter Ausdruck zugewiesen wurde (Ausdruck mit mindestens einer undefinierten Variablen). Ein Datenfeld kann nicht undefiniert sein (die Funktion `Undefined` gibt für ein Datenfeld immer Falsch zurück). Eine Variable vom Typ Variant hat **undefiniert** als Standardwert.

## Beispiele

Hier sehen Sie je nach Kontext unterschiedliche Ergebnisse mit `Undefined` sowie dem Befehl `Null` mit Objekteigenschaften:

```4d
C_OBJECT($vEmp)
$vEmp:=New object
$vEmp.name:="Smith"
$vEmp.children:=Null

$undefined:=Undefined($vEmp.name) // False
$null:=($vEmp.name=Null) //False

$undefined:=Undefined($vEmp.children) // False
$null:=($vEmp.children=Null) //True

$undefined:=Undefined($vEmp.parent) // True
$null:=($vEmp.parent=Null) //True
```
