---
id: onAfterEdit
title: On After Edit
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                  | Definição                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 45   | [4D View Pro area](FormObjects/viewProArea_overview) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | O conteúdo do objecto inserível que tem o foco acabou de ser modificado |

## Descrição

### Caso geral

This event can be used filter the data entry in keyboard enterable objects at the lowest level.

When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, *i.e.*:

- Standard editing actions which modify content like paste, cut, delete or cancel;
- Dropping a value (action similar to paste);
- Any keyboard entry made by the user; in this case, the `On After Edit` event is generated after the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke`](onAfterKeystroke.md) events, if they are used.
- Any modification made using a language command that simulates a user action (i.e., `POST KEY`).

Within the `On After Edit` event, text data being entered is returned by the [`Get edited text`](https://doc.4d.com/4dv19/help/command/en/page655.html) command.

### 4D View Pro

O objecto devolvido pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                           |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------- |
| code        | inteiro longo | On After Edit                                                                                       |
| description | text          | "On After Edit"                                                                                     |
| objectName  | text          | Nome da área 4D View Pro                                                                            |
| sheetName   | text          | Nome da folha do evento                                                                             |
| action      | text          | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

Depending on the `action` property value, the [event object](overview.md#event-object) will contain additional properties.

#### action = editChange

| Propriedade | Tipo    | Descrição                |
| ----------- | ------- | ------------------------ |
| range       | object  | Cell range               |
| editingText | variant | O valor do editor actual |

#### action = valueChanged

| Propriedade | Tipo    | Descrição                          |
| ----------- | ------- | ---------------------------------- |
| range       | object  | Cell range                         |
| oldValue    | variant | Valor da célula antes da alteração |
| newValue    | variant | Valor da célula após a alteração   |

#### action = DragDropBlock

| Propriedade | Tipo    | Descrição                                           |
| ----------- | ------- | --------------------------------------------------- |
| fromRange   | object  | Range of source cell range (being dragged)          |
| toRange     | object  | Range of the destination cell range (drop location) |
| copy        | boolean | Specifies if the source range is copied or not      |
| insert      | boolean | Specifies if the source range is inserted or not    |

#### action = DragFillBlock

| Propriedade | Tipo   | Descrição                                |
| ----------- | ------ | ---------------------------------------- |
| fillRange   | object | Intervalo utilizado para o preenchimento |
 autoFillType|longint|Valor utilizado para o enchimento.<li>0: Cells are filled with all data (values, formatting, and formulas)</li><li>1: Cells are filled with automatically sequential data</li><li>2: Cells are filled with formatting only</li><li>3: Cells are filled with values but not formatting</li><li>4: Values are removed from the cells</li><li>5: Cells are filled automatically</li>| |fillDirection|longint|Direction of the fill.<li>0: The cells to the left are filled</li><li>1: The cells to the right are filled</li><li>2: The cells above are filled</li><li>3: The cells below are filled</li>|

#### action = formulaChanged

| Propriedade | Tipo   | Descrição             |
| ----------- | ------ | --------------------- |
| range       | object | Cell range            |
| formula     | text   | A fórmula introduzida |

#### action = clipboardPasted

| Propriedade | Tipo          | Descrição                                                                                                                                                                                                |
| ----------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object        | Cell range                                                                                                                                                                                               |
| pasteOption | inteiro longo | Specifies what is pasted from the clipboard:<li>0: Everything is pasted (values, formatting, and formulas)</li><li>1: Only values are pasted</li><li>2: Only the formatting is pasted</li><li>3: Only formulas are pasted</li><li>4: Values and formatting are pasted (not formulas)</li><li>5: Formulas and formatting are pasted (not values)</li> |
| pasteData   | object        | The data from the clipboard to be pasted<li>"text" (text): The text from the clipboard</li><li>"html" (text): The HTML from the clipboard</li>                                                                                                             |

#### Exemplo

Here is an example handling an `On After Edit` event:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
    End if
 End if
    End if
 End if
```

The above example could generate an event object like this:

```
{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```
