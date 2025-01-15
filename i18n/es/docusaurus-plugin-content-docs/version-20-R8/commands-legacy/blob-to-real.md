---
id: blob-to-real
title: BLOB to real
slug: /commands/blob-to-real
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to real.Syntax-->**BLOB to real** ( *BLOB* ; *formatoReal* {; *offset*} ) : Real<!-- END REF-->
<!--REF #_command_.BLOB to real.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB del cual obtener el valor de tipo Real |
| formatoReal | Integer | &#8594;  | 0 Formato real nativo 1 Formato real extendido 2  Formato real doble Macintosh 3  Formato real doble Windows |
| offset | Variable | &#8596; | Offset en el BLOB (expresado en bytes) |
|||| Nuevo offset después de la lectura |
| Resultado | Real | &#8592; | Valor real |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB to real.Summary-->El comando BLOB to real devuelve un valor de tipo Real leído del BLOB *blob*.<!-- END REF-->

El parámetro *formatoReal* fija el formato interno y el orden de bytes del valor de tipo Real a leer. Se pasa una de las siguientes constantes predefinidas de 4D:

| Constante                    | Tipo         | Valor |
| ---------------------------- | ------------ | ----- |
| Native real format           | Entero largo | 0     |
| Extended real format         | Entero largo | 1     |
| Macintosh double real format | Entero largo | 2     |
| PC double real format        | Entero largo | 3     |

**Nota sobre la independencia de plataforma:** si intercambia BLOBs entre las plataformas Macintosh y PC, es su decisión administrar los temas de byte swapping cuando utilice este comando.

Si especifica la variable del parámetro opcional *offset*, el valor real es leído desde el offset (a partir de cero) del BLOB. Si no especifica la variable del parámetro opcional *offset*, se leen los primeros 8 o 10 bytes del BLOB. 

**Nota:** debe pasar un valor de offset entre *0* (cero) y el tamaño del BLOB menos 8 o 10\. Si no lo hace, se genera un error -111.

Después de llamar el comando, la variable se incrementa en el número de bytes leído. Por lo tanto, puede reutilizar la misma variable con otro comando de lectura de BLOB para leer otro valor.

#### Ejemplo 

El siguiente ejemplo lee 20 valores reales de un BLOB, a partir del offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vrValor:=BLOB to real(vxSomeBlob;PC byte ordering;$vlOffset)
  // Hacer algo con $vrValor
 End for
```

#### Ver también 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 553 |
| Hilo seguro | &check; |


