---
id: vp-set-print-info
title: VP SET PRINT INFO
---

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->

**VP SET PRINT INFO** ( _vpAreaName_ : Text ; _printInfo_ : Object { ; _sheet_ : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome da área 4D View Pro                                    |                  |
| printInfo  | Object  | -> | Objeto que contém atributos de impressão                    |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP SET PRINT INFO` command <!-- REF #_method_.VP SET PRINT INFO.Summary -->defines the attributes to use when printing the _vpAreaName_<!-- END REF -->.

Pass the name of the 4D View Pro area to print in _vpAreaName_. Se passar um nome que não existe, é devolvido um erro.

You can pass an object containing definitions for various printing attributes in the _printInfo_ parameter. To view the full list of the available attributes, see [Print Attributes](../configuring.md#print-attributes).

In the optional _sheet_ parameter, you can designate a specific spreadsheet to print (counting begins at 0). Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

#### Exemplo

O código seguinte imprime uma área 4D View Pro num documento PDF:

```4d
var $printInfo : Object

//declare print attributes object
$printInfo:=New object

//define print attributes
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

//Add corporate logo
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//print PDF document
VP SET PRINT INFO ("ViewProArea";$printInfo)

//export the PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

O PDF:

![](../../assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### Veja também

[4D View Pro print attributes](../configuring.md#print-attributes)<br/>
[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Get print info](vp-get-print-info.md)<br/>
[VP PRINT](vp-print.md)
