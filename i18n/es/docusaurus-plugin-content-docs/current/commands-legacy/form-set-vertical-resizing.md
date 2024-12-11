---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *redimension* {; *alturaMin* {; *alturaMax*}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| redimension | Boolean | &#8594;  | True: el formulario es redimensionable verticalmente False: el formulario no puede ser redimensionado verticalmente |
| alturaMin | Integer | &#8594;  | Altura mínima del formulario (píxeles) |
| alturaMax | Integer | &#8594;  | Altura máxima del formulario (píxeles) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->El comando FORM SET VERTICAL RESIZING le permite modificar por programación las propiedades de redimensionamiento vertical del formulario actual.<!-- END REF--> Por defecto, estas propiedades son definidas en el editor de formularios en el entorno Diseño. Las nuevas propiedades son definidas para el proceso actual; no son almacenadas con el formulario.

El parámetro *redimension* le permite definir si el formulario puede redimensionarse verticalmente; en otras palabras, si la altura es modificable (manualmente por el usuario o por programación). 

Si pasa [True](true.md "True"), la altura del formulario puede ser modificada por el usuario; 4D utiliza como marcadores los valores pasados en *alturaMin* y *altura*Max. 

Si pasa [False](false.md "False"), no se puede modificar el largo del formulario actual; en este caso, no hay necesidad de pasar valores en los parámetros *alturaMin* y *altura*Max. 

Si ha pasado [True](true.md "True") en el primer parámetro, puede pasar en los parámetros opcionales *alturaMin* y *altura*Max las nuevas alturas, mínimas y máximas, del formulario (en píxeles). Si omite estos parámetros se utilizan los valores definidos en el entorno Diseño (si los hay).

#### Ejemplo 

Consulte el ejemplo del comando [FORM SET SIZE](form-set-size.md "FORM SET SIZE"). 

#### Ver también 

[FORM GET VERTICAL RESIZING](form-get-vertical-resizing.md)  
[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 893 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


