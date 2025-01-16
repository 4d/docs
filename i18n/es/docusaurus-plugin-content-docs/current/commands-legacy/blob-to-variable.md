---
id: blob-to-variable
title: BLOB TO VARIABLE
slug: /commands/blob-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO VARIABLE.Syntax-->**BLOB TO VARIABLE** ( *BLOB* ; *variable* {; *offset*} )<!-- END REF-->
<!--REF #_command_.BLOB TO VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB que contiene variables 4D |
| variable | Variable | &#8592; | Variable a escribir con el contenido del BLOB |
| offset | Integer | &#8596; | Posición de la variable en el BLOB |
| || | Posición de la variable siguiente en el  BLOB |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB TO VARIABLE.Summary-->El comando BLOB TO VARIABLE reescribe la variable *variable* con los datos almacenados en el BLOB *blob* en el offset de bytes (a partir de cero) especificado por *offset*.<!-- END REF-->

Los datos en el BLOB deben ser compatibles con la variable de destino. Generalmente, usted utilizará los BLOBs que usted ha llenado previamente utilizando el comando [VARIABLE TO BLOB](variable-to-blob.md).

Si no especifica el parámetro opcional *offset*, los datos de la variable se leen desde el inicio del BLOB. Si usted está trabajando con un BLOB que contiene muchas variables, debe pasar el parámetro *offset* y, adicionalmente, debe pasar una variable numérica. Antes de llamar el comando, defina esta variable numérica en el offset correspondiente. Después de llamar el comando, la misma variable númerica devuelve el offset de la siguiente variable almacenada en el BLOB.

**Nota:** **BLOB TO VARIABLE** soporta las variables objeto y colección de tipo [C\_OBJECT](c-object.md) y [C\_COLLECTION](c-collection.md). Para mayor información, consulte el comando [VARIABLE TO BLOB](variable-to-blob.md).

Después de llamar el comando, si la variable ha sido reescrita con éxito, la variable OK toma el valor 1\. Si la operación no se pudo realizar, la variable OK toma el valor 0; por ejemplo, si no hay suficiente memoria.

**Nota sobre la independencia de plataforma:** BLOB TO VARIABLE y [VARIABLE TO BLOB](variable-to-blob.md) utilizan un formato interno de 4D para administrar las variables almacenadas en los BLOBs. La ventaja es que usted no tiene que preocuparse por la conversión de bytes (byte swapping) entre plataformas mientras utiliza estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando cualquiera de estos dos comandos puede ser reutilizado en Macintosh y viceversa.

#### Ejemplo 

Vea los ejemplos para el comando [VARIABLE TO BLOB](variable-to-blob.md "VARIABLE TO BLOB").

#### Variables y conjuntos del sistema 

La variable OK toma el valor 1 si la variable ha sido reescrita correctamente, de lo contrario toma el valor 0.

#### Ver también 

[VARIABLE TO BLOB](variable-to-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 533 |
| Hilo seguro | &check; |
| Modifica variables | OK |


