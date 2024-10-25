---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *conjunto* )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nombre del conjunto a borrar de la memoria |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLEAR SET.Summary-->CLEAR SET borra *conjunto* de la memoria y libera la memoria utilizada por *conjunto*.<!-- END REF--> CLEAR SET no afecta las tablas, selecciones, o registros. Para guardar un conjunto antes de borrarlo, utilice el comando [SAVE SET](save-set.md "SAVE SET"). Como los conjuntos utilizan memoria, es bueno borrarlos cuando ya no se necesitan.

#### Ejemplo 

Ver el ejemplo del comando [USE SET](use-set.md "USE SET").

#### Ver también 

[CREATE EMPTY SET](create-empty-set.md)  
[CREATE SET](create-set.md)  
[LOAD SET](load-set.md)  