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
| imagen | Imagen | &#x1F852; | Imagen para la cual obtener la información |
| largo | Real | &#x1F858; | Largo de la imagen expresado en píxeles |
| altura | Real | &#x1F858; | Alto de la imagen expresado en píxeles |
| hDesp | Entero largo | &#x1F858; | Offset horizontal cuando la imagen se muestra en segundo plano |
| vDesp | Entero largo | &#x1F858; | Offset  vertical cuando la imagen se muestra en segundo plano |
| modo | Entero largo | &#x1F858; | Modo de transferencia cuando la imagen se muestra en segundo plano |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->El comando PICTURE PROPERTIES devuelve la información sobre la imagen que pasa en el parámetro *imagen*.<!-- END REF-->

Los parámetros *largo* y *alto* devuelven el largo y alto de la imagen.

Los parámetros *hDesp*, *vDesp*, y *modo* devuelven las posiciones horizontal y vertical y el modo de transferencia de la imagen cuando se muestra en el fondo en un formulario (“Imagen de fondo”).

#### Ver también 

[Picture size](picture-size.md)  