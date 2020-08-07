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
"Add Records"
"No records found."
"Invoice"
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

**Note:** The \ (backslash) character is used as a separator in pathnames under Windows. Deshalb müssen Sie in Pfaden einen doppelten Backslash \\\ verwenden, wenn Sie einen Backslash vor einem Zeichen haben möchten, das in einer der von 4D erkannten Escape-Sequenzen verwendet wird (z.B. "C:\\\MyDocuments\\\New.txt").

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

- Strings werden Zeichen für Zeichen miteinander verglichen (außer bei Suchen nach   href="dt_string.md#keywords">Schlüsselwort</a>, siehe unten).
- Bei String Vergleichen wird die Groß- und Kleinschreibung ignoriert, so gibt "a"="A" `TRUE` zurück. Wollen Sie die Schreibweise von zwei Zeichen überprüfen, vergleichen Sie deren Zeichen Codes. So ergibt z. B. folgender Ausdruck `FALSE`:

```4d
Character code("A")=Character code("a") // because 65 is not equal to 97
```
- Bei String Vergleichen werden diakritische Zeichen, wie z. B. Akzente ignoriert, Umlaute, wie ä, ö, ü werden dagegen berücksichtigt. So ergibt z. B. folgender Ausdruck `TRUE`:

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // and so on
```

**Note:** String comparison takes into account specificities of the language **defined for the 4D data file** (which is not always the same as the language defined for the system).

### Joker Zeichen (@)

The 4D language supports **@** as a wildcard character. @ kann für beliebig viele Zeichen stehen. So ergibt z. B. folgender Ausdruck `TRUE`:

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
**Note:** A 4D option in the Design environment allows you to define how the @ character is interpreted when it is included in a character string.

### Keywords

Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The **%** operator always returns `False` if the query concerns several words or only part of a word (for example, a syllable). The “words” are character strings surrounded by “separators,” which are spaces and punctuation characters and dashes. An apostrophe, like in “Today's”, is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored.

```4d
     "Alpha Bravo Charlie"%"Bravo" // Returns True
     "Alpha Bravo Charlie"%"vo" // Returns False
     "Alpha Bravo Charlie"%"Alpha Bravo" // Returns False
     "Alpha,Bravo,Charlie"%"Alpha" // Returns True
     "Software and Computers"%"comput@" // Returns True
```
> **Notes:** - 4D uses the ICU library for comparing strings (using <>=# operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: http://www.unicode.org/unicode/reports/tr29/#Word_Boundaries. - In the Japanese version, instead of ICU, 4D uses Mecab by default for detecting keywords.

## Character Reference Symbols
The character reference symbols: [[...]]

These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable, string variable, or field.

If the character reference symbols appear on the left side of the assignment operator (:=), a character is assigned to the referenced position in the string. For example, if vsName is not an empty string, the following line sets the first character of vsName to uppercase:

```4d
If(vsName#"")
    vsName[[1]]:=Uppercase(vsName[[1]])
End if
```

Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. Beispiel:

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
```

### Advanced note about invalid character reference

When you use the character reference symbols, you must address existing characters in the string in the same way you address existing elements of an array. For example if you address the 20th character of a string variable, this variable MUST contain at least 20 characters.

- Failing to do so, in interpreted mode, does not cause a syntax error.
- Failing to do so, in compiled mode (with no options), may lead to memory corruption, if, for instance, you write a character beyond the end of a string or a text.
- Failing to do so, in compiled mode, causes an error with the option Range Checking On. For example, executing the following code:

```
//Very bad and nasty thing to do, boo!
 vsAnyText:=""
 vsAnyText[[1]]:="A"
```

will trigger the Runtime Error shown here:

![alt-text](assets/en/Concepts/Syntax_Error.en.png)

### Beispiel


The following project method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:

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

For example, the line:

```4d
ALERT(Capitalize_text("hello, my name is jane doe and i'm running for president!"))
```

displays the alert shown here:

![alt-text](assets/en/Concepts/Jane_doe.en.png)
