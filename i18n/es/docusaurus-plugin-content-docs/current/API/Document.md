---
id: Document
title: Document Class
---

## Descripción

<!-- REF document.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.creationDate.Syntax -->

**.creationDate** : Date<!-- END REF -->

#### Descripción

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->The `.creationDate` property returns<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.creationTime.Desc -->
## .creationTime

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.creationTime.Syntax -->

**.creationTime** : Time<!-- END REF -->

#### Descripción

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.exists.Desc -->
## .exists

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.exists.Syntax -->

**.exists** : Boolean<!-- END REF -->

#### Descripción

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.extension.Syntax -->

**.extension** : Text<!-- END REF -->

#### Descripción

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. Una extensión siempre comienza por ".". La propiedad `.extension` devuelve <!-- REF #document.extension.Summary -->la extensión del nombre del archivo (si lo hay)<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.fullName.Syntax -->

**.fullName** : Text<!-- END REF -->

#### Descripción

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.hidden.Syntax -->

**.hidden** : Boolean<!-- END REF -->

#### Descripción

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isAlias.Syntax -->

**.isAlias** : Boolean<!-- END REF -->

#### Descripción

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isFile.Syntax -->

**.isFile** : Boolean<!-- END REF -->

#### Descripción

The `.isFile` property returns <!-- REF #document.isFile.Summary -->The `.copyTo()` function<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isFolder.Syntax -->

**.isFolder** : Boolean<!-- END REF -->

#### Descripción

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always true for a file<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.isWritable.Syntax -->

**.isWritable** : Boolean<!-- END REF -->

#### Descripción

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.
> La propiedad verifica la capacidad de la aplicación 4D a escribir en el disco (derechos de acceso), no se basa únicamente en el atributo *writable* del archivo.

Esta propiedad es **de sólo lectura**.

**Ejemplo**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```


<!-- END REF -->

<!-- REF document.modificationDate.Desc -->
## .modificationDate

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.modificationDate.Syntax -->

**.modificationDate** : Date<!-- END REF -->

#### Descripción

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->The `.modificationDate` property returns<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.modificationTime.Syntax -->

**.modificationTime** : Time<!-- END REF -->

##### Descripción

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->The `.modificationTime` property returns<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Descripción

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.original.Syntax -->

**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### Descripción

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. El elemento objetivo puede ser:

* un objeto File
* un objeto de la carpeta

Para los archivos sin alias, la propiedad devuelve el mismo objeto File que el archivo.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.parent.Syntax -->

**.parent** : 4D.Folder<!-- END REF -->

#### Descripción

The `.parent` property returns <!-- REF #document.parent.Summary -->The `.parent` property returns<!-- END REF -->. .

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Descripción

The `.path` property returns <!-- REF #document.path.Summary -->The `.path` property returns<!-- END REF -->. .

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.platformPath.Syntax -->

**.platformPath** : Text<!-- END REF -->

#### Descripción

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->The `.platformPath` property returns<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.size.Desc -->
## .size

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.size.Syntax -->

**.size** : Real<!-- END REF -->

#### Descripción

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. Si el archivo no existe en el disco, el tamaño es 0.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.copyTo().Syntax -->

**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->


<!-- REF #document.copyTo().Params -->
| Parámetros        | Type      |    | Descripción                                            |
| ----------------- | --------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D.Folder | -> | Carpeta de destino                                     |
| newName           | Text      | -> | Nombre para la copia                                   |
| overwrite         | Integer   | -> | `fk overwrite` para sustituir los elementos existentes |
| Result            | 4D.File   | <- | Archivo copiado|<!-- END REF -->             |

#### Descripción

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->The `.isFolder` property returns <!-- END REF -->.

La *destinationFolder* debe existir en el disco, de lo contrario se genera un error.

Por defecto, el archivo se copia con el nombre del archivo original. Si desea cambiar el nombre de la copia, pase el nuevo nombre en el parámetro *newName*. El nuevo nombre debe cumplir con las reglas de nomenclatura (por ejemplo, no debe contener caracteres como ":", "/", etc.), de lo contrario se devuelve un error.

Si ya existe un archivo con el mismo nombre en la *destinationFolder*, por defecto 4D genera un error. Puede pasar la constante `fk overwrite` en el parámetro *overwrite* para ignorar y sobrescribir el archivo existente

| Constante      | Value | Comentario                                        |
| -------------- | ----- | ------------------------------------------------- |
| `fk overwrite` | 4     | Sobrescribir los elementos existentes, si los hay |

**Valor devuelto**

El objeto `File` copiado.

#### Ejemplo

Desea copiar un *archivo* imagen de la carpeta de documentos del usuario a la carpeta de la aplicación:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```


<!-- END REF -->

<!-- REF document.getContent().Desc -->
## .getContent()

<details><summary>Histórico</summary>

| Versión | Modificaciones   |
| ------- | ---------------- |
| v19 R2  | Devuelve 4D.Blob |
| v17 R5  | Añadidos         |
</details>

<!-- REF #document.getContent().Syntax -->

**.getContent( )** : 4D.Blob<!-- END REF -->


<!-- REF #document.getContent().Params -->
| Parámetros | Type    |    | Descripción                                      |
| ---------- | ------- | -- | ------------------------------------------------ |
| Result     | 4D.Blob | <- | Contenido del archivo|<!-- END REF --> |

#### Descripción

The `.getContent()` function  <!-- REF #document.getContent().Summary -->returns a `4D.Blob` object containing the entire content of a file<!-- END REF -->. .

**Valor devuelto**

Un objeto `4D.Blob`.

#### Ejemplo

Para guardar el contenido de un documento en un campo `BLOB`:

```4d
 var $vPath : Text
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //Si se ha seleccionado un documento
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```


<!-- END REF -->

<!-- REF document.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.getIcon().Syntax -->

**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->


<!-- REF #document.getIcon().Params -->
| Parámetros | Type    |    | Descripción                                       |
| ---------- | ------- | -- | ------------------------------------------------- |
| size       | Integer | -> | Longitud del lado de la imagen devuelta (píxeles) |
| Result     | Picture | <- | Icono|<!-- END REF -->                  |

#### Descripción

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

El parámetro opcional *size* especifica las dimensiones en píxeles del icono devuelto. Este valor representa en realidad la longitud del lado del cuadrado que contiene el icono. Los iconos suelen definirse en 32x32 píxeles ("iconos grandes") o 16x16 píxeles ("iconos pequeños"). Si pasa 0 u omite este parámetro, se devuelve la versión "icono grande".

Si el archivo no existe en el disco, se devuelve un icono vacío por defecto.

**Valor devuelto**

Icono de archivo [picture](../Concepts/picture.html).

<!-- END REF -->

<!-- REF document.getText().Desc -->
## .getText()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #document.getText().Syntax -->

**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->


<!-- REF #document.getText().Params -->
| Parámetros  | Type    |    | Descripción                                    |
| ----------- | ------- | -- | ---------------------------------------------- |
| charSetName | Text    | -> | Nombre del juego de caracteres                 |
| charSetNum  | Integer | -> | Número del conjunto de caracteres              |
| breakMode   | Integer | -> | Modo de tratamiento de los saltos de línea     |
| Result      | Text    | <- | Texto del documento|<!-- END REF --> |

#### Descripción

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

Opcionalmente, puede designar el conjunto de caracteres que se utilizará para leer el contenido. Puede pasar:

* en *charSetName*, una cadena que contiene el nombre del conjunto estándar (por ejemplo "ISO-8859-1" o "UTF-8"),
* o en *charSetNum*, el ID MIBEnum (número) del nombre del conjunto estándar.

> Para conocer la lista de los conjuntos de caracteres que soporta 4D, consulte la descripción del comando `CONVERT FROM TEXT`.

Si el documento contiene una marca de orden de bytes (BOM), 4D utiliza el conjunto de caracteres que ha establecido en lugar del especificado en *charSetName* o *charSetNum* (este parámetro se ignora entonces). Si el documento no contiene una BOM y si *charSetName* o *charSetNum* se omite, por defecto 4D utiliza el conjunto de caracteres "UTF-8".

En *breakMode*, se puede pasar un número que indica el procesamiento a aplicar a los caracteres de fin de línea en el documento. Las siguientes constantes del tema "Documentos del sistema" están disponibles:

| Constante                     | Value | Comentario                                                                                                                                                                  |
| ----------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Sin procesar                                                                                                                                                                |
| `Document with native format` | 1     | (Por defecto) Los saltos de línea se convierten al formato nativo del sistema operativo: CR (retorno de carro) en OS X, CRLF (retorno de carro + salto de línea) en Windows |
| `Document with CRLF`          | 2     | Los saltos de línea se convierten al formato de Windows: CRLF (retorno de carro + salto de línea)                                                                           |
| `Document with CR`            | 3     | Los saltos de línea se convierten al formato OS X: CR (retorno de carro)                                                                                                    |
| `Document with LF`            | 4     | Los saltos de línea se convierten al formato Unix: LF (salto de línea)                                                                                                      |

Por defecto, cuando se omite el parámetro *breakMode*, los saltos de línea se procesan en modo nativo (1).

**Valor devuelto**

Texto del archivo.

#### Ejemplo

Dado el siguiente documento de texto (los campos están separados por tabulaciones):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

Cuando se ejecuta este código:

```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 por defecto
 $txt:=$myFile.getText()
```

... obtiene para `$txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

con `\t` (tab) como separador y `\r\n` (CRLF) como delimitador de línea.

Aquí hay otro ejemplo con el mismo archivo, pero con un delimitador de línea diferente:

```4d
 $txt:=$myFile.getText("UTF-8", Document with LF)
```

En este caso, el contenido de `$txt` es el siguiente:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

Esta vez se utiliza `\n` (LF) como delimitador de línea.

<!-- END REF -->
