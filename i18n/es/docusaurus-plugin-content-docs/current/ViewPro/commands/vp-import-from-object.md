---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| viewPro    | Object | -> | Objeto 4D View Pro                           | <!-- END REF --> |

#### Descripción

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. El contenido del objeto importado sustituye todos los datos insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *viewPro*, pase un objeto 4D View Pro válido. This object can have been created using [VP Export to object](vp-export-to-object.md) or manually. For more information on 4D View Pro objects, please refer to the [4D View Pro object](../configuring.md#4d-view-pro-object) section.

Se devuelve un error si el objeto *viewPro* no es válido.

#### Ejemplo

Desea importar una hoja de cálculo que se ha guardado previamente en un campo objeto:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Ver también

[VP Export to object](vp-export-to-object.md)
