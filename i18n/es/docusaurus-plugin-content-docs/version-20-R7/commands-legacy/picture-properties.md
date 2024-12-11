---
id: picture-properties
title: PICTURE PROPERTIES
slug: /commands/picture-properties
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE PROPERTIES.Syntax-->**PICTURE PROPERTIES** ( *imagen* ; *largo* ; *altura* {; *hDesp* {; *vDesp* {; *modo*}}} )<!-- END REF-->
<!--REF #_command_.PICTURE PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Imagen para la cual obtener la información |
| largo | Real | &#8592; | Largo de la imagen expresado en píxeles |
| altura | Real | &#8592; | Alto de la imagen expresado en píxeles |
| hDesp | Integer | &#8592; | Offset horizontal cuando la imagen se muestra en segundo plano |
| vDesp | Integer | &#8592; | Offset  vertical cuando la imagen se muestra en segundo plano |
| modo | Integer | &#8592; | Modo de transferencia cuando la imagen se muestra en segundo plano |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->El comando PICTURE PROPERTIES devuelve la información sobre la imagen que pasa en el parámetro *imagen*.<!-- END REF-->

Los parámetros *largo* y *alto* devuelven el largo y alto de la imagen.

Los parámetros *hDesp*, *vDesp*, y *modo* devuelven las posiciones horizontal y vertical y el modo de transferencia de la imagen cuando se muestra en el fondo en un formulario (“Imagen de fondo”).

#### Ver también 

[Picture size](picture-size.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 457 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


