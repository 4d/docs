---
id: save-record
title: SAVE RECORD
slug: /commands/save-record
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RECORD.Syntax-->**SAVE RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.SAVE RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro a guardar o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAVE RECORD.Summary-->SAVE RECORD guarda el registro actual de *tabla* en el proceso actual.<!-- END REF--> Si no hay registro actual, se ignora el comando SAVE RECORD. 

Puede utilizar SAVE RECORD para guardar un registro creado o modificado por programación. Cuando un registro ha sido modificado y validado por el usuario en un formulario, no es necesario guardar con SAVE RECORD. Un registro que ha sido modificado por el usuario en un formulario, pero ha sido cancelado, aún pueden ser guardado con SAVE RECORD.

Estos son algunos casos donde es necesario SAVE RECORD:

* Para guardar un nuevo registro creado con [CREATE RECORD](create-record.md) o [DUPLICATE RECORD](duplicate-record.md)
* Para guardar datos desde [RECEIVE RECORD](receive-record.md)
* Para guardar un registro modificado por un método
* Para guardar un registro que contiene un subregistro creado o modificado por uno de estos comandos *\_o\_ADD SUBRECORD*, *\_o\_CREATE SUBRECORD*, o *\_o\_MODIFY SUBRECORD*
* Durante la entrada de datos, para guardar el registro mostrado antes de llamar un comando que cambia el registro actual
* Durante la entrada de datos, para guardar el registro actual

No debe ejecutar SAVE RECORD en el evento de formulario On Validate de un registro que ha sido aceptado. Si lo hace, el registro se guardará dos veces.

**Nota:** guardar un registro que contiene campos objeto editados generalmente requiere que notifique explícitamente a 4D antes de llamar a **SAVE RECORD**. Para más información, consulte la sección *Guardar campos objeto*. 

#### Ejemplo 

El siguiente ejemplo es parte de un método que lee registros de un documento. En esta parte del código, se recibe un registro, y luego, si se recibe correctamente, se guarda el registro:

```4d
 RECEIVE RECORD([Clientes]) // Recepción del registro a partir del disco
 If(OK=1) // Si el registro se recibe correctamente…
    SAVE RECORD([Clientes]) // guardar
 End if
```

#### Ver también 

[CREATE RECORD](create-record.md)  
[Locked](locked.md)  
*Triggers*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 53 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


