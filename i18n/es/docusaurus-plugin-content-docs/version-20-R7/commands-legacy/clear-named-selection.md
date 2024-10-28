---
id: clear-named-selection
title: CLEAR NAMED SELECTION
slug: /commands/clear-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR NAMED SELECTION.Syntax-->**CLEAR NAMED SELECTION** ( *nombre* )<!-- END REF-->
<!--REF #_command_.CLEAR NAMED SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombre | Text | &#8594;  | Nombre de la selección temporal a borrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLEAR NAMED SELECTION.Summary-->CLEAR NAMED SELECTION borra *temp* de la memoria y libera la memoria utilizada por *temp*.<!-- END REF-->CLEAR NAMED SELECTION no afecta las tablas, selecciones, o registros. Como las selecciones temporales utilizan memoria, es recomendable borrar las selecciones temporales cuando ya no se necesiten.

Si *temp* fue creado por el comando [CUT NAMED SELECTION](cut-named-selection.md "CUT NAMED SELECTION") y luego manipulado utilizando el comando [USE NAMED SELECTION](use-named-selection.md "USE NAMED SELECTION"), t*emp* no existe más en memoria. En este caso, no es necesario utilizar el comando CLEAR NAMED SELECTION.

#### Ver también 

[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  