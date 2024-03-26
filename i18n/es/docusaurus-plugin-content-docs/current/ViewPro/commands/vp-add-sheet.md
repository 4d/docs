---
id: vp-add-sheet
title: VP ADD SHEET
---

<!-- REF #_method_.VP ADD SHEET.Syntax -->

**VP ADD SHEET** ( _vpAreaName_ : Text )<br/>**VP ADD SHEET** ( _vpAreaName_ : Text ; _index_ : Integer )<br/>**VP ADD SHEET** ( _vpAreaName_ : Text ; _sheet_ : Integer ; _name_ : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                  |                  |
| ---------- | ------- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |                  |
| sheet      | Integer | -> | Indice de la nueva hoja                      |                  |
| name       | Text    | -> | Nombre de la hoja                            | <!-- END REF --> |

#### Descripción

El comando `VP ADD SHEET` <!-- REF #_method_.VP ADD SHEET.Summary -->inserta una hoja en el documento cargado en _vpAreaName_.<!-- END REF -->

En _vpAreaName_, pase el nombre del área 4D View Pro.

En _sheet_, puede pasar un índice para la nueva hoja. Si el _index_ pasado es inferior o igual a 0, el comando inserta la nueva hoja al principio. Si el _index_ supera el número de hojas, el comando inserta la nueva hoja después de las existentes.

> La indexación comienza en 0.

En _name_, puede pasar un nombre para la nueva hoja. El nuevo nombre no puede contener los siguientes caracteres: `*, :, [, ], ?,\,/`

#### Ejemplo

El documento tiene actualmente 3 hojas:

![vp-document-with-3-sheets](../../assets/en/ViewPro/vp-sheet-3.png)

Para insertar una hoja en la tercera posición (índice 2) y nombrarla "March":

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../../assets/en/ViewPro/vp-add-sheet.png)

#### Ver también

[VP REMOVE SHEET](vp-remove-sheet.md)
