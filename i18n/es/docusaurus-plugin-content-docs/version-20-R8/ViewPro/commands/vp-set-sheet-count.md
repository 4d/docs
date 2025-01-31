---
id: vp-set-sheet-count
title: VP SET SHEET COUNT
---

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->

**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| Parámetros | Tipo    |    | Descripción                                  |                  |
| ---------- | ------- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |                  |
| number     | Integer | -> | Número de hojas                              | <!-- END REF --> |

#### Descripción

El comando `VP SET SHEET COUNT` <!-- REF #_method_.VP SET SHEET COUNT.Summary -->establece el número de hojas en *vpAreaName*<!-- END REF -->.

En `number`, pase un número correspondiente a cuántas hojas contendrá el documento tras la ejecución del comando.

> **Atención**: el comando borrará hojas si la cantidad anterior de hojas en su documento es superior al número pasado. Por ejemplo, si hay 5 hojas en su documento y define el conteo de hojas en 3, el comando borrará las hojas número 4 y 5.

#### Ejemplo

El documento tiene actualmente una hoja:

![](../../assets/en/ViewPro/vp-sheet-1.png)

Para definir el número de hojas en 3:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../../assets/en/ViewPro/vp-sheet-3.png)

#### Ver también

[VP Get sheet count](vp-get-sheet-count.md)
