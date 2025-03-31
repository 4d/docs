---
id: blob-to-document
title: BLOB TO DOCUMENT
slug: /commands/blob-to-document
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO DOCUMENT.Syntax-->**BLOB TO DOCUMENT** ( *documento* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.BLOB TO DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nombre del documento |
| Blob | Blob | &#8594;  | Nuevo contenido del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB TO DOCUMENT.Summary-->BLOB TO DOCUMENT escribe los datos de *documento* utilizando los datos almacenados en *blob*.<!-- END REF--> Puede pasar el nombre de un documento existente en *documento*. Si el documento no existe, el comando lo crea. Si pasa el nombre de un documento existente, asegúrese de que el documento no esté abierto, de lo contrario se generará un error. Si quiere permitir que el usuario elija el documento, utilice los comandos [Open document](open-document.md) o [Create document](create-document.md) y utilice la variable sistema *documento* (ver ejemplo).

#### Ejemplo 

Usted escribe un sistema de información que le permite guardar y buscar rápidamente documentos. En un formulario de entrada de datos, usted crea un botón que le permite guardar un documento que contiene datos cargados previamente en un campo BLOB. El método para este botón puede ser el siguiente:

```4d
 $vhDocRef:=Create document("") // Guardar el documento de su elección
 If(OK=1) // Si un documento ha sido creado
    CLOSE DOCUMENT($vhDocRef) // No necesitamos mantenerlo abierto
    BLOB TO DOCUMENT(Document;[SuTabla]SuCampoBLOB) // Escribir el contenido del documento
    If(OK=0)
  // Gestionar error
    End if
 End if
```

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el documento está escrito correctamente, de lo contrario toma el valor 0 y se genera un error.

#### Manejo de errores 

* Si trata de reescribir un documento que no existe o que ha sido abierto por otro proceso o aplicación, se genera un error File Manager.
* El espacio del disco puede ser insuficiente para escribir los nuevos contenidos del documento.
* Los errores E/S pueden ocurrir mientras escribe el documento.

En todos los casos, puede interceptar el error utilizando un método de interrupción [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[Create document](create-document.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[Open document](open-document.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 526 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


