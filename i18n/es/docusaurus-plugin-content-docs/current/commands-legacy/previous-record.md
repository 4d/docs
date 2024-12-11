---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual mover el registro anterior de la selección actual o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PREVIOUS RECORD.Summary-->PREVIOUS RECORD mueve el puntero del registro actual al registro anterior en la selección de *tabla* para el proceso actual.<!-- END REF--> Si la selección actual está vacía, o si [Before selection](before-selection.md "Before selection") o [End selection](end-selection.md "End selection") es TRUE, PREVIOUS RECORD no tienen ningún efecto. 

Si PREVIOUS RECORD mueve el puntero del registro actual antes de la selección actual, [Before selection](before-selection.md "Before selection") devuelve TRUE, y no hay registro actual. Si [Before selection](before-selection.md "Before selection") devuelve TRUE, utilice [FIRST RECORD](first-record.md "FIRST RECORD"), [LAST RECORD](last-record.md "LAST RECORD"), o [GOTO SELECTED RECORD](goto-selected-record.md "GOTO SELECTED RECORD") para mover el puntero del registro actual en la selección actual.

#### Ver también 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 110 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Prohibido en el servidor ||


