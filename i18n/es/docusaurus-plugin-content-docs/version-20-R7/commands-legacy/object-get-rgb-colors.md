---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( {* ;} *objeto* ; *colorPrimerPlano* {; *colorFondo* {; *colorFondoAlt*}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| colorPrimerPlano | Text, Integer | &#8592; | Valor del color RGB del primer plano |
| colorFondo | Text, Integer | &#8592; | Valor del color RGB del fondo |
| colorFondoAlt | Text, Integer | &#8592; | Valor del color RGB del fondo alterno |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->El comando OBJECT GET RGB COLORS devuelve los colores de fondo y primer plano del objeto o grupo de objetos designados por *objeto*.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena.   
  
Cuando el comando se aplica a un objeto de tipo List box, el color de fondo alterno de las filas pueden se devuelto en el parámetro *colorFondoAlt*. En este caso, el valor de *colorFondo* se utiliza para el fondo de las líneas impares.

Los valores de colores RGB devueltos en los parámetros a *colorPrimerPlano*, *colorFondo* y *colorFondoAlt* dependen del tipo de parámetro: 

* si se pasa un parámetro de tipo texto, el color se devuelve en formato CSS con la sintaxis "#rrggbb" (por ejemplo: "# 0000FF")
* Si se pasa un parámetro de tipo [entero largo](# "Entre -2 millardos y +2 millardos"), el color puede ser un entero largo de 4 bytes del formato (0x00RRGGBB) o valores negativos correspondientes a los colores del "sistema".

Para obtener más información acerca del formato de los parámetros *colorPrimerPlano*, *colorFondo* y *colorFondoAlt*, consulte la descripción del comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md).

#### Ver también 

[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1074 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


