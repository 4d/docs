---
id: branching
title: Abfragestrukturen
---

Über eine Abfragestruktur können Methoden eine Bedingung testen und je nach Ergebnis alternative Wege einschlagen.


## If...Else...End if

Die formale Syntax der Abfragefolge `If...Else...End if` lautet:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Beachten Sie, dass der Teil `Else` optional ist; Sie können schreiben:
```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

Mit der Struktur `If...Else...End if` kann Ihre Methode zwischen zwei Aktionen wählen, je nachdem, ob die Abfrage (ein Boolean Ausdruck) TRUE oder FALSE ist. Ist der Boolean Ausdruck TRUE, werden die unmittelbar darauffolgenden Anweisungen ausgeführt. Ist der Boolean Ausdruck FALSE, werden die auf Else folgenden Anweisungen ausgeführt. Die Anweisung `Else` ist optional; ohne Else fährt die Ausführung mit der ersten Anweisung (falls vorhanden) fort, die nach `End if` kommt.

Beachten Sie, dass der Boolean Ausdruck immer voll gewertet wird. Siehe hierzu folgenden Test:

```4d
 If(MethodA & MethodB)
    ...
 End if
 End if
```

The expression is TRUE only if both methods are TRUE. Jedoch, selbst wenn _MethodA_ FALSE zurückgibt, bewertet 4D weiter _MethodB_, was unnötig Zeit verbraucht. In diesem Fall ist folgende Struktur besser geeignet:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

Das Ergebnis ist gleich, und _MethodB_ wird nur bei Bedarf bewertet.

> **Note:** The [ternary operator](../dt_boolean.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of [If…Else](../cf_branching.md#ifelseend-if) statements.

### Beispiel

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if
 End if 
```

**Tipp:** In spezifischen Fällen können Sie auch Abfragen ohne Befehlsfolge einrichten. Wenn Sie einen Algorithmus oder eine spezifische Anwendung entwickeln, können Sie auch schreiben:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```
oder:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of...Else...End case

Die formale Syntax der Abfragefolge `Case of...Else...End case` lautet:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Beachten Sie, dass der Teil `Else` optional ist; Sie können schreiben:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
 End case
```
Wie bei der Struktur `If...Else...End if` kann Ihre Methode auch mit der Struktur `Case of...Else...End case` zwischen alternativen Aktionen wählen. Im Gegensatz zur Struktur `If...Else...End` kann die Struktur `Case of...Else...End case` eine vernünftige unbegrenzte Anzahl von Boolean Ausdrücken testen und bei einer wahren Bedingung eine Aktion ausführen.

Vor jedem Boolean Ausdruck steht ein Doppelpunkt (`:`). Die Kombination aus Doppelpunkt und Boolean Ausdruck kennzeichnet eine Bedingung. Zum Beispiel ist folgende Zeile eine Bedingung:

```4d
:(bValidate=1)
```

Nur die Anweisungsfolge, die auf die erste wahre Bedingung TRUE folgt (und bis zur nächsten wahren Bedingung), wird ausgeführt. Ist keine der Bedingungen wahr (TRUE), wird keine Anweisungsfolge ausgeführt (wenn kein Teil `Else` enthalten ist).

Sie können nach der letzten Befehlsfolge eine Else Anweisung integrieren. Sind dann alle Bedingungen falsch (FALSE), wird die Anweisungsfolge nach `Else` ausgeführt.

### Beispiel

Dieses Beispiel prüft eine numerische Variable und zeigt eine Warnung mit einem Wort an:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

Zum Vergleich folgt hier dieselbe Methode mit der Abfrage `If...Else...End if`:

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

Beachten Sie, dass mit einer Anweisung `Case of...Else...End case` nur die erste Bedingung TRUE ausgeführt wird. Selbst wenn zwei oder mehr Bedingungen wahr sind, wird nur die Anweisung ausgeführt, die auf die erste Bedingung TRUE folgt.

Bei hierarchischen Tests sollten Sie sicherstellen, dass die Anweisungen für Bedingungen mit geringerer Hierarchie im Textablauf zuerst erscheinen. Soll zum Beispiel der Test, ob Bedingung1 zutrifft, das Testen von Bedingung1&Bedingung2 enthalten, muss Bedingung1 in der Abruffolge an letzter Stelle stehen. Zum Beispiel kann folgender Code nie die letzte Bedingung bewerten:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

Der obige Code gelangt nicht bis zur zweiten Bedingung, da der Test "vResult=1" die Schleife ohne weiteres Testen verlässt. Damit der Code korrekt arbeitet, können Sie folgendes schreiben:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Für hierarchisches Testen können Sie auch hierarchischen Code einsetzen.

**Tipp:** In spezifischen Fällen können Sie auch Abfragen ohne Befehlsfolge einrichten. Wenn Sie einen Algorithmus oder eine spezifische Anwendung entwickeln, können Sie auch schreiben:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

oder:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...

    :(Boolean_Expression)
       statement(s)
    Else
 End case

    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

oder:
```4d
 Case of
    Else
       statement(s)
 End case
```
