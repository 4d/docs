---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                      | Definición                                                                                                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un personaje está a punto de ser introducido en el objeto que tiene el foco. `Get edited text` returns the object's text **without** this character. |

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                |
| ----------- | --------------------------------------------------------------------------------------------- |
| 18 R5       | - Soporte en list boxes no editables - El evento se activa ahora después de la validación IME |

</details>

## Descripción

After the `On Before Keystroke` and [`On After Keystroke event`](onAfterKeystroke.md) events are selected for an object, you can detect and handle the keystrokes within the object, using the `Form event code` command that will return `On Before Keystroke` and then [`On After Keystroke event`](onAfterKeystroke.md) (for more information, please refer to the description of the `Get edited text` command). Within the `On Before Keystroke` event, the `FILTER KEYSTROKE` command can be used to filter typed chars.

> These events are also activated by language commands that simulate a user action like `POST KEY`.

The `On Before Keystroke` event is not generated:

- in a [list box column](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
- cuando las modificaciones usuario no se realizan con el teclado (pegar, arrastrar y soltar, casilla de verificación, lista desplegable, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Objetos no editables

The `On Before Keystroke` event can be generated in non-enterable objects, e.g. in a list box even if the list box cells are not enterable, or rows are not selectable. Esto permite crear interfaces en las que el usuario puede desplazarse dinámicamente a una línea específica en un list box introduciendo las primeras letras de un valor. In case where the list box cells are enterable, you can use the `Is editing text` command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code.

### Secuencia de tecla

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. Este caso se da principalmente:

- cuando se utilizan las teclas "muertas" como ^ o ~: los eventos se generan sólo cuando se introduce el carácter extendido eventualmente (por ejemplo, "ê" o ñ),
- cuando un IME (Input Code Editor) muestra una caja de diálogo intermedia en la que el usuario puede introducir una combinación de caracteres: los eventos se generan sólo cuando el diálogo IME se valida.

### Ver también

[On After Keystroke](onAfterKeystroke.md).
