---
id: onScroll
title: On Scroll
---

| Code | Pode ser chamado por                                                                                                                                     | Definição                                                                                                  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 59   | [Área de entrada](FormObjects/input_overview.md) de [tipo](FormObjects/properties_Object.md#type) `imagen` - [List Box](FormObjects/listbox_overview.md) | The user scrolls the contents of a picture object or list box using the mouse or keyboard. |

## Descrição

Esse evento pode ser gerado no contexto de uma entrada imagem ou de um list box.

Este evento se desencadena después de cualquier otro evento usuario relacionado con la acción de desplazamiento ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). The event is only generated in the object method (not in the form method).

El evento se dispara cuando el desplazamiento es el resultado de una acción del usuario: utilizando las barras de desplazamiento y/o los cursores, utilizando la rueda del ratón o [el teclado](FormObjects/properties_Appearance.md#vertical-scroll-bar). No se genera cuando el objeto se desplaza debido a la ejecución del comando `OBJECT SET SCROLL POSITION`.

### Entrada de imagem

The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. Puede desplazar el contenido de un área de imagen cuando el tamaño del área es menor que su contenido y el [formato de visualización](FormObjects/properties_Display.md#picture-format) es "Truncado (no centrado)".

### List box

The event is generated as soon as a user scrolls the rows or columns of the list box.
