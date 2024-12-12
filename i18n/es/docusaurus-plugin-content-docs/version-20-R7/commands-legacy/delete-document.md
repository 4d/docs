---
id: delete-document
title: DELETE DOCUMENT
slug: /commands/delete-document
displayed_sidebar: docs
---

<!--REF #_command_.DELETE DOCUMENT.Syntax-->**DELETE DOCUMENT** ( *doc* )<!-- END REF-->
<!--REF #_command_.DELETE DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Nombre del documento o Ruta de acceso completa al documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE DOCUMENT.Summary-->El comando **DELETE DOCUMENT** borra el documento cuyo nombre se pasa en *documento*.<!-- END REF-->  
  
Si el nombre del documento o la ruta de acceso son incorrectos, se genera un error.

Si el documento está abierto cuando se llama al comando, el resultado depende del sistema operativo:

* en Windows, se genera un error,
* en macOS, no se genera ningún error y el documento se elimina.

**DELETE DOCUMENT** no acepta una cadena vacía en el parámetro *documento*. Si se utiliza una cadena vacía, la caja de diálogo de apertura de archivos no se muestra y se genera un error.

**Advertencia:** **DELETE DOCUMENT** puede borrar un archivo en disco. Esto incluye documentos creados con otras aplicaciones como también las aplicaciones. **DELETE DOCUMENT** debe usarse con extremo cuidado. La eliminación de un documento es una operación permanente y no puede deshacerse.

#### Ejemplo 1 

El siguiente ejemplo borra el documento llamado Nota:

```4d
 DELETE DOCUMENT("Nota") // Borra el documento
```

#### Ejemplo 2 

Ver el ejemplo del comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Variables y conjuntos del sistema 

La eliminación de un documento hace que la variable sistema tome el valor 1\. Si DELETE DOCUMENT no puede borrar el documento, la variable sistema OK toma el valor 0.

#### Ver también 

[Test path name](test-path-name.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 159 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


