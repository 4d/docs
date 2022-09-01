---
id: blob
title: BLOB
---

- Un campo, variable o expresión BLOB (Binary Large OBjects) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente. Un BLOB puede estar vacío (longitud nula) o contener hasta 2147483647 bytes (2 GB).

> Por defecto, 4D define el tamaño máximo de los blob en 2GB, pero este límite de tamaño puede ser menor dependiendo de su sistema operativo y del espacio disponible.

- Un BLOB se carga en la memoria en su totalidad. Una variable BLOB se mantiene y existe sólo en la memoria. Un campo BLOB se carga en memoria desde el disco, como el resto del registro al que pertenece.
- Al igual que los otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos BLOB no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos `Old` y `Modified` no es significativo cuando se aplica a un campo BLOB.

## Paso de parámetros, punteros y resultados de funciones

Los BLOBs en 4D pueden pasarse como parámetros a los comandos 4D o a las rutinas de los plugins que esperan parámetros BLOB. Los BLOBS también pueden ser pasados como parámetros a un método de usuario o ser devueltos como resultado de una función.

Para pasar un BLOB a sus propios métodos, también puede definir un puntero al BLOB y pasar el puntero como parámetro.

**Ejemplos:**
```4d
  ` Declarar una variable de tipo BLOB
 C_BLOB(anyBlobVar)
  ` El BLOB se pasa como parámetro a un comando 4D
 SET BLOB SIZE(anyBlobVar;1024*1024)
  El BLOB se pasa como parámetro a una rutina externa
 $errCode:=Haga algo con este BLOB(anyBlobVar)
  ` El BLOB se pasa como parámetro a un método que devuelve un BLOB
 C_BLOB(recuperarBlob)
 recuperarBlob:=Rellenar_Blob(cualquierBlobVar)
  ` Se pasa un puntero al BLOB como parámetro a un método de usuario
 COMPUTE BLOB(->anyBlobVar)
```
**Nota para los desarrolladores de plugins:** un parámetro BLOB se declara como "&O" (la letra "O", no el dígito "0").

## Asignación

Se pueden asignar BLOBs entre sí.

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

Cada byte de un BLOB se puede direccionar individualmente utilizando los símbolos de corchetes {...}. Dentro de un BLOB, los bytes se numeran de 0 a N-1, donde N es el tamaño del BLOB. Ejemplo:
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
Como se pueden direccionar todos los bytes de un BLOB de forma individual, se puede almacenar lo que se quiera en un campo o variable BLOB.
