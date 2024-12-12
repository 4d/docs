---
id: integer-to-blob
title: INTEGER TO BLOB
slug: /commands/integer-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.INTEGER TO BLOB.Syntax-->**INTEGER TO BLOB** ( *entero* ; *BLOB* ; *byteOrden* {; offset | *} )<!-- END REF-->
<!--REF #_command_.INTEGER TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| entero | Integer | &#8594;  | Valor entero a escribir en el BLOB |
| Blob | Blob | &#8594;  | BLOB a recibir el valor entero |
| byteOrden | Integer | &#8594;  | 0 Orden de bytes en modo nativo 1 Orden de los bytes Macintosh 2 Orden de los bytes PC |
| offset &#124; * | Variable, Operador |&#8596;  | Offset expresado en bytes en el BLOB o * para añadir el valor |
| ||| Nuevo offset después de la escritura si se omite * |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.INTEGER TO BLOB.Summary-->El comando INTEGER TO BLOB escribe el valor entero (2 bytes) *entero* en el BLOB *blob*.<!-- END REF-->

El parámetro *byteOrden* fija el orden de los bytes ("byte ordering) del valor entero a escribir (2 bytes). Usted pasa uno de las siguientes constantes predefinidas suministradas 4D:

| Constante               | Tipo         | Valor |
| ----------------------- | ------------ | ----- |
| Native byte ordering    | Entero largo | 0     |
| Macintosh byte ordering | Entero largo | 1     |
| PC byte ordering        | Entero largo | 2     |

**Nota sobre la independencia de plataforma:** si intercambia BLOBs entre las plataformas Macintosh y PC, es su decisión administrar los temas de byte swapping cuando utilice este comando. 

Si especifica el parámetro opcional \*, el valor entero de 2 bytes se añade al BLOB y el tamaño del BLOB se extiende en consecuencia. Utilizando el parámetro opcional \*, puede almacenar secuencialmente todos los valores de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Entero largo](# "Entre -2 millardos y +2 millardos"), Real o [Texto](# "A character string that may contain from 0 to 2 GB of text") (ver otros comandos de BLOB) en un BLOB, siempre y cuando tenga memoria disponible. 

Si no especifica el parámetro opcional \* o la variable del parámetro *offset*, el valor entero de 2 bytes se almacena al comienzo del BLOB, sobreescribiendo su contenido anterior; el tamaño del BLOB se ajusta en consecuencia. 

Si pasa la variable del parámetro *offset*, el valor entero de 2 bytes se escribe a partir del offset (comenzando desde cero) del BLOB. Sin importar donde escriba el valor entero de 2 bytes, el tamaño del BLOB aumenta de acuerdo a la ubicación pasada (hasta en 2 bytes, si es necesario). Los bytes recientemente definidos, diferentes a los que está escribiendo, se inicializan en cero. 

Después de llamar el comando, se devuelve la variable del parámetro *offset*, incrementada en el número de bytes que se han escrito. Por lo tanto, usted puede reutilizar esa misma variable con otro comando de escritura de BLOB para escribir otro valor. 

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ejemplo 1 

Después de la ejecución de este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 INTEGER TO BLOB(518;vxBlob;Macintosh byte ordering;vlOffset)
```

* El tamaño de *vxBlob* es 100 bytes
* En todas las plataformas *vxBLOB{50}* \= *$02* and *vxBLOB{51}* \= *$06*
* Los otros bytes del BLOB no cambian
* La variable *vlOffset* se ha incrementado en 2 (y ahora es igual a 52)

#### Ejemplo 2 

Después de la ejecución de este código:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)
```

* El tamaño de *vxBlob* is 2 bytes
* En todas las plataformas *vxBLOB{0}* \= *$06* and *vxBLOB{1}* \= *$02*

#### Ejemplo 3 

Después de la ejecución de este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)
```

* El tamaño de *vxBlob* es 102 bytes
* En todas las plataformas *vxBLOB{100}* \= *$06* and *vxBLOB{101}* \= *$02*
* Los otros bytes del BLOB no cambian

#### Ejemplo 4 

Después de la ejecución de este código:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)
```

* El tamaño de *vxBlob* es 2 bytes
* En Macintosh *vxBLOB{0}* \= *$02* y *vxBLOB{1}* \= *$06*
* En PC *vxBLOB{0}* \= *$06* y *vxBLOB{1}* \= *$02*

#### Ejemplo 5 

Después de la ejecución de este código:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)
```

* El tamaño de *vxBlob* es 2 bytes
* En todas las plataformas *vxBLOB{0}* \= *$02* and *vxBLOB{1}* \= *$06*

#### Ver también 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  