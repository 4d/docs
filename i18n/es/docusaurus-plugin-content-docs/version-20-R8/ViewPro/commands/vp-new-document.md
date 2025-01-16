---
id: vp-new-document
title: VP NEW DOCUMENT
---

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->

**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

| Parámetros | Tipo |    | Descripción                                  |                  |
| ---------- | ---- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nombre de objeto formulario área 4D View Pro | <!-- END REF --> |

#### Descripción

El comando `VP NEW DOCUMENT` <!-- REF #_method_.VP NEW DOCUMENT.Summary -->carga y muestra un documento nuevo y predeterminado en el objeto área de formulario de 4D View Pro *vpAreaName*<!-- END REF -->. El nuevo documento vacío sustituye a los datos ya insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

#### Ejemplo

Quiere mostrar un documento vacío en el objeto formulario "myVPArea":

```4d
VP NEW DOCUMENT("myVPArea")
```

#### Ver también

[VP IMPORT DOCUMENT](vp-import-document.md)

---
