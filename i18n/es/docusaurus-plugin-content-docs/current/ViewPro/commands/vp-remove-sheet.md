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

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified _index_ from the document loaded in _vpAreaName_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro.

In _index_, pass the index of the sheet to remove. Si el _index_ pasado no existe, el comando no hace nada.

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
