---
id: advanced-programming
title: Programación avanzada con Javascript
---

A 4D View Pro Area is a [Web Area form object](../FormObjects/webArea_overview.md) that uses the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the [`WA Evaluate Javascript`](https://doc.4d.com/4dv20/help/command/en/page1029.html) 4D command.

Since 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://developer.mescius.com/spreadjs), you can also call SpreadJS Javascript methods in 4D View Pro areas.

## Ejemplo: ocultar la cinta

Dado que 4D View Pro es un área web, puede seleccionar un elemento de la página web y modificar su comportamiento utilizando Javascript. The following example hides the spreadJS [Ribbon](./configuring.md#ribbon):

```4d
//Método objeto del botón

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Llamar los métodos Javascript de SpreadJS

Puede aprovechar la librería de métodos Javascript de SpreadJS y llamarlos directamente para controlar sus hojas de cálculo.

4D has a built-in `Utils.spread` property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS [Workbook methods](https://developer.mescius.com/spreadjs/api/modules/GC.Data).

#### Ejemplo

El siguiente código deshace la última acción en la hoja de cálculo:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Repositorio 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Siéntase libre de clonarlo y experimentar con el proyecto.
