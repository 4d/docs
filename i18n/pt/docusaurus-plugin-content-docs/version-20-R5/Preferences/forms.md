---
id: forms
title: Página Formulários
---

Esta página permite-lhe definir a operação e o ecrã padrão do editor de formulários de 4D.

## Mover

Este grupo de opções define parâmetros para mover objetos utilizando o teclado ou o rato no editor de formulários.

### Passo utilizando o teclado

This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the **Shift** key.

### Ao ultrapassar os limites da janela

This option allows setting the behavior of the Form editor when moving an object using the mouse beyond window limits.

- **Autoscroll**: When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. Esse comportamento é útil para mover objetos em formulários grandes.
- **Start drag and drop**: When this option is checked, this action is interpreted as a drag and drop. The form window is not modified and the moved object can be dropped in another window (if its contents are compatible), for example, in another form. This behavior is useful for recycling objects among several forms or using object libraries (see [Creating and using custom object libraries](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

You can configure this option depending on your work habits and development needs.

### Ativar o alinhamento automático por padrão

This option activates auto alignment by default in each new window of the Form editor. It is possible to modify this option individually in each window (refer to [Using the magnetic grid](FormEditor/formEditor.md#using-the-magnetic-grid)).

## Exibição padrão do novo formulário

- **Limits**, **Rulers**, ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the **Display** hierarchical menu of the Form editor.
- **Color for marker lines**: modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to [Using output control lines](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Default display shield**: sets which shields to display by default in each new window of the Form editor. For more information about shields, refer to [Using shields](FormEditor/formEditor.md#using-shields).
