---
id: object-get-scroll-position
title: OBJECT GET SCROLL POSITION
slug: /commands/object-get-scroll-position
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLL POSITION.Syntax-->**OBJECT GET SCROLL POSITION** ( {* ;} *objeto* ; *posicionLinea* {; *posicionH*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLL POSITION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable o campo (si se omite *) |
| posicionLinea | Integer | &#8592; | Número de la primera línea mostrada o desplazamiento vertical en píxeles (imágenes) |
| posicionH | Integer | &#8592; | Número de la primera columna mostrada (list box) o desplazamiento horizontal en píxeles (imágenes) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET SCROLL POSITION.Summary-->OBJECT GET SCROLL POSITION devuelve, en los parámetros *posicionLinea* y *posicionH*, información relacionada con la posición de las barras de desplazamiento del objeto de formulario designado por los parámetros *\** y *objeto*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es el nombre de un objeto de tipo subformulario, lista jerárquica, área de desplazamiento, list box o imagen (en este caso, pase una cadena en objeto). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable (RefLista de lista jerárquica, imagen o list box) o un campo.

**Nota:** con los objetos de tipo subformulario, sólo se soporta la sintaxis con *\**. 

Si *objeto* designa un objeto de tipo lista (subformulario, lista jerárquica, área de desplazamiento o list box), *posicionLinea* devuelve el número de la primera línea mostrada en el objeto. *posicionH* (list box únicamente) devuelve el número de la primera columna mostrada en la parte izquierda del list box. Con otros tipos de objetos, este parámetro devuelve 0.

Si *objeto* designa una imagen (variable o campo), *posicionLinea* devuelve el desplazamiento vertical y *posicionH* el desplazamiento horizontal de la imagen. Estos valores se expresan en píxeles con respecto al origen de la imagen en el sistema de coordenadas locales.

#### Ver también 

[OBJECT SET SCROLL POSITION ](object-set-scroll-position.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1114 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


