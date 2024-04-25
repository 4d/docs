---
id: forms
title: Página formulario
---

Esta página le permite establecer el funcionamiento y la visualización por defecto del editor de formularios 4D.

## Mover

Este grupo de opciones establece los parámetros para mover objetos utilizando el teclado o el ratón en el editor de formularios.

### Paso a paso con el teclado

This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the **Shift** key.

### Cuando se mueve más allá de los límites de la ventana

Esta opción permite definir el funcionamiento del editor de formularios cuando se mueve un objeto con el ratón más allá de los límites de la ventana.

- **Autoscroll**: When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. Este comportamiento es útil para mover los objetos en los formularios de gran tamaño.
- **Start drag and drop**: When this option is checked, this action is interpreted as a drag and drop. La ventana del formulario no se modifica y el objeto desplazado puede colocarse en otra ventana (si su contenido es compatible), por ejemplo, en otro formulario. This behavior is useful for recycling objects among several forms or using object libraries (see [Creating and using custom object libraries](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

Puede configurar esta opción en función de sus hábitos de trabajo y necesidades de desarrollo.

### Activar alineación automática por defecto

Esta opción activa la alineación automática por defecto en cada nueva ventana del editor de formularios. It is possible to modify this option individually in each window (refer to [Using the magnetic grid](FormEditor/formEditor.md#using-the-magnetic-grid)).

## Nueva visualización por defecto del formulario

- **Limits**, **Rulers**, ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the **Display** hierarchical menu of the Form editor.
- **Color for marker lines**: modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to [Using output control lines](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Default display shield**: sets which shields to display by default in each new window of the Form editor. For more information about shields, refer to [Using shields](FormEditor/formEditor.md#using-shields).
