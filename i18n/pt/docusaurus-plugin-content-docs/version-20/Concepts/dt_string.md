---
id: string
title: String
---

String is a generic term that stands for:

- Text fields or variables: a Text field, variable, or expression may contain from 0 to 2 GB of text.
- Alphanumeric fields: an Alphanumeric field may contain from 0 to 255 characters (limit set when field is defined).

## String literals

A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:

```4d
"Adicionar registos"
"Não foram encontrados registos."
"Fatura "
```

An empty string is specified by two quotation marks with nothing between them ("").

### Escape sequences

The following escape sequences can be used within strings:

| Escape sequence | Carácter substituído |
| --------------- | -------------------- |
| \n             | LF (Avanço de linha) |
| \t             | HT (Tab)             |
| \r             | CR (Carriage return) |
| \\\          | \ (Barra invertida) |
| \\"           | " (aspas)            |

**Note:** The \ (backslash) character is used as a separator in pathnames under Windows. You must therefore use a double backslash \\\ in paths when you want to have a backslash in front of a character used in one of the escape sequences recognized by 4D (e.g. "C:\\\MyDocuments\\\New.txt").

## String operators

| Operação             | Sintaxe          | Retorna    | Expression              | Valor    |
| -------------------- | ---------------- | ---------- | ----------------------- | -------- |
| Concatenação         | String + String  | String     | "abc" + "def"           | "abcdef" |
| Repetição            | String * Number  | String     | "ab" * 3                | "ababab" |
| Igual                | String = String  | Parâmetros | "abc" = "abc"           | True     |
|                      |                  |            | "abc" = "abd"           | False    |
| Desigualdade         | String # String  | Parâmetros | "abc" # "abd"           | True     |
|                      |                  |            | "abc" # "abc"           | False    |
| Maior que            | String > String  | Parâmetros | "abd" > "abc"           | True     |
|                      |                  |            | "abc" > "abc"           | False    |
| Menor que            | String < String  | Parâmetros | "abc" < "abd"           | True     |
|                      |                  |            | "abc" < "abc"           | False    |
| Maior ou igual a     | String >= String | Parâmetros | "abd" >= "abc"          | True     |
|                      |                  |            | "abc" >= "abd"          | False    |
| Menor que ou igual a | String <= String | Parâmetros | "abc" <= "abd"          | True     |
|                      |                  |            | "abd" <= "abc"          | False    |
| Contém palavra chave | String % String  | Parâmetros | "Alpha Bravo" % "Bravo" | True     |
|                      |                  |            | "Alpha Bravo" % "ravo"  | False    |
|                      | Picture % String | Parâmetros | Picture_expr % "Mer"    | True (*) |

(*) If the keyword "Mer" is associated with the picture stored in the picture expression (field or variable).

## Comparações de cadeias

- Strings are compared on a character-by-character basis (except in the case of searching by [keywords](dt_string.md#keywords), see below).
- When strings are compared, the case of the characters is ignored; thus, "a"="A" returns `TRUE`. To test if the case of two characters is different, compare their character codes. For example, the following expression returns `FALSE`:

```4d
Character code("A")=Character code("a") // because 65 is not equal to 97
```

- When strings are compared, diacritical characters are taken into account. For example, the following expressions return `TRUE`:

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // etc.
```

**Note:** String comparison takes into account specificities of the language **defined for the 4D data file** (which is not always the same as the language defined for the system).

### Wilcard character (@)

The 4D language supports **@** as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is `TRUE`:

```4d
"abcdefghij"="abc@"
```

The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is `FALSE`, because the @ is considered only as a one character in the first operand:

```4d
    "abc@"="abcdefghij"
```

O wildcard significa "um ou mais caracteres ou nada". As seguintes expressões são `TRUE`:

```4d
     "abcdefghij"="abcdefghij@"
     "abcdefghij"="@abcdefghij"
     "abcdefghij"="abcd@efghij"
     "abcdefghij"="@abcdefghij@"
     "abcdefghij"="@abcde@fghij@"
```

On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return `FALSE`. A seguinte expressão é `FALSE`:

```4d
"abcdefghij"="abc@@fg"
```

When the comparison operator is or contains a < or > symbol, only comparison with a single wildcard located at the end of the operand is supported:

```4d
     "abcd"<="abc@" // Comparação válida
     "abcd"<="abc@ef" //Não é uma comparação válida
```

If you want to execute comparisons or queries using @ as a character (and not as a wildcard), you need to use the `Character code(At sign)` instruction. Imagine, for example, that you want to know if a string ends with the @ character. The following expression (if $vsValue is not empty) is always `TRUE`:

```4d
($vsValue[[Length($vsValue)]]="@")
```

The following expression will be evaluated correctly:

```4d
(Character code($vsValue[[Length($vsValue)]])#64)  
```

**Note:** A 4D option in the Design environment allows you to define how the @ character is interpreted when it is included in a character string.

### Palavras-chave

Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The **%** operator always returns `False` if the query concerns several words or only part of a word (for example, a syllable). The “words” are character strings surrounded by “separators,” which are spaces and punctuation characters and dashes. An apostrophe, like in “Today's”, is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored.

```4d
     "Alpha Bravo Charlie"%"Bravo"// Retorna True
     "Alpha Bravo Charlie"%"vo" // Retorna False
     "Alpha Bravo Charlie"%"Alpha Bravo"// Retorna False
     "Alpha,Bravo,Charlie"%"Alpha" // Retorna True
     "Software e Computadores"%"comput@" // Retorna True
```
> **Notas:**
> 
> - 4D uses the ICU library for comparing strings (using `<>=#` operators) and detecting keywords. For more information about the rules implemented, refer to the following address: <http://www.unicode.org/reports/tr29/#Word_Boundaries>.
> - In the Japanese version, instead of ICU, 4D uses Mecab by default for detecting keywords.

## Character Reference Symbols

The character reference symbols: [[...]]

These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable, string variable, or field.

If the character reference symbols appear on the left side of the assignment operator (:=), a character is assigned to the referenced position in the string. For example, if vsName is not an empty string, the following line sets the first character of vsName to uppercase:

```4d
If(vsName#"")
    vsName[[1]]:=Uppercase(vsName[[1]])
End if
```

Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. Por exemplo:

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
- Failing to do so, in compiled mode, causes an error with the option Range Checking On. Por exemplo, executando o seguinte código:

```
//Voisas muito más e desagradáveis a fazer, boo!
 vsAnyText:=""
 vsAnyText[[1]]:="A"
```

accionará o erro de tempo de execução mostrado aqui:

![alt-text](../assets/en/Concepts/Syntax_Error.en.png)

### Exemplo

The following project method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:

```4d
  //Método projecto Capitalize_text
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

Por exemplo, a linha:

```4d
ALERT(Capitalize_text("hello, my name is jane doe and i'm running for president!"))
```

mostra o alerta aqui mostrado:

![alt-text](../assets/en/Concepts/Jane_doe.en.png)
