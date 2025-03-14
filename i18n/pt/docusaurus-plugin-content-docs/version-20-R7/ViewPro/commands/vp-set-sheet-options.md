---
id: vp-set-sheet-options
title: VP SET SHEET OPTIONS
---

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->

**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

| Parâmetro    | Tipo    |    | Descrição                                                   |                  |
| ------------ | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName   | Text    | -> | Nome da área 4D View Pro                                    |                  |
| sheetOptions | Object  | -> | Opção(ões) de folha a definir            |                  |
| sheet        | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

O comando `VP SET SHEET OPTIONS` <!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->permite definir várias opções de planilha da área *vpAreaName*<!-- END REF -->.

Passe o nome da área 4D View Pro em *vpAreaName*. Se passar um nome que não existe, é devolvido um erro.

Passe um objeto que contenha definições para as opções a serem definidas no parâmetro *sheetOptions*. Para ver a lista completa das opções disponíveis, veja parágrafo [Opções de folha](../configuring.md#sheet-options).

No parâmetro opcional *sheet*, pode designar uma planilha específica (a contagem começa em 0). Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

#### Exemplo 1

Pretende proteger todas as células exceto o intervalo C5:D10:

```4d
// Ativar a proteção na planilha atual
var $options : Object
  
$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)
  
// marcar as células C5:D10 como 'unlocked'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```

#### Exemplo 2

You need to protect your document while your users can resize rows and columns:

```4d
var $options : Object
  
$options:=New object
// Activate protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Allow user to resize rows
$options.protectionOptions.allowResizeRows=True;
// Allow user to resize columns
$options.protectionOptions.allowResizeColumns=True;
    
// Aplicar proteção na planilha atual
VP SET SHEET OPTIONS("ViewProArea";$options)
```

#### Exemplo 3

You want to customize the colors of your sheet tabs, frozen lines, grid lines, selection background and selection border:

```4d
var $options : Object
   
$options:=New object
// Customize color of Sheet 1 tab
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"
   
VP SET SHEET OPTIONS("ViewProArea";$options;0)
 
// Customize color of Sheet 2 tab
$options.sheetTabColor:="red"
   
VP SET SHEET OPTIONS("ViewProArea";$options;1)
 
// Customize color of Sheet 3 tab
$options.sheetTabColor:="blue"
  
VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### Exemplo

Pretende ocultar as linhas da grelha, bem como os cabeçalhos das linhas e das colunas.

```4d
var $options : Object
  
$options:=New object
$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False
  
VP SET SHEET OPTIONS("ViewProArea";$options)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### Veja também

[4D View Pro sheet options](../configuring.md#sheet-options)<br/>
[VP Get sheet options](vp-get-sheet-options.md)
