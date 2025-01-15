---
id: onAfterKeystroke
title: On After Keystroke
---

|Code|Can be called by|Definition|  
|---|---|---|
|28|[4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns)|A character is about to be entered in the object that has the focus. `Get edited text` returns the object's text **including** this character.|

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|- Support in non-enterable list boxes - The event is now triggered after IME validation
</details>

## Description

> The `On After Keystroke` event can generally be replaced by the [`On After Edit`](onAfterEdit.md) event (see below).

After the [`On Before Keystroke`](onBeforeKeystroke.md) and `On After Keystroke` event properties are selected for an object, you can detect and handle the keystrokes within the object, using the `FORM event` command that will return `On Before Keystroke` and then `On After Keystroke` (for more information, please refer to the description of the `Get edited text` command).

> These events are also activated by language commands that simulate a user action like `POST KEY`.

The `On After Keystroke` event is not generated:

- in [list box columns](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
- when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Keystroke sequence

When an entry requires a sequence of keystrokes, the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke event`] events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. This case mainly occurs:

- when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "ê" or ñ),
- when an IME (Input Code Editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated.

### See also

[On Before Keystroke](onBeforeKeystroke.md).
