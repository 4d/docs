---
id: position
title: Position
slug: /commands/position
displayed_sidebar: docs
---

<!--REF #_command_.Position.Syntax-->**Position** ( *buscar* ; *laCadena* {; *inicio* {; *longEncont*}}{; *} ) -> Resultado <br/>
**Position** ( *buscar* ; *laCadena* ; *inicio* ; *longEncont* ; *opciones* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Position.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| buscar | Text | &#8594;  | Cadena a buscar |
| laText | Text | &#8594;  | Cadena en la cual buscar |
| inicio | Integer | &#8594;  | Posición en la cadena donde comenzar la búsqueda |
| longEncont | Integer | &#8592; | Longitud de la cadena encontrada |
| * | Operador | &#8594;  | Si se pasa: búsqueda diacrítica |
| Resultado | Integer | &#8592; | Posición de la primera ocurrencia |
| Position ( buscar ; laCadena ; inicio ; longEncont ; opciones ) -> Resultado |
| Parámetro | Tipo | Descripción |
| buscar | Text | &#8594;  | Cadena a buscar |
| laText | Text | &#8594;  | Cadena en la cual buscar |
| inicio | Integer | &#8594;  | Posición en la cadena donde comenzar la búsqueda |
| longEncont | Integer | &#8594;  | Longitud de la cadena encontrada |
| opciones | Integer | &#8594;  | Condición(es) de búsqueda |
| Resultado | Integer | &#8592; | Posición de la primera ocurrencia |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Position.Summary-->**Position** devuelve la posición de la primera ocurrencia de *buscar* en *laCadena*.<!-- END REF-->

Si *laCadena* no contiene *buscar*, devuelve cero (0).

Si **Position** ubica una ocurrencia de *buscar*, la función devuelve la posición del primer carácter de esta ocurrencia en *laCadena*.

Si pregunta por la posición de una cadena vacía dentro de una cadena vacía, **Position** devuelve cero (0).

Por defecto, la búsqueda comienza en el primer carácter de *laCadena*. El parámetro *inicio* permite precisar el carácter donde la búsqueda debe comenzar en *laCadena*.

El parámetro *longEncont*, devuelve la longitud de la cadena encontrada por la búsqueda. Este parámetro es necesario para poder gestionar correctamente cartas escritas con uno o más caracteres (ejemplo: æ y ae, ß y ss, etc.).  
Si se pasa el parámetro *\** (ver abajo), estas letras no se consideran como equivalente (æ # ae); en modo diacrítico, *longEncont* siempre es igual a la longitud de *buscar* (si se encuentra una ocurrencia).

Por defecto, el comando hace comparaciones globales teniendo en cuenta particularidades lingüísticas y letras que pueden estar escritas con uno o más caracteres (por ejemplo æ = ae). Por otra parte, no es diacrítica (a=A, a=à etc.) y no tiene en cuenta los caracteres "ignorables". Los caracteres ignorables incluyen todos los caracteres del subset unicode *CO Control* (U+0000 a U+001F, ascii character control set) excepto los caracteres imprimibles (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF y U+0013 CR). 

Para modificar este funcionamiento, puede pasar:

* (**primera sintaxis - parámetro \***) el asterisco *\** como último parámetro. En este caso, las comparaciones se basan en los códigos de los caracteres. Debe pasar el parámetro *\**:  
   * Si quiere tener en cuenta caracteres especiales, utilizados por ejemplo como delimitadores (**Char**(1), etc.),  
   * Si la evaluación de caracteres debe ser sensible a las mayúsculas y minúsculas y tener en cuenta los caracteres acentuados (a#A, a#à, etc.).  
   Note que en este modo, la evaluación no maneja variaciones en la escritura de las palabras.  
         
   **Nota:** en ciertos casos, utilizar el parámetro *\** puede acelerar significativamente la ejecución del comando.
* (**segunda sintaxis -** ***parámetro opciones**) una o una combinación de las siguientes constantes del tema *Cadenas*:  
    
| Constante                | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| sk case insensitive      | 2     | Las cadenas se comparan según el lenguaje actual de los datos sin tener en cuenta las diferencias de mayúsculas y minúsculas. Note que los signos diacríticos se tienen en cuenta. Por ejemplo, "A" se considera lo mismo que "a", sin embargo "a" no se considera lo mismo que "à" . Por defecto, la comparación de cadenas de 4D no diferencia entre mayúsculas y minúsculas. Puede combinarse con: sk char codes O sk diacritic insensitive sk whole word (comando [Position](position.md) únicamente) Esta constante implica el uso de las siguientes constantes (que también pueden combinarse para mejorar la legibilidad): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| sk char codes            | 1     | Las cadenas se comparan según los códigos de caracteres. Los parámetros actuales del lenguaje de datos no se tienen en cuenta durante la comparación. Se puede combinar con: sk case insensitive Sólo para los rangos "a-z" o "A-Z". (e.g., Alpha = alpha, pero Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  
| sk diacritic insensitive | 4     | Las cadenas se comparan según el lenguaje actual de los datos sin embargo los acentos o símbolos de las letras se ignoran. Por ejemplo, "a" se considera lo mismo que "à". Puede combinarse con: sk case insensitive sk whole word (comando [Position](position.md) únicamente) Esta constante implica el uso de las siguientes constantes (que también pueden combinarse para mejorar la legibilidad): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| sk kana insensitive      | 8     | Para el idioma japonés. Controla la distinción entre sílabas Hiragana y Katakana. Desde el punto de vista semántico, la diferencia entre el hiragana y el katakana suele ser significativa, pero para capturar el mayor número posible de resultados, el modo por defecto en 4D es ignorar la diferencia (kana insensible). Por ejemplo, "あ" se considera igual que "ア". La opción sk strict realiza una comparación sensible al kana. sk kana insensitive puede utilizarse para relajar parcialmente la regla para que sea insensible al kana. **Nota:** el idioma de los datos debe ser el japonés para utilizar esta opción. Para todos los demás idiomas, la opción se ignora y [Compare strings](compare-strings.md) funcionará como si se especificara sk strict. En otras palabras, establecer esta opción en un contexto no japonés haría que la comparación fuera sensible al kana (el efecto contrario). Se puede combinar con: sk case insensitive sk diacritic insensitive Esta constante implica el uso de las siguientes constantes (que también pueden combinarse para mejorar la legibilidad): sk width insensitive sk strict                                                                                                                             |  
| sk strict                | 0     | Las cadenas se comparan para obtener coincidencias exactas según el lenguaje de datos actual. En la mayoría de los casos, durante la comparación se tienen en cuenta las mayúsculas y minúsculas y las marcas diacríticas de las letras. Se puede combinar con: sk case insensitive sk diacritic insensitive sk kana insensitive Esta constante implica el uso de la siguiente constante (que también se puede combinar para mejorar la legibilidad): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| sk whole word            | 32    | Las cadenas se comparan según el lenguaje de datos actual. Sólo se consideran las cadenas que son palabras completas. Las cadenas que coinciden dentro de otras cadenas no se consideran. Por ejemplo, "where" no se considera cuando se encuentra dentro de "somewhere". Se puede combinar con: sk case insensitive (comando [Position](position.md) únicamente) sk diacritic insensitive (comando [Position](position.md) únicamente)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| sk width insensitive     | 16    | Para el idioma japonés. Corresponde a la norma Unicode "East Asian Width", definida en el [Anexo #11 del estándar Unicode](http://www.unicode.org/reports/tr11/).Desde un punto de vista semántico, la diferencia entre un carácter "estrecho" y "ancho" o un carácter "ancho completo" y "medio ancho" suele ser insignificante, que es el modo por defecto en 4D.Por ejemplo, "ｱ" se considera lo mismo que "ア". La opción sk strict realiza una comparación sensible al ancho. **Notas:** El idioma de los datos debe ser el japonés para poder utilizar esta opción. Para todos los demás idiomas, la opción se ignora y [Compare strings](compare-strings.md) funcionará como si se especificara sk strict. En otras palabras, establecer esta opción en un contexto que no sea japonés haría que la comparación fuera sensible al ancho (el efecto contrario). Esta opción es ignorada por la función [Position](position.md). La comparación insensible al ancho de Unicode es asimétrica e imposible de localizar por posición o longitud. Se puede combinar con: sk case insensitive sk diacritic insensitive sk kana insensitive Esta constante implica el uso de la siguiente constante (que también se puede combinar para mejorar la legibilidad): sk strict |

Para información sobre la definición del lenguaje de datos, ver la sección en la *Referencia de Diseño*.  
  
**Advertencia:** no puede utilizar el carácter arroba @ con **Position**. Por ejemplo, si pasa *"abc@"* en *buscar*, el comando buscará la cadena *"abc@"* y no "abc" seguido de otros caracteres.

#### Ejemplo 1 

Este ejemplo ilustra el uso de Position. Los resultados, descritos en los comentarios, se asignan a la variable *vlResult*.

```4d
 vlResult:=Position("ll";"Billar") // vlResult toma el valor 3
 vlResult:=Position(vtText1;vtText2) // Posición de la primera ocurrencia de vtText1 en vtText2
 vlResult:=Position("todo";"todos los procesos dentro de un método";1) // vlResult toma el valor 1
 vlResult:=Position("todo";"todos los procesos dentro de un método";2) // vlResult toma el valor 35
 vlResult:=Position("TODO";"todos los procesos dentro de un método";1;*) // vlResult toma el valor 0
 vlResult:=Position("œ";"Bœuf";1;$largo) // vlResult =2, $largo= 1
```

#### Ejemplo 2 

En el siguiente ejemplo, el parámetro *longEncont* permite buscar todas las ocurrencias de "aegis" en un texto, sin importar cómo está escrito:

```4d
 $inicio:=1
 Repeat
    vlResult:=Position("aegis";$text;$inicio;$longEncont)
    $inicio:=$inicio+$longEncont
 Until(vlResult=0)
```

#### Ejemplo 3 

En el siguiente ejemplo, usted quiere encontrar todas las instancias de una cadena y reemplazarla:

```4d
 var $lengthFound : Integer
 
 $string:="Hello Joelle et joel!"
 $find:="joel"
 $replace:="Joël"
 $option:=sk case insensitive+sk diacritic insensitive
 
 $p:=0
 Repeat
    $p:=Position($find;$string;$p+1;$lengthFound;$option)
    If($p>0)
       $string:=Substring($string;1;$p-1)+$replace+Substring($string;$p+$lengthFound)
    End if
 Until($p<=0) //result: $string -> Hello Joëlle and Joël!
```

#### Ver también 

[Compare strings](compare-strings.md)  
[Substring](substring.md)  