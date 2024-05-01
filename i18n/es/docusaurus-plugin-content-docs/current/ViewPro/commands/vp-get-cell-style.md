---
id: vp-get-cell-style
title: VP Get cell style
---

<!-- REF #_method_.VP Get cell style.Syntax -->

**VP Get cell style** (  _rangeObj_ : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get cell style.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango |                  |
| Result     | Object | <- | Objeto style | <!-- END REF --> |

#### Descripción

The `VP Get cell style` command <!-- REF #_method_.VP Get cell style.Summary -->returns a [style object](../configuring.md#style-objects) for the first cell in the _rangeObj_<!-- END REF -->.

En _rangeObj_, pase un rango que contenga el estilo a recuperar.

- Si _rangeObj_ contiene un rango de celdas, se devuelve el estilo de la celda.
- Si _rangeObj_ contiene un rango que no es un rango de celdas, se devuelve el estilo de la primera celda del rango.
- Si _rangeObj_ contiene varios rangos, sólo se devuelve el estilo de la primera celda del primer rango.

#### Ejemplo

Para obtener los detalles sobre el estilo en la celda seleccionada (B2):

![](../../assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

Este código:

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... devolverá este objeto:

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```

#### Ver también

[VP GET DEFAULT STYLE](vp-get-default-style.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)
