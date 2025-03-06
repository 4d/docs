---
id: highlight-text
title: HIGHLIGHT TEXT
slug: /commands/highlight-text
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT TEXT.Syntax-->**HIGHLIGHT TEXT** ( {* ;} *objeto* ; *inicioSel* ; *finSel* )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es un campo o una variable |
| objeto | Field, Variable, any | &#8594;  | Nombre del objeto (si se especifica *) o Campo o variable (si se omite *) |
| inicioSel | Integer | &#8594;  | Nueva posición de inicio de selección de texto |
| finSel | Integer | &#8594;  | Nueva posición de fin de selección de texto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.HIGHLIGHT TEXT.Summary-->El comando HIGHLIGHT TEXT selecciona una parte de texto en *objeto*.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de un objeto (una cadena) Si no pasa el parámetro \*, indica que el parámetro *objeto* es un campo o una variable. En este caso, pase la referencia del campo o de la variable (campos o variables de formulario únicamente) en lugar de una cadena.  

Si *objeto* no es el objeto que está siendo modificado, esta área recupera el foco.

**Nota:** este comando no puede utilizarse con campos en un subformulario.  
  
El parámetro *inicioSel* representa la posición del primer carácter a seleccionar, y el parámetro *finSel* representa la posición del último carácter a seleccionar más uno. Si *inicioSel* y *finSel* son iguales, el punto de inserción está ubicado antes del carácter especificado por *inicioSel*, y ningún carácter está seleccionado.

Si *finSel* es superior al número de caracteres en *objeto*, todos los caracteres entre *inicioSel* y el final del texto son seleccionados.

#### Ejemplo 1 

El siguiente ejemplo selecciona todos los caracteres en el campo editable *\[Productos\]Notas*: 

```4d
 HIGHLIGHT TEXT([Productos]Notas;1;Length([Productos]Notas)+1)
```

#### Ejemplo 2 

El siguiente ejemplo mueve el punto de inserción al principio del campo editable *\[Productos\]Notas*: 

```4d
 HIGHLIGHT TEXT([Productos]Notas;1;1)
```

#### Ejemplo 3 

El siguiente ejemplo mueve el punto de inserción al final del campo editable *\[Productos\]Notas*: 

```4d
 $vLen:=Length([Productos]Notas)+1HIGHLIGHT TEXT([Productos]Notas;$vLen;$vLen)
```

#### Ejemplo 4 

Ver el ejemplo del comando [FILTER KEYSTROKE](filter-keystroke.md "FILTER KEYSTROKE").

#### Ver también 

[GET HIGHLIGHT](get-highlight.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 210 |
| Hilo seguro | &cross; |


