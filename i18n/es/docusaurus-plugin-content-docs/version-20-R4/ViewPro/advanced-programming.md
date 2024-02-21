---
id: advanced-programming
title: Advanced programming with Javascript
---

Un Área 4D View Pro es un [objeto de formulario de Área Web](../FormObjects/webArea_overview.md) que utiliza el [motor de renderizado web integrado](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). Como tal, se comporta como cualquier otra área web, y puede hacer ejecutar código Javascript llamando al comando 4D [`WA Evaluate Javascript`](https://doc.4d.com/4dv20/help/command/en/page1029.html).

Dado que 4D View Pro es alimentado por la [solución de hoja de cálculo SpreadJS](https://developer.mescius.com/spreadjs), también puede llamar a los métodos Javascript de SpreadJS en las áreas 4D View Pro.

## Ejemplo: ocultar la cinta

Dado que 4D View Pro es un área web, puede seleccionar un elemento de la página web y modificar su comportamiento utilizando Javascript. El siguiente ejemplo oculta la [cinta](./configuring.md#ribbon) spreadJS:

```4d
//Método objeto del botón

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Llamar los métodos Javascript de SpreadJS

Puede aprovechar la librería de métodos Javascript de SpreadJS y llamarlos directamente para controlar sus hojas de cálculo.

4D tiene una propiedad `Utils.spread` integrada que da acceso al documento de la hoja de cálculo (también llamado libro de trabajo) dentro del área 4D View Pro, haciendo más sencillo llamar a los [métodos de Workbook](https://developer.mescius.com/spreadjs/api/modules/GC.Data) SpreadJS.

#### Ejemplo

El siguiente código deshace la última acción en la hoja de cálculo:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Repositorio 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) es un repositorio GitHub que contiene un proyecto lleno de funciones útiles, que permiten gestionar imágenes flotantes, ordenar columnas o líneas, crear una cultura personalizada, ¡y mucho más! Siéntase libre de clonarlo y experimentar con el proyecto. 
