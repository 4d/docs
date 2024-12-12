---
id: compare-strings
title: Compare strings
slug: /commands/compare-strings
displayed_sidebar: docs
---

<!--REF #_command_.Compare strings.Syntax-->**Compare strings** ( *cadenaA* ; *cadenaB* {; *opciones*} ) : Integer<!-- END REF-->
<!--REF #_command_.Compare strings.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cadenaA | Text | &#8594;  | Cadena a comparar |
| cadenaB | Text | &#8594;  | Cadena a comparar |
| opciones | Integer | &#8594;  | Regla(s) de comparación |
| Resultado | Integer | &#8592; | Resultado de la comparación de las cadenas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Compare strings.Summary-->El comando **Compare strings** devuelve un valor negativo, cero o positivo dependiendo de si *cadenaA* se evalúa como inferior, igual o superior a *cadenaB*.<!-- END REF--> 

En el parámetro *cadenaA*, pase un valor text. 

En el parámetro *cadenaB*, pase un valor text a comparar con *cadenaA*. 

Por defecto, **Compare strings** funciona como si se utilizara el operador "<" (menor que). (Ver *String operators*). Esto se puede modificar con el parámetro *opciones*. Puede pasar una o una combinación de las siguientes constantes del tema *Cadenas*: 

| Constante                | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sk case insensitive      | 2     | Las cadenas se comparan según el lenguaje actual de los datos sin tener en cuenta las diferencias de mayúsculas y minúsculas. Note que los signos diacríticos se tienen en cuenta. Por ejemplo, "A" se considera lo mismo que "a", sin embargo "a" no se considera lo mismo que "à" . Por defecto, la comparación de cadenas de 4D no diferencia entre mayúsculas y minúsculas. Puede combinarse con: sk char codes O sk diacritic insensitive sk whole word (comando [Position](position.md) únicamente) Esta constante implica el uso de las siguientes constantes (que también pueden combinarse para mejorar la legibilidad): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sk char codes            | 1     | Las cadenas se comparan según los códigos de caracteres. Los parámetros actuales del lenguaje de datos no se tienen en cuenta durante la comparación. Se puede combinar con: sk case insensitive Sólo para los rangos "a-z" o "A-Z". (e.g., Alpha = alpha, pero Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sk diacritic insensitive | 4     | Las cadenas se comparan según el lenguaje actual de los datos sin embargo los acentos o símbolos de las letras se ignoran. Por ejemplo, "a" se considera lo mismo que "à". Puede combinarse con: sk case insensitive sk whole word (comando [Position](position.md) únicamente) Esta constante implica el uso de las siguientes constantes (que también pueden combinarse para mejorar la legibilidad): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| sk kana insensitive      | 8     | Para el idioma japonés. Controla la distinción entre sílabas Hiragana y Katakana. Desde el punto de vista semántico, la diferencia entre el hiragana y el katakana suele ser significativa, pero para capturar el mayor número posible de resultados, el modo por defecto en 4D es ignorar la diferencia (kana insensible). Por ejemplo, "あ" se considera igual que "ア". La opción sk strict realiza una comparación sensible al kana. sk kana insensitive puede utilizarse para relajar parcialmente la regla para que sea insensible al kana. **Nota:** el idioma de los datos debe ser el japonés para utilizar esta opción. Para todos los demás idiomas, la opción se ignora y [Compare strings](compare-strings.md) funcionará como si se especificara sk strict. En otras palabras, establecer esta opción en un contexto no japonés haría que la comparación fuera sensible al kana (el efecto contrario). Se puede combinar con: sk case insensitive sk diacritic insensitive Esta constante implica el uso de las siguientes constantes (que también pueden combinarse para mejorar la legibilidad): sk width insensitive sk strict                                                                                                                             |
| sk strict                | 0     | Las cadenas se comparan para obtener coincidencias exactas según el lenguaje de datos actual. En la mayoría de los casos, durante la comparación se tienen en cuenta las mayúsculas y minúsculas y las marcas diacríticas de las letras. Se puede combinar con: sk case insensitive sk diacritic insensitive sk kana insensitive Esta constante implica el uso de la siguiente constante (que también se puede combinar para mejorar la legibilidad): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| sk width insensitive     | 16    | Para el idioma japonés. Corresponde a la norma Unicode "East Asian Width", definida en el [Anexo #11 del estándar Unicode](http://www.unicode.org/reports/tr11/).Desde un punto de vista semántico, la diferencia entre un carácter "estrecho" y "ancho" o un carácter "ancho completo" y "medio ancho" suele ser insignificante, que es el modo por defecto en 4D.Por ejemplo, "ｱ" se considera lo mismo que "ア". La opción sk strict realiza una comparación sensible al ancho. **Notas:** El idioma de los datos debe ser el japonés para poder utilizar esta opción. Para todos los demás idiomas, la opción se ignora y [Compare strings](compare-strings.md) funcionará como si se especificara sk strict. En otras palabras, establecer esta opción en un contexto que no sea japonés haría que la comparación fuera sensible al ancho (el efecto contrario). Esta opción es ignorada por la función [Position](position.md). La comparación insensible al ancho de Unicode es asimétrica e imposible de localizar por posición o longitud. Se puede combinar con: sk case insensitive sk diacritic insensitive sk kana insensitive Esta constante implica el uso de la siguiente constante (que también se puede combinar para mejorar la legibilidad): sk strict |

Para información sobre la definición del lenguaje de datos, ver la sección en la *Referencia de Diseño.*

**Atención**: no se puede utilizar el carácter comodín @ con **Compare strings**. Por ejemplo, si se pasa *"abc@"* en *cadenaA* o *cadenaB* el comando evaluará realmente la cadena *"abc@"* y no una cadena "abc" más cualquier carácter.

**Valor devuelto**

El comando devuelve los siguientes valores longint:

| **Valor<br/>** | **Descripción <br/>**       |
| ---------------------- | ----------------------------------- |
| \-1                    | *cadenaA* está antes que *cadenaB*  |
| 0                      | *cadenaA* es igual a *cadenaB*      |
| 1                      | *cadenaA* está después de *cadenaB* |
  
  
#### Ejemplo 1 

Quiere comparar las siguientes cadenas:

```4d
 $string1:="alpha Bravo charlie Delta Echo Fox-Trot"
 $string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  //comparar las cadenas utilizando el código de caracteres
 $result:=Compare strings($string1;$string2;sk char codes)
  // $result = 1
 
  //comparar las cadenas utilizando el código de caracteres pero ignorando las mayúsculas y minúsculas
 $result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)
  // $result = 0
```

#### Ejemplo 2 

Los siguientes ejemplos ilustran el impacto específico de las opciones en el **contexto del lenguaje de datos japonés**:

```4d
  //por defecto no es sensible a kana
 $result:=Compare strings("イロハ";"いろは") // igual
 $result:=Compare strings("イロハ";"いろは";sk strict) // no es igual
 $result:=Compare strings("イロハ";"いろは";sk kana insensitive) // iguales
```

```4d
  //por defecto no se distingue entre mayúsculas y minúsculas
 $result:=Compare strings("さつき";"さっき") // igual
 $result:=Compare strings("さつき";"さっき";sk strict) // no es igual
 $result:=Compare strings("さつき";"さっき";sk case insensitive) // igual
```

```4d
  //por defecto es sensible a los diacríticos cuando el idioma de los datos es el japonés (diferente al resto de idiomas)
 $result:=Compare strings("ete";"été") // igual en idioma de datos no japonés
 $result:=Compare strings("ete";"été") // no son iguales en el lenguaje de datos japonés
 $result:=Compare strings("うがい";"うかい") // no es igual
 $result:=Compare strings("うがい";"うかい";sk strict) // no es igual
 $result:=Compare strings("うがい";"うかい";sk diacritic insensitive) // igual
```

**Nota:** la opción "Ordenación adecuada para la búsqueda" (ver ) tiene un impacto en el comando **Compare strings**. En particular, la "Marca sonora katakana-hiragana prolongada" o "長音記号" se interpretará de forma diferente. El ajuste también tiene un impacto en las "marcas de iteración japonesas" como "ゝ" o "ゞ". Por ejemplo:

```4d
 $result:=Compare strings("いすず";"いすゞ") // igual si la opción está desactivada
 $result:=Compare strings("いすず";"いすゞ") // no es igual si la opción está desactivada
 $result:=Compare strings("ラーメン";"ﾗｰﾒﾝ") // igual si la opción está desactivada
 $result:=Compare strings("ラーメン";"ﾗｱﾒﾝ") // no es igual si la opción está desactivada
```

#### Ver también 

[Position](position.md)  