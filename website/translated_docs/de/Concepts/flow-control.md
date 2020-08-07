---
id: control-flow
title: Ablaufsteuerung Überblick
---

In Methoden, ganz gleich, ob sie einfach oder komplex sind, verwenden Sie immer eine oder mehrere der drei Typen von Programmierstrukturen. Diese Strukturen steuern den Ablauf, d. h. wie und in welcher Reihenfolge Anweisungen in einer Methode ausgeführt werden. Es gibt drei Strukturarten:

- **Sequential**: a sequential structure is a simple, linear structure. Eine Sequenz ist eine Reihe von Anweisungen, die 4D eine nach der anderen, von der ersten bis zur letzten ausführt. Ein typisches Beispiel ist die einzeilige Routine, die häufig für Objektmethoden verwendet wird. Zum Beispiel: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. Die Bedingung ist ein Boolean Ausdruck, der TRUE oder FALSE ermittelt. Eine Abfragestruktur ist `If...Else...End if`. Sie leitet den Programmfluss auf einen von zwei möglichen Wegen. Die andere Abfragestruktur ist `Case of...Else...End case`. Sie leitet den Programmfluss auf einen von vielen Wegen.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. Dafür bietet die 4D Programmiersprache folgende Schleifenstrukturen:
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br> Schleifen werden auf zwei Arten gesteuert: Sie werden entweder solange durchlaufen, bis eine Bedingung gefunden wird oder sie laufen ein- bis n-mal ab. Beide Möglichkeiten lassen sich für alle Arten von Schleifen verwenden. Jedoch eignen sich `While-` und `Repeat-`Schleifen besser für das Durchlaufen, bis eine Bedingung gefunden wird und `For-`Schleifen besser für den zahlenmäßig begrenzten Durchlauf. Mit `For each...End for each` können Sie beide Arten mischen und damit Objekte und Collections durchlaufen.

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels. 
