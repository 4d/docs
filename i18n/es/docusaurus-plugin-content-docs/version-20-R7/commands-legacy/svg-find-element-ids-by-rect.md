---
id: svg-find-element-ids-by-rect
title: SVG Find element IDs by rect
slug: /commands/svg-find-element-ids-by-rect
displayed_sidebar: docs
---

<!--REF #_command_.SVG Find element IDs by rect.Syntax-->**SVG Find element IDs by rect** ( {* ;} *objetoImagen* ; *x* ; *y* ; *ancho* ; *alto* ; *arrIDs* ) : Boolean<!-- END REF-->
<!--REF #_command_.SVG Find element IDs by rect.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objetoImagen es un nombre de objeto (cadena). Si se omite, objetoImagen es un campo o una variable. |
| objetoPicture | Picture | &#8594;  | Nombre del objeto (si se especifica *) o Campo o Variable (si se omite *) |
| x | Integer | &#8594;  | Coordenada horizontal de la esquina superior izquierda del rectángulo de selección. |
| y | Integer | &#8594;  | Coordinada vertical de la esquina superior izquierda del rectángulo de selección |
| ancho | Integer | &#8594;  | Ancho del rectángulo de selección |
| alto | Integer | &#8594;  | Altura del rectángulo de selección |
| arrIDs | Text array | &#8592; | IDs de los elementos cuyo rectángulo circundante está en intersección con el rectángulo de selección |
| Resultado | Boolean | &#8592; | True = se encontró al menos un elemento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SVG Find element IDs by rect.Summary-->El comando SVG Find element IDs by rect llena el array texto *arrIDs* con los IDs (atributo "id" o "xml:id") de los elementos XML cuyo rectángulo circundante está en intersección con el rectángulo de selección en la ubicación definida por los parámetros *x* y *y*.<!-- END REF-->

El comando devuelve True si al menos se encuentra un elemento (en otras palabras si el array *arrIDs* no está vacío) y de lo contrario devuelve False. 

Este comando permite administrar interfaces gráficas interactivas. 

Si pasa el parámetro opcional *\**, indica que el parámetro *objetoImagen* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objetoImagen* es un campo o una variable. En este caso, pase una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena. 

Si trabaja con un campo o variable imagen, el comando utiliza la imagen de origen, correspondiente a la fuente de datos. Sin embargo, si trabaja con un objeto de formulario, el comando utiliza la imagen actual, que puede modificarse vía el comando [SVG SET ATTRIBUTE](svg-set-attribute.md "SVG SET ATTRIBUTE") y que se conserva con las propiedades del objeto de formulario.

Las coordenadas pasadas en los parámetros *x* y *y* deben expresarse en píxeles en relación con la esquina superior izquierda de la imagen (0,0). Puede utilizar los valores devueltos por las  MouseX y MouseY. Estas variables son actualizadas en los eventos de formulario On Clicked y On Double Clicked como también en los eventos de formulario On Mouse Enter y On Mouse Move. 

**Nota:** en el sistema de coordenadas de las imágenes, \[x;y\] siempre define el mismo punto, sin importar el formato de visualización de la imagen, excepto por el formato "Replicado". 

Todos los elementos cuyo rectángulo circundante está en intersección con el rectángulo de selección son tenidos en cuenta, incluso los que están bajo otros elementos.

#### Ver también 

[SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1109 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


