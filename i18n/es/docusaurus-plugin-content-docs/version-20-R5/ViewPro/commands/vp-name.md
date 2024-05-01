---
id: vp-name
title: VP Name
---

<!-- REF #_method_.VP Name.Syntax -->

**VP Name** ( _vpAreaName_ : Text ; _rangeName_ : Text { ; _sheet_ : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

| Parámetros | Tipo    |    | Descripción                                                      |                  |
| ---------- | ------- | -- | ---------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                     |                  |
| rangeName  | Text    | -> | Nombre del rango existente                                       |                  |
| sheet      | Integer | -> | Ubicación del rango (hoja actual si se omite) |                  |
| Result     | Object  | <- | Rango de nombre                                                  | <!-- END REF --> |

#### Descripción

El comando `VP Name` <!-- REF #_method_.VP Name.Summary -->devuelve un nuevo objeto de rango que hace referencia a un rango con nombre<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

The _rangeName_ parameter specifies an existing named cell range.

In the optional _sheet_ parameter, you can designate a specific spreadsheet where _rangeName_ is defined. Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual o todo el libro de trabajo con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

#### Ejemplo

Quiere asignar un valor al rango llamado "Total".

```4d
// llama la celda B5 Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### Ver también

[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP ALL](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Get names](vp-get-names.md)<br/>
[VP REMOVE NAME](vp-remove-name.md)<br/>
[VP Row](vp-row.md)
