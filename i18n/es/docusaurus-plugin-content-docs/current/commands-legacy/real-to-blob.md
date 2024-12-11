---
id: real-to-blob
title: REAL TO BLOB
slug: /commands/real-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.REAL TO BLOB.Syntax-->**REAL TO BLOB** ( *real* ; *BLOB* ; *formatoReal* {; offset | *} )<!-- END REF-->
<!--REF #_command_.REAL TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| real | Real | &#8594;  | Valor de tipo real a escribir en el BLOB |
| Blob | Blob | &#8594;  | BLOB a recibir el valor Real |
| formatoReal | Integer | &#8594;  | 0 Formato real nativo 1 Formato real extendido 2  Formato real doble Macintosh 3  Formato real doble Windows |
| offset &#124; * | Variable, Operador | &#8596;  | Offset en el BLOB (expresado en bytes) o * para añadir el valor |
||| | Nuevo offset después de la escritura si se omite * |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REAL TO BLOB.Summary-->El comando REAL TO BLOB escribe el valor de tipo Real (o numérico) *real* en el BLOB *blob*.<!-- END REF-->

El parámetro *formatoReal* fija el formato interno y el orden de los bytes ("byte ordering") del valor de tipo Real a escribir. Usted pasa uno de las siguientes constantes predefinidas por 4D:

| Constante                    | Tipo         | Valor |
| ---------------------------- | ------------ | ----- |
| Native real format           | Entero largo | 0     |
| Extended real format         | Entero largo | 1     |
| Macintosh double real format | Entero largo | 2     |
| PC double real format        | Entero largo | 3     |

**Nota sobre la independencia de plataforma:** si intercambia los BLOBs entre las plataformas Macintosh y PC, es su decisión administrar los temas de formatos reales y byte swapping cuando utilice este comando.

Si especifica el parámetro opcional \*, el valor real se adjunta al BLOB; el tamaño del BLOB se extiende en consecuencia. Utilizando el parámetro \* opcional, usted puede almacenar secuencialmente cualquier número de valores de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Entero largo](# "Entre -2 millardos y +2 millardos"), Real o [Texto](# "A character string that may contain from 0 to 2 GB of text") (ver otros comandos BLOB) en un BLOB, siempre y cuando tenga memoria disponible. 

Si no especifica el parámetro opcional \* ni la variable en el parámetro *offset*, el valor Real se almacena al comienzo del BLOB, reemplazando su contenido anterior; el tamaño del BLOB se ajusta en consecuencia. 

Si pasa la variable en el parámetro *offset*, el valor Real se escribe en el offset (comenzando desde cero) en el BLOB. Sin importar donde escribe el valor Real, el tamaño del BLOB aumenta de acuerdo a la ubicación pasada (más hasta 8 ó 10 bytes, si es necesario). Los bytes redefinidos, diferentes a los que está escribiendo, se inicializan en cero.

Después de llamar el comando, se devuelve la variable del parámetro, incrementada en el número de bytes que hayan sido escritors. Por lo tanto, puede reutilizar la misma variable con otro comando de escritura de BLOB para escribir otro valor. 

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ejemplo 1 

Después de la ejecución de este código:

```4d
 var vrValor : Real
 vrValor:=...
 REAL TO BLOB(vrValor;vxBlob;Extended real format)
```

* En todas las plataformas, el tamaño de *vxBlob* is 10 bytes

#### Ejemplo 2 

Después de la ejecución de este código:

```4d
 var vrValor : Real
 vrValor:=...
 REAL TO BLOB(vrValor;vxBlob;Native real format)
```

* En todas las plataformas, el tamaño de *vxBlob* es 8 bytes

#### Ejemplo 3 

Después de la ejecución de este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValor : Real
 vrValor:=...
 INTEGER TO BLOB(vrValor;vxBlob;Windows Double real format) // o Formato real doble Macintosh
```

* En todas las plataformas, el tamaño de *vxBlob* es 8 bytes

#### Ejemplo 4 

Después de la ejecución de este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValor : Real
 vrValor:=...
 vlOffset:=50
 REAL TO BLOB(vrValor;vxBlob;Windows Double real format;vlOffset) // o Formato real doble Macintosh
```

* En todas las plataformas, el tamaño de *vxBlob* es 100 bytes
* En todas las plataformas, el valor real se almacena en los bytes #50 a #57
* Los otros bytes del BLOB se dejan sin cambiar
* La variable *vlOffset* se ha incrementado en 8 (y ahora es igual a 58)

#### Ejemplo 5 

Después de la ejecución de este código:

```4d
 var vrValor : Real
 vrValor:=...
 REAL TO BLOB(vrValor;vxBlob;Macintosh double real format) // o Formato real doble Windows
```

* En todas las plataformas, el tamaño de *vxBlob* es 8 bytes

#### Ejemplo 6 

Después de la ejecución de este código:

```4d
 SET BLOB SIZE(vxBlob;100)
 REAL TO BLOB(vrValor;vxBlob;Extended real format;*)
```

* En todas las plataformas, el tamaño de *vxBlob* es 110 bytes
* En todas las plataformas, el valor real se almacena en los bytes #100 a #109
* Los otros bytes del BLOB no son modificados

#### Ver también 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 552 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


