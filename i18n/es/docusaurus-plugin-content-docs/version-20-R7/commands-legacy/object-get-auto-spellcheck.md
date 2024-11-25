---
id: object-get-auto-spellcheck
title: OBJECT Get auto spellcheck
slug: /commands/object-get-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get auto spellcheck.Syntax-->**OBJECT Get auto spellcheck** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get auto spellcheck.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable o campo(si se omite *) |
| Resultado | Boolean | &#8592; | True = corrección automática, False = no corrección automática |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get auto spellcheck.Summary-->El comando **OBJECT Get auto spellcheck** devuelve el estado de la opción Corrección ortográfica automática del o de los objeto(s) designado(s) por los parámetros *objeto* y *\** para el proceso actual .<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que *objeto* es una variable o un campo. En este caso, pase una referencia en lugar de un nombre.  
  
El comando devuelve **True** cuando la corrección ortográfica automática está activada para el *objeto* y **False** si no.

#### Ver también 

[OBJECT SET AUTO SPELLCHECK](object-set-auto-spellcheck.md)  