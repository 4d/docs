---
id: variable-to-blob
title: VARIABLE TO BLOB
slug: /commands/variable-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO BLOB.Syntax-->**VARIABLE TO BLOB** ( *variable* ; *BLOB* {; offset | *} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable a guardar en el BLOB |
| Blob | Blob | &#8594;  | BLOB a recibir la variable |
| offset &#124; * | Variable, Operador | &#8596; | Offset de la variable (expresado en bytes) en el BLOB o * para añadir el valor |
||| | Nuevo offset después de escritura si se omite * |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VARIABLE TO BLOB.Summary-->El comando VARIABLE TO BLOB almacena la variable *variable* en el BLOB *blob*.<!-- END REF-->

Si especifica el parámetro opcional \*, la variable se añade al BLOB y el tamaño del BLOB se extiende en consecuencia. Utilizando el parámetro opcional \*, usted puede almacenar secuencialmente todo número de variables o listas (ver otros comandos BLOB) en un BLOB, el único limite es la memoria disponible. 

Si no especifica el parámetro opcional \* ni la variable en el parámetro *offset*, la variable se almacena al comienzo del BLOB, sobre su contenido anterior; el tamaño del BLOB se redimensiona en consecuencia.

Si pasa la variable *offset* en parámetro, la variable se escribe en BLOB al offset (a partir de cero). Sin importar donde escribe la variable, el tamaño del BLOB aumenta de acuerdo a la ubicación pasada (más el tamaño de la variable, si es necesario). Los nuevos bytes redefinidos, diferentes de los bytes en los que está escribiendo, se inicializan en cero.

Después de llamar el comando, la variable del parámetro *offset* se incrementa en el número de bytes escritos. Por lo tanto, usted puede reutilizar la misma variable con otro comando de escritura de BLOB para poner otra variable o lista.

VARIABLE TO BLOB acepta todo tipo de variables (incluyendo otros BLOBs), excepto los siguientes:

* Puntero
* Array de punteros

Note que:

* si guarda una variable de tipo Entero largo que es una referencia a una lista jerárquica (ListRef), VARIABLE TO BLOB guardará la variable Entero largo, no la lista. Para guardar y recuperar las listas jerárquicas en un BLOB, utilice los comandos [LIST TO BLOB](list-to-blob.md) y [BLOB to list](blob-to-list.md).
* si pasa un objeto o una colección en el parámetro *variable*, el comando ubica una copia (y no una referencia) en el BLOB. Si el objeto o colección contiene punteros, los valores no referenciados se guardan en el BLOB, no los punteros mismos.

Sin embargo, si almacena una variable de tipo [Entero largo](# "Entre -2 millardos y +2 millardos") que es una referencia a una lista jerárquica ([ListRef](# "Una referencia a una lista jerárquica")), VARIABLE TO BLOB almacenará la variable [Entero largo](# "Entre -2 millardos y +2 millardos"), no la lista. Para guardar y recuperar las listas jerárquicas en un BLOB, utilice los comandos [LIST TO BLOB](list-to-blob.md) y [BLOB to list](blob-to-list.md).

**Advertencia:** Si utiliza un BLOB para almacenar las variables, debe utilizar posteriormente el comando [BLOB TO VARIABLE](blob-to-variable.md) para recuperar el contenido del BLOB, porque las variables son almacenadas en BLOBs utilizando un formato interno de 4D.

Después del llamar al comando, si la variable ha sido almacenada con éxito, la variable OK toma el valor 1\. Si la operación no se pudo realizar, la variable OK toma el valor 0; por ejemplo, por falta de memoria.

**Nota sobre la independencia de la plataforma:** VARIABLE TO BLOB y [BLOB TO VARIABLE](blob-to-variable.md) utilizan un formato interno de 4D para administrar las variables almacenadas en los BLOBs. La ventaja es que usted no tiene que preocuparse por la conversión de bytes (byte swapping) entre plataformas mientras utiliza estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando cualquiera de estos dos comandos puede ser reutilizado en Macintosh y viceversa.

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Variables y conjuntos del sistema 

La variable OK toma el valor 1 si la variable ha sido almacenada correctamente, de lo contrario toma el valor 0.

#### Ejemplo 1 

Los dos métodos de proyecto siguientes permiten almacenar y recuperar rápidamente las variables en un BLOB:

```4d
  // Método de proyecto GUARDAR VARIABLES EN BLOB
  // GUARDAR VARIABLES EN BLOB ( Puntero{ ; Puntero... { ; Puntero} } )
  // GUARDAR VARIABLES EN BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam : Integer
 
 SET BLOB SIZE($1->;0)
 For($vlParam;2;Count parameters)
    VARIABLE TO BLOB(${$vlParam}->;$1->;*)
 End for
 
 
  // Método de proyecto RECUPERAR VARIABLES DEL BLOB
  // RECUPERAR VARIABLES DEL BLOB ( Puntero{ ; Puntero... { ; Puntero} } )
  // RECUPERAR VARIABLES DEL BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam;$vlOffset : Integer
 
 $vlOffset:=0
 For($vlParam;2;Count parameters)
    BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)
 End for
```

Después de escribir estos métodos en su aplicación, puede escribir:

```4d
 GUARDAR VARIABLES EN BLOB(->vxBLOB;->vgImagen;->comoUnArray;->alOtroArray)
  // ...
 RECUPERAR VARIABLES DEL BLOB(->vxBLOB;->vgImagen;->comoUnArray;->alOtroArray)
```

#### Ejemplo 2 

Los siguientes métodos de proyecto le permiten almacenar y recuperar rápidamente los arrays en los documentos en disco:  
  
```4d
  // Método de proyecto SAVE ARRAY
  // SAVE ARRAY (Text ; Pointer)
  // SAVE ARRAY (Document ; -> Array)
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 VARIABLE TO BLOB($2->;$vxArrayData) // Almacenar el array en el BLOB
 COMPRESS BLOB($vxArrayData) // Comprimir el BLOB
 BLOB TO DOCUMENT($1;$vxArrayData) // Guardar el BLOB en disco
```
  
  
```4d
  // Método proyecto LOAD ARRAY
  // LOAD ARRAY (Text ; Pointer)
  // LOAD ARRAY (Document ; -> Array)
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 DOCUMENT TO BLOB($1;$vxArrayData) // Cargar el BLOB del disco
 EXPAND BLOB($vxArrayData) // Expandir el BLOB
 BLOB TO VARIABLE($vxArrayData;$2->) // Recuperar el array del BLOB
```
  
  
Después de añadir estos métodos a su aplicación, puede escribir:  
  
```4d
 ARRAY TEXT(...;asAnyArray;...)
  //  ...
 SAVE ARRAY($vsDocName;->asAnyArray)
  //  ...
 LOAD ARRAY($vsDocName;->asAnyArray)
```

  

#### Ver también 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[LIST TO BLOB](list-to-blob.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 532 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


