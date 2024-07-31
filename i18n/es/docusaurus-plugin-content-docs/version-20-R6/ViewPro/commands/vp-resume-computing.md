---
id: vp-resume-computing
title: VP RESUME COMPUTING
---

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->

**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| Parámetros | Tipo |    | Descripción                                  |                  |
| ---------- | ---- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nombre de objeto formulario área 4D View Pro | <!-- END REF --> |

#### Descripción

El comando `VP RESUME COMPUTING` <!-- REF #_method_.VP RESUME COMPUTING.Summary --> reinicia el cálculo de las fórmulas en *vpAreaName*<!-- END REF -->.

El comando reactiva el servicio de cálculo de 4D View Pro. Se actualizan las fórmulas impactadas por los cambios realizados mientras los cálculos eran suspendidos, y se calculan las fórmulas añadidas después de ejecutar `VP RESUME COMPUTING`.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

> El servicio de cálculo de 4D View Pro mantiene un contador de acciones de suspensión/reanudación. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the [VP SUSPEND COMPUTING](vp-suspend-computing.md) command.

#### Ejemplo

Ver ejemplo en [VP SUSPEND COMPUTING](vp-suspend-computing.md).

#### Ver también

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
