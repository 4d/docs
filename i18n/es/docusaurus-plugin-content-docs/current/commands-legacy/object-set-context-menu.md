---
id: object-set-context-menu
title: OBJECT SET CONTEXT MENU
slug: /commands/object-set-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET CONTEXT MENU.Syntax-->**OBJECT SET CONTEXT MENU** ( {* ;} *objeto* ; *menuContext* )<!-- END REF-->
<!--REF #_command_.OBJECT SET CONTEXT MENU.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| menuContext | Boolean | &#8594;  | True = activar el menú contextual, False = desactivar el menú contextual |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET CONTEXT MENU.Summary-->El comando **OBJECT SET CONTEXT MENU** activa o desactiva, para el proceso actual, la asociación de un menú contextual por defecto al objeto o a los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
La opción "Menú contextual" está disponible para las áreas de texto de tipo de entrada, las áreas web y las imágenes. Se puede utilizar para asociar un menú de acción estándar en función del tipo de objeto (por ejemplo, copiar/pegar para los objetos texto). Para obtener más información, consulte el manual de *Diseño*.

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
Pase **True** en el parámetro *menuContext* para activar el menú contextual, y **False** para desactivarlo.

#### Ver también 

[OBJECT Get context menu](object-get-context-menu.md)  