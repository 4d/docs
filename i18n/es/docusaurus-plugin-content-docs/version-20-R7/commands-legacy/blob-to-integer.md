---
id: blob-to-integer
title: BLOB to integer
slug: /commands/blob-to-integer
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to integer.Syntax-->**BLOB to integer** ( *BLOB* ; *byteOrden* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to integer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB del cual obtener el valor entero |
| byteOrden | Integer | &#8594;  | 0 Orden de bytes nativo 1 Orden de bytes Macintosh 2 Orden de bytes PC |
| offset | Variable | &#8596;  | Offset en el BLOB (expresado en bytes) |
| || | Nuevo offset después de la lectura |
| Resultado | Integer | &#8592; | Valor entero (2 bytes) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB to integer.Summary-->El comando BLOB to integer devuelve un valor entero (2 bytes) leído del BLOB *blob*.<!-- END REF-->

El parámetro *byteOrden* fija el orden de los bytes ("byte ordering) del valor entero (2 bytes) a leer. Se pasa una de las siguientes constantes predefinidas por 4D:

| Constante               | Tipo         | Valor |
| ----------------------- | ------------ | ----- |
| Native byte ordering    | Entero largo | 0     |
| Macintosh byte ordering | Entero largo | 1     |
| PC byte ordering        | Entero largo | 2     |

  
**Nota sobre la independencia de plataforma:** si intercambia BLOBs entre las plataformas Macintosh y PC, es su decisión administrar los temas de byte swapping cuando utilice este comando.

Si especifica la variable del parámetro opcional *offset*, el valor entero (2 bytes) se lee desde el offset (a partir de cero) del BLOB. Si no especifica la variable del parámetro opcional *offset*, se leen los dos primeros bytes del BLOB.

**Nota:** debe pasar un offset (en bytes) entre *0* (cero) y el tamaño del BLOB menos 2\. De lo contrario se genera el error -111.

Después de llamar el comando, la variable se incrementa en el número de bytes leido. Puede reutilizar esa misma variable con otro comando de lectura de BLOBs para leer otro valor. 

#### Ejemplo 

El siguiente ejemplo lee 20 valores enteros de un BLOB, a partir del offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $viValor:=BLOB to integer(vxUnBlob;PC byte ordering;$vlOffset)
  // Hacer algo con $viValor
 End for
```

#### Ver también 

[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  