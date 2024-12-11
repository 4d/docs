---
id: form-get-properties
title: FORM GET PROPERTIES
slug: /commands/form-get-properties
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET PROPERTIES.Syntax-->**FORM GET PROPERTIES** ( {*tabla* ;} *nomForm* ; *ancho* ; *alto* {; *numPags* {; *largoFijo* {; *altFijo* {; *titulo*}}}} )<!-- END REF-->
<!--REF #_command_.FORM GET PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del formulario o tabla por defecto, si se omite |
| nomForm | Text | &#8594;  | Nombre del formulario |
| ancho | Integer | &#8592; | Ancho del formulario (en píxeles) |
| alto | Integer | &#8592; | Altura del formulario (en píxeles) |
| numPags | Integer | &#8592; | Número de páginas en el formulario |
| largoFijo | Boolean | &#8592; | Verdadero = Ancho fijo, Falso = Ancho variable |
| altFijo | Boolean | &#8592; | Verdadero = Altura fija, Falso = Altura variable |
| titulo | Text | &#8592; | Título de la ventana del formulario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM GET PROPERTIES.Summary-->El comando \[#current\_title devuelve las propiedades del formulario *nomForm*.<!-- END REF-->

Los parámetros *ancho* y *altura* devuelven el ancho y la altura del formulario en píxeles. Estos valores son determinados en las propiedades de tamaño de la ventana por defecto del formulario:

* Si el tamaño del formulario es **automático**, su ancho y altura se calculan de manera que todos los objetos del formulario sean visibles, teniendo en cuenta, las márgenes horizontal y vertical que fueron definidas.
* Si el tamaño del formulario es **fijo**, su ancho y altura son introducidos manualmente en las áreas correspondientes.
* Si el tamaño del formulario está **basado en un objeto,** su ancho y altura son calculados con relación a la posición de este objeto.

El parámetro *numPags* devuelve el número de páginas en un formulario, excluyendo la página 0 (cero).

Los parámetros *largoFijo* y *altoFijo* indican si el largo y el alto del formulario son redimensionables (el parámetro devuelve [False](false.md "False")) o fijos (el parámetro devuelve [True](true.md "True")).

El parámetro *título* devuelve el título de la ventana del formulario, tal como fue definido en la Lista de propiedades del editor de formularios. Si no se definió ningún nombre, el parámetro *título* devuelve una cadena vacía.

#### Ver también 

[FORM GET OBJECTS](form-get-objects.md)  
[FORM SET SIZE](form-set-size.md)  
[Open form window](open-form-window.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 674 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


