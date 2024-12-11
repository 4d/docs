---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** {( *ventana* )} : Text<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana o Ventana del primer plano del proceso actual si se omite |
| Resultado | Text | &#8592; | Título de la ventana |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get window title.Summary-->El comando Get window title devuelve el título de la ventana cuyo número de referencia se pasa en *ventana*.<!-- END REF--> Si la ventana no existe, se devuelve una cadena vacía. 

Si omite el parámetro *ventana*, Get window title devuelve el título de la ventana del primer plano del proceso actual.

#### Ejemplo 

Ver ejemplo del comando [SET WINDOW TITLE](set-window-title.md "SET WINDOW TITLE").

#### Ver también 

[SET WINDOW TITLE](set-window-title.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 450 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


