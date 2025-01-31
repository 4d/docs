---
id: vp-get-data-context
title: VP Get data context
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #_method_.VP Get data context.Syntax -->

**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : any<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

| Parámetros | Tipo    |                             | Descripción                                         |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro        |                  |
| sheet      | Integer | ->                          | Índice de la hoja para obtener el contexto de datos |                  |
| Result     | Variant | <- | Data context. Object or Collection  | <!-- END REF --> |

#### Descripción

El comando `VP Get data context` <!-- REF #_method_.VP Get data context.Summary -->devuelve el contexto de datos actual de una hoja de cálculo<!-- END REF -->. El contexto devuelto incluye toda modificación realizada en el contenido del contexto de datos.

En *sheet*, pase el índice de la hoja de la que obtener el contexto de datos. Si no se pasa ningún índice, el comando devuelve el contexto de datos de la hoja de cálculo actual. Si no hay contexto para la hoja de trabajo, el comando devuelve `Null`.

La función devuelve un objeto o una colección dependiendo del tipo de contexto de datos definido con [VP SET DATA CONTEXT](vp-set-data-context.md).

#### Ejemplo

Para obtener el contexto de datos asociado a las siguientes celdas:

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

#### Ver también

[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP SET BINDING PATH](vp-set-binding-path.md)
