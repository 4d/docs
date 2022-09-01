---
id: interpreted-compiled
title: Interpretierter und kompilierter Modus
---

4D Anwendungen können im **interpretierten** oder **kompilierten** Modus laufen:

- Im interpretierten Modus werden Anweisungen im Moment der Ausführung gelesen und in Maschinensprache übersetzt. Sie können den Code immer, wenn Sie es benötigen, ergänzen oder verändern, die Anwendung wird automatisch aktualisiert.
- Im kompilierten Modus werden alle Methoden während dem Kompilieren auf einmal gelesen und übersetzt. Das Ergebnis ist eine neue Datei mit einer Reihe von Anweisungen in Maschinensprache. Der Code lässt sich nicht mehr bearbeiten.

Die Vorteile von Kompilieren sind:

- **Geschwindigkeit**: Ihre Datenbank läuft um den Faktor von 3 bis 1000 mal schneller.
- **Überprüfung des Code**: Ihre Datenbank wird auf Übereinstimmung des Code geprüft. 4D Compiler findet sowohl logische als auch Syntaxfehler.
- **Schutz**: Ist Ihre Datenbank kompiliert, können Sie den interpretierten Code löschen. Denn die kompilierte Datenbanken hat dieselben Funktionalitäten wie ihr Original. Der Unterschied ist, dass Sie die Struktur und Methoden weder ansehen noch verändern können, sei es gewollt oder versehentlich.
- **Eigenständige, doppelklickbare Anwendungen**; Kompilierte Datenbanken lassen sich in eigenständige Anwendungen (.EXE Dateien) mit eigenen Icons umwandeln.
- **Preemptive Modus**: Nur kompilierter Code lässt sich in preemptive Prozessen ausführen.

## Unterschiede zwischen interpretiertem und kompiliertem Code
Auch wenn Anwendungen im interpretierten und kompilierten Modus auf die gleiche Weise funktionieren, gibt es einige Unterschiede, die Sie kennen sollten, wenn Sie Code schreiben, der dann kompiliert wird. Der 4D Interpreter ist in der Regel flexibler als der Compiler.

| Kompiliert                                                                                                                                                                                         | Interpretiert                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Sie können keine Methode mit demselben Name wie eine Variable haben.                                                                                                                               | Es wird kein Fehler generiert, jedoch erhält die Methode Priorität                   |
| Alle Variablen müssen typisiert sein, entweder über eine Compiler-Direktive (z. B. `C_LONGINT`) oder durch den Compiler beim Kompilieren.                                                          | Variablen lassen sich spontan typisieren (nicht empfohlen)                           |
| Sie können den Datentyp von Variablen oder Arrays nicht ändern.                                                                                                                                    | Der Datentyp einer Variablen oder eines Array lässt sich verändern (nicht empfohlen) |
| Sie können ein eindimensionales Array nicht in ein zweidimensionales Array umwandeln und umgekehrt.                                                                                                | Ist möglich                                                                          |
| Auch wenn der Compiler den Typ der Variablen für Sie festlegt, sollten Sie bei zweideutigen Datentypen, wie z. B. in einem Formular, den Datentyp der Variablen mit Compiler-Befehlen deklarieren. |                                                                                      |
| Die Funktion `Undefined` gibt für Variablen immer den Wert Falsch zurück. Variablen sind immer definiert.                                                                                          |                                                                                      |
| Ist für die Methode die Eigenschaft "Als preemptive Prozess starten" markiert, darf der Code weder thread-unsafe Befehle oder andere thread-unsafe Methoden aufrufen.                              | Preemptive Prozesseigenschaften werden ignoriert                                     |
| Der Befehl `IDLE` ist notwendig, um 4D in spezifischen Schleifen aufzurufen                                                                                                                        | Es ist immer möglich, 4D zu unterbrechen                                             |

## Compiler-Direktiven mit dem Interpreter verwenden

Für nicht-kompilierte Anwendungen sind keine Compiler-Direktiven erforderlich. Der Interpreter typisiert automatisch jede Variable danach, wie sie in der Anweisung verwendet wird, und der Variablentyp lässt sich im Anwendungsprojekt frei verändern.

Aufgrund dieser Flexibilität kann eine Anwendung im interpretierten Modus anders als im kompilierten Modus laufen.

Sie schreiben zum Beispiel:

```4d
C_LONGINT(MyInt)
```

und an anderer Stelle in der Anwendung:
```4d
MyInt:=3.1416
```

In diesem Beispiel wird `MyInt` im interpretierten und kompilierten Modus derselbe Wert (3) zugewiesen, wenn die Compiler-Direktive *vor* Ausführen der Anweisung interpretiert wird.

Der 4D Interpreter verwendet Compiler-Direktiven zum Typisieren der Variablen. Findet der Interpreter eine Compiler-Direktive, typisiert er die Variable gemäß dieser Direktive. Versucht eine nachfolgende Anweisung, einen inkorrekten Wert zuzuweisen (z.B. einer numerischen Variablen einen alphanumerischen Wert), erfolgt keine Zuweisung und es wird ein Fehler generiert.

Die Reihenfolge, in der zwei Anweisungen erscheinen, ist für den Compiler irrelevant, da er zuerst das gesamte Projekt für Compiler Direktiven scannt. Der Interpreter ist dagegen nicht systematisch. Er interpretiert Anweisungen der Reihe nach. Diese Reihenfolge kann natürlich von Sitzung zu Sitzung anders sein, je nachdem was der Benutzer macht. Aus diesem Grund ist es wichtig, dass Sie Ihr Projekt so gestalten, dass Ihre Compiler-Direktiven vor jeglicher Anweisung mit deklarierten Variablen ausgeführt werden.


## Mit Zeigern erneute Typisierung vermeiden

Eine Variable kann nicht erneut typisiert werden. Sie können jedoch einen Zeiger verwenden, um auf Variablen mit unterschiedlichen Datentypen zu verweisen. Zum Beispiel ist folgender Code sowohl im interpretierten als auch im kompilierten Modus erlaubt:

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name //text target for the pointer
$p->:="Wesson" //assigns a text value

$p:=->$age  
// new target of different type for the pointer
$p->:=55 //assigns a number value
```

Stellen Sie sich eine Funktion vor, welche die Länge (Anzahl Zeichen) von Werten zurückgibt, die von beliebigem Typ sein können.

```4d
  // Calc_Length (how many characters)
  // $1 = pointer to flexible variable type, numeric, text, time, boolean

C_POINTER($1)
C_TEXT($result)  
C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

Dann lässt sich diese Methode aufrufen:
```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```
