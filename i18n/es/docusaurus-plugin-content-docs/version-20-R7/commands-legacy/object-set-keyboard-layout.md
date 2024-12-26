---
id: object-set-keyboard-layout
title: OBJECT SET KEYBOARD LAYOUT
slug: /commands/object-set-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Syntax-->**OBJECT SET KEYBOARD LAYOUT** ( {* ;} *objeto* ; *codigoLeng* )<!-- END REF-->
<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| codigoLeng | Text | &#8594;  | Código de lenguaje RFC3066 ISO639 e ISO3166,"" = no cambiar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Summary-->El comando **OBJECT SET KEYBOARD LAYOUT** permite definir o modificar dinámicamente la configuración de teclado asociada al objeto o los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el *objeto* es una variable o un campo. En este caso, pase una referencia en lugar de un nombre.  
  
En *codigoLeng*, pase una cadena indicando el código del lenguaje a utilizar, basado en RFC3066, ISO639 e ISO3166\. Para mayor información, consulte la descripción del comando [SET DATABASE LOCALIZATION](set-database-localization.md). 

#### Ver también 

[OBJECT Get keyboard layout](object-get-keyboard-layout.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1179 |
| Hilo seguro | &cross; |


