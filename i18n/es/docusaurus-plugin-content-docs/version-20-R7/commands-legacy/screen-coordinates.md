---
id: screen-coordinates
title: SCREEN COORDINATES
slug: /commands/screen-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN COORDINATES.Syntax-->**SCREEN COORDINATES** ( *izquierda* ; *superior* ; *derecha* ; *inferior* {; *IDpantalla* {; *areaPantalla*}} )<!-- END REF-->
<!--REF #_command_.SCREEN COORDINATES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| izquierda | Integer | &#8592; | Coordenada izquierda del área de pantalla |
| superior | Integer | &#8592; | Coordenada superior del área de la pantalla |
| derecha | Integer | &#8592; | Coordenada derecha del área de la pantalla |
| inferior | Integer | &#8592; | Coordenada inferior del área de la pantalla |
| IDpantalla | Integer | &#8594;  | Número de la pantalla, o pantalla principal si se omite |
| areaPantalla | Integer | &#8594;  | Pantalla completa (por defecto) o área de trabajo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SCREEN COORDINATES.Summary-->El comando SCREEN COORDINATES devuelve en los parámetros *izquierda*, *arriba*, *derecha,* y *abajo* las coordenadas de la pantalla especificada por *IDpantalla*.<!-- END REF-->

Si omite el parámetro *IDpantalla*, el comando devuelve las coordenadas de la pantalla principal.

El parámetro opcional *areaPantalla* le permite especificar si desea las coordenadas para toda el área de la pantalla (predeterminado) o solo para el área utilizable disponible. Hay dos selectores disponibles:

| Constante        | Valor | Comentario                                                                                                                                                                 |
| ---------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Screen size      | 0     | Las coordenadas de toda la pantalla. (valor por defecto)                                                                                                                   |
| Screen work area | 1     | Las coordenadas del área de pantalla disponible que se pueden usar (es decir, no están ocupadas por la barra de tareas de Windows o la barra de menús y el dock de masOS). |

Las siguientes imágenes demuestran las diferencias entre el tamaño de la pantalla y el área de trabajo:

![](../assets/en/commands/pict4800387.en.png) 

**Notas**:

* Si la barra de tareas o el dock se ocultan automáticamente, **SCREEN COORDINATES** siempre devuelve el tamaño completo de la pantalla.
* Si se ofrece un valor no válido en *IDpantalla*, se devuelve un cero para todas las coordenadas.

#### Ver también 

[Count screens](count-screens.md)  
[Menu bar screen](menu-bar-screen.md)  
[SCREEN DEPTH](screen-depth.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 438 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


