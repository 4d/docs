---
id: listbox-get-row-color
title: LISTBOX Get row color
slug: /commands/listbox-get-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color.Syntax-->**LISTBOX Get row color** ( {* ;} *objeto* ; *fila* {; *tipoColor*} )  : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, el objeto es un nombre de objeto (cadena) Si se omite, el objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Variable (si se omite *) |
| fila | Integer | &#8594;  | Numero de fila |
| tipoColor | Integer | &#8594;  | Color de fuente del list box (predeterminado) o color de fondo del list box |
| Resultado | Text | &#8592; | Valor del color |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX Get row color.Summary-->**Nota:** este comando solo funciona con list boxes de tipo array.<!-- END REF-->

El comando **LISTBOX Get row color** devuelve el color de una fila o celda en el list box designado por los parámetros *objeto* y *\** como una cadena CSS.

**Nota:** si desea obtener el color como un formato entero largo de 4 bytes, debe utilizar el comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Para más información sobre los formatos de color, consulte la descripción del comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). 

Pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar un list box o una columna de list box en el parámetro *objeto*:

* cuando *objeto* designa un list box, el comando devuelve el color de la fila.
* cuando *objeto* designa una columna de list box, el comando devuelve el color de la celda.

En *fila*, pase el número de la fila cuyo color desea obtener.

**Nota:** el comando no tiene en cuenta ningún estado oculto/visible de las filas del list box.

En el parámetro *tipoColor*, puede pasar la constante lk background color o lk font color (tema "*Listbox*") para averiguar el color de fondo o fuente de la fila. Si omite este parámetro, se devuelve el color de la fuente.  
  
**Advertencia**: el color asignado a una fila no se muestra necesariamente en cada celda de la fila (ver ejemplo). Si los valores de color en conflicto se establecen utilizando las propiedades de los list boxes o columnas de list box, se aplica un orden de prioridad. Para más información, consulte el manual de *Diseño*.

#### Ejemplo 

Dado el siguiente list box:

![](../assets/en/commands/pict1205393.fr.png)

```4d
 var $vtColor;$vtColor2;$vtColor3 : Text
 $vtColor:=LISTBOX Get row color(*;"Col5";3)
 $vtColor2:=LISTBOX Get row color(*;"List Box";3)
 $vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)
  // $vtColor contains "#FFFF00" (yellow)
  // $vtColor2 contains "#0000FF" (blue)
  // $vtColor3 contains "#FF0000" (red)
```

#### Ver también 

[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  