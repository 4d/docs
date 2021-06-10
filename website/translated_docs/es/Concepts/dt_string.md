---
id: cadena
title: Cadena
---

Cadena es un término genérico utilizado para:

- Los campos o variables de tipo texto: un campo, variable o expresión de tipo texto puede contener de 0 a 2 GB de texto.
- Campos alfanuméricos: un campo alfanumérico puede contener de 0 a 255 caracteres (límite fijado al definir el campo).

## Constantes literales de tipo cadena

Una constante literal de tipo cadena se encierra entre comillas dobles y rectas ("..."). Estos son algunos ejemplos:

```4d
"Añadir registros"
"No se han encontrado registros."
"Factura"
```

Una cadena vacía se especifica con dos comillas sin nada entre ellas ("").

### Secuencias de escape
Las siguientes secuencias de escape pueden utilizarse dentro de las cadenas:

| Secuencias de escape | Carácter reemplazado |
| -------------------- | -------------------- |
| \n                  | LF (Line feed)       |
| \t                  | HT (Tab)             |
| \r                  | CR (Carriage return) |
| \\\               | \ (Backslash)       |
| \\"                | " (Quotation marks)  |

**Note:** The \ (backslash) character is used as a separator in pathnames under Windows. You must therefore use a double backslash \\\ in paths when you want to have a backslash in front of a character used in one of the escape sequences recognized by 4D (e.g. "C:\\\MyDocuments\\\New.txt").

## String operators

| Operación         | Sintaxis         | Devuelve | Expresión               | Valor    |
| ----------------- | ---------------- | -------- | ----------------------- | -------- |
| Concatenation     | String + String  | Cadena   | "abc" + "def"           | "abcdef" |
| Repetition        | String * Number  | Cadena   | "ab" * 3                | "ababab" |
| Igual             | String = String  | Booleano | "abc" = "abc"           | True     |
|                   |                  |          | "abc" = "abd"           | False    |
| Desigualdad       | String # String  | Booleano | "abc" # "abd"           | True     |
|                   |                  |          | "abc" # "abc"           | False    |
| Mayor que         | String > String  | Booleano | "abd" > "abc"           | True     |
|                   |                  |          | "abc" > "abc"           | False    |
| Menor que         | String < String  | Booleano | "abc" < "abd"           | True     |
|                   |                  |          | "abc" < "abc"           | False    |
| Mayor o igual que | String >= String | Booleano | "abd" >= "abc"          | True     |
|                   |                  |          | "abc" >= "abd"          | False    |
| Menor o igual que | String <= String | Booleano | "abc" <= "abd"          | True     |
|                   |                  |          | "abd" <= "abc"          | False    |
| Contains keyword  | String % String  | Booleano | "Alpha Bravo" % "Bravo" | True     |
|                   |                  |          | "Alpha Bravo" % "ravo"  | False    |
|                   | Picture % String | Booleano | Picture_expr % "Mer"    | True (*) |

(*) If the keyword "Mer" is associated with the picture stored in the picture expression (field or variable).

## String comparisons

- Strings are compared on a character-by-character basis (except in the case of searching by [keywords](dt_string.md#keywords), see below).
- When strings are compared, the case of the characters is ignored; thus, "a"="A" returns `TRUE`. Para saber si los caracteres están en mayúsculas o minúsculas, compare sus códigos de caracteres. Por ejemplo, la siguiente expresión devuelve `FALSE`:

```4d
Character code("A")=Character code("a") // porque 65 no es igual a 97
```
- Cuando se comparan las cadenas, se tienen en cuenta los caracteres diacríticos. Por ejemplo, las siguientes expresiones devuelven `TRUE`:

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // etc
```

**Nota:** la comparación de cadenas tiene en cuenta las especificidades del lenguaje **definido para el archivo de datos 4D** (que no siempre es el mismo que el lenguaje definido para el sistema).

### Arroba (@)

El lenguaje 4D soporta **@** como carácter comodín. Este carácter se puede utilizar en cualquier comparación de cadenas para que coincida con cualquier número de caracteres. Por ejemplo, la siguiente expresión es `TRUE`:

```4d
"abcdefghij"="abc@"
```

El carácter comodín debe utilizarse dentro del segundo operando (la cadena de la derecha) para que coincida con cualquier número de caracteres. La siguiente expresión es `FALSE`, porque la @ se considera sólo como un carácter en el primer operando:

```4d
    "abc@"="abcdefghij"
```

El comodín significa "uno o más caracteres o nada". Las expresiones siguientes son `TRUE`:

```4d
     "abcdefghij"="abcdefghij@"
     "abcdefghij"="@abcdefghij"
     "abcdefghij"="abcd@efghij"
     "abcdefghij"="@abcdefghij@"
     "abcdefghij"="@abcde@fghij@"
```

Por otro lado, sea cual sea el caso, una comparación de cadenas con dos comodines consecutivos siempre devolverá `FALSE`. La siguiente expresión es `FALSE`:

```4d
"abcdefghij"="abc@@fg"
```

Cuando el operador de comparación es o contiene un símbolo < o >, sólo se soporta la comparación con un único comodín situado al final del operando:

```4d
     "abcd"<="abc@" // Comparación válida
     "abcd"<="abc@ef" //No es una comparación válida
```

Si desea ejecutar comparaciones o consultas utilizando @ como carácter (y no como comodín), debe utilizar la instrucción `Character code(At sign)`. Imagine, por ejemplo, que quiere saber si una cadena termina con el carácter @. La siguiente expresión (si $vsValue no está vacío) es siempre `TRUE`:

```4d
($vsValue[[Length($vsValue)]]="@")
```

La siguiente expresión se evaluará correctamente:

```4d
(Character code($vsValue[[Length($vsValue)]])#64)  
```
**Nota:** una opción 4D del modo Diseño permite definir cómo se interpreta el carácter @ cuando se incluye en una cadena de caracteres.

### Palabras claves

A diferencia de otras comparaciones de cadenas, la búsqueda por palabras clave busca "palabras" en los "textos": las palabras se consideran tanto individualmente como en su conjunto. El operador **%** siempre devuelve `False` si la consulta se refiere a varias palabras o sólo a una parte de ellas (por ejemplo, una sílaba). Las "palabras" son cadenas de caracteres rodeadas de "separadores", que son espacios y caracteres de puntuación y guiones. Un apóstrofe, como en "Today's", se considera normalmente como parte de la palabra, pero se ignorará en ciertos casos (ver las reglas más abajo). Los números se pueden buscar porque se evalúan como un todo (incluidos los símbolos decimales). Los demás símbolos (moneda, temperatura, etc.) serán ignorados.

```4d
     "Alpha Bravo Charlie"%"Bravo" // DevuelveTrue
     "Alpha Bravo Charlie"%"vo" // Devuelve False
     "Alpha Bravo Charlie"%"Alpha Bravo" // Devuelve False
     "Alpha,Bravo,Charlie"%"Alpha" // Devuelve True
     "Software and Computers"%"comput@" // Devuelve True
```
> **Notas:** - 4D utiliza la librería ICU para comparar cadenas (utilizando operadores <>=#) y detectar palabras claves. Para más información sobre las normas aplicadas, consulte la siguiente dirección: http://www.unicode.org/reports/tr29/#Word_Boundaries. - En la versión japonesa, en lugar de ICU, 4D utiliza por defecto Mecab para detectar las palabras claves.

## Símbolos de indice de cadena
Los símbolos de indice de cadena son: [[...]]

Estos símbolos se utilizan para referirse a un solo carácter dentro de una cadena. Esta sintaxis permite direccionar individualmente los caracteres en un campo o una variable de tipo Alfa o Texto.

Si los símbolos de referencia de caracteres aparecen a la izquierda del operador de asignación (:=), se asigna un carácter a la posición referenciada en la cadena. Por ejemplo, si vsName no es una cadena vacía, la siguiente línea pone el primer carácter de vsName en mayúsculas:

```4d
If(vsNom#"")
    vsNom[[1]]:=Uppercase(vsNom[[1]])
End if
```

En caso contrario, si los símbolos de referencia de caracteres aparecen dentro de una expresión, devuelven el caracter (al que se refieren) como una cadena de 1 caracter. Por ejemplo:

```4d
//El siguiente ejemplo comprueba si el último caracter de vtText es una arroba "@".
 If(vtText#"")
    If(Character code(Substring(vtText;Length(vtText);1))=At sign)
  //...
    End if
 End if

  //Utilizando la sintaxis de los caracteres de indice, se escribiría de forma más sencilla:
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

### Ejemplo


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
