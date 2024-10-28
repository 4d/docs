---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual mover el último registro seleccionado o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LAST RECORD.Summary-->**LAST RECORD** designa el último registro de la selección de *tabla* como registro actual y lo carga en memoria.<!-- END REF--> Si la selección actual está vacía o si el registro actual ya es el último de la selección, **LAST RECORD** no tiene efecto.

#### Ejemplo 

El siguiente ejemplo designa el último registro de la tabla \[Personas\] como registro actual:

```4d
 LAST RECORD([Personas])
```

#### Ver también 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  