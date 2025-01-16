---
id: advanced-programming
title: Programação avançada com Javascript
---

Uma Área 4D View Pro é um [objeto de formulário do área web](../FormObjects/webArea_overview.md) que utiliza o [motor de renderização web embutido](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). Como tal, ele se comporta como qualquer outra área Web, e você pode fazer com que execute o código Javascript chamando o comando 4D [`WA Evaluate Javascript`](https://doc.4d.com/4dv19/help/command/en/page1029.html).

Como 4D View Pro é alimentado pela [solução de planilha eletrônica SpreadJS](https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html), você também pode chamar os métodos Javascript SpreadJS nas áreas 4D View Pro.

## Exemplo prático: Esconder a faixa de opções

Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS [Ribbon](./configuring.md#ribbon):

```4d
//Método objeto do botão

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Chamar métodos Transcriptase do SpreadJS

You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets.

4D has a built-in `Utils.spread` expression that points at the spreadsheet (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS [Workbook methods](https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html).

#### Exemplo

O código seguinte anula a última ação na folha de cálculo:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Repositório 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Sinta-se à vontade para o clonar e experimentar com o projeto. 
