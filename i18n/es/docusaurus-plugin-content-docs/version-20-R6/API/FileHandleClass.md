---
id: FileHandleClass
title: FileHandle
---

La clase `FileHandle` tiene funciones que permiten leer secuencialmente o añadir contenido a un objeto [`File`](FileClass) abierto. Un manejador de archivo puede acceder a cualquier parte de un documento.

Los objetos de tipo File handle se crean con la función [`file.open()`](FileClass#open).

> Para leer o escribir un documento completo de una vez, puede considerar el uso de las funciones [file.getText()](FileClass.md#gettext) y [file.setText()](FileClass.md#settext).

Gracias al *refcounting* estándar de objetos de 4D, un manejador de archivo se borra automáticamente cuando deja de estar referenciado y, por tanto, el objeto [`File`](FileClass) solicitado se cierra automáticamente. Por lo tanto, con los gestores de archivos no hay que preocuparse por el cierre de los documentos.

:::note

Los recursos de los objetos, como los documentos, se liberan cuando ya no existen referencias en la memoria, lo que ocurre, por ejemplo, al final de la ejecución del método para las variables locales. Si desea "forzar" la liberación de los recursos del objeto en cualquier momento, puede [anular sus referencias](../Concepts/dt_object.md#resources).

:::

### Ejemplo

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt")

//Escribiendo línea a línea desde el principio
$fhandle:=$f.open("write")
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Escribir línea a línea desde el final
$fhandle:=$f.open("append")
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Lectura utilizando un carácter de parada y un parámetro objeto
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Lectura línea a línea
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

```

### Objeto FileHandle

Los objetos manejadores de archivos no pueden ser compartidos.

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)<br/><!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)<br/><!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)<br/><!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<br/><!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)<br/><!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)<br/><!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)<br/><!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)<br/><!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)<br/><!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)<br/><!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)<br/><!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)<br/><!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)<br/><!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)<br/><!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)<br/><!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### Descripción

La propiedad `.breakModeRead` devuelve <!-- REF #FileHandleClass.breakModeRead.Summary -->el modo de procesamiento de los saltos de línea utilizado al leer el archivo<!-- END REF -->.

La propiedad `.breakModeRead` se puede definir en la creación del handle con la función [`file.open()`](FileClass.md#open) (ver [la función `.open()`](FileClass.md#open) para más información). Por defecto es "native".

> La propiedad `.breakModeRead` siempre contiene un valor de texto, incluso si la opción `.open()` fue definida utilizando un número (constante).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.breakModeWrite.Desc -->

## .breakModeWrite

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->

#### Descripción

La propiedad `.breakModeWrite` devuelve <!-- REF #FileHandleClass.breakModeWrite.Summary -->el modo de procesamiento de los saltos de línea utilizado al escribir en el archivo<!-- END REF -->.

La propiedad `.breakModeWrite` se puede definir en la creación del handle con la función [`file.open()`](FileClass.md#open) (ver [la función `.open()`](FileClass.md#open) para más información). Por defecto es "native".

> La propiedad `.breakModeWrite` siempre contiene un valor texto, incluso si la opción `.open()` fue definida utilizando un número (constante).

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.charset.Desc -->

## .charset

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->

#### Descripción

La propiedad `.charset` devuelve <!-- REF #FileHandleClass.charset.Summary -->el conjunto de caracteres utilizado al leer o escribir en el archivo<!-- END REF -->.

El conjunto de caracteres puede definirse en la creación del manejador con la función [`file.open()`](FileClass#open). Por defecto es "UTF-8".

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.eof.Desc -->

## .eof

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.eof` devuelve <!-- REF #FileHandleClass.eof.Summary -->True si el `offset` ha llegado al final del archivo, y False en caso contrario<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### Descripción

La propiedad `.file` devuelve <!-- REF #FileHandleClass.file.Summary -->el objeto [4D.File](FileClass.md) sobre el que se ha creado el manejador<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.getSize().Desc -->

## .getSize()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->

| Parámetros | Tipo |                             | Descripción                   |
| ---------- | ---- | --------------------------- | ----------------------------- |
| Result     | Real | <- | Tamaño del documento en bytes |

<!-- END REF -->

#### Descripción

La función `.getSize()` <!-- REF #FileHandleClass.getSize().Summary -->devuelve el tamaño actual del documento, expresado en bytes<!-- END REF -->.

> Esta función devuelve el mismo valor que la propiedad ([.size](FileClass#size)) de la clase `File`.

#### Ver también

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.mode.Desc -->

## .mode

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->

#### Descripción

La propiedad `.mode` devuelve <!-- REF #FileHandleClass.mode.Summary -->el modo en que se creó el manejador de fichero: "read", "write", o "append"<!-- END REF -->.

El modo puede definirse en la creación del manejador con la función [`file.open()`](FileClass#open). Por defecto es "leer".

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF FileHandleClass.offset.Desc -->

## .offset

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->

#### Descripción

La propiedad `.offset` devuelve <!-- REF #FileHandleClass.offset.Summary -->el desplazamiento actual del flujo de datos (posición dentro del documento)<!-- END REF -->. El valor del desplazamiento se actualiza automáticamente después de las operaciones de lectura y escritura.

Definiendo el `.offset` cambiará su valor actual en el momento de la siguiente operación de lectura o escritura.

- Si el valor pasado es negativo, el `.offset` se define al inicio del archivo (cero).
- Si el valor pasado es mayor que el tamaño del archivo, el `.offset` se define al final del archivo (tamaño del archivo).

Esta propiedad es **lectura-escritura**.

:::caution

Cuando se crea un file handle, el valor `.offset` es un número de bytes. Sin embargo, la unidad de medida del offset difiere según la función de lectura: con [`readBlob()`](#readblob), `.offset` es un número de bytes, mientras que con [`readText()`](#readtext)/[`readLine()`](#readline) es un número de caracteres. Según el conjunto de caracteres del archivo, un caracter corresponde a uno o varios bytes. Por lo tanto, si comienza a leer con `readBlob()` y luego llama a `readText()`, la lectura de texto comenzará en una posición inconsistente. Por lo tanto, es esencial que establezca usted mismo la propiedad `.offset` si pasa de leer/escribir blob a leer/escribir texto en el mismo filehandle. Por ejemplo:

```4d
  // Abrir un fichero de texto europeo con codificación utf-16 (dos bytes por caracter)
  // Queremos leer los 10 primeros caracteres como bytes, y luego el resto como texto.
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // leer los 20 primeros bytes (es decir, 10 caracteres)
$b:=$fh.readBlob(20) // $fh.offset=20
  // luego lee todo el texto saltando los 10 primeros caracteres que acabamos de leer en el blob anterior
  // como ahora estamos leyendo texto en lugar de bytes, el significado de 'offset' no es el mismo.
  // Necesitamos traducirlo de bytes a caracteres.
$fh.offset:=10 // pedimos saltar 10 caracteres utf-16 (20 bytes)
$s:=$fh.readText()
```

:::

<!-- END REF -->

<!-- REF FileHandleClass.readBlob().Desc -->

## .readBlob()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : 4D.Blob <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| Parámetros | Tipo                                 |                             | Descripción              |
| ---------- | ------------------------------------ | --------------------------- | ------------------------ |
| *bytes*    | Real                                 | ->                          | Número de bytes a leer   |
| Result     | [4D.Blob](BlobClass) | <- | Bytes leídos del archivo |

<!-- END REF -->

#### Descripción

La función `.readBlob()` <!-- REF #FileHandleClass.readBlob().Summary -->devuelve un blob de un tamaño de *bytes* del archivo, empezando por la posición actual <!-- END REF -->.

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza después del último byte leído.

#### Ver también

[.writeBlob()](#writeblob)

<!-- END REF -->

<!-- REF FileHandleClass.readLine().Desc -->

## .readLine()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->

| Parámetros | Tipo |                             | Descripción    |
| ---------- | ---- | --------------------------- | -------------- |
| Result     | Text | <- | Línea de texto |

<!-- END REF -->

#### Descripción

La función `.readLine()` <!-- REF #FileHandleClass.readLine().Summary -->devuelve una línea de texto desde la posición actual hasta que se encuentra un delimitador de fin de línea o se alcanza el final del documento<!-- END REF -->.

Cuando se ejecuta esta función, se actualiza la posición actual ([`.offset`](#offset)).

:::caution Atención

Esta función asume que la propiedad [`.offset`](#offset) es un número de caracteres, no un número de bytes. Para más información, consulte la [descripción de.offset](#offset).

:::

> Cuando esta función se ejecuta por primera vez en un manejador de archivo, todo el contenido del documento se carga en un buffer.

#### Ver también

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

<!-- REF FileHandleClass.readText().Desc -->

## .readText()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->

| Parámetros | Tipo |                             | Descripción                                              |
| ---------- | ---- | --------------------------- | -------------------------------------------------------- |
| *stopChar* | Text | ->                          | Caracter(es) en los que dejar de leer |
| Result     | Text | <- | Texto del archivo                                        |

<!-- END REF -->

#### Descripción

La función `.readText()` <!-- REF #FileHandleClass.readText().Summary -->devuelve el texto del archivo, comenzando desde la posición actual hasta que se encuentre la primera cadena *stopChar* (si se ha pasado) o se llegue al final del archivo<!-- END REF -->.

La cadena de caracteres *stopChar* no se incluye en el texto devuelto. Si se omite el parámetro *stopChar*, se devuelve todo el texto del documento.

Cuando se ejecuta esta función, ([.offset](#offset)) se coloca justo después de la cadena *stopChar*.

:::caution Atención

Esta función asume que la propiedad [`.offset`](#offset) es un número de caracteres, no un número de bytes. Para más información, consulte la [descripción de.offset](#offset).

:::

Si se pasa el parámetro *stopChar* y no se encuentra, `.readText()` devuelve una cadena vacía y el [.offset](#offset) se deja intacto.

> Cuando esta función se ejecuta por primera vez en un manejador de archivo, todo el contenido del documento se carga en un buffer.

#### Ver también

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->

| Parámetros | Tipo |    | Descripción                         |
| ---------- | ---- | -- | ----------------------------------- |
| size       | Real | -> | Nuevo tamaño del documento en bytes |

<!-- END REF -->

#### Descripción

La función `.setSize()` <!-- REF #FileHandleClass.setSize().Summary -->define un nuevo tamaño de *size* en bytes para el documento<!-- END REF -->.

Si el valor de *size* es menor que el tamaño actual del documento, el contenido del documento se trunca desde el principio para obtener el nuevo *size*.

#### Ver también

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.writeBlob().Desc -->

## .writeBlob()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->

| Parámetros | Tipo                                 |    | Descripción                   |
| ---------- | ------------------------------------ | -- | ----------------------------- |
| *blob*     | [4D.Blob](BlobClass) | -> | Blob a escribir en el archivo |

<!-- END REF -->

#### Descripción

La función `.writeBlob()` <!-- REF #FileHandleClass.writeBlob().Summary -->escribe *blob* en el archivo, comenzando desde la posición actual <!-- END REF -->.

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza después del último byte escrito.

#### Ver también

[.readBlob()](#readblob)

<!-- END REF -->

<!-- REF FileHandleClass.writeLine().Desc -->

## .writeLine()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->

| Parámetros   | Tipo |    | Descripción      |
| ------------ | ---- | -- | ---------------- |
| *lineOfText* | Text | -> | Texto a escribir |

<!-- END REF -->

#### Descripción

La función `.writeLine()` <!-- REF #FileHandleClass.writeLine().Summary -->escribe contenido *lineOfText* en la posición actual e inserta un delimitador de fin de línea<!-- END REF --> (a diferencia de la función [.writeText()](#writetext)). Por defecto, se utiliza un delimitador nativo de fin de línea, pero puede definir otro delimitador cuando [abra el manejador el file handle](FileClass.md#open) definiendo la propiedad [`.breakModeWrite`](#breakmodewrite).

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza después del delimitador de fin de línea.

#### Ver también

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.writeText().Desc -->

## .writeText()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->

| Parámetros    | Tipo |    | Descripción      |
| ------------- | ---- | -- | ---------------- |
| *textToWrite* | Text | -> | Texto a escribir |

<!-- END REF -->

#### Descripción

La función `.writeText()` <!-- REF #FileHandleClass.writeText().Summary -->escribe el contenido de *textToWrite* en la posición actual y no inserta un delimitador de fin de línea<!-- END REF --> (a diferencia de la función [.writeLine()](#writeline)). Por defecto, se utiliza el delimitador nativo, pero puede definir otro delimitador cuando [abra el file handle](FileClass.md#open) definiendo la propiedad [`.breakModeWrite`](#breakmodewrite).

Cuando se ejecuta esta función, la posición actual ([.offset](#offset)) se actualiza después del siguiente delimitador de fin de línea.

#### Ver también

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
