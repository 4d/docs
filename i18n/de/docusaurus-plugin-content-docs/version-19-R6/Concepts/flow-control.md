---
id: control-flow
title: Ablaufsteuerung Überblick
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Diese Strukturen steuern den Ablauf, d. h. wie und in welcher Reihenfolge Anweisungen in einer Methode ausgeführt werden. Es gibt drei Strukturarten:

- **Sequentiell**: Eine sequentielle Struktur ist eine einfache lineare Struktur. Eine Sequenz ist eine Reihe von Anweisungen, die 4D eine nach der anderen, von der ersten bis zur letzten ausführt. Ein typisches Beispiel ist die einzeilige Routine, die häufig für Objektmethoden verwendet wird. Zum Beispiel: `[People]lastName:=Uppercase([People]lastName)`
- **[Abfragen](Concepts/cf_branching.md)**: Bei einer Abfrage können Methoden eine Bedingung testen und je nach Ergebnis unterschiedliche Wege wählen. Die Bedingung ist ein Boolean Ausdruck, der TRUE oder FALSE ermittelt. Eine Abfragestruktur ist `If...Else...End if`. Sie leitet den Programmfluss auf einen von zwei möglichen Wegen. Die andere Abfragestruktur ist `Case of...Else...End case`. Sie leitet den Programmfluss auf einen von vielen Wegen.
- **[Schleifen](Concepts/cf_looping.md)**: Beim Schreiben von Methoden kommt es häufig vor, dass Sie eine Anweisung oder eine Folge von Anweisungen mehrmals wiederholen müssen. Dafür bietet die 4D Programmiersprache folgende Schleifenstrukturen:
  - `While...End while`
  - `Repeat...Until`
  - `For...End for`
  - `For each...End for each`<br/> The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Beide Möglichkeiten lassen sich für alle Arten von Schleifen verwenden. Jedoch eignen sich `While-` und `Repeat-`Schleifen besser für das Durchlaufen, bis eine Bedingung gefunden wird und `For-`Schleifen besser für den zahlenmäßig begrenzten Durchlauf. Mit `For each...End for each` können Sie beide Arten mischen und damit Objekte und Collections durchlaufen.

**Hinweis:** 4D ermöglicht, Programmierstrukturen bis zu einer Tiefe von 512 Ebenen einzubinden.

## return {expression}

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R4  | Added   |
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

### Beispiel

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
 $i:=$i+1
 $message+=String($i)+"A\r"  // until 5
 logConsole($message)
 If ($i=5)
  return //stops the loop
 End if 
 $message+=String($i)+"B\r"  // until 4
 logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```
