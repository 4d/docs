---
id: show-window
title: SHOW WINDOW
slug: /commands/show-window
displayed_sidebar: docs
---

<!--REF #_command_.SHOW WINDOW.Syntax-->**SHOW WINDOW** {( *ventana* )}<!-- END REF-->
<!--REF #_command_.SHOW WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana o Ventana del primer plano del proceso actual, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SHOW WINDOW.Summary-->El comando SHOW WINDOW permite mostrar la ventana cuyo número se pasó en *ventana*.<!-- END REF--> Si se omite este parámetro, se mostrará la ventana del primer plano del proceso actual.

Para utilizar el comando SHOW WINDOW, la ventana debe haberse ocultado utilizando el comando [HIDE WINDOW](hide-window.md "HIDE WINDOW"). Si la ventana ya es visible, el comando no hace nada.

#### Ejemplo 

Consulte el ejemplo del comando [HIDE WINDOW](hide-window.md "HIDE WINDOW").

#### Ver también 

[HIDE WINDOW](hide-window.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 435 |
| Hilo seguro | &cross; |


