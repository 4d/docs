---
id: document-to-blob
title: DOCUMENT TO BLOB
slug: /commands/document-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT TO BLOB.Syntax-->**DOCUMENT TO BLOB** ( *documento* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.DOCUMENT TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nombre del documento |
| Blob | Blob | &#8596;  | Campo o variable de tipo BLOB a recibir el documento |
| || | Contenido del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOCUMENT TO BLOB.Summary-->**DOCUMENT TO BLOB** carga el contenido de *documento* en *blob*.<!-- END REF--> Debe pasar el nombre de un documento existente que no esté abierto, de lo contrario se generará un error. Para dejar que el usuario seleccione el documento a cargar en el BLOB, utilice el comando [Open document](open-document.md) y la variable sistema *document* (ver ejemplo).

#### Ejemplo 

Usted escribe un Sistema de información que le permite guardar y buscar rápidamente documentos. En un formulario de entrada de datos, usted crea un botón que le permite cargar un documento en un campo tipo BLOB. El método para este botón puede ser:

```4d
 $vhDocRef:=Open document("") // Seleccionar un documento
 If(OK=1) // Si un documento ha sido seleccionado
    CLOSE DOCUMENT($vhDocRef) // No necesitamos mantenerlo abierto
    DOCUMENT TO BLOB(Document;[SuTabla]SuCampoBLOB) // Cargar el documento
    If(OK=0)
  // Manejar error
    End if
 End if
```

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el documento se carga correctamente, de lo contrario OK toma el valor 0 y se genera un error.

#### Manejo de errores 

* Si trata de cargar (en un BLOB) un documento que no existe o que ya ha sido abierto por otro proceso o aplicación, se genera un error File Manager.
* Un error de E/S puede ocurrir si el documento está bloqueado, si está ubicado en un volumen bloqueado, o si hay un problema en la lectura del documento.
* Si no hay suficiente memoria para cargar el documento, se genera un error -108.

En todos los casos, puede interceptar el error utilizando un método de interrupción [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[BLOB TO DOCUMENT](blob-to-document.md)  
[Open document](open-document.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 525 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


