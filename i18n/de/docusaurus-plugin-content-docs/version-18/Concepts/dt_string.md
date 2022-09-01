---
id: string
title: String
---

String ist der Oberbegriff für:

- Textfelder bzw. -variablen: Ein Feld, eine Variable oder ein Ausdruck vom Typ Text kann 0 bis 2 GB an Text enthalten.
- Alphanumerische Felder: Ein Datenfeld vom Typ alphanumerisch kann 0 bis 255 Zeichen enthalten (Limit wird bei der Felddefinition festgelegt).

## Stringformate

Ein Stringformat steht zwischen geraden doppelten Anführungszeichen ("..."). Hier ein paar Beispiele für Stringformate:

```4d
"Datensätze hinzufügen"
"Keine Datensätze gefunden."
"Rechnung"
```

Ein leerer String wird mit Anführungszeichen ohne etwas dazwischen angegeben ("").

### Escape Sequenzen

In Strings lassen sich folgende Escape Sequenzen verwenden:

| Escape Sequenz | Ersetzte Zeichen                          |
| -------------- | ----------------------------------------- |
| \n            | LF (Line feed - Zeilenvorschub)           |
| \t            | HT (Tabulator)                            |
| \r            | CR (Carriage return -Zeilenschaltung)     |
| \\\         | \ (Backslash - umgekehrter Schrägstrich) |
| \\"          | " (Anführungszeichen)                     |

**Hinweis:** Das Zeichen \ (backslash) wird unter Windows als Trenner in Pfadnamen verwendet. Deshalb müssen Sie in Pfaden einen doppelten Backslash \\\ verwenden, wenn Sie einen Backslash vor einem Zeichen haben möchten, das in einer der von 4D erkannten Escape-Sequenzen verwendet wird (z.B. "C:\\\MyDocuments\\\New.txt").

## String Operatoren

| Operation               | Syntax           | Ergibt  | Ausdruck                | Wert     |
| ----------------------- | ---------------- | ------- | ----------------------- | -------- |
| Zusammenfügung          | String + String  | String  | "abc" + "def"           | "abcdef" |
| Wiederholung            | String * Zahl    | String  | "ab" * 3                | "ababab" |
| Gleichheit              | String = String  | Boolean | "abc" = "abc"           | Wahr     |
|                         |                  |         | "abc" = "abd"           | Falsch   |
| Ungleichheit            | String # String  | Boolean | "abc" # "abd"           | Wahr     |
|                         |                  |         | "abc" # "abc"           | Falsch   |
| Größer als              | String > String  | Boolean | "abd" > "abc"           | Wahr     |
|                         |                  |         | "abc" > "abc"           | Falsch   |
| Kleiner als             | String < String  | Boolean | "abc" < "abd"           | Wahr     |
|                         |                  |         | "abc" < "abc"           | Falsch   |
| Größer als oder gleich  | String >= String | Boolean | "abd" >= "abc"          | Wahr     |
|                         |                  |         | "abc" >= "abd"          | Falsch   |
| Kleiner als oder gleich | String <= String | Boolean | "abc" <= "abd"          | Wahr     |
|                         |                  |         | "abd" <= "abc"          | Falsch   |
| Mit Schlüsselwort       | String % String  | Boolean | "Alpha Bravo" % "Bravo" | Wahr     |
|                         |                  |         | "Alpha Bravo" % "ravo"  | Falsch   |
|                         | Bild % String    | Boolean | Picture_expr % "Mer"    | Wahr (*) |

(*) Wenn das Schlüsselwort "Mer" dem Bild zugeordnet ist, das im Bildausdruck (Datenfeld oder Variable) gespeichert ist.

## String Vergleiche

- Strings werden Zeichen für Zeichen miteinander verglichen (außer bei Suchen nach [Schlüsselwörter](dt_string.md#keywords), siehe unten).
- Bei String Vergleichen wird die Groß- und Kleinschreibung ignoriert, so gibt "a"="A" `TRUE` zurück. Wollen Sie die Schreibweise von zwei Zeichen überprüfen, vergleichen Sie deren Zeichen Codes. So ergibt z. B. folgender Ausdruck `FALSE`:

```4d
Character code("A")=Character code("a") // because 65 is not equal to 97
```

- Bei String Vergleichen werden diakritische Zeichen wie die entsprechenden Zeichen ohne Akzente behandelt. So ergibt z. B. folgender Ausdruck `TRUE`:

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="ä"
      // and so on
```

**Hinweis:** String Vergleiche berücksichtigen die Eigenheiten der Sprache, **die für die 4D Datendatei definiert wurde**. Das ist normalerweise das gleiche Format wie das System, kann aber auf eine andere Sprache eingestellt werden. Je nach Sprache können diakritische Zeichen anders bewertet oder sortiert werden.

### Joker Zeichen (@)

Die 4D Programmiersprache unterstützt **@** als Joker Zeichen. @ kann für beliebig viele Zeichen stehen. So ergibt z. B. folgender Ausdruck `TRUE`:

```4d
"abcdefghij"="abc@"
```

Sie können das Jokerzeichen nur für den zweiten Operanden (der String auf der rechten Seite) einsetzen. Demnach ergibt folgender Ausdruck `FALSE`, da @ im ersten Operanden lediglich als 1 Zeichen gewertet wird:

```4d
    "abc@"="abcdefghij"
```

Das Jokerzeichen bedeutet "ein Zeichen, viele Zeichen oder gar kein Zeichen". Demnach ergeben folgende Ausdrücke `TRUE`:

```4d
     "abcdefghij"="abcdefghij@"
     "abcdefghij"="@abcdefghij"
     "abcdefghij"="abcd@efghij"
     "abcdefghij"="@abcdefghij@"
     "abcdefghij"="@abcde@fghij@"
```

Zwei aufeinanderfolgende Jokerzeichen werden dagegen nicht erkannt. Hier gibt der Ausdruck `FALSE` zurück:

```4d
"abcdefghij"="abc@@fg"
```

Enthält der Vergleichsoperator ein < oder > Zeichen, wird nur der Vergleich mit einem Joker am Ende des Operanden unterstützt:

```4d
     "abcd"<="abc@" // Valid comparison
     "abcd"<="abc@ef" //Not a valid comparison
```

Wollen Sie Vergleiche oder Suchläufe mit @ als Zeichen, also nicht als Joker durchführen, müssen Sie die Anweisung `Character code (At sign)` verwenden. Angenommen, Sie wollen wissen, ob ein String mit dem Zeichen @ endet. Der folgende Ausdruck ist immer `TRUE`, außer $vsValue ist leer:

```4d
($vsValue[[Length($vsValue)]]="@")
```

Der folgende Ausdruck wird korrekt interpretiert:

```4d
(Character code($vsValue[[Length($vsValue)]])#64)  
```

**Hinweis:** In der Designumgebung können Sie festlegen, wie das @ Zeichen interpretiert wird, wenn es innerhalb einer Zeichenkette enthalten ist.

### Schlüsselwörter

Im Gegensatz zu anderen String Vergleichen werden bei der Suche nach Schlüsselwörtern "Wörter" in "Texten" nur im ganzen berücksichtigt. Der Operator **%** gibt immer `Falsch` zurück, wenn die Suche mehr als ein Wort oder nur einen Teil davon betrifft, z. B. eine Vorsilbe. "Wörter" werden definiert als Zeichenketten, umgeben von „Trennern“, also Leerzeichen, Punktzeichen und Bindestriche. Ein Apostroph, z. B. Today's gilt normalerweise als Teil des Wortes, wird aber in bestimmten Fällen ignoriert (siehe Regeln unten). Sie können auch nach Nummern suchen, da sie inkl. Trennzeichen für Tausend oder Dezimalstellen ( . , ) als Ganzes gewertet werden. Andere Zeichen (Währungssymbole, Temperatur, usw.) werden dabei ignoriert.

```4d
     "Alpha Bravo Charlie"%"Bravo" // Returns True
     "Alpha Bravo Charlie"%"vo" // Returns False
     "Alpha Bravo Charlie"%"Alpha Bravo" // Returns False
     "Alpha,Bravo,Charlie"%"Alpha" // Returns True
     "Software and Computers"%"comput@" // Returns True
```

**Hinweise:**

- 4D uses the ICU library for comparing strings (using `<>=#` operators) and detecting keywords. For more information about the rules implemented, refer to the following address: <http://www.unicode.org/reports/tr29/#Word_Boundaries>.

- In der japanischen Version verwendet 4D zum Suchen von Schlüsselwörtern anstatt ICU standardmäßig Mecab.

## Symbole für direkten Zeichenzugriff

Mit den Symbolen [[...]]

können Sie sich auf ein einzelnes Zeichen innerhalb einer Zeichenkette beziehen. So können Sie in einem Feld bzw. einer Variablen vom Typ Text oder String einzelne Zeichen ansprechen.

Diese Syntax auf der linken Seite des Zuweisungsoperators (:=) weist an der angegebenen Position in der Zeichenkette ein Zeichen zu. Beispiel: Ist vsName kein leerer String, setzt folgender Code das erste Zeichen von vsName in Großbuchstaben:

```4d
If(vsName#"")
    vsName[[1]]:=Uppercase(vsName[[1]])
End if
```

Diese Syntax mit dem gewünschten Zeichen innerhalb eines Ausdrucks gibt es als String mit einem Zeichen zurück. Beispiel:

```4d
//The following example tests if the last character of vtText is an At sign "@"
 If(vtText#"")
    If(Character code(Substring(vtText;Length(vtText);1))=At sign)
  //...
    End if
 End if

  //Using the character reference syntax, you would write in a simpler manner:
 If(vtText#"")
    If(Character code(vtText[[Length(vtText)]])=At sign)
  // ...
    End if
 End if
    End if
 End if
```

### Bemerkung zu ungültigem Zeichenzugriff

Beim Einsatz der Symbole für direkten Zeichenzugriff müssen Sie vorhandene Zeichen im String auf dieselbe Weise wie vorhandene Elemente in einem Array ansprechen. Sprechen Sie beispielsweise das 20. Zeichen einer Textvariablen an, muss diese Variable auch mindestens 20 Zeichen enthalten. Ist das nicht der Fall,

- verursacht das im interpretierten Modus keinen Syntaxfehler.
- kann das im kompilierten Modus (mit deaktivierter Bereichsprüfung) zu einem Absturz wegen Speicherüberlauf führen, z. B. wenn Sie ein Zeichen nach dem Ende eines String oder Textes schreiben.
- wird das im kompilierten Modus mit aktivierter Option Bereichsprüfung einen Fehler auslösen. So löst der folgende Code:

```
//Very bad and nasty thing to do, boo!
 vsAnyText:=""
 vsAnyText[[1]]:="A"
```

einen Runtime-Fehler aus:

![alt-text](../assets/en/Concepts/Syntax_Error.en.png)

### Beispiel

Folgende Projektmethode schreibt das erste Zeichen jedes Worts im Text groß, der als Parameter übergeben wurde und gibt den Text mit großen Anfangsbuchstaben zurück:

```4d
  //Capitalize_text project method
  //Capitalize_text ( Text ) -> Text
  //Capitalize_text ( Source text ) -> Capitalized text

 $0:=$1
 $vlLen:=Length($0)
 If($vlLen>0)
    $0[[1]]:=Uppercase($0[[1]])
    For($vlChar;1;$vlLen-1)
       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)
          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])
       End if
    End for
 End if
```

Die Zeile:

```4d
ALERT(Capitalize_text("hello, my name is jane doe and i'm running for president!"))
```

zeigt folgende Meldung:

![alt-text](../assets/en/Concepts/Jane_doe.en.png)
