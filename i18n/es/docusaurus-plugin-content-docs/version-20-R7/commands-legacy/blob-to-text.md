---
id: blob-to-text
title: BLOB to text
slug: /commands/blob-to-text
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to text.Syntax-->**BLOB to text** ( *BLOB* ; *formatoTexto* {; *offset* {; *longitudTexto*}} )  : Text<!-- END REF-->
<!--REF #_command_.BLOB to text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB del cual obtener el texto |
| formatoTexto | Integer | &#8594;  | Formato y conjunto de caracteres de texto |
| offset | Variable |&#8596;  | Offset en el BLOB (expresado en bytes) |
| || | Nuevo offset después de la lectura |
| longitudTexto | Integer | &#8594;  | Número de caracteres a leer |
| Resultado | Text | &#8592; | Valor del texto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB to text.Summary-->El comando BLOB to text devuelve un valor de tipo Texto leído del BLOB *blob*.<!-- END REF-->

El parámetro *formatoTexto* fija el formato interno y el conjunto de caracteres del valor de tipo Texto a leer. En las bases de datos creadas a partir de la versión 11, 4D utiliza por defecto el conjunto de caracteres Unicode (UTF8) para la gestión de textos. Por compatibilidad, este comando permite "forzar" la utilización del conjunto de caracteres Mac Roman (conjunto de caracteres utilizado en las versiones anteriores de 4D). La elección del conjunto de caracteres se efectúa vía el parámetro *formatoTexto.* Para hacer eso, pase una de las siguientes constantes (del tema *BLOB*) en el parámetro *formatoTexto*:

| Constante                | Tipo         | Valor |
| ------------------------ | ------------ | ----- |
| Mac C string             | Entero largo | 0     |
| Mac Pascal string        | Entero largo | 1     |
| Mac text with length     | Entero largo | 2     |
| Mac text without length  | Entero largo | 3     |
| UTF8 C string            | Entero largo | 4     |
| UTF8 text with length    | Entero largo | 5     |
| UTF8 text without length | Entero largo | 6     |

**Notas:**

* Las constantes "UTF8" sólo pueden ser utilizadas cuando la aplicación se ejecuta en modo Unicode.
* La constante Mac Text with length no puede trabajar con textos de más de 32 KB.
* Si quiere trabajar con conjuntos de caracteres diferentes de UTF8, utilice el comando Convert to text.

Para mayor información sobre estas constantes y los formatos que representan, consulte la descripción del comando TEXT TO BLOB. 

**Atención:** el número de caracteres a leer se determina por el parámetro *formatoTexto*, EXCEPTO para el formato Text without length y UTF8 Text without length, para el cual usted DEBE especificar el número de caracteres a leer en el parámetro *longitudTexto*. Para los otros formatos, *longitudTexto* se ignora y usted puede omitirlo. 

Si especifica la variable del parámetro opcional *offset*, el valor del texto se lee en el offset (a partir de cero) del BLOB. Si no especifica la variable del parámetro opcional *offset*, se leen los primeros bytes del BLOB de acuerdo al valor pasado en *textFormato*. Note que debe pasar la variable del parámetro *offset* cuando esté leyendo texto sin longitud.

**Nota:** debe pasar un valor de offset entre *0* (cero) y el tamaño del BLOB menos el tamaño del texto a leer. Si no lo hace, el resultado de la función es impredecible.

Después de la ejecución del comando, la variable se incrementa en el número de bytes leídos. Por lo tanto, puede reutilizar la misma variable con otro comando de lectura de BLOBs para leer otro valor. 

#### Ver también 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[Convert to text](convert-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  