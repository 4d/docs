---
id: onHeaderClick
title: Sur clic entête
---

| Code | Peut être appelé par                                                                                                                                                        | Définition                        |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 42   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | A click occurs in a column header |


## Description

### List Box

This event is generated when a click occurs on the header of a column in the list box. In this case, the `Self` command lets you find out the header of the column that was clicked.

> The [`On Clicked`](onClicked.md) event is generated when a right click (Windows) or Ctrl+click (macOS) occurs on a column or column header. You can test the number of clicks made by the user by means of the `Clickcount` command.

If the [Sortable](FormObjects/properties_Action.md#sortable) property was selected for the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the `$0` variable:

- If `$0` equals 0, a standard sort is performed.
- If `$0` equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D language.

If the [Sortable](FormObjects/properties_Action.md#sortable) property is not selected for the list box, the `$0` variable is not used.

### 4D View Pro

This event is generated when the user clicks on a column or row header in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriété   | Type        | Description                                                                                                                         |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| code        | entier long | 42                                                                                                                                  |
| description | Texte       | "On Header Click"                                                                                                                   |
| objectName  | Texte       | 4D View Pro area name                                                                                                               |
| sheetName   | Texte       | Name of the sheet of the event                                                                                                      |
| range       | object      | Cell range                                                                                                                          |
| sheetArea   | entier long | The sheet location where the event took place:<br><li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: The column headers (area indicating the column numbers/letters)</li><li>2: The row headers (area indicating the row numbers)</li> |

#### Exemple

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\
          New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```