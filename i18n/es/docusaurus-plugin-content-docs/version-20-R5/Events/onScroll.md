---
id: onScroll
title: On Scroll
---

| Code | Puede ser llamado por                                                                                                                               | Definición                                                                                                                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 59   | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) - [List Box](FormObjects/listbox_overview.md) | El usuario se desplaza por el contenido de un objeto imagen o de un list box utilizando el ratón o el teclado. |

## Descripción

Este evento puede generarse en el contexto de una entrada de imagen o de un list box.

This event is triggered after any other user event related to the scrolling action ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). El evento sólo se genera en el método objeto (no en el método formulario).

The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or [the keyboard](FormObjects/properties_Appearance.md#vertical-scroll-bar). It is not generated when the object is scrolled due to the execution of the `OBJECT SET SCROLL POSITION` command.

### Entrada de imagen

El evento se genera en cuanto un usuario se desplaza por una imagen dentro de la entrada de imagen (campo o variable) que la contiene. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the [display format](FormObjects/properties_Display.md#picture-format) is "Truncated (non Centered)".

### List box

El evento se genera en cuanto un usuario se desplaza por las líneas o columnas del list box.
