---
id: vp-suspend-computing
title: VP SUSPEND COMPUTING
---

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->

**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| Parámetros | Tipo |    | Descripción                                  |                  |
| ---------- | ---- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nombre de objeto formulario área 4D View Pro | <!-- END REF --> |

#### Descripción

El comando `VP SUSPEND COMPUTING` <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->detiene el cálculo de todas las fórmulas en *vpAreaName*<!--END REF -->. Este comando es útil cuando se desea suspender los cálculos en esta área 4D View Pro para poder realizar manualmente modificaciones en las fórmulas sin encontrar errores antes de terminar de hacer los cambios.

El comando pausa los cálculos en 4D View Pro. Las fórmulas que ya han sido calculadas permanecen inalteradas, sin embargo cualquier fórmula añadida después de ejecutar el comando `VP SUSPEND COMPUTING` no es calculada.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

> El servicio de cálculo de 4D View Pro mantiene un contador de acciones de suspensión/reanudación. Por lo tanto, cada ejecución del comando `VP SUSPEND COMPUTING` debe ser balanceada por una ejecución correspondiente del comando `VP RESUME COMPUTING`. Toda fórmula afectada por las modificaciones realizadas mientras los cálculos están suspendidos será recalculada cuando se ejecute el comando.

#### Ejemplo

Ha añadido dos botones al formulario para que el usuario pueda suspender/reanudar los cálculos:

![](../../assets/en/ViewPro/cmd_vpStopCalculations.PNG)

El código del botón Suspend Computing:

```4d
 //pausar los cálculos mientras los usuarios introducen la información
 If(FORM Event.code=On Clicked)

    VP SUSPEND COMPUTING("ViewProArea")
 
 End if
```

```4d
If(FORM Event.code=On Clicked)
 
    VP RESUME COMPUTING("ViewProArea")
 
End if
```

#### Ver también

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP RESUME COMPUTING](vp-resume-computing.md)
