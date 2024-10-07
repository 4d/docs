---
id: object-get-context-menu
title: OBJECT Get context menu
slug: /commands/object-get-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get context menu.Syntax-->**OBJECT Get context menu** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.OBJECT Get context menu.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &srarr; | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &srarr; | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| Resultado | Boolean | &larr; | True = menu contextual activo, False = menu contextual inactivo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get context menu.Summary-->El comando **OBJECT Get context menu** devuelve el estado actual de la opción "Menú contextual" del objeto o de los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
Puede configurar la opción "Menú contextual" en modo Diseño utilizando la lista de propiedades o utilizando el comando [OBJECT SET CONTEXT MENU](object-set-context-menu.md).  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
El comando devuelve **True** si el menú contextual está activo para el objeto y **False** en caso contrario.

#### Ver también 

[OBJECT SET CONTEXT MENU](object-set-context-menu.md)  