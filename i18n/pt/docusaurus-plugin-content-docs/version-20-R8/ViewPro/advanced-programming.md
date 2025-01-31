---
id: advanced-programming
title: Programação avançada com Javascript
---

Un Área 4D View Pro es un [objeto de formulario de Área Web](../FormObjects/webArea_overview.md) que utiliza el [motor de renderizado web integrado](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the [`WA Evaluate Javascript`](https://doc.4d.com/4dv20/help/command/en/page1029.html) 4D command.

Dado que 4D View Pro es alimentado por la [solución de hoja de cálculo SpreadJS](https://developer.mescius.com/spreadjs), también puede llamar a los métodos Javascript de SpreadJS en las áreas 4D View Pro.

## Exemplo prático: Esconder a faixa de opções

Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. El siguiente ejemplo oculta la [cinta](./configuring.md#ribbon) spreadJS:

```4d
//Método objeto do botão

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Chamar métodos Transcriptase do SpreadJS

You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets.

4D has a built-in `Utils.spread` property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS [Workbook methods](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Workbook).

#### Exemplo

O código seguinte anula a última ação na folha de cálculo:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Repositório 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) es un repositorio GitHub que contiene un proyecto lleno de funciones útiles, que permiten gestionar imágenes flotantes, ordenar columnas o líneas, crear una cultura personalizada, ¡y mucho m Sinta-se à vontade para o clonar e experimentar com o projeto.
