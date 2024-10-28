---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual mover el siguiente registro  seleccionado o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.NEXT RECORD.Summary-->NEXT RECORD mueve el puntero del registro actual al siguiente registro en la selección actual de *tabla* para el proceso actual.<!-- END REF--> Si la selección actual está vacía, o si [Before selection](before-selection.md "Before selection") o [End selection](end-selection.md "End selection") es TRUE, NEXT RECORD no tiene ningún efecto. 

Si NEXT RECORD mueve el puntero del registro actual al final de la selección actual, [End selection](end-selection.md "End selection") devuelve TRUE, y no hay registro actual. Si [End selection](end-selection.md "End selection") devuelve TRUE, utilice [FIRST RECORD](first-record.md "FIRST RECORD"), [LAST RECORD](last-record.md "LAST RECORD"), o [GOTO SELECTED RECORD](goto-selected-record.md "GOTO SELECTED RECORD") para mover el puntero del registro actual de regreso a la selección actual. 

#### Ejemplo 

Ver el ejemplo del comando [DISPLAY RECORD](display-record.md "DISPLAY RECORD").

#### Ver también 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[PREVIOUS RECORD](previous-record.md)  