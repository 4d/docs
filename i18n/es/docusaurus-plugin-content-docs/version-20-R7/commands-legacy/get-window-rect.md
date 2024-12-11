---
id: get-window-rect
title: GET WINDOW RECT
slug: /commands/get-window-rect
displayed_sidebar: docs
---

<!--REF #_command_.GET WINDOW RECT.Syntax-->**GET WINDOW RECT** ( *izquierda* ; *superior* ; *derecha* ; *inferior* {; *ventana*} )<!-- END REF-->
<!--REF #_command_.GET WINDOW RECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| izquierda | Integer | &#8592; | Coordenada izquierda del interior de la ventana |
| superior | Integer | &#8592; | Coordenada superior del interior de la ventana |
| derecha | Integer | &#8592; | Coordenada derecha del interior de la ventana |
| inferior | Integer | &#8592; | Coordenada inferior del interior de la ventana |
| ventana | Integer | &#8594;  | Número de referencia de la ventana o Ventana del primer plano del proceso si se omite o Ventana MDI si -1 (Windows) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET WINDOW RECT.Summary-->El comando **GET WINDOW RECT** devuelve las coordenadas globales de la ventana cuyo número de referencia se pasa en *ventana*.<!-- END REF--> Si la ventana no existe, las variables de los parámetros no cambian. 

Si omite el parámetro *ventana*, **GET WINDOW RECT** se aplica a la ventana del primer plano del proceso actual.

Las coordenadas devueltas se expresan con relación a la esquina superior izquierda del área de contenido de la ventana de aplicación (modo Windows MDI) o de la pantalla principal (macOS y modo Windows SDI). Las coordenadas devuelven el rectángulo correspondiente al área de contenido de la ventana (excluyendo las barras de títulos y los bordes).

**Nota:** bajo Windows, si pasa -1 en *ventana*, **GET WINDOW RECT** devuelve las coordenadas de la ventana de aplicación (ventana MDI). Estas coordenadas corresponden al área de contenido de la ventana (excluyendo barras de menús y bordes). En este caso en modo SDI, **GET WINDOW RECT** devuelve (0;0;0;0) como coordenadas.

#### Ejemplo 

Ver el ejemplo del comando [WINDOW LIST](window-list.md "WINDOW LIST").

#### Ver también 

[CONVERT COORDINATES](convert-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 443 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


