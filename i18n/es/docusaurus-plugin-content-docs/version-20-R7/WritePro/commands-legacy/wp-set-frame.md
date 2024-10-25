---
id: wp-set-frame
title: WP SET FRAME
slug: /WritePro/commands/wp-set-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP SET FRAME.Syntax-->**WP SET FRAME** ( {* ;} *areaWP* ; *selectorMarco* {; *textBoxID*} )<!-- END REF-->
<!--REF #_command_.WP SET FRAME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, areaWP es un nombre de objeto de formulario (cadena). Si se omite, areaWP es un campo o una variable objeto. |
| areaWP | Text | &#8594;  | Nombre de objeto de formulario (si se especifica *) o campo o variable objeto 4D Write Pro (si se omite *) |
| selectorMarco | Integer | &#8594;  | Marco donde debe colocarse el cursor |
| textBoxID | Text | &#8594;  | Id de la caja de texto donde se debe colocar el cursor |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP SET FRAME.Summary-->El comando **WP SET FRAME** coloca el cursor en el marco designado por *selectorMarco* y opcionalmente, *textBoxID*, en el área *areaWP* 4D Write Pro.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que *wpArea* es un nombre de objeto de formulario (cadena). Si no pasa este parámetro, indica que *wpArea* es una variable o un campo objeto 4D Write Pro.

**Nota**: este comando solo se puede usar si wpArea está asociado con un objeto de formulario (es decir, se muestra en el formulario/página actual).

Puede pasar en *frameSelector* una de las siguientes constantes del tema *Constantes 4D Write Pro*: 

| Constante                         | Tipo         | Valor | Comentario                                                                                      |
| --------------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------- |
| wk body                           | Entero largo | 0     | Marco del cuerpo de la sección                                                                  |
| wk current page footer            | Entero largo | 2     |                                                                                                 |
| wk current page header            | Entero largo | 1     |                                                                                                 |
| wk current section default footer | Entero largo | 10    | Pie principal de la sección (disponible sólo si no hay pie de sub-sección activo)               |
| wk current section default header | Entero largo | 9     | Encabezado principal de la sección (disponible sólo si no hay encabezado de sub-sección activo) |
| wk current section first footer   | Entero largo | 4     | Pie de la primera página de la sección                                                          |
| wk current section first header   | Entero largo | 3     | Encabezado de la primera página de la sección                                                   |
| wk current section left footer    | Entero largo | 6     | Pie de las páginas izquierdas de la sección                                                     |
| wk current section left header    | Entero largo | 5     | Encabezado de las páginas izquierdas de la sección                                              |
| wk current section right footer   | Entero largo | 8     | Pie de las páginas derechas de la sección                                                       |
| wk current section right header   | Entero largo | 7     | Encabezado de las páginas derechas de la sección                                                |
| wk text box                       | Entero largo | 11    | Caja de texto                                                                                   |

* Si se pasa wk current page header o wk current page footer en *selectorMarco*, **WP SET FRAME** dará el foco al primer encabezado o pie de página seleccionado, independientemente del tipo de subsección (si no contiene ningún encabezado o pie de página, el comando no hará nada).
* Si se pasa alguna de las constante wk current section\[...\] en *selectorMarco*, **WP SET FRAME** dará el foco al encabezado o pie de página de la primera sección seleccionada (si no contiene ningún encabezado o pie de página, El comando no hará nada).
* **WP SET FRAME** no hará nada si el marco *selectorMarco* no existe para la sección de selección (por ejemplo, wk current section left header cuando no hay distinción entre las páginas izquierda y derecha en *wpArea*).

Si *selectorMarco* \= wk text box, debe pasar el parámetro *textBoxID* con el **id** de la caja de texto en la cual definir el foco. En este caso, si se omite *textBoxID* o si no hay caja de texto con el id especificado o si no hay página correspondiente a las condiciones de anclaje de la caja de texto, el comando no hace nada. 

El parámetro *textBoxID* se ignora si *selectorMarco* \# wk text box.

#### Ejemplo 

Usted desea colocar el cursor en el pie izquierdo de la sección actual:

```4d
 WP SET FRAME(*;"WPArea";wk current section left footer)
```

#### Ver también 

[WP Get frame](wp-get-frame.md)  