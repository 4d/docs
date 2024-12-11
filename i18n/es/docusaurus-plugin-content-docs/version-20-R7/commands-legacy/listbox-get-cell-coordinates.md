---
id: listbox-get-cell-coordinates
title: LISTBOX GET CELL COORDINATES
slug: /commands/listbox-get-cell-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL COORDINATES.Syntax-->**LISTBOX GET CELL COORDINATES** ( {* ;} *object* ; *column* ; *linea* ; *izquierda* ; *arriba* ; *der* ; *abajo* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL COORDINATES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica = objeto es un nombre de objeto (cadena) Si se omite = objeto es una variable |
| object | any | &#8594;  | Nombre de objeto (si * se especifica) o variable (si * se omite) |
| column | Integer | &#8594;  | Número de columna |
| linea | Integer | &#8594;  | Número de línea |
| izquierda | Integer | &#8592; | Coordenada izquierda del objeto |
| arriba | Integer | &#8592; | Coordenada superior del objeto |
| der | Integer | &#8592; | Coordenada derecha del objeto |
| abajo | Integer | &#8592; | Coordenada inferior del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET CELL COORDINATES.Summary-->El comando LISTBOX GET CELL COORDINATES devuelve en las variables o campos *izq*, *arriba*, *der* y *inf* las coordenadas (en puntos) de la celda designada por los parámetros *columna* y *linea*, en el list box definido por *\** y *objeto*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa el parámetro opcional *\**, indica que el objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable de tipo de objeto únicamente) en lugar de una cadena.

Por coherencia con el comando *OBJECT GET COORDINATES*, el origen es la esquina superior izquierda del formulario que contiene la celda. Además, las coordenadas devueltas son teóricas; que tienen en cuenta el estado de desplazamiento del list box antes de que ocurra cualquier recorte. Como resultado, la celda puede ser no visible (o sólo parcialmente) en sus coordenadas, y estas coordenadas puede estar fuera de los límites del formulario (o incluso negativas). Para saber si la celda es visible (y que parte de ella es visible) es necesario comparar las coordenadas devueltas con las coordenadas del listbox, teniendo en cuenta las siguientes reglas:  
* Todas las celdas se cortan con las coordenadas de su list box padre (como los devueltos por *OBJECT GET COORDINATES* en el list box).
* Los Sub-objetos encabezado y pie de página se muestran sobre el contenido de la columna: cuando las coordenadas de una celda se cruzan las coordenadas de las líneas de encabezado o pie de página, la celda no se muestra en esta intersección.
* Los elementos de las columnas bloqueadas se muestran sobre los elementos de las columnas desplazables: cuando las coordenadas de un elemento en una columna desplazable cruzan las coordenadas de una columna bloqueada, entonces que no se muestra en esta intersección.

Para más información, consulte la descripción del comando *OBJECT GET COORDINATES*.

#### Ejemplo 

Usted quiere dibujar un rectángulo rojo alrededor de la celda seleccionada de un listbox:

```4d
 OBJECT SET VISIBLE(*;"RedRect";False) //inicializar un rectángulo rojo
  //el rectángulo ya está definido en alguna parte del formulario
 LISTBOX GET CELL POSITION(*;"LB1";$col;$row)
 LISTBOX GET CELL COORDINATES(*;"LB1";$col;$row;$x1;$y1;$x2;$y2)
 OBJECT SET VISIBLE(*;"RedRect";True)
 OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
```

![](../assets/en/commands/pict1741070.en.png)

#### Ver también 

[LISTBOX GET CELL POSITION](listbox-get-cell-position.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1330 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


