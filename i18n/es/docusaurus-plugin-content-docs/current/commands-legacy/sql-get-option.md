---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *opcion* ; *valor* )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opcion | Integer | &#8594;  | Número de opción |
| valor | Integer, Text | &#8592; | Valor de la opción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL GET OPTION.Summary-->El comando SQL GET OPTION devuelve el *valor* actual de la opción pasada en el parámetro *opcion*.<!-- END REF-->

Para mayor información sobre las diferentes opciones y sus valores asociados, consulte la descripción del comando [SQL SET OPTION](sql-set-option.md "SQL SET OPTION").

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[SQL SET OPTION](sql-set-option.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 819 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


