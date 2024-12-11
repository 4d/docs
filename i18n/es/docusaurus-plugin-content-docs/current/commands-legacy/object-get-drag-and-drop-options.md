---
id: object-get-drag-and-drop-options
title: OBJECT GET DRAG AND DROP OPTIONS
slug: /commands/object-get-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Syntax-->**OBJECT GET DRAG AND DROP OPTIONS** ( {* ;} *objeto* ; *arrastrable* ; *arrastrableAuto* ; *soltable* ; *soltableAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrastrable | Boolean | &#8592; | 0 = False, 1 = True |
| arrastrableAuto | Boolean | &#8592; | 0 = False, 1 = True |
| soltable | Boolean | &#8592; | 0 = False, 1 = True |
| soltableAuto | Boolean | &#8592; | 0 = False, 1 = True |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Summary-->El comando **OBJECT GET DRAG AND DROP OPTIONS** devuelve las opciones de arrastrar y soltar para el objeto o los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
El comando devuelve las opciones de arrastrar y soltar actuales, como están definidas en modo Diseño o para el proceso actual utilizando el comando [OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md).  
  
Cada parámetro devuelve True o False dependiendo de si la opción correspondiente está activa o inactiva:

* *arrastrable* \= True: objeto arrastrable en modo programado.
* *arrastrableAuto* \= True (utilizable únicamente con los campos y variables texto, combo boxes y list boxes): Objeto arrastrable en modo automático.
* *soltable* \= True: objeto acepta soltar en modo programado.
* *soltableAuto* \= True (utilizable únicamente con los campos y variables imagen, texto, combo boxes y list boxes): Objeto acepta soltar en modo automático.

#### Ver también 

[OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1184 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


