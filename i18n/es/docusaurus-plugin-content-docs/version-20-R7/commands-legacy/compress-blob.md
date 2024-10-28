---
id: compress-blob
title: COMPRESS BLOB
slug: /commands/compress-blob
displayed_sidebar: docs
---

<!--REF #_command_.COMPRESS BLOB.Syntax-->**COMPRESS BLOB** ( *BLOB* {; *compresion*} )<!-- END REF-->
<!--REF #_command_.COMPRESS BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB a comprimir |
| compresion | Integer | &#8594;  | Si no se omite: 1, compresión máxima posible 2, velocidad de compresión máxima |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COMPRESS BLOB.Summary-->El comando **COMPRESS BLOB** comprime el BLOB *blob* utilizando el algoritmo de compresión interno de 4D.<!-- END REF-->   
  
El parámetro opcional *compresion* le permite definir la forma en que la que el BLOB se comprimirá. Pase en este parámetro una de las siguientes constantes, ubicadas en el tema *BLOB* : 

| Constante                  | Tipo         | Valor | Comentario                                                                                                                                                              |
| -------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Compact compression mode   | Entero largo | 1     | Compresión interna más compacta (en detrimento de la velocidad a la cual la compresión y descompresión se efectúan). Método por defecto.                                |
| Fast compression mode      | Entero largo | 2     | Compresión más rápida en detrimento (y será descomprimido lo más rápido posible), en detrimento de la tasa de compresión (una vez comprimido, el BLOB será más grande). |
| GZIP best compression mode | Entero largo | \-1   | Compresión GZIP más compacta (en detrimento de la velocidad a la cual la compresión y decompresión se efectúan).                                                        |
| GZIP fast compression mode | Entero largo | \-2   | Compresión/descompresión GZIP más rápida (en detrimento de la tasa de compresión).                                                                                      |

Si pasa otro valor o si omite el parámetro *compresion*, se utiliza el método de compresión 1(algoritmo interno compacto).

Después de llamar este comando, la variable OK toma el valor 1 si el BLOB fue comprimido correctamente. Si la compresión no se pudo realizar, la variable OK toma el valor 0\. Si la compresión no se pudo efectuar por falta de memoria o porque el tamaño actual del blob es menor de 255 bytes, no se genera un error, y el método continua su ejecución.

En otros casos si el error es causado por un problema más importante (el BLOB está dañado), se genera el error -10600\. Este error, puede ser interceptado con la ayuda de un método instalado por el comando [ON ERR CALL](on-err-call.md).

Después de comprimir un BLOB, puede expandirlo utilizando el comando [EXPAND BLOB](expand-blob.md).

Para detectar si un BLOB ha sido comprimido, utilice el comando [BLOB PROPERTIES](blob-properties.md).  

**Advertencia:** un BLOB comprimido continua siendo un BLOB, de manera que no hay nada que le impida modificar su contenido. Sin embargo, si lo modifica, el comando [EXPAND BLOB](expand-blob.md) no podrá descomprimir el BLOB correctamente.

#### Ejemplo 1 

Este ejemplo prueba si el BLOB *vxMiBlob* está comprimido, y si no lo está, lo comprime:

```4d
 BLOB PROPERTIES(vxMiBlob;$vlComprimido;$vlTamañoExpandido;$vlTamañoActual)
 If($vlComprimido=Is not compressed)
    COMPRESS BLOB(vxMiBlob)
 End if
```

Sin embargo observe, que si aplica COMPRESS BLOB a un BLOB que ya ha sido comprimido, el comando lo detecta y no hace nada.

#### Ejemplo 2 

Este ejemplo le permite seleccionar un documento y luego comprimirlo:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       COMPRESS BLOB(vxBlob)
       If(OK=1)
          BLOB TO DOCUMENT(Document;vxBlob)
       End if
    End if
 End if
```

#### Ejemplo 3 

Envío de datos HTTP brutos comprimidos en GZIP:

```4d
 COMPRESS BLOB($blob;GZIP Best compression mode)
 var $vEncoding : Text
 $vEncoding:="Content-encoding: gzip"
 WEB SET HTTP HEADER($vEncoding)
 WEB SEND RAW DATA($blob ;*)
```

#### Variables y conjuntos del sistema 

La variable OK toma el valor 1 si el BLOB se comprime correctamente; de lo contrario, toma el valor 0.

#### Ver también 

[BLOB PROPERTIES](blob-properties.md)  
[EXPAND BLOB](expand-blob.md)  