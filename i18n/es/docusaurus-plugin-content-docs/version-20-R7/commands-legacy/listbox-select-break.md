---
id: listbox-select-break
title: LISTBOX SELECT BREAK
slug: /commands/listbox-select-break
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT BREAK.Syntax-->**LISTBOX SELECT BREAK** ( {* ;} *objeto* ; *linea* ; *columna* {; *accion*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT BREAK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable (si se omite *) |
| linea | Integer | &#8594;  | Número de línea de la ruptura |
| columna | Integer | &#8594;  | Número de columna de la ruptura |
| accion | Integer | &#8594;  | Acción de selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SELECT BREAK.Summary-->El comando LISTBOX SELECT BREAK se utiliza para seleccionar líneas de ruptura en el objeto list box designado por los parámetros *objeto* y *\**.<!-- END REF--> El list box debe mostrarse en modo jerárquico.   
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
Las líneas de ruptura se añaden para representar la jerarquía, pero no corresponden a las líneas existentes en el array. Para designar una línea de ruptura a seleccionar, debe pasar en los parámetros línea y columna el número de línea y de columna correspondiente a la primera ocurrencia en el array correspondiente. Estos valores son devueltos por el comando [LISTBOX GET CELL POSITION](listbox-get-cell-position.md) cuando el usuario ha seleccionado una línea de ruptura. Este principio se describe en el párrafo "Gestión de las líneas de ruptura" de la sección *List box jerárquicos*.  
  
El parámetro *accion*, si se pasa, puede definir la acción de selección que debe efectuarse cuando una selección de líneas de ruptura existe en el list box. Puede pasar un valor o una de las siguientes constantes, que se encuentra en el tema "*Listbox*" el tema:

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Entero largo | 1     | La línea seleccionada se añade a la selección existente. Si la línea seleccionada ya pertenece a la selección existente, el comando no hace nada.                                                                                                                                        |
| lk remove from selection | Entero largo | 2     | La línea seleccionada se remueve de la selección existente. Si la línea especificada no pertenece a la selección existente, el comando no hace nada.                                                                                                                                     |
| lk replace selection     | Entero largo | 0     | La línea seleccionada se convierte en la nueva selección, reemplazando la selección existente. El comando tiene el mismo efecto que un clic de usuario en una línea (sin embargo, el evento On Clicked no se genera). Esta es la acción por defecto (si se omite el parámetro *acción*). |

**Nota:** si ha seleccionado la opción **Ocultar el resaltado de selección** para un:

* tiene que hacer selecciones de list box visibles utilizando opciones de interfaz disponibles. Para más información acerca de cómo hacerlo, ver *Personalizar la apariencia de las selecciones*.
* no puede resaltar las líneas de ruptura para los list boxes jerárquicos en este caso (ver *Limitación con list boxes jerárquicos*).

#### Ejemplo 

Dados los siguientes arrays representados en un list box:

![](../assets/en/commands/pict185052.en.png)

Queremos seleccionar la línea de ruptura "Normandy" en la representación jerárquica de estos arrays:

```4d
 $row:=Find in array(T2;"Normandy")
 $column:=2
 LISTBOX COLLAPSE(*;"MyListbox") //contracción de todos los niveles
 LISTBOX SELECT BREAK(*;"MyListbox";$row;$column)
```

Este es el resultado:

![](../assets/en/commands/pict185059.en.png)

#### Ver también 

[LISTBOX GET CELL POSITION](listbox-get-cell-position.md)  
[LISTBOX SELECT ROW](listbox-select-row.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1117 |
| Hilo seguro | &cross; |


