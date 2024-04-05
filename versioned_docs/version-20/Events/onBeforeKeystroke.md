---
id: onBeforeKeystroke
title: On Before Keystroke
---

|Code|Can be called by|Definition|  
|---|---|---|
|17|[4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns)|A character is about to be entered in the object that has the focus. `Get edited text` returns the object's text **without** this character.|

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|- Support in non-enterable list boxes - The event is now triggered after IME validation
</details>

## Description

After the `On Before Keystroke` and [`On After Keystroke event`](onAfterKeystroke.md) events are selected for an object, you can detect and handle the keystrokes within the object, using the `Form event code` command that will return `On Before Keystroke` and then [`On After Keystroke event`](onAfterKeystroke.md) (for more information, please refer to the description of the `Get edited text` command). Within the `On Before Keystroke` event, the `FILTER KEYSTROKE` command can be used to filter typed chars.

> These events are also activated by language commands that simulate a user action like `POST KEY`.

The `On Before Keystroke` event is not generated:

- in a [list box column](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
- when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Non-enterable objects

The `On Before Keystroke` event can be generated in non-enterable objects, e.g. in a list box even if the list box cells are not enterable, or rows are not selectable. This allows you to build interfaces where the user can scroll dynamically to a specific row in a list box by entering the first letters of a value. In case where the list box cells are enterable, you can use the `Is editing text` command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code.

### Keystroke sequence

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. This case mainly occurs:

- when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "ê" or ñ),
- when an IME (Input Code Editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated.

### See also

[On After Keystroke](onAfterKeystroke.md).
