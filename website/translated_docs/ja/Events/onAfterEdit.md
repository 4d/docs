---
id: onAfterEdit
title: On After Edit
---

| Code | Can be called by                                                                                                                                                                                                                                                                                                                                                                      | Definition                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 45   | [4D View Pro area](FormObjects/viewProArea_overview) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | The contents of the enterable object that has the focus has just been modified |


## 説明

### General case

This event can be used filter the data entry in keyboard enterable objects at the lowest level.

When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, *i.e.*:

- Standard editing actions which modify content like paste, cut, delete or cancel;
- Dropping a value (action similar to paste);
- Any keyboard entry made by the user; in this case, the `On After Edit` event is generated after the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke`](onAfterKeystroke.md) events, if they are used.
- Any modification made using a language command that simulates a user action (i.e., `POST KEY`).

### 4D View Pro

The object returned by the `FORM Event` command contains:

| プロパティ       | 型    | 説明                                                                                                  |
| ----------- | ---- | --------------------------------------------------------------------------------------------------- |
| code        | 倍長整数 | On After Edit                                                                                       |
| description | テキスト | "On After Edit"                                                                                     |
| objectName  | テキスト | 4D View Pro area name                                                                               |
| sheetName   | テキスト | Name of the sheet of the event                                                                      |
| action      | テキスト | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |


Depending on the `action` property value, the [event object](overview.md#event-object) will contain additional properties.

#### action = editChange

| プロパティ       | 型       | 説明                                |
| ----------- | ------- | --------------------------------- |
| range       | オブジェクト  | Cell range                        |
| editingText | variant | The value from the current editor |


#### action = valueChanged

| プロパティ    | 型       | 説明                          |
| -------- | ------- | --------------------------- |
| range    | オブジェクト  | Cell range                  |
| oldValue | variant | Value of cell before change |
| newValue | variant | Value of cell after change  |


#### action = DragDropBlock

| プロパティ     | 型      | 説明                                                  |
| --------- | ------ | --------------------------------------------------- |
| fromRange | オブジェクト | Range of source cell range (being dragged)          |
| toRange   | オブジェクト | Range of the destination cell range (drop location) |
| copy      | ブール    | Specifies if the source range is copied or not      |
| insert    | ブール    | Specifies if the source range is inserted or not    |


#### action = DragFillBlock

| プロパティ     | 型      | 説明                  |
| --------- | ------ | ------------------- |
| fillRange | オブジェクト | Range used for fill |
 autoFillType|longint|Value used for the fill.

- 0: Cells are filled with all data (values, formatting, and formulas)
    - 1: Cells are filled with automatically sequential data
        - 2: Cells are filled with formatting only
            - 3: Cells are filled with values but not formatting
                - 4: Values are removed from the cells
                    - 5: Cells are filled automatically| |fillDirection|longint|Direction of the fill.
                        - 0: The cells to the left are filled
                            - 1: The cells to the right are filled
                                - 2: The cells above are filled
                                    - 3: The cells below are filled| 
                                        #### action = formulaChanged
                                        
                                        | プロパティ   | 型      | 説明                  |
                                        | ------- | ------ | ------------------- |
                                        | range   | オブジェクト | Cell range          |
                                        | formula | テキスト   | The formula entered |

                                        
                                        #### action = clipboardPasted
                                        
                                        <table>
                                          <tr>
                                            <th>
                                              プロパティ
                                            </th>
                                            
                                            <th>
                                              型
                                            </th>
                                            
                                            <th>
                                              説明
                                            </th>
                                          </tr>
                                          
                                          <tr>
                                            <td>
                                              range
                                            </td>
                                            
                                            <td>
                                              オブジェクト
                                            </td>
                                            
                                            <td>
                                              Cell range
                                            </td>
                                          </tr>
                                          
                                          <tr>
                                            <td>
                                              pasteOption
                                            </td>
                                            
                                            <td>
                                              倍長整数
                                            </td>
                                            
                                            <td>
                                              Specifies what is pasted from the clipboard:
                                              
                                              <li>
                                                0: Everything is pasted (values, formatting, and formulas)<li>
                                                  1: Only values are pasted<li>
                                                    2: Only the formatting is pasted<li>
                                                      3: Only formulas are pasted<li>
                                                        4: Values and formatting are pasted (not formulas)<li>
                                                          5: Formulas and formatting are pasted (not values)</td> </tr> <tr>
                                                            <td>
                                                              pasteData
                                                            </td>
                                                            
                                                            <td>
                                                              オブジェクト
                                                            </td>
                                                            
                                                            <td>
                                                              The data from the clipboard to be pasted
                                                              
                                                              <li>
                                                                "text" (text): The text from the clipboard<li>
                                                                  "html" (text): The HTML from the clipboard</td> </tr> </tbody> </table> <h4>
                                                                    例題
                                                                  </h4>
                                                                  <p>
                                                                    Here is an example handling an <code>On After Edit</code> event:
                                                                  </p>
                                                                  <pre><code class="4d"> If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
</code></pre>
                                                                  <p>
                                                                    The above example could generate an event object like this:
                                                                  </p>
                                                                  <pre><code>{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
</code></pre>