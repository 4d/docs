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

El comando `VP RECOMPUTE FORMULAS` <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->evalúa inmediatamente todas las fórmulas en *vpAreaName*<!-- END REF -->. Por defecto, 4D calcula automáticamente las fórmulas cuando se insertan, importan o exportan. `VP RECOMPUTE FORMULAS` permite forzar el cálculo en cualquier momento (por ejemplo, en caso de que se realicen modificaciones en las fórmulas o si éstas contienen llamadas a la base). El comando lanza la ejecución del comando [VP FLUSH COMMANDS](vp-flush-commands.md) para ejecutar cualquier comando almacenado y limpiar el buffer de comandos, luego calcula todas las fórmulas del libro de trabajo.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

> Asegúrese de que el comando [VP SUSPEND COMPUTING](vp-suspend-computing.md) no ha sido ejecutado previamente utilizando `VP RECOMPUTE FORMULAS`, de lo contrario el comando no hace nada.

#### Ejemplo

Para refrescar todas las fórmulas del libro de trabajo:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### Ver también

[VP RESUME COMPUTING](vp-resume-computing.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
