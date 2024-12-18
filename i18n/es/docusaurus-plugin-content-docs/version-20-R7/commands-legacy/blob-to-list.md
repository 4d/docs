---
id: blob-to-list
title: BLOB to list
slug: /commands/blob-to-list
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to list.Syntax-->**BLOB to list** ( *BLOB* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to list.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB que contiene una lista jerárquica |
| offset | Integer | &#8596;  | Offset en el BLOB (expresado en bytes) |
||| | Nuevo offset después de la lectura |
| Resultado | Integer | &#8592; | Referencia de la lista creada recientemente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB to list.Summary-->El comando BLOB to list crea una nueva lista jerárquica con los datos almacenados en el BLOB *blob* en el offset de bytes (a partir de cero) especificado por *offset* y devuelve un número de referencia de lista jerárquica para esa nueva lista.<!-- END REF-->

Los datos del BLOB deben ser compatibles con el comando. Generalmente, usted utiliza BLOBs llenados previamente con el comando [LIST TO BLOB](list-to-blob.md "LIST TO BLOB").

Si no especifica el parámetro opcional *offset*, los valores de las lista se leen desde el comienzo del BLOB. Si trabaja con un BLOB en el cual se almacenan muchas variables o listas, debe pasar el parámetro *offset* y, adicionalmente, debe pasar una variable numérica. Antes del llamado, fije esta variable numérica al offset apropiado. Después del llamado, la misma variable numérica devuelve el offset de la variable siguiente almacenada en el BLOB.

Después del llamado, si la lista jerárquica ha sido creada correctamente, la variable OK toma el valor 1\. Si la operación no pueder ser efectuada, la variable OK toma el valor 0; por ejemplo, si no hay suficiente memoria.

**Nota sobre la independencia de plataforma:** BLOB to list y [LIST TO BLOB](list-to-blob.md "LIST TO BLOB") utilizan un formato interno 4D para administrar listas almacenadas en BLOBs. La ventaja es que usted no tiene que preocuparse por la conversión de bytes (byte swapping) entre plataformas cuando utilice estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando estos dos comandos puede ser reutilizados en Macintosh y viceversa.

#### Ejemplo 

En este ejemplo, el método de un formulario de entrada extrae una lista de un campo BLOB antes de que el formulario aparezca en la pantalla, y lo almacena nuevamente en el campo BLOB si la entrada de datos se valida:

```4d
  // Método de formulario [Cosas por hacer];"Entrada"
 
 Case of
 
    :(FORM Event=On Load)
       hList:=BLOB to list([Cosas por hacer]Ideas)
       If(OK=0)
          hList:=New list
       End if
 
    :(FORM Event=On Unload)
       CLEAR LIST(hList;*)
 
    :(bValidate=1)
       LIST TO BLOB(hList;[Cosas por hacer]Ideas)
 
 End case
```

#### Variables y conjuntos del sistema 

La variable OK toma el valor 1 si la lista se crea correctamente, de lo contrario toma el valor 0.

#### Ver también 

[LIST TO BLOB](list-to-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 557 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


