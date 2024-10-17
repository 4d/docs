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

El comando `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->importa y muestra el objeto _viewPro_ de 4D View Pro en el área _vpAreaName_ de 4D View Pro<!-- END REF -->. El contenido del objeto importado sustituye todos los datos insertados en el área.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En _viewPro_, pase un objeto 4D View Pro válido. Este objeto puede haber sido creado utilizando [VP Export to object](vp-export-to-object.md) o manualmente. Para más información sobre los objetos 4D View Pro, consulte la sección [Objeto 4D View Pro](../configuring.md#4d-view-pro-object).

Se devuelve un error si el objeto _viewPro_ no es válido.

#### Ejemplo

Desea importar una hoja de cálculo que se ha guardado previamente en un campo objeto:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Ver también

[VP Export to object](vp-export-to-object.md)
