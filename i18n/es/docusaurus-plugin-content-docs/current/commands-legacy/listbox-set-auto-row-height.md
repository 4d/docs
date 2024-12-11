---
id: listbox-set-auto-row-height
title: LISTBOX SET AUTO ROW HEIGHT
slug: /commands/listbox-set-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Syntax-->**LISTBOX SET AUTO ROW HEIGHT** ( {* ;} *objeto* ; *selector* ; *valor* ; *unidad* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable. |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite) |
| selector | Integer | &#8594;  | Valor de la altura a definir: lk row min height o lk row max height |
| valor | Integer | &#8594;  | Valor mínimo o máximo de la altura de la fila |
| unidad | Integer | &#8594;  | Unidad de valor de altura: 0 = píxeles, 1 = líneas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Summary-->El comando LISTBOX SET AUTO ROW HEIGHT le permite establecer el valor de altura de fila mínimo o máximo en el objeto de list box designado utilizando los parámetros *objeto* y *\**.<!-- END REF-->

**Nota**: este comando solo se tiene en cuenta si el list box está definido en modo de altura automática de fila (ver *Altura automática de fila*), lo cual está disponible sólo para listboxes "collection o entity selection" y "array". De lo contrario, no tiene ningún efecto.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Para más información acerca de los nombres de objetos, consulte la sección *Propiedades de los objetos*.

En *selector*, pase el tipo de valor a definir. Puede utilizar una de las siguientes constantes del tema *Listbox*:

| Constante         | Tipo         | Valor |
| ----------------- | ------------ | ----- |
| lk row max height | Entero largo | 33    |
| lk row min height | Entero largo | 32    |

En *valor*, pase el valor correspondiente en la *unidad* apropiada.

El parámetro *unidad* puede ajustarse utilizando una de las siguientes constantes del tema *Listbox*:

| Constante | Tipo         | Valor | Comentario                                                                                        |
| --------- | ------------ | ----- | ------------------------------------------------------------------------------------------------- |
| lk lines  | Entero largo | 1     | La altura designa un número de líneas. 4D calcula la altura de una línea en función de la fuente. |
| lk pixels | Entero largo | 0     | La altura es un número en píxeles (por defecto)                                                   |

**Nota:** el comando no comprueba la consistencia de los valores. Sin embargo, en tiempo de ejecución, el valor mínimo se aplicará a ambos valores en caso de conflicto. Por ejemplo, si el valor mínimo es 5 líneas y el valor máximo es de 3 líneas (que es inconsistente), la altura máxima aplicada a las filas del list box será de 5 líneas.

#### Ejemplo 

Usted desea definir las alturas mínimas y máximas para un list box con una altura de fila automática:

```4d
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels) // 60 píxeles para el valor mínimo
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels) //y 100 píxeles para el valor máximo
```

#### Ver también 

[LISTBOX Get auto row height ](listbox-get-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1501 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


