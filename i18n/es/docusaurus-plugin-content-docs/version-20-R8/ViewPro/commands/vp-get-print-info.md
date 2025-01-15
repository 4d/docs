---
id: vp-get-print-info
title: VP Get print info
---

<!-- REF #_method_.VP Get print info.Syntax -->

**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get print info.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Objeto que contiene la información de impresión                | <!-- END REF --> |

#### Descripción

El comando `VP Get print info` <!-- REF #_method_.VP Get print info.Summary -->devuelve un objeto que contiene los atributos de impresión del *vpAreaName*<!-- END REF -->.

Pase el nombre del área de 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja de cálculo específica (la numeración comienza en 0) cuyos atributos de impresión desea devolver.  Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

Este código:

```4d
$pinfo:=VP Get print info("ViewProArea")
```

... devuelve los atributos de impresión del área de 4D View Pro definida en el comando [VP SET PRINT INFO](vp-set-print-info.md):

```4d
{
bestFitColumns:false,
bestFitRows:false,
blackAndWhite:false,
centering:0,
columnEnd:8,
columnStart:0,
firstPageNumber:1,
fitPagesTall:1,
fitPagesWide:1,
footerCenter:"&BS.H.I.E.L.D. &A Sales Per Region",
footerCenterImage:,
footerLeft:,
footerLeftImage:,
footerRight:"page &P of &N",
footerRightImage:,
headerCenter:,
headerCenterImage:,
headerLeft:"&G",
headerLeftImage:logo.png,
headerRight:,
headerRightImage:,
margin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},
orientation:2,
pageOrder:0,
pageRange:,
paperSize:{width:850,height:1100,kind:1},
qualityFactor:2,
repeatColumnEnd:-1,
repeatColumnStart:-1,
repeatRowEnd:-1,
repeatRowStart:-1,
rowEnd:24,
rowStart:0,
showBorder:false,
showColumnHeader:0,
showGridLine:false,
showRowHeader:0,
useMax:true,
watermark:[],
zoomFactor:1
}
```

#### Ver también

[4D View Pro Print Attributes](../configuring.md#print-attributes)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
