---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( _vpAreaName_ : Text  { ; _viewPro_ : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| viewPro    | Object | -> | Objeto 4D View Pro                           | <!-- END REF --> |

#### Descripción

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the _viewPro_ 4D View Pro object in the _vpAreaName_ 4D View Pro area<!-- END REF -->. El contenido del objeto importado sustituye todos los datos insertados en el área.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En _viewPro_, pase un objeto 4D View Pro válido. This object can have been created using [VP Export to object](vp-export-to-object.md) or manually. For more information on 4D View Pro objects, please refer to the [4D View Pro object](../configuring.md#4d-view-pro-object) section.

An error is returned if the _viewPro_ object is invalid.

#### Ejemplo

Desea importar una hoja de cálculo que se ha guardado previamente en un campo objeto:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Ver también

[VP Export to object](vp-export-to-object.md)
