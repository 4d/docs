---
id: blob
title: BLOB
---

Un campo, variable o expresión BLOB (Binary Large OBject) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente. Un BLOB puede estar vacío (longitud nula) o puede contener hasta 2147483647 bytes (2 GB).

Un BLOB se carga en la memoria en su totalidad. Una variable BLOB se mantiene y existe sólo en la memoria. Un campo BLOB se carga en memoria desde el disco, como el resto del registro al que pertenece.

Al igual que los otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos BLOB no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos `Old` y `Modified` no es significativo cuando se aplica a un campo BLOB.

## Blob Types

4D supports two types of blobs:
* **4D.Blob**: Blob object that encapsulates a blob or part of it without altering the original blob (see [4D.Blob Class](../API/BlobClass.md))
* **C_BLOB**: Classical blob variable

We recommend using blob objects (4D.Blob) to manipulate blobs. Blob objects are optimized, shareable — when passed as method parameters, they are passed by reference — and usable in preemptive threads.

### Automatic conversion of blob type
4D automatically converts blob objects (4D.Blob) to classical blobs (C_BLOB) and vice versa. Por ejemplo:

```4d
C_BLOB($myBlob)
$o:=New object("blob";$myBlob)
$type:=Value type($o.blob)  //object
```

Some commands alter the original blob, and thus do not support the 4D.Blob type:

* [DELETE FROM BLOB](https://doc.4d.com/4dv19R/help/command/en/page560.html)
* [INSERT IN BLOB](https://doc.4d.com/4dv19R/help/command/en/page559.html)
* [INTEGER TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page548.html)
* [LONGINT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page550.html)
* [REAL TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page552.html)
* [SET BLOB SIZE](https://doc.4d.com/4dv19R/help/command/en/page606.html)
* [TEXT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page554.html)
* [VARIABLE TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page532.html)
* [LIST TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page556.html)

## Passing blobs as parameters

Blobs can be passed as parameters to 4D commands or plug-in routines that expect blob parameters. blobs can also be passed as parameters to user methods, or returned by functions.

### Passing a 4D.Blob

```4d
var $myBlob: 4D.Blob.new
$myText:= BLOB to text ( $myBlob ; UTF8 )
```

### Passing a C_BLOB

To modify a blob, you need to use a C_BLOB variable and pass it to a command. Por ejemplo:

```4d
C_BLOB($myBlob)
SET BLOB SIZE ($myBlob ; 16*1024)
```

### Passing a C_BLOB by reference using a pointer

To pass a C_BLOB to your own methods, you can also define a pointer to the C_BLOB and pass the pointer as parameter.

**Ejemplos:**
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The blob is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The blob is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The blob is passed as a parameter to a method that returns a blob
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the blob is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**Nota para los desarrolladores de plugins:** un parámetro BLOB se declara como "&O" (la letra "O", no el dígito "0").

## Asignación

You can assign blobs to each other.

**Ejemplo:**
```4d
  ` Declarar dos variables de tipo BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Fijar el tamaño del primer BLOB en 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Asignar el primer BLOB al segundo
 vBlobB:=vBlobA
```

Sin embargo, no se puede aplicar ningún operador a los BLOB.

## Direccionar el contenido de un BLOB

You can address each byte of a blob individually using the curly brackets symbols {...}. Dentro de un BLOB, los bytes se numeran de 0 a N-1, donde N es el tamaño del BLOB. Ejemplo:
```4d
  ` Declarar una variable de tipo BLOB
 C_BLOB(vBlob)
  ` Fijar el tamaño del BLOB en 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` El bucle siguiente inicializa los 256 bytes del BLOB en cero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Because you can address all the bytes of a blob individually, you can actually store whatever you want in a BLOB field or variable.
