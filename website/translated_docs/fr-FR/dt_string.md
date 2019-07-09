---
id: string
title: Chaine
---

Chaîne est un terme générique utilisé pour :

- Les variables ou champs de type Texte : un champ, une variable ou une expression de type Texte peut contenir de 0 à 2 Go de texte.
- Les variables ou champs de type alphanumérique : un champ alphanumérique peut contenir de 0 à 255 caractères (la limite est fixée lors de la définition du champ).

## Constantes littérales de type chaîne

A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:

```code4d
"Add Records"
"No records found."
"Invoice"
```

An empty string is specified by two quotation marks with nothing between them ("").

### Escape sequences

The following escape sequences can be used within strings:

| Escape sequence | Character replaced |
| --------------- | ------------------ |
|                 |                    | \n|LF (Line feed)| \t|HT (Tab)| \r|CR (Carriage return)| \\\|\ (Backslash)| \\"|" (Quotation marks)| 

**Note:** The \ (backslash) character is used as a separator in pathnames under Windows. You must therefore use a double backslash \\\ in paths when you want to have a backslash in front of a character used in one of the escape sequences recognized by 4D (e.g. "C:\\\MyDocuments\\\New.txt").

## Opérateurs sur les chaînes

| Opération           | Syntaxe                   | Retourne | Expression              | Valeur   |
| ------------------- | ------------------------- | -------- | ----------------------- | -------- |
| Concaténation       | Chaîne + Chaîne           | Chaîne   | "abc" + "def"           | "abcdef" |
| Répétition          | Chaîne * Nombre           | Chaîne   | "ab" * 3                | "ababab" |
| Egalité             | Chaîne = Chaîne           | Booléen  | "abc" = "abc"           | Vrai     |
|                     |                           |          | "abc" = "abd"           | Faux     |
| Inégalité           | Chaîne # Chaîne           | Booléen  | "abc" # "abd"           | Vrai     |
|                     |                           |          | "abc" # "abc"           | Faux     |
| Supérieur à         | Chaîne > Chaîne           | Booléen  | "abd" > "abc"           | Vrai     |
|                     |                           |          | "abc" > "abc"           | Faux     |
| Inférieur à         | Chaîne < Chaîne           | Booléen  | "abc" < "abd"           | Vrai     |
|                     |                           |          | "abc" < "abc"           | Faux     |
| Supérieur ou égal à | Chaîne >= Chaîne          | Booléen  | "abd" >= "abc"          | Vrai     |
|                     |                           |          | "abc" >= "abd"          | Faux     |
| Inférieur ou égal à | Chaîne <= Chaîne<= String | Booléen  | "abc" <= "abd"<= "abd"  | Vrai     |
|                     |                           |          | "abd" <= "abc"<= "abc"  | Faux     |
| Contient mot-clé    | Chaîne % Chaîne           | Booléen  | "Alpha Bravo" % "Bravo" | Vrai     |
|                     |                           |          | "Alpha Bravo" % "ravo"  | False    |
|                     | Picture % String          | Boolean  | Picture_expr % "Mer"    | True (*) |

(*) If the keyword "Mer" is associated with the picture stored in the picture expression (field or variable).

## String comparisons

- Strings are compared on a character-by-character basis (except in the case of searching by [keywords](dt_string.md#keywords), see below).
- When strings are compared, the case of the characters is ignored; thus, "a"="A" returns `TRUE`. To test if the case of two characters is different, compare their character codes. For example, the following expression returns `FALSE`:

```code4d
Character code("A")=Character code("a") // because 65 is not equal to 97
```

- When strings are compared, diacritical characters are taken into account. For example, the following expressions return `TRUE`:

```code4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // and so on
```

**Note:** String comparison takes into account specificities of the language **defined for the 4D data file** (which is not always the same as the language defined for the system).

### Wilcard character (@)

The 4D language supports **@** as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is `TRUE`:

```code4d
"abcdefghij"="abc@"
```

The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is `FALSE`, because the @ is considered only as a one character in the first operand:

```code4d
    "abc@"="abcdefghij"
```

The wildcard means "one or more characters or nothing". The following expressions are `TRUE`:

```code4d
     "abcdefghij"="abcdefghij@"
     "abcdefghij"="@abcdefghij"
     "abcdefghij"="abcd@efghij"
     "abcdefghij"="@abcdefghij@"
     "abcdefghij"="@abcde@fghij@"
```

On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return `FALSE`. The following expression is `FALSE`:

```code4d
"abcdefghij"="abc@@fg"
```

When the comparison operator is or contains a < or > symbol, only comparison with a single wildcard located at the end of the operand is supported:

```code4d
     "abcd"<="abc@" // Valid comparison
     "abcd"<="abc@ef" //Not a valid comparison
```

If you want to execute comparisons or queries using @ as a character (and not as a wildcard), you need to use the `Character code(At sign)` instruction. Imagine, for example, that you want to know if a string ends with the @ character. The following expression (if $vsValue is not empty) is always `TRUE`:

```code4d
($vsValue[[Length($vsValue)]]="@")
```

The following expression will be evaluated correctly:

```code4d
(Character code($vsValue[[Length($vsValue)]])#64)  
```

**Note:** A 4D option in the Design environment allows you to define how the @ character is interpreted when it is included in a character string.

### Keywords

Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The **%** operator always returns `False` if the query concerns several words or only part of a word (for example, a syllable). The “words” are character strings surrounded by “separators,” which are spaces and punctuation characters and dashes. An apostrophe, like in “Today's”, is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored.

```code4d
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

```code4d
If(vsName#"")
    vsName[[1]]:=Uppercase(vsName[[1]])
End if
```

Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. Par exemple:

```code4d
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
    Fin de si
 Fin de si
```

### Advanced note about invalid character reference

When you use the character reference symbols, you must address existing characters in the string in the same way you address existing elements of an array. For example if you address the 20th character of a string variable, this variable MUST contain at least 20 characters.

- Failing to do so, in interpreted mode, does not cause a syntax error.
- Failing to do so, in compiled mode (with no options), may lead to memory corruption, if, for instance, you write a character beyond the end of a string or a text.
- Failing to do so, in compiled mode, causes an error with the option Range Checking On. For example, executing the following code:

    //Very bad and nasty thing to do, boo!
     vsAnyText:=""
     vsAnyText[[1]]:="A"
    

will trigger the Runtime Error shown here:

![alt-text](assets/en/Concepts/Syntax_Error.en.png)

### Exemple

The following project method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:

```code4d
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

```code4d
ALERT(Capitalize_text("hello, my name is jane doe and i'm running for president!"))
```

displays the alert shown here:

![alt-text](assets/en/Concepts/Jane_doe.en.png)