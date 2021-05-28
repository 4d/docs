---
id: blob
title: BLOB
---

Un campo, variable o expresión BLOB (Binary Large OBjects) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente. Un BLOB puede estar vacío (longitud nula) o puede contener hasta 2147483647 bytes (2 GB).

Un BLOB se carga en la memoria en su totalidad. Una variable BLOB se mantiene y existe sólo en la memoria. Un campo BLOB se carga en memoria desde el disco, como el resto del registro al que pertenece.

Al igual que los otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos BLOB no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos `Old` y `Modified` no es significativo cuando se aplica a un campo BLOB.

## Paso de parámetros, punteros y resultados de funciones

Los BLOBs en 4D pueden pasarse como parámetros a los comandos 4D o a las rutinas de los plugins que esperan parámetros BLOB. Los BLOBS también pueden ser pasados como parámetros a un método de usuario o ser devueltos como resultado de una función.

Para pasar un BLOB a sus propios métodos, también puede definir un puntero al BLOB y pasar el puntero como parámetro.

**Examples:**
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The BLOB is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The BLOB is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The BLOB is passed as a parameter to a method that returns a BLOB
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the BLOB is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**Nota para los desarrolladores de plugins:** un parámetro BLOB se declara como "&O" (la letra "O", no el dígito "0").

## Assignment operator

Se pueden asignar BLOBs entre sí.

**Ejemplo:**
```4d
  ` Declare two variables of type BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Set the size of the first BLOB to 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Assign the first BLOB to the second one
 vBlobB:=vBlobA
```

Sin embargo, no se puede aplicar ningún operador a los BLOB.

## Addressing BLOB contents

Cada byte de un BLOB se puede direccionar individualmente utilizando los símbolos de corchetes {...}. Dentro de un BLOB, los bytes se numeran de 0 a N-1, donde N es el tamaño del BLOB. Ejemplo:
```4d
  ` Declare a variable of type BLOB
 C_BLOB(vBlob)
  ` Set the size of the BLOB to 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` The loop below initializes the 256 bytes of the BLOB to zero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Como se pueden direccionar todos los bytes de un BLOB de forma individual, se puede almacenar lo que se quiera en un campo o variable BLOB.
