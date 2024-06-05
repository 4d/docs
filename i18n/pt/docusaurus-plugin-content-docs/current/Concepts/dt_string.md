---
id: string
title: String
---

String é um termo genérico que significa:

- Campos ou variáveis texto: um campo, uma variável ou uma expressão texto pode conter de 0 a 2 GB de texto.
- Campos alfanuméricos: um campo alfanumérico pode conter de 0 a 255 caracteres (limite estabelecido aquando da definição do campo).

## Constantes literais String

Uma constante string é colocada entre aspas duplas e rectas ("..."). Eis alguns exemplos:

```4d
"Add Records"
"No records found."
"Invoice"
```

Uma cadeia vazia é especificada por duas aspas sem nada entre elas ("").

### Sequências de escape

As seguintes sequências de escape podem ser utilizadas em strings de caracteres:

| Escape sequence                                | Carácter substituído                    |
| ---------------------------------------------- | --------------------------------------- |
| \n                                             | LF (Avanço de linha) |
| \t                                             | HT (Tab)             |
| \r                                             | CR (Carriage return) |
| \\\\|\ (Barra invertida) |                                         |
| \\"                                          | " (aspas)            |

**Nota:** el carácter \ (barra invertida) se utiliza como separador en las rutas de acceso en Windows. Portanto, deve usar uma barra invertida dupla \\\ em caminhos quando quiser ter uma barra invertida à frente de um carácter usado numa das sequências de escape reconhecidas pelo 4D (por exemplo, "C:\\\MyDocuments\\\New.txt").

## Operadores de string

| Operação             | Sintaxe          | Retorna    | Expression                                | Valor                        |
| -------------------- | ---------------- | ---------- | ----------------------------------------- | ---------------------------- |
| Concatenação         | String + String  | String     | "abc" + "def"                             | "abcdef"                     |
| Repetição            | String \* Number | String     | "ab" \* 3                                 | "ababab"                     |
| Igual                | String = String  | Parâmetros | "abc" = "abc"                             | True                         |
|                      |                  |            | "abc" = "abd"                             | False                        |
| Desigualdade         | String # String  | Parâmetros | "abc" # "abd"                             | True                         |
|                      |                  |            | "abc" # "abc"                             | False                        |
| Maior que            | Cadena > Cadena  | Parâmetros | "abd" > "abc"                             | True                         |
|                      |                  |            | "abc" > "abc"                             | False                        |
| Menor que            | Cadena < Cadena  | Parâmetros | "abc" < "abd"                             | True                         |
|                      |                  |            | "abc" < "abc"                             | False                        |
| Maior ou igual a     | Cadena >= Cadena | Parâmetros | "abd" >= "abc"                            | True                         |
|                      |                  |            | "abc" >= "abd"                            | False                        |
| Menor que ou igual a | Cadena <= Cadena | Parâmetros | "abc" <= "abd"                            | True                         |
|                      |                  |            | "abd" <= "abc"                            | False                        |
| Contém palavra chave | String % String  | Parâmetros | "Alpha Bravo" % "Bravo"                   | True                         |
|                      |                  |            | "Alpha Bravo" % "ravo"                    | False                        |
|                      | Picture % String | Parâmetros | Picture_expr % "Mer" | True (\*) |

(\*) Se a palavra-chave "Mer" estiver associada à imagem armazenada na expressão de imagem (campo ou variável).

## Comparações de cadeias

- Las cadenas se comparan caracter por caracter (excepto en el caso de la búsqueda por [palabras clave](dt_string.md#keywords), ver más abajo).
- Cuando se comparan cadenas, se ignoran las mayúsculas y minúsculas de los caracteres; así, "a"="A" devuelve `TRUE`. Para testar se o caso de dois caracteres é diferente, compare os seus códigos de caracteres. Por ejemplo, la siguiente expresión devuelve `FALSE`:

```4d
Character code("A")=Character code("a") // porque 65 não é igual a 97
```

- Quando as cadeias de caracteres são comparadas, os caracteres diacríticos são tidos em conta. Por ejemplo, las siguientes expresiones devuelven `TRUE`:

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // and so on
```

**Nota:** la comparación de cadenas tiene en cuenta las especificidades del lenguaje **definido para el archivo de datos 4D** (que no siempre es el mismo que el lenguaje definido para el sistema).

### Caractere coringa(@)

El lenguaje 4D soporta **@** como carácter comodín. Este carácter pode ser utilizado em qualquer comparação de cadeia para corresponder a qualquer número de caracteres. Por ejemplo, la siguiente expresión es `TRUE`:

```4d
"abcdefghij"="abc@"
```

O carácter wildcard deve ser utilizado dentro do segundo operando (a cadeia do lado direito) para corresponder a qualquer número de caracteres. La siguiente expresión es `FALSE`, porque la @ se considera sólo como un carácter en el primer operando:

```4d
    "abc@"="abcdefghij"
```

O wildcard significa "um ou mais caracteres ou nada". Las expresiones siguientes son `TRUE`:

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

Quando o operador de comparação é ou contém um símbolo < or >, só é suportada a comparação com um único carácter universal localizado no final do operando:

```4d
     "abcd"<="abc@" // Valid comparison
     "abcd"<="abc@ef" //Not a valid comparison
```

Si desea ejecutar comparaciones o consultas utilizando @ como carácter (y no como comodín), debe utilizar la instrucción `Character code(At sign)`. Imagine, por exemplo, que quer saber se uma cadeia de caracteres termina com o carácter @. La siguiente expresión (si $vsValue no está vacío) es siempre `TRUE`:

```4d
($vsValue[[Length($vsValue)]]="@")
```

A seguinte expressão será avaliada correctamente:

```4d
(Character code($vsValue[[Length($vsValue)]])#64)  
```

**Nota:** una opción 4D del modo Diseño permite definir cómo se interpreta el carácter @ cuando se incluye en una cadena de caracteres.

### Palavras-chave

Ao contrário de outras comparações de cadeias, a pesquisa por palavras-chave procura "palavras" em "textos": as palavras são consideradas individualmente e como um todo. El operador **%** siempre devuelve `False` si la consulta se refiere a varias palabras o sólo a una parte de ellas (por ejemplo, una sílaba). As "palavras" são cadeias de caracteres rodeadas por "separadores", que são espaços e caracteres de pontuação e traços. Um apóstrofo, como em "Today's", é normalmente considerado como parte da palavra, mas será ignorado em certos casos (ver as regras abaixo). Os números podem ser pesquisados porque são avaliados como um todo (incluindo símbolos decimais). Outros símbolos (moeda, temperatura, etc.) serão ignorados.

```4d
     "Alpha Bravo Charlie"%"Bravo"// Retorna True
     "Alpha Bravo Charlie"%"vo" // Retorna False
     "Alpha Bravo Charlie"%"Alpha Bravo"// Retorna False
     "Alpha,Bravo,Charlie"%"Alpha" // Retorna True
     "Software e Computadores"%"comput@" // Retorna True
```

> **Notas:**
>
> - 4D utiliza la librería ICU para comparar cadenas (utilizando los operadores `<>=#`) y detectar palabras claves. For more information about the rules implemented, please refer to the following address: http://www.unicode.org/reports/tr29/#Word_Boundaries.
> - Na versão japonesa, em vez de ICU, 4D usa Mecab por defeito para detectar palavras-chave.

## Símbolos de referência de caracteres

Os símbolos de referência dos caracteres: [[...]]

Estes símbolos são utilizados para se referir a um único carácter numa cadeia de caracteres. Esta sintaxe permite-lhe endereçar individualmente os caracteres de uma variável de texto, de uma variável de cadeia de caracteres ou de um campo.

Se os símbolos de referência de carácter aparecerem no lado esquerdo do operador de atribuição (:=), é atribuído um carácter à posição referenciada na cadeia. Por exemplo, se vsName não for uma cadeia de caracteres vazia, a linha seguinte define o primeiro carácter de vsName como maiúsculo:

```4d
If(vsName#"")
    vsName[[1]]:=Uppercase(vsName[[1]])
End if
```

Caso contrário, se os símbolos de referência de caracteres aparecerem numa expressão, devolvem o carácter (a que se referem) como uma cadeia de 1 carácter. Por exemplo:

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

### Nota avançada sobre a referência de carácter inválido

Quando utiliza os símbolos de referência de caracteres, deve endereçar os caracteres existentes na cadeia da mesma forma que endereça os elementos existentes de uma matriz. Por exemplo, se endereçar o 20º carácter de uma variável de cadeia, esta variável DEVE conter pelo menos 20 caracteres.

- Se não o fizer, no modo interpretado, não causa um erro de sintaxe.
- Se não o fizer, em modo compilado (sem opções), pode levar à corrupção da memória, se, por exemplo, escrever um carácter para além do fim de uma cadeia ou de um texto.
- Se não o fizer, no modo compilado, causa um erro com a opção Range Checking On. Por exemplo, executando o seguinte código:

```
//Very bad and nasty thing to do, boo!
 vsAnyText:=""
 vsAnyText[[1]]:="A"
```

accionará o erro de tempo de execução mostrado aqui:

![alt-text](../assets/en/Concepts/Syntax_Error.en.png)

### Exemplo

O seguinte método de projeto capitaliza o primeiro carácter de cada palavra do texto recebido como parâmetro e devolve o texto capitalizado resultante:

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

Por exemplo, a linha:

```4d
ALERT(Capitalize_text("hello, my name is jane doe and i'm running for president!"))
```

mostra o alerta aqui mostrado:

![alt-text](../assets/en/Concepts/Jane_doe.en.png)
