---
id: vp-recompute-formulas
title: VP RECOMPUTE FORMULAS
---

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->

**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| Parámetros | Tipo |    | Descripción                                  |                  |
| ---------- | ---- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nombre de objeto formulario área 4D View Pro | <!-- END REF --> |

#### Descripción

El comando `VP RECOMPUTE FORMULAS` <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->evalúa inmediatamente todas las fórmulas en *vpAreaName*<!-- END REF -->. Por defecto, 4D calcula automáticamente las fórmulas cuando se insertan, importan o exportan. `VP RECOMPUTE FORMULAS` permite forzar el cálculo en cualquier momento (por ejemplo, en caso de que se realicen modificaciones en las fórmulas o si éstas contienen llamadas a la base). The command launches the execution of the [VP FLUSH COMMANDS](vp-flush-commands.md) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

> Be sure the [VP SUSPEND COMPUTING](vp-suspend-computing.md) command has not been executed before using `VP RECOMPUTE FORMULAS`, otherwise the command does nothing.

#### Ejemplo

Para refrescar todas las fórmulas del libro de trabajo:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### Ver también

[VP RESUME COMPUTING](vp-resume-computing.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
