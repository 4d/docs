---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                              | Definición                                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [Área 4D Write Pro ](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Formulario - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna list box](FormObjects/listbox_overview.md#list-box-columns) | Un personaje está a punto de ser introducido en el objeto que tiene el foco. `Get edited text` returns the object's text **without** this character. |

<details><summary>History</summary>

| Version | Changes                                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| v18 R5  | - Support in non-enterable list boxes<p>- The event is now triggered after IME validation |
</details>


## Descripción

After the `On Before Keystroke` and [`On After Keystroke event`](onAfterKeystroke.md) events are selected for an object, you can detect and handle the keystrokes within the object, using the `Form event code` command that will return `On Before Keystroke` and then [`On After Keystroke event`](onAfterKeystroke.md) (for more information, please refer to the description of the `Get edited text` command). En el evento `On Before Keystroke`, se puede utilizar el comando `FILTER KEYSTROKE` para filtrar los caracteres digitados.

> These events are also activated by language commands that simulate a user action like `POST KEY`.

El evento `On Before Keystroke` no se genera:

- en un método [columnas de list box](FormObjects/listbox_overview.md#list-box-columns) excepto cuando se está editando una celda (sin embargo se genera en cualquier caso en el método de [list box](FormObjects/listbox_overview.md)),
- when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).


### Objetos no editables

El evento `On Before Keystroke` puede generarse en objetos no introducibles, por ejemplo, en un list box aunque las celdas del list box no sean introducibles, o las líneas no sean seleccionables. This allows you to build interfaces where the user can scroll dynamically to a specific row in a list box by entering the first letters of a value. In case where the list box cells are enterable, you can use the `Is editing text` command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code.


### Secuencia de tecla

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. This case mainly occurs:

- when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "ê" or ñ),
- when an IME (Input method editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated.


### Ver también

[On After Keystroke](onAfterKeystroke.md).