---
id: vp-resume-computing
title: VP RESUME COMPUTING
---

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->

**VP RESUME COMPUTING** ( _vpAreaName_ : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| Parámetros | Tipo |    | Descripción                                  |                  |
| ---------- | ---- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nombre de objeto formulario área 4D View Pro | <!-- END REF --> |

#### Descripción

The `VP RESUME COMPUTING` command <!-- REF #_method_.VP RESUME COMPUTING.Summary --> restarts the calculation of formulas in _vpAreaName_<!-- END REF -->.

El comando reactiva el servicio de cálculo de 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after `VP RESUME COMPUTING` is executed are calculated.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

> El servicio de cálculo de 4D View Pro mantiene un contador de acciones de suspensión/reanudación. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the [VP SUSPEND COMPUTING](vp-suspend-computing.md) command.

#### Ejemplo

See example in [VP SUSPEND COMPUTING](vp-suspend-computing.md).

#### Ver también

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
