---
id: vp-export-to-blob
title: VP EXPORT TO BLOB
---

<!-- REF #_method_.VP EXPORT TO BLOB.Syntax -->

**VP EXPORT TO BLOB** ( *vpAreaName* : Text ; *paramObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP EXPORT TO BLOB.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| paramObj   | Object | -> | Opciones de exportación                      | <!-- END REF --> |

#### Descripción

El comando `VP EXPORT TO BLOB` <!-- REF #_method_.VP EXPORT TO BLOB.Summary -->exporta el documento 4D View Pro *vpAreaName* en un 4D.Blob según las opciones *paramObj*.<!-- END REF --> El blob exportado está disponible a través de la retrollamada de exportación. Exportar e importar áreas de 4D View Pro como blogs es rápido y eficiente en memoria.

En *paramObj*, puede pasar varias propiedades:

| Propiedad               | Tipo                        | Descripción                                                                                                                                                                                                                                                                |
| ----------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula                 | 4D.Function | (obligatorio) Método de retrollamada que se lanzará cuando la exportación haya finalizado. Ver [Pasar un método de retrollamada (fórmula)](vp-export-document.md#passing-a-callback-method-formula). |
| includeAutoMergedCells  | Boolean                     | Si se incluyen las celdas combinadas automáticamente al guardar, por defecto=false.                                                                                                                                                                        |
| includeBindingSource    | Boolean                     | Si incluir la fuente de vinculación al guardar, por defecto=true.                                                                                                                                                                                          |
| includeCalcModelCache   | Boolean                     | Si desea incluir los datos adicionales de cálculo. Puede afectar a la velocidad de apertura del archivo, por defecto=false.                                                                                                                |
| includeEmptyRegionCells | Boolean                     | Si se incluyen celdas vacías (celdas sin datos o sólo con estilo) fuera del rango de datos utilizado, por defecto=true                                                                                                                                  |
| includeFormulas         | Boolean                     | Si se incluye la fórmula al guardar, por defecto=true.                                                                                                                                                                                                     |
| includeStyles           | Boolean                     | Si se incluye el estilo al guardar, por defecto=true.                                                                                                                                                                                                      |
| includeUnusedNames      | Boolean                     | Si se incluye el nombre personalizado no utilizado al guardar, por defecto=true.                                                                                                                                                                           |
| saveAsView              | Boolean                     | Whether to apply the format string to exporting value when saving, default=false.                                                                                                                                                                          |

Los siguientes parámetros se pueden utilizar en el método de retrollamada:

| Parámetros |                               | Tipo                    | Descripción                                                       |
| :--------- | :---------------------------- | :---------------------- | :---------------------------------------------------------------- |
| param1     |                               | text                    | El nombre del objeto 4D View Pro                                  |
| param2     |                               | 4D.blob | El blob exportado                                                 |
| param3     |                               | object                  | Referencia al parámetro *paramObj* del comando                    |
| param4     |                               | object                  | Un objeto devuelto por el método con un mensaje de estado         |
|            | .success      | boolean                 | True si exporta con éxito, de lo contrario False. |
|            | .errorCode    | integer                 | Código de error.                                  |
|            | .errorMessage | text                    | Mensaje de error.                                 |

#### Ejemplo

El comando `VP EXPORT TO BLOB` es asíncrono. Debe crear un método de retrollamada (llamado *VPBlobCallback* en nuestro ejemplo) para utilizar los resultados de la exportación.

```4d
//Exportar el documento VP
VP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})
```

```4d
//Método VPBlobCallback
#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)
var $myEntity : cs.myTableEntity

If ($status.success)
   // Save the document in a table
   $myEntity:=ds.myTable.new()
   $myEntity.blob:=$data
   $myEntity.save()
End if

```

#### Ver también

[VP IMPORT FROM BLOB](vp-import-from-blob.md)
