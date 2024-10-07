---
id: set-screen-depth
title: SET SCREEN DEPTH
slug: /commands/set-screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SET SCREEN DEPTH.Syntax-->**SET SCREEN DEPTH** ( *profundidad* {; *color* {; *pantalla*}} )<!-- END REF-->
<!--REF #_command_.SET SCREEN DEPTH.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| profundidad | Entero largo | &#x1F852; | Profundidad de la pantalla (número de colores = 2 ^ Profundidad de pantalla) |
| color | Entero largo | &#x1F852; | 1 = Color, 0 = Escala de grises |
| pantalla | Entero largo | &#x1F852; | Número de la pantalla, o pantalla principal, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET SCREEN DEPTH.Summary-->SET SCREEN DEPTH permite modificar la profundidad y los parámetros de colores/escala de grises de la pantalla cuyo número se pasa en *pantalla*.<!-- END REF--> Si omite este parámetro, el comando se aplica a la pantalla principal. 

Para conocer los valores a pasar en *color* y *profundidad*, consulte la descripción del comando [SCREEN DEPTH](screen-depth.md "SCREEN DEPTH").

#### Ver también 

[SCREEN DEPTH](screen-depth.md)  