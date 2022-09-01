---
id: advanced-programming
title: Programación avanzada con Javascript
---

A 4D View Pro Area is a [Web Area form object](../FormObjects/webArea_overview.md) that uses the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the [`WA Evaluate Javascript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) 4D command.

Since 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html), you can also call SpreadJS Javascript methods in 4D View Pro areas.

## Ejemplo: ocultar la cinta

Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS [Ribbon](./configuring.md#ribbon):

```4d
//Button's object method

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Llamar los métodos Javascript de SpreadJS

You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets.

4D has a built-in `Utils.spread` expression that points at the spreadsheet (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS [Workbook methods](https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html).

#### Ejemplo

El siguiente código deshace la última acción en la hoja de cálculo:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Repositorio 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Siéntase libre de clonarlo y experimentar con el proyecto. 
