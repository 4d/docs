---
id: vp-combine-ranges
title: VP Combine ranges
---

<!-- REF #_method_.VP Combine ranges.Syntax -->

**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

| Parámetros    | Tipo   |                             | Descripción                            |                  |
| ------------- | ------ | --------------------------- | -------------------------------------- | ---------------- |
| rangeObj      | Object | ->                          | Objeto rango                           |                  |
| otherRangeObj | Object | ->                          | Objeto rango                           |                  |
| Result        | Object | <- | Objeto que contiene un rango combinado | <!-- END REF --> |

#### Descripción

El comando `VP Combine Ranges` <!-- REF #_method_.VP Combine ranges.Summary -->devuelve un nuevo objeto de rango que incorpora dos o más objetos de rango existentes<!-- END REF -->. Todos los rangos deben ser de la misma área 4D View Pro.

En *rangeObj*, pase el primer rango.

En *otherRangeObj*, pase otro objeto(s) rango para combinar con *rangeObj*.

> El comando incorpora *rangeObj* y *otherRangeObj* por referencia.

#### Ejemplo

Quiere combinar los rangos de tipo celda, columna y línea en un nuevo rango distinto:

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // columna D
 $row:=VP Row("ViewProArea";9) // línea 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Ver también

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
