---
id: vp-add-span
title: VP ADD SPAN
---

<!-- REF #_method_.VP ADD SPAN.Syntax -->

**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

El comando `VP ADD SPAN` combina las celdas de *rangeObj* como un único tramo de celdas.

En *rangeObj*, pase un rango de celdas. Las celdas del rango se unen para crear una celda más grande que se extiende por varias columnas y/o líneas. Puede pasar varios rangos de celdas para crear varios espacios al mismo tiempo. Tenga en cuenta que si los rangos de celdas se superponen, sólo se utiliza el primer rango de celdas.

> - Sólo se muestran los datos de la celda superior izquierda. Los datos de las otras celdas combinadas se ocultan hasta que se elimina la fusión.
> - Los datos ocultos en las celdas fusionadas son accesibles mediante fórmulas (empezando por la celda superior izquierda).

#### Ejemplo

Para fusionar las celdas First quarter y Second quarter a través de las dos celdas al lado, y de fusionar la celda del área South a través de las dos líneas debajo de ella:

![initial-document](../../assets/en/ViewPro/vp-add-span.png)

```4d
 // Rango First quarter
 $q1:=VP Cells("ViewProArea";2;3;3;1)

// Rango Second quarter
 $q2:=VP Cells("ViewProArea";5;3;3;1)

  // Rango South area
 $south:=VP Cells("ViewProArea";0;5;1;3)

 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../../assets/en/ViewPro/vp-add-span-2.png)

#### Ver también

[4D View Pro Range Object Properties](../getting-started.md#using-range-objects)<br/>
[VP Get spans](vp-get-spans.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
