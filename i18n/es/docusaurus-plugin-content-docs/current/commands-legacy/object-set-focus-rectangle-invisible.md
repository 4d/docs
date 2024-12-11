---
id: object-set-focus-rectangle-invisible
title: OBJECT SET FOCUS RECTANGLE INVISIBLE
slug: /commands/object-set-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Syntax-->**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( {* ;} *objeto* ; *invisible* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| invisible | Boolean | &#8594;  | True = rectángulo de foco oculto,False = rectángulo de foco visible |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Summary-->El comando **OBJECT SET FOCUS RECTANGLE INVISIBLE** permite definir o modificar dinámicamente la opción invisibilidad del rectángulo de foco del objeto designado por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF--> Esta configuración corresponde a la opción **Ocultar rectángulo de foco** disponible para los objetos editables en la Lista de propiedades en modo Diseño.   
  
**Nota**: sólo puede utilizar esta opción bajo Mac OS. No tiene efecto bajo Windows.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable o un campo. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
Pase **True** en el parámetro *invisible* para ocultar el rectángulo de foco y **False** para dejarlo visible.

#### Ver también 

[OBJECT Get focus rectangle invisible](object-get-focus-rectangle-invisible.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1177 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


