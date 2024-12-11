---
id: text-to-blob
title: TEXT TO BLOB
slug: /commands/text-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO BLOB.Syntax-->**TEXT TO BLOB** ( *texto* ; *BLOB* {; *formatoTexto* {; offset | *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto a escribir en el BLOB |
| Blob | Blob | &#8594;  | BLOB a recibir el texto |
| formatoTexto | Integer | &#8594;  | Formato y conjunto de caracteres de texto |
| offset &#124; * | Variable, Operador | &#8596; | Offset en el BLOB (expresado en bytes) o * para añadir el valor |
| || | Nuevo offset después de la escritura si se omite * |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.TEXT TO BLOB.Summary-->El comando TEXT TO BLOB escribe el valor de tipo Texto *texto* en el BLOB *blob*.<!-- END REF-->

El parámetro *formatoTexto* puede utilizarse para definir el formato interno y el conjunto de caracteres del valor de tipo Texto a escribir. Para hacer esto, pase una de las siguientes constantes (encontradas en el tema *BLOB*) en el parámetro *formatoTexto*:

| Constante                | Tipo         | Valor |
| ------------------------ | ------------ | ----- |
| Mac C string             | Entero largo | 0     |
| Mac Pascal string        | Entero largo | 1     |
| Mac text with length     | Entero largo | 2     |
| Mac text without length  | Entero largo | 3     |
| UTF8 C string            | Entero largo | 4     |
| UTF8 text with length    | Entero largo | 5     |
| UTF8 text without length | Entero largo | 6     |

Si omite el parámetro *formatoTexto*, 4D utiliza por defecto el formato Mac C string. En bases creadas a partir de la versión 11, 4D trabaja por defecto con el conjunto de caracteres Unicode (UTF8) para administrar texto, de manera que se recomienda utilizar este conjunto de caracteres. Por razones de compatibilidad, este comando puede utilizarse para “forzar” la conversion utilizando el conjunto de caracteres Mac Roman (utilizado en versiones anteriores de 4D). El conjunto de caracteres se elije vía el parámetro *formatoTexto.*   

**Notas:**

* Las constantes "UTF8" sólo pueden utilizarse cuando la aplicación funciona en modo Unicode.
* La constante Mac Text with length no funciona con textos de más de 32 KB.
* Si quiere trabajar con conjuntos de caracteres diferentes de UTF8, utilice el comando CONVERT FROM TEXT.

La siguiente tabla describe cada uno de estos formatos:

| **Formato texto**                  | **Descripción y ejemplos**                                              |
| ---------------------------------- | ----------------------------------------------------------------------- |
| C string                           | El texto termina en un carácter NULL (código ASCII $00).                |
| UTF8                               | "" $00                                                                  |
| "Café" $43 61 66 C3 A9 00          |                                                                         |
| Mac                                | "" $00                                                                  |
| "Café" $43 61 66 8E 00             |                                                                         |
| Pascal string                      | El texto está precedido de un byte de longitud.                         |
| UTF8                               | \-                                                                      |
| \-                                 |                                                                         |
| Mac                                | "" $00                                                                  |
| "Café" $04 43 61 66 8E             |                                                                         |
| Text with length                   | El texto está precedido por 4 bytes (UTF8) o 2 bytes (Mac) de longitud. |
| UTF8                               | "" $00 00 00 00                                                         |
| "Café" $00 00 00 05 43 61 66 C3 A9 |                                                                         |
| Mac                                | "" $00 00                                                               |
| "Café" $00 04 43 61 66 8E          |                                                                         |
| Text without length                | El texto está compuesto únicamente por sus caracteres.                  |
| UTF8                               | "" Sin datos                                                            |
| "Café" $43 61 66 C3 A9             |                                                                         |
| Mac                                | "" Sin datos                                                            |
| "Café" $43 61 66 8E                |                                                                         |
  
  
Si especifica el parámetro opcional \*, el valor de tipo Texto se añade al BLOB; el tamaño del BLOB se extiende en consecuencia. Utilizando el parámetro opcional \*, puede almacenar secuencialmente cualquier número de valores de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Entero largo](# "Entre -2 millardos y +2 millardos"), Real o [Texto](# "A character string that may contain from 0 to 2 GB of text") (ver otros comandos BLOB) en un BLOB, siempre y cuando haya memoria disponible. 

Si no especifica el parámetro opcional \* ni la variable del parámetro *offset*, el valor de tipo texto se almacena al comienzo del BLOB, reemplazando su contenido anterior; el tamaño del BLOB se ajusta en consecuencia.

Si pasa la variable en el parámetro *offset*, el valor de tipo Texto se escribe en el offset (a partir de cero) en el BLOB. Sin importar donde escriba el valor tipo Texto, el tamaño del BLOB aumenta de acuerdo a la ubicación pasada (más hasta el tamaño del texto, si es necesario). Los bytes redefinidos, diferentes de los que está escribiendo, se inicializan en cero.

Después de llamar el comando, la variable del parámetro *offset* se incrementa en el número de bytes que haya sido escrito. Por lo tanto, puede reutilizar la misma variable con otro comando de escritura de BLOB para escribir otro valor.

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ejemplo 

Después de la ejecución este código:

```4d
 SET BLOB SIZE(vxBlob;0)
 var vtValor : Text
 vtValor:="Café" // La longitud de vtValor es 4 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac C string) // El tamaño del BLOB se vuelve 5 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac Pascal string) // El tamaño del BLOB se vuelve 5 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac text with length) // El tamaño del BLOB se vuelve 6 bytes
 TEXT TO BLOB(vtValor;vxBlob;Mac text without length) // El tamaño del BLOB se vuelve 4 bytes
 TEXT TO BLOB(vtValor;vxBlob;UTF8 C string) // El tamaño del BLOB se vuelve 6 bytes
 TEXT TO BLOB(vtValor;vxBlob;UTF8 text with length) // El tamaño del BLOB se vuelve 9 bytes
 TEXT TO BLOB(vtValor;vxBlob;UTF8 text without length) // El tamaño del BLOB se vuelve 5 bytes
```

#### Ver también 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[CONVERT FROM TEXT](convert-from-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 554 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


