---
id: forms
title: Página formulario
---

 
This page lets you set the default operation and display of the 4D Form editor.

## Mover

This group of options sets parameters for moving objects using the keyboard or the mouse in the Form editor.

### Paso a paso con el teclado

This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the **Shift** key.

### Cuando se mueve más allá de los límites de la ventana

This option allows setting the behavior of the Form editor when moving an object using the mouse beyond window limits.

*   **Autoscroll**: When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. Este comportamiento es útil para mover los objetos en los formularios de gran tamaño.
*   **Start drag and drop**: When this option is checked, this action is interpreted as a drag and drop. The form window is not modified and the moved object can be dropped in another window (if its contents are compatible), for example, in another form. This behavior is useful for recycling objects among several forms or using object libraries (see [Creating and using custom object libraries](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

You can configure this option depending on your work habits and development needs.

### Activar alineación automática por defecto

This option activates auto alignment by default in each new window of the Form editor. It is possible to modify this option individually in each window (refer to [Using the magnetic grid](FormEditor/formEditor.md#using-the-magnetic-grid)).

## Nueva visualización por defecto del formulario

- **Limits**, **Rulers**, ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the **Display** hierarchical menu of the Form editor.
- **Color for marker lines**: modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to [Using output control lines](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Marca de visualización por defecto**: define qué marcas se mostrarán por defecto en cada nueva ventana del editor de formularios. Para más información sobre marcas, consulte [Utilizar marcas](FormEditor/formEditor.md#using-shields).

