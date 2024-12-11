---
id: resolve-alias
title: RESOLVE ALIAS
slug: /commands/resolve-alias
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE ALIAS.Syntax-->**RESOLVE ALIAS** ( *rutaAlias* ; *rutaObjetivo* )<!-- END REF-->
<!--REF #_command_.RESOLVE ALIAS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaAlias | Text | &#8594;  | Nombre o ruta de acceso completa del alias/atajo |
| rutaObjetivo | Text | &#8592; | Nombre o ruta de acceso completa del objetivo del alias/atajo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESOLVE ALIAS.Summary-->El comando RESOLVE ALIAS devuelve la ruta completa del archivo o carpeta objetivo de un alias (llamado atajo bajo Windows).<!-- END REF--> 

En *rutaAlias* se pasa el nombre o ruta de acceso completa del alias.

Una vez ejecutado el comando, la variable *rutaObjetivo* contiene la ruta de acceso completa al archivo o carpeta del alias y la variable sistema OK toma el valor 1.

Si la ruta se pasa en *rutaAlias* corresponde a un archivo y no a un alias, *rutaObjetivo* devuelve la ruta de acceso del archivo y la variable sistema OK toma el valor 0.

#### Variables y conjuntos del sistema 

Si *rutaAlias* especifica un alias/atajo, la variable sistema OK toma el valor 1\. Si *rutaAlias* especifica un archivo estándar, la variable sistema OK toma el valor 0.

#### Ver también 

[CREATE ALIAS](create-alias.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 695 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


