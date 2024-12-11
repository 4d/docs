---
id: listbox-get-row-color-as-number
title: LISTBOX Get row color as number
slug: /commands/listbox-get-row-color-as-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color as number.Syntax-->**LISTBOX Get row color as number** ( {* ;} *objeto* ; *fila* {; *tipoColor*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color as number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Variable (si * se omite) |
| fila | Integer | &#8594;  | Número de fila |
| tipoColor | Integer | &#8594;  | Listbox color de fuente (por defecto) o Listbox color de fondo |
| Resultado | Integer | &#8592; | Valor de color |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get row color as number.Summary-->**Nota:** este comando sólo funciona con los list box de tipo array.<!-- END REF-->

El comando **LISTBOX Get row color as number** devuelve el color de una fila o de una celda del list box designado por los parámetros *objeto* y *\** como un número en formato 0x00rrggbb.

**Nota:** si desea obtener el color como una cadena CSS, debe utilizar el comando [LISTBOX Get row color](listbox-get-row-color.md). Para más información sobre los formatos de color, consulte la descripción del comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). 

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar un list box o una columna del list box como parámetro *objeto*:

* si *objeto* designa un list box, el comando devuelve el color de la fila.
* si *objeto* designa una columna list box, el comando devuelve el color de la celda.

En *fila*, pase el número de la fila cuyo color desea obtener.

**Nota:** el comando no tiene en cuenta el posible estado oculto/visible de las filas del list box.

En el parámetro *tipoColor*, puede pasar o la constante lk background color o lk font color (tema "*Listbox*" ) con el fin de averiguar el color de fondo o el color de la fuente de la fila. Si omite este parámetro, se devuelve el color de la fuente.  
  
**Advertencia:** un color asignado a una fila no se muestra necesariamente en cada celda de la fila (ver el ejemplo). Si los valores de color en conflicto se definen vía las propiedades del list box o de la columna list box, se aplica un orden de prioridad. Para obtener más información, consulte el manual de *Diseño*.

#### Ejemplo 

Dado el siguiente list box:

![](../assets/en/commands/pict1205393.fr.png)

```4d
 vColor:=LISTBOX Get row color(*;"Col5";3)
 vColor2:=LISTBOX Get row color(*;"List Box";3)
 vColor3:=LISTBOX Get row color(*;"List Box";lk background color)
  // vColor contiene 0xFFFF00 (amarillo)
  // vColor2 contiene 0x00FF (azul)
  // vColor3 contiene 0x00FF0000 (rojo)
```

#### Ver también 

*Listbox*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1271 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


