---
id: object-get-focus-rectangle-invisible
title: OBJECT Get focus rectangle invisible
slug: /commands/object-get-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get focus rectangle invisible.Syntax-->**OBJECT Get focus rectangle invisible** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get focus rectangle invisible.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable o campo (si se omite *) |
| Resultado | Boolean | &#8592; | True = rectángulo de foco oculto, False = rectángulo de foco visible |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get focus rectangle invisible.Summary-->El comando **OBJECT Get focus rectangle invisible** devuelve el estado de la opción de invisibilidad del rectángulo de foco del objeto o de los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF--> Esta configuración corresponde a la opción **Ocultar rectángulo de foco** disponible para los objetos editables en la Lista de propiedades en modo Diseño. Este comando devuelve el estado actual de la opción, como se definió en modo Diseño o utilizando el comando [OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md).

**Nota:** puede utilizar esta opción únicamente en Mac OS. No tiene efecto en Windows. 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable o un campo. En este caso, se pasa una referencia de variable en lugar de una cadena.

El comando devuelve **True** si el rectángulo de foco está oculto y **False** cuando es visible.

#### Ver también 

[OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1178 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


