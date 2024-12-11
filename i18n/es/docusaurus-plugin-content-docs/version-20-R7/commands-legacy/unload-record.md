---
id: unload-record
title: UNLOAD RECORD
slug: /commands/unload-record
displayed_sidebar: docs
---

<!--REF #_command_.UNLOAD RECORD.Syntax-->**UNLOAD RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.UNLOAD RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual descargar el registro o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.UNLOAD RECORD.Summary-->UNLOAD RECORD descarga el registro actual de *tabla*.<!-- END REF-->

Si el registro no está bloqueado para el usuario local (bloqueado para los otros usuarios), UNLOAD RECORD desbloquea el registro para los otros usuarios.

Aunque UNLOAD RECORD descarga el registro de la memoria, el registro permanece como registro actual. Cuando otro registro se convierte en el registro actual, el registro actual anterior se descarga automáticamente y se desbloquea para los otros usuarios. Siempre ejecute este comando cuando haya terminado de modificar un registro y quiera que esté disponible para otros usuarios, mientras permanece el registro como su registro actual.

Si un registro tiene una cantidad importante de datos, de campos de imagen, o de documentos externos (tales como documentos 4D Write Pro), es preferible no almacenar el registro actual en memoria a menos que necesite modificarlo. En ese caso, utilice el comando UNLOAD RECORD, de esta manera, puede conservar el registro actual sin que esté en memoria. De esta forma libera la memoria ocupada por el registro, pero no tiene acceso a los valores almacenados en los campos. Si más adelante necesita acceder a los valores del registro, utilice el comando [LOAD RECORD](load-record.md "LOAD RECORD").

**Nota:** cuando se utiliza en una transacción, el comando UNLOAD RECORD descarga el registro actual únicamente para el proceso que genera la transacción. Para otros procesos, el registro permanece bloqueado siempre que la transacción no hay sido validada (o cancelada).

#### Ver también 

[LOAD RECORD](load-record.md)  
*Record Locking*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 212 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


