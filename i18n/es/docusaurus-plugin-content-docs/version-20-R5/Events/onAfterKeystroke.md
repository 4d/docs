---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                      | Definición                                                                                                                                                                                |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un personaje está a punto de ser introducido en el objeto que tiene el foco. `Get edited text` devuelve el texto del objeto **incluyendo** este caracter. |

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                |
| ----------- | --------------------------------------------------------------------------------------------- |
| 18 R5       | - Soporte en list boxes no editables - El evento se activa ahora después de la validación IME |

</details>

## Descripción

> The `On After Keystroke` event can generally be replaced by the [`On After Edit`](onAfterEdit.md) event (see below).

After the [`On Before Keystroke`](onBeforeKeystroke.md) and `On After Keystroke` event properties are selected for an object, you can detect and handle the keystrokes within the object, using the `FORM event` command that will return `On Before Keystroke` and then `On After Keystroke` (for more information, please refer to the description of the `Get edited text` command).

> Estos eventos también son activados por comandos del lenguaje que simulan una acción del usuario como `POST KEY`.

El evento `On After Keystroke` no se genera:

- en el método [de las columnas de list box](FormObjects/listbox_overview.md#list-box-columns) excepto cuando se está editando una celda (sin embargo se genera en cualquier caso en el método de [list box](FormObjects/listbox_overview.md)),
- cuando las modificaciones usuario no se realizan con el teclado (pegar, arrastrar y soltar, casilla de verificación, lista desplegable, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Secuencia de tecla

When an entry requires a sequence of keystrokes, the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke event`] events are generated only when the entry is fully validaded by the user. El comando `Keystroke` devuelve el carácter validado. Este caso se da principalmente:

- cuando se utilizan las teclas "muertas" como ^ o ~: los eventos se generan sólo cuando se introduce el carácter extendido eventualmente (por ejemplo, "ê" o ñ),
- cuando un IME (Input Code Editor) muestra una caja de diálogo intermedia en la que el usuario puede introducir una combinación de caracteres: los eventos se generan sólo cuando el diálogo IME se valida.

### Ver también

[On Before Keystroke](onBeforeKeystroke.md).
