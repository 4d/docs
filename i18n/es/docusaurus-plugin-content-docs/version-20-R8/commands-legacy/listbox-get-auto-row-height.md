---
id: listbox-get-auto-row-height
title: LISTBOX Get auto row height
slug: /commands/listbox-get-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get auto row height.Syntax-->**LISTBOX Get auto row height**  ( {* ;} *objeto* ; *selector* {; *unidad*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get auto row height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable. |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| selector | Integer | &#8594;  | Valor altura a obtener: lk row min height o lk row max height |
| unidad | Integer | &#8594;  | Unidad de valor de altura: 0 = píxeles, 1 = líneas |
| Resultado | Integer | &#8592; | Valor de altura de línea seleccionado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get auto row height.Summary-->El comando **LISTBOX Get auto row height**  devuelve el valor de altura de fila mínimo o máximo actual definido para el objeto list box designado utilizando los parámetros *objeto* y *\**.<!-- END REF-->

El valor actual mínimo o máximo de la altura de la fila puede definirse en la lista de propiedades (ver *Altura automática de fila*) o en el proceso actual utilizando el comando [LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md).

**Nota**: este comando solo se puede usar con list boxes "collection o entity selection" y "array".

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Para más información acerca de los nombres de objetos, consulte la sección *Propiedades de los objetos*.

En *selector*, pase el tipo de valor a obtener. Puede utilizar una de las siguientes constantes del tema *Listbox*:

| Constante         | Tipo         | Valor |
| ----------------- | ------------ | ----- |
| lk row max height | Entero largo | 33    |
| lk row min height | Entero largo | 32    |

De forma predeterminada, el comando devuelve el valor en píxeles. Puede pasar una de las siguientes constantes del tema *Listbox* en el parámetro *unidad* para definir la unidad a utilizar:

| Constante | Tipo         | Valor | Comentario                                                                                        |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------- |
| lk lines  | Entero largo | 1     | La altura designa un número de líneas. 4D calcula la altura de una línea en función de la fuente. |
| lk pixels | Entero largo | 0     | La altura es un número en píxeles (por defecto)                                                   |

#### Ejemplo 

Usted desea obtener el número máximo de líneas para una línea de list box:

```4d
 var vhMaxInteger
 vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)
```

#### Ver también 

[LISTBOX Get row height ](listbox-get-row-height.md)  
[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1502 |
| Hilo seguro | &cross; |


