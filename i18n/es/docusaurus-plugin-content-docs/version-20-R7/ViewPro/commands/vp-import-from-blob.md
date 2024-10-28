---
id: vp-import-from-blob
title: VP IMPORT FROM BLOB
---

<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->

**VP IMPORT FROM BLOB** ( *vpAreaName* : Text ; *vpBlob* : 4D.blob { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

| Parámetros | Tipo                    |    | Descripción                                   |                  |
| ---------- | ----------------------- | -- | --------------------------------------------- | ---------------- |
| vpAreaName | Text                    | -> | Nombre de objeto formulario área 4D View Pro  |                  |
| vpBlob     | 4D.Blob | -> | Blob que contiene un documento de 4D View Pro |                  |
| paramObj   | Object                  | -> | Opciones de importación                       | <!-- END REF --> |

#### Descripción

El comando `VP IMPORT FROM BLOB` <!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->importa el *vpBlob* del área *vpAreaName* de 4D View Pro y reemplaza su contenido<!-- END REF -->. *vpBlob* debe contener un documento 4D View Pro previamente guardado como Blob ya sea utilizando el comando [VP EXPORT TO BLOB](vp-export-to-blob.md) o a través de la interfaz de 4D View Pro.

En *paramObj*, puede pasar varias propiedades:

| Propiedad           | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula             | 4D.Function | Método de retrollamada que se lanzará cuando la importación haya finalizado. Ver [Pasar un método de retrollamada (fórmula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| calcOnDemand        | Boolean                     | Si se calculan las fórmulas sólo cuando se solicitan, por defecto=false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| dynamicReferences   | Boolean                     | Si calcular funciones con referencia dinámica, por defecto=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| fullRecalc          | Boolean                     | Si calcular después de cargar los datos json, false por defecto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| includeFormulas     | Boolean                     | Si se incluye la fórmula al cargar, por defecto=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| includeStyles       | Boolean                     | Si se incluye el estilo al cargar, por defecto=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| includeUnusedStyles | Boolean                     | Si incluir el estilo de nombre no utilizado al convertir excel xml al json, default=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| openMode            | Integer                     | puede ser: <br/>0: modo abierto normal, sin lazy e incremental. Al abrir el documento, el evento de la interfaz de usuario y la interfaz de usuario podrían actualizarse y responder en puntos de tiempo específicos. <br/>1: modo abierto perezoso (lazy). Al abrir el documento, solo la hoja activa se cargará directamente. Las demás hojas sólo se cargarán cuando se vayan a utilizar. <br/>2: modo abierto incremental. Al abrir un documento, la interfaz de usuario y el evento de interfaz de usuario podrían actualizarse y responder directamente. |

Los siguientes parámetros se pueden utilizar en el método de retrollamada:

| Parámetros |                               | Tipo                    | Descripción                                                                               |
| :--------- | :---------------------------- | :---------------------- | :---------------------------------------------------------------------------------------- |
| param1     |                               | text                    | El nombre del objeto de área 4D View Pro                                                  |
| param2     |                               | 4D.Blob | El blob importado                                                                         |
| param3     |                               | object                  | Referencia al parámetro *paramObj* del comando                                            |
| param4     |                               | object                  | Un objeto devuelto por el método con un mensaje de estado                                 |
|            | .success      | boolean                 | True si la importación se realiza correctamente, False en caso contrario. |
|            | .errorCode    | integer                 | Código de error.                                                          |
|            | .errorMessage | text                    | Mensaje de error.                                                         |

#### Ejemplo

Desea importar al "ViewProArea" un documento 4D View Pro previamente guardado como Blob en la primera entidad de la dataclass Table.

```4d
var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob
VP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)

```

#### Ver también

[VP EXPORT TO BLOB](vp-export-to-blob.md)
