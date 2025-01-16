---
id: blob
title: BLOB
---

Un campo, variable o expresión BLOB (Binary Large OBject) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente.

Un blob se carga en la memoria en su totalidad. Una variable blob se mantiene y existe sólo en la memoria. Un campo blob se carga en memoria desde el disco, como el resto del registro al que pertenece.

Al igual que otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos blob no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos `Old` y `Modified` no es significativo cuando se aplica a un campo blob.

## Tipos Blob

Utilizando el lenguaje 4D, hay dos maneras de manipular un blob:

- **como un valor escalar**: un blob puede ser almacenado en una variable o un campo Blob y puede ser modificado.
- **como un objeto (`4D.Blob`)**: un `4D.Blob` es un objeto blob. Puede encapsular un blob o una parte de él en un `4D.Blob` sin alterar el bloque original. Este método se llama [boxing](https://en.wikipedia.org/wiki/Object_type_\(object-oriented_programming\)#Boxing). Para más información sobre cómo instanciar un `4D.Blob`, vea [Blob Class](../API/BlobClass.md).

Cada tipo de blob tiene sus ventajas. Utilice la siguiente tabla para determinar cuál se ajusta a sus necesidades:

|                                      | Blob | 4D.Blob |
| ------------------------------------ | :--: | :---------------------: |
| Alterable                            |  Sí  |            No           |
| Compartible en objetos y colecciones |  No  |            Sí           |
| Pasado por referencia\*              |  No  |            Sí           |
| Rendimiento al acceder a los bytes   |   +  |            -            |
| Tamaño máximo                        |  2GB |         Memoria         |

Tenga en cuenta que a diferencia de los objetos blob, que son pasados por referencia, los blobs escalares se duplican en la memoria cuando se pasan a los métodos. Puede pasar blobs y objetos blob (`4D.Blob`) a los métodos.

> Por defecto, 4D define el tamaño máximo de los blobs escalares en 2GB, pero este límite de tamaño puede ser menor dependiendo de su sistema operativo y del espacio disponible.

No se pueden utilizar operadores en los blobs.

## Verificar si una variable contiene un blob escalar o un `4D.Blob`

Utilice el comando [Value type](https://doc.4d.com/4dv20/help/command/en/page1509.html) para determinar si un valor es de tipo Blob u Objeto.
Para verificar que un objeto es un objeto blob (`4D.Blob`), utilice [instancia OB de](https://doc.4d.com/4dv20/help/command/en/page1731.html):

```4d
var $myBlob: Blob
var $myBlobObject: 4D.Blob
$myBlobObject:=4D.Blob.new()

$type:= Value type($myblobObject) // 38 (object)
$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True
```

## Pasar blobs como parámetros

Los bloques escalares y los objetos blob pueden pasarse como parámetros a los comandos 4D o a las rutinas de plug-in que esperan parámetros blob.

### Pasar blobs y objetos blob a los comandos 4D

Puede pasar un blob escalar o un `4D.Blob` a todo comando 4D que tome un blob como parámetro:

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
```

Algunos comandos 4D modifican el blob, y por lo tanto no soportan el tipo `4D.Blob`:

- [DELETE FROM BLOB](https://doc.4d.com/4dv19/help/command/en/page560.html)
- [INSERT IN BLOB](https://doc.4d.com/4dv19/help/command/en/page559.html)
- [INTEGER TO BLOB](https://doc.4d.com/4dv19/help/command/en/page548.html)
- [LONGINT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page550.html)
- [REAL TO BLOB](https://doc.4d.com/4dv19/help/command/en/page552.html)
- [SET BLOB SIZE](https://doc.4d.com/4dv19/help/command/en/page606.html)
- [TEXT TO BLOB](https://doc.4d.com/4dv19/help/command/en/page554.html)
- [VARIABLE TO BLOB](https://doc.4d.com/4dv19/help/command/en/page532.html)
- [LIST TO BLOB](https://doc.4d.com/4dv19/help/command/en/page556.html)
- [SOAP DECLARATION](https://doc.4d.com/4dv19/help/command/en/page782.html)
- [WEB SERVICE SET PARAMETER](https://doc.4d.com/4dv19/help/command/en/page777.html)

### Pasar blobs y objetos blob a los métodos

Al trabajar con métodos, usar objetos blob (`4D.Blob`) es más eficiente, ya que son pasados por referencia. Tenga en cuenta que a diferencia de los objetos blob, que son pasados por referencia, los blobs escalares se duplican en la memoria cuando se pasan a los métodos.

### Pasar un blob escalar por referencia usando un puntero

Pasar un blob escalar a sus propios métodos sin duplicarlo en memoria, defina un puntero a la variable que lo almacena y pase el puntero como parámetro.

**Ejemplos:**

```4d
// Declarar una variable de tipo Blob
var $myBlobVar: Blob
// Pasar el blob como parámetro a un comando 4D
 SET BLOB SIZE($myBlobVar; 024*1024)
```

```4d
// Pasar el blob como parámetro a una rutina externa
 $errCode:=Hacer algo con este blob($myBlobVar)
```

```4d
// Pasar el blob como un parámetro a un método que devuelve un blob
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
```

```4d
// Pasa un puntero al blob como parámetro a su propio método,
COMPUTE BLOB(->$myBlobVar)
```

**Nota para los desarrolladores de plugins:** un parámetro BLOB se declara como "&O" (la letra "O", no el dígito "0").

## Asignar una variable Blob a otra

Puede asignar una variable Blob a otra:

**Ejemplo:**

```4d
// Declarar dos variables de tipo Blob
 var $vBlobA; $vBlobB : Blob
// Establecer el tamaño del primer blob en 10K
 SET BLOB SIZE($vBlobA; 0*1024)
// Asignar el primer blob al segundo
 $vBlobB:=$vBlobA
```

## Conversión automática del tipo blob

4D convierte automáticamente los blobs escalares a objetos blob y viceversa, cuando se les asigna uno al otro. Por ejemplo:

```4d
// Crear una variable de tipo Blob y una variable objeto
var $myBlob: Blob
var $myObject : Objeto

// Asignar ese blob a una propiedad de $myObject llamada "blob"
$myObject:=New object("blob"; $myBlob)

// El blob almacenado en $myBlob se convierte automáticamente en un 4D.Blob
$type:= OB Instance of($myObject.blob; 4D.Blob) //True

// Conversión de un 4D.Blob en Blob
$myBlob:= $myObject.blob
$type:= Value type($myBlob) // Blob
```

> Al convertir un `4D.Blob` a un blob escalar, si el tamaño del `4D.Blob` excede el tamaño máximo para los blobs escalares, el blob escalar resultante está vacío.
> Por ejemplo, cuando el tamaño máximo para los blobs escalares es 2GB, si convierte un `4D.Blob` de 2,5GB a un blob, obtiene un blob vacío.

## Modificación de un blob escalar

A diferencia de los objetos blob, se pueden modificar los blobs escalares. Por ejemplo:

```4d
var $myBlob : Blob
SET BLOB SIZE ($myBlob ; 16*1024)
```

## Acceder individualmente a los bytes de un blob

#### Acceder a los bytes de un blob escalar

Puede acceder a los bytes individuales de un blob escalar utilizando las llaves `{}`. Dentro de un blob, los bytes se numeran de 0 a N-1, donde N es el tamaño del BLOB:

```4d
  // Declarar una variable de tipo Blob
 var $vBlob : Blob
  // Establecer el tamaño del blob en 256 bytes
 SET BLOB SIZE($vBlob; 56)
  // El siguiente código hace un bucle a través del blob para inicializar cada byte en cero
 For(vByte; ;Tamaño BLOB ($vBlob)-1)
    $vBlob{vByte}:=0
 Fin por
```

Como puede dirigir todos los bytes de un blob individualmente, puede almacenar lo que desee en una variable o un campo Blob.

#### Acceder a los bytes de un `4D.Blob`

Utilice los corchetes `[]` para acceder directamente a un byte específico en un `4D.Blob`

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

Dado que un `4D.Blob` no puede ser modificado, puede leer los bytes de un `4D.Blob` utilizando esta sintaxis, pero no modificarlos.
