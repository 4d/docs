---
id: get-edited-text
title: Get edited text
slug: /commands/get-edited-text
displayed_sidebar: docs
---

<!--REF #_command_.Get edited text.Syntax-->**Get edited text**  : Text<!-- END REF-->
<!--REF #_command_.Get edited text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Texto en proceso de introducción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get edited text.Summary-->El comando **Get edited text** se utiliza principalmente con el evento formulario On After Edit para recuperar el texto a medida que es introducido.<!-- END REF--> También puede utilizarse con los eventos formulario On Before Keystroke y On After Keystroke. Para mayor información sobre estos eventos formulario, por favor consulte la descripción del comando [Form event code](../commands/form-event-code.md).

La combinación de este comando con los eventos formulario On Before Keystroke y On After Keystroke funciona de la siguiente manera:

* Tan pronto como un carácter se escribe en el teclado, se genera el evento On Before Keystroke. En este caso, la función **Get edited text** devuelve el contenido del área antes de que ocurriera la última pulsación de tecla. Por ejemplo, si el área contiene "PA" y el usuario digita una "R", **Get edited text** devuelve "PA" en el evento On Before Keystroke. Si el área está vacía inicialmente, **Get edited text** rdevuelve una cadena vacía.
* A continuación, se genera el evento formulario On After Keystroke. En este caso, **Get edited text** devuelve el contenido del área, incluyendo el último carácter introducido en el teclado. Por ejemplo, cuando el área contiene "PA" y el usuario digita una "R", **Get edited text** devuelve "PAR" en el evento On After Keystroke.

Tenga en cuenta que el evento On After Keystroke generalmente puede ser reemplazado por el evento On After Edit, que soporta más métodos de entrada (como IME).

Estos dos eventos sólo se generan en los métodos objeto en cuestión.

Cuando se utiliza en un contexto diferente a la entrada de datos en un objeto de formulario, esta función devuelve una cadena vacía.

#### Ejemplo 1 

El siguiente método convierte automáticamente los caracteres introducidos en mayúsculas:

```4d
 If(Form event code=On After Edit)
    [Trips]Agencies:=Uppercase(Get edited text)
 End if
```

#### Ejemplo 2 

Este es un ejemplo de cómo procesar inmediatamente los caracteres introducidos en un campo tipo texto. La idea consiste en ubicar en otro campo texto (llamado “Words”) todas las palabras de la frase que están siendo escritas. Para hacerlo, escriba el siguiente código en el método objeto del campo:

```4d
 If(Form event code=On After Keystroke)
    $RealTimeEntry:=Get edited text
    PLATFORM PROPERTIES($platform)
    If($platform#3) // Mac OS
       Repeat
          $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13))
       Until(Position(" ";$DecomposedSentence)=0)
    Else // Windows
       Repeat
          $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13)+Char(10))
       Until(Position(" ";$DecomposedSentence)=0)
    End if
    [Example]Words:=$DecomposedSentence
 End if
```

**Nota**: este ejemplo no es exhaustivo porque hemos asumido que las palabras se separan únicamente por espacios (Char (32)). Para una solución completa necesitará añadir otros filtros para extraer todas las palabras (comas, punto y comas, apóstrofes, etc.).

#### Ver también 

[Form event code](../commands/form-event-code.md)  
[Is editing text](is-editing-text.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 655 |
| Hilo seguro | &cross; |


