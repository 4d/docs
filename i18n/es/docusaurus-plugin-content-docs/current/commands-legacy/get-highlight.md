---
id: get-highlight
title: GET HIGHLIGHT
slug: /commands/get-highlight
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHT.Syntax-->**GET HIGHLIGHT** ( {* ;} *objeto* ; *inicioSel* ; *finSel* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | Field, Variable, any | &#8594;  | Nombre del objeto (si se especifica *) o campo o variable (si se omite *) |
| inicioSel | Integer | &#8592; | Posición del inicio de la selección de texto |
| finSel | Integer | &#8592; | Posición del fin de la selección de texto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.GET HIGHLIGHT.Summary-->El comando GET HIGHLIGHT permite determinar el texto seleccionado actualmente en *objeto*.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa el parámetro *\**, indica que el parámetro *objeto* es un campo o variable. En este caso, pase la referencia del campo o variable (campos o variables de formulario únicamente) en lugar de una cadena. 

**Nota:** este comando no puede utilizarse con campos ubicados en el formulario listado de un subformulario.

El texto puede ser seleccionado por el usuario o por el comando [HIGHLIGHT TEXT](highlight-text.md).

El parámetro *inicioSel* devuelve la posición del primer carácter seleccionado.   
El parámetro *finSel* devuelve la posición del último carácter seleccionado más uno. 

Si los valores devueltos de *inicioSel* y *finSel* son iguales, el usuario no ha seleccionado ningún texto, y el punto de inserción está ubicado antes del carácter especificado por *inicioSel*. 

Si el objeto designado por el parámetro *objeto* no se encuentra en el formulario, el comando devuelve -1 en *inicioSel* y -2 en *finSel*. 

#### Ejemplo 1 

El siguiente ejemplo obtiene el texto seleccionado en el campo *\[Productos\]Comentarios*: 

```4d
GET HIGHLIGHT([Products]Comments;vFirst;vLast)
If(vFirst < vlast)
    ALERT("The selected text is:"+Substring([Products]Comments;vFirst;vLast-vFirst))
End if
```


#### Ejemplo 2 

Ver el ejemplo del comando [FILTER KEYSTROKE](filter-keystroke.md "FILTER KEYSTROKE").

#### Ejemplo 3 

Modificación del estilo del texto resaltado:

```4d
 GET HIGHLIGHT(*;"miTexto";$startsel,$endsel)
 ST SET ATTRIBUTES(*;"miTexto";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)
```

#### Ver también 

[FILTER KEYSTROKE](filter-keystroke.md)  
[HIGHLIGHT TEXT](highlight-text.md)  
[Keystroke](keystroke.md)  