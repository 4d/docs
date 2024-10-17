---
id: vp-remove-sheet
title: VP REMOVE SHEET
---

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->

**VP REMOVE SHEET** ( _vpAreaName_ : Text ; _index_: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                  |                  |
| ---------- | ------- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |                  |
| index      | Integer | -> | Índice de la hoja a eliminar                 | <!-- END REF --> |

#### Descripción

El comando `VP REMOVE SHEET` <!-- REF #_method_.VP REMOVE SHEET.Summary -->elimina la hoja con el _index_ especificado del documento cargado en _vpAreaName_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro.

En _index_, pase el índice de la hoja que desea eliminar. Si el _index_ pasado no existe, el comando no hace nada.

> La indexación comienza en 0.

#### Ejemplo

El documento tiene actualmente tres hojas:

![](../../assets/en/ViewPro/vp-sheet-3.png)

Eliminar la tercera hoja:

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-2.png)

#### Ver también

[VP ADD SHEET](vp-add-sheet.md)
