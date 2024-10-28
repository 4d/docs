---
id: expand-blob
title: EXPAND BLOB
slug: /commands/expand-blob
displayed_sidebar: docs
---

<!--REF #_command_.EXPAND BLOB.Syntax-->**EXPAND BLOB** ( *BLOB* )<!-- END REF-->
<!--REF #_command_.EXPAND BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB a descomprimir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EXPAND BLOB.Summary-->El comando EXPAND BLOB descomprime el BLOB *blob* que fue previamente comprimido utilizando el comando COMPRESS BLOB.<!-- END REF-->  
  
Después de llamar el comando, la variable OK toma el valor 1 si el BLOB ha sido descomprimido. Si no pudo realizar la expansión, la variable OK toma el valor 0.

Si la expansión no se pudo realizar por falta de memoria, no se genera un error y el método reasume su ejecución.   
En otros casos, (el BLOB no ha sido comprimido o está dañado), se genera el error -10600\. Este error puede interceptarse utilizando el comando [ON ERR CALL](on-err-call.md "ON ERR CALL"). 

Para verificar si un BLOB ha sido comprimido, utilice el comando [BLOB PROPERTIES](blob-properties.md "BLOB PROPERTIES").

#### Ejemplo 1 

Este ejemplo prueba si el BLOB *vxMiBlob* está comprimido, si es así lo descomprime: 

```4d
 BLOB PROPERTIES(vxMiBlob;$vlComprimido;$vlTamañoExpandido;$vlTamañoActual)
 If($vlComprimido#Is not compressed)
    EXPAND BLOB(vxMiBlob)
 End if
```

#### Ejemplo 2 

Este ejemplo le permite seleccionar un documento y descomprimirlo, si está comprimido:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       BLOB PROPERTIES(vxBlob;$vlComprimido;$vlTamañoExpandido;$vlTamañoActual)
       If($vlComprimido#Is not compressed)
          EXPAND BLOB(vxBlob)
          If(OK=1)
             BLOB TO DOCUMENT(Document;vxBlob)
          End if
       End if
    End if
 End if
```

#### Variables y conjuntos del sistema 

La variable OK toma el valor 1 si el BLOB ha sido descomprimido con éxito, de lo contrario toma el valor 0.

#### Ver también 

[BLOB PROPERTIES](blob-properties.md)  
[COMPRESS BLOB](compress-blob.md)  