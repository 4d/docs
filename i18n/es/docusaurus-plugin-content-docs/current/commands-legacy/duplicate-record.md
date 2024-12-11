---
id: duplicate-record
title: DUPLICATE RECORD
slug: /commands/duplicate-record
displayed_sidebar: docs
---

<!--REF #_command_.DUPLICATE RECORD.Syntax-->**DUPLICATE RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.DUPLICATE RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro actual a duplicar o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DUPLICATE RECORD.Summary-->DUPLICATE RECORD crea un nuevo registro para *tabla* que es un duplicado del registro actual.<!-- END REF--> El nuevo registro se convierte en el registro actual. Si no hay registro actual, DUPLICATE RECORD no hace nada. Debe utilizar [SAVE RECORD](save-record.md "SAVE RECORD") para guardar el nuevo registro.

DUPLICATE RECORD puede ejecutarse durante la entrada de datos. Esto permite duplicar el registro mostrado en pantalla. Recuerde que primero debe llamar [SAVE RECORD](save-record.md "SAVE RECORD") para guardar los cambios realizados al registro original. 

**Nota de compatibilidad**: a partir de la versión 11 de 4D, este comando no soporta subtablas.

#### Ver también 

[SAVE RECORD](save-record.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 225 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Prohibido en el servidor ||


