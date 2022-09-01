---
id: control-flow
title: Ablaufsteuerung Überblick
---

In Methoden, ganz gleich, ob sie einfach oder komplex sind, verwenden Sie immer eine oder mehrere der drei Typen von Programmierstrukturen. Diese Strukturen steuern den Ablauf, d. h. wie und in welcher Reihenfolge Anweisungen in einer Methode ausgeführt werden. Es gibt drei Strukturarten:

- **Sequentiell**: Eine sequentielle Struktur ist eine einfache lineare Struktur. Eine Sequenz ist eine Reihe von Anweisungen, die 4D eine nach der anderen, von der ersten bis zur letzten ausführt. Ein typisches Beispiel ist die einzeilige Routine, die häufig für Objektmethoden verwendet wird. Zum Beispiel: `[People]lastName:=Uppercase([People]lastName)`
- **[Abfragen](Concepts/cf_branching.md)**: Bei einer Abfrage können Methoden eine Bedingung testen und je nach Ergebnis unterschiedliche Wege wählen. Die Bedingung ist ein Boolean Ausdruck, der TRUE oder FALSE ermittelt. Eine Abfragestruktur ist `If...Else...End if`. Sie leitet den Programmfluss auf einen von zwei möglichen Wegen. Die andere Abfragestruktur ist `Case of...Else...End case`. Sie leitet den Programmfluss auf einen von vielen Wegen.
- **[Schleifen](Concepts/cf_looping.md)**: Beim Schreiben von Methoden kommt es häufig vor, dass Sie eine Anweisung oder eine Folge von Anweisungen mehrmals wiederholen müssen. Dafür bietet die 4D Programmiersprache folgende Schleifenstrukturen:
  - `While...End while`
  - `Repeat...Until`
  - `For...End for`
  - `For each...End for each`<br/> The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Beide Möglichkeiten lassen sich für alle Arten von Schleifen verwenden. Jedoch eignen sich `While-` und `Repeat-`Schleifen besser für das Durchlaufen, bis eine Bedingung gefunden wird und `For-`Schleifen besser für den zahlenmäßig begrenzten Durchlauf. Mit `For each...End for each` können Sie beide Arten mischen und damit Objekte und Collections durchlaufen.

**Hinweis:** 4D ermöglicht, Programmierstrukturen bis zu einer Tiefe von 512 Ebenen einzubinden.
