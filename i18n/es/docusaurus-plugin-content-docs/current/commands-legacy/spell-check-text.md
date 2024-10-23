---
id: spell-check-text
title: SPELL CHECK TEXT
slug: /commands/spell-check-text
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECK TEXT.Syntax-->**SPELL CHECK TEXT** ( *texto* ; *posErr* ; *longErr* ; *posVerif* ; *arrSug* )<!-- END REF-->
<!--REF #_command_.SPELL CHECK TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto a verificar |
| posErr | Integer | &#8592; | Posición del primer carácter de la palabra desconocida |
| longErr | Integer | &#8592; | Longitud de la palabra desconocida |
| posVerif | Integer | &#8594;  | Posición de inicio de la verificación |
| arrSug | Text array | &#8592; | Lista de sugerencias |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SPELL CHECK TEXT.Summary-->El comando **SPELL CHECK TEXT** verifica el contenido del parámetro *texto* a partir del carácter *posVerif* y devuelve la posición de la primera palabra desconocida encontrada (si la hay).<!-- END REF-->

Este comando devuelve la posición del primer carácter de esta palabra desconocida en *posErr* y su longitud en *longErr*. El array *arrSug* recibe la(s) sugerencia(s) de corrección propuestas por el corrector ortográfico.

Si la verificación inicia sin error y se encuentra una palabra desconocida, la variable sistema OK toma el valor 0\. Si un error de inicialización ocurre durante la verificación o si no se encuentran palabras desconocidas, OK toma el valor 1.

**Note OS X:** bajo OS X, cuando el corrector nativo se activa, este comando no soporta la corrección gramatical. 

#### Ejemplo 

Queremos contar el número posible de errores en un texto:

```4d
 $pos:=1
 $errCount:=0
 ARRAY TEXT($tErrors;0)
 ARRAY TEXT($tSuggestions;0)
 Repeat
    SPELL CHECK TEXT($myText;$errPos;$errLength;$pos;$tSuggestions)
    If(OK=0)
       $errCount:=$errCount+1 // contador de errores
       $errorWord:=Substring($myText;$errPos;$errLength)
       APPEND TO ARRAY($tErrors;$errorWord) // array de errores
       $pos:=$errPos+$errLength  //continuar la verificación
    End if
 Until(OK=1)
  // Al final $errCount=Size of array($tErrors)
```

#### Ver también 

[SPELL ADD TO USER DICTIONARY](spell-add-to-user-dictionary.md)  
[SPELL CHECKING](spell-checking.md)  