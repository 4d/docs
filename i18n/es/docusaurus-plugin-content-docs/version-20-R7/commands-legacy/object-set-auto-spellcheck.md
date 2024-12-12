---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( {* ;} *objeto* ; *correcionAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| correcionAuto | Boolean | &#8594;  | True = corrección automática,False= no corrección automática |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->El comando **OBJECT SET AUTO SPELLCHECK** permite definir o modificar dinámicamente el estado de la opción **Corrección ortográfica** de los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF--> Esta opción activa o desactiva la corrección ortográfica automática durante la entrada para el objeto (objetos de tipo texto únicamente).  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable o un campo. En este caso, pase una referencia en lugar de un nombre.  
  
Pase **True** en *correccionAuto* para activar esta función para objeto y **False** para desactivarla.

#### Ver también 

[OBJECT Get auto spellcheck](object-get-auto-spellcheck.md)  