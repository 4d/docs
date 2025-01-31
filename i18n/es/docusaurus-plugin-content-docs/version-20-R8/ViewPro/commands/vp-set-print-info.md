---
id: vp-set-print-info
title: VP SET PRINT INFO
---

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->

**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro                                    |                  |
| printInfo  | Object  | -> | Objeto que contiene los atributos de impresión                 |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP SET PRINT INFO` <!-- REF #_method_.VP SET PRINT INFO.Summary -->define los atributos que se utilizarán al imprimir *vpAreaName*<!-- END REF -->.

Pase el nombre del área 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

Puede pasar un objeto que contenga las definiciones para varios atributos de impresión en el parámetro *printInfo*. Para ver la lista completa de los atributos disponibles, consulte [Atributos de impresión](../configuring.md#print-attributes).

En el parámetro opcional *sheet*, puede designar una hoja específica a imprimir (la numeración comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

- `vk current sheet`

#### Ejemplo

El siguiente código imprimirá un área 4D View Pro en un documento PDF:

```4d
var $printInfo : Object

//declarar atributos de impresión objeto
$printInfo:=New object

//definir atributos de impresión
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

//Agregar logotipo corporativo
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//imprimir documento PDF
VP SET PRINT INFO ("ViewProArea";$printInfo)

//exportar el PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

El PDF:

![](../../assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### Ver también

[4D View Pro print attributes](../configuring.md#print-attributes)<br/>
[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Get print info](vp-get-print-info.md)<br/>
[VP PRINT](vp-print.md)
