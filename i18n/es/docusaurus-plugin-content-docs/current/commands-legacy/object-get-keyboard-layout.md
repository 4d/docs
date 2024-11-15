---
id: object-get-keyboard-layout
title: OBJECT Get keyboard layout
slug: /commands/object-get-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get keyboard layout.Syntax-->**OBJECT Get keyboard layout** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get keyboard layout.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable o campo (si se omite *) |
| Resultado | Text | &#8592; | Código del lenguaje de configuración, "" = sin configuración |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get keyboard layout.Summary-->El comando **OBJECT Get keyboard layout** devuelve la configuración del teclado actual asociada a los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable o un campo. En este caso, pase una referencia en lugar de un nombre.  
  
El comando devuelve una cadena indicando el código del lenguaje utilizado, basado en RFC3066, ISO639 e ISO3166\. Para mayor información, consulte la descripción del comando [SET DATABASE LOCALIZATION](set-database-localization.md). 

#### Ver también 

[OBJECT SET KEYBOARD LAYOUT](object-set-keyboard-layout.md)  