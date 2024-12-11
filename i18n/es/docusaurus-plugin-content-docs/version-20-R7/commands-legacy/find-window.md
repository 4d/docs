---
id: find-window
title: Find window
slug: /commands/find-window
displayed_sidebar: docs
---

<!--REF #_command_.Find window.Syntax-->**Find window** ( *izquierda* ; *superior* {; *parteVentana*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find window.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| izquierda | Integer | &#8594;  | Coordenada global izquierda |
| superior | Integer | &#8594;  | Coordenada global superior |
| parteVentana | Integer | &#8592; | Número de parte de ventana |
| Resultado | Integer | &#8592; | Número de referencia de la ventana |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Find window.Summary-->El comando Find windowdevuelve (si existe) el número de referencia de la primera ventana “tocada” por el punto cuyas coordenadas se pasan en *izquierda* y *superior*.<!-- END REF--> 

Las coordenadas deben ser expresadas con relación a la esquina superior izquierda del área de contenido de la ventana de aplicación (Windows) o de la pantalla principal (Macintosh).

El parámetro *parteVentana* devuelve 3 si se toca la ventana, de lo contrario 0\. (**Nota de compatibilidad:** a partir de 4D v14, las constantes del tema *Buscar ventana* son obsoletas).

#### Ver también 

[Frontmost window](frontmost-window.md)  
[Next window](next-window.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 449 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


