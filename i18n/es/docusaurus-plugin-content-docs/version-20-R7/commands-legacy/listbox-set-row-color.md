---
id: listbox-set-row-color
title: LISTBOX SET ROW COLOR
slug: /commands/listbox-set-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW COLOR.Syntax-->**LISTBOX SET ROW COLOR** ( {* ;} *objeto* ; *fila* ; *color* {; *tipoColor*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW COLOR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o  Variable (si se omite *) |
| fila | Integer | &#8594;  | Numero de fila |
| color | Text, Integer | &#8594;  | Valor de color RGB |
| tipoColor | Integer | &#8594;  | color de fuente del Listbox (por defecto) o color de fondo del Listbox |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET ROW COLOR.Summary-->**Nota:** este comando sólo funciona con listboxes de tipo array.<!-- END REF-->

El comando **LISTBOX SET ROW COLOR** define el color de una fila o una celda en el listbox de tipo array designado por los parámetros *objeto* y *\**.

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.

Puede designar un listbox o una columna del listbox en el parámetro *objeto*:

* Cuando el *objeto* designa un listbox, el comando se aplica a la fila.
* Cuando el *objeto* designa una columna del listbox, el comando se aplica a la celda localizada en la intersección de columna/fila.

En *fila*, pase el número de la fila en la que desea aplicar el nuevo color.

**Nota:** El comando no tiene en cuenta ningún estado oculto/visible de las filas del listbox.

En *color*, pase un valor de color RGB. Para obtener más información acerca de los colores RGB, consulte la descripción del comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Si desea que la fila herede el conjunto de colores para el nivel más alto, usted puede pasar la constante lk inherited en el parámetro *color*.

En el parámetro *tipoColor*, pase las constantes lk background color o lk font color para indicar si desea aplicar el color para el fondo o para el color de fuente de la fila. Si omite este parámetro, el color se aplica para el color de fuente.

Este comando modifica los valores que se encuentran en el array de colores que pueden haberse definido para la columna del listbox. Si estos arreglos no están ya definidos, el comando crea dinámicamente arrays que puede acceder mediante el comando [LISTBOX Get array](listbox-get-array.md).  
  
Si los valores de color en conflicto se definen usando las propiedades para los listboxes o columnas del listbox, se aplica un orden de prioridad. Para obtener más información, consulte el manual de *Diseño*.

#### Ejemplo 

En un array de tipo list box, queremos establecer los colores de una fila y para una celda de esta fila:

```4d
  // Definición de color de fuente para celda
 LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")
 
  // Definición de fondo y color de fuente para la fila 3
 LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)
 LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")
```

![](../assets/en/commands/pict1205393.fr.png)

#### Ver también 

*Listbox*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX Get row color as number](listbox-get-row-color-as-number.md)  
[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1270 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


