---
id: display-selection
title: DISPLAY SELECTION
slug: /commands/display-selection
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY SELECTION.Syntax-->**DISPLAY SELECTION** ( {*aTable*}{; *selectMode*}{; *enterList*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.DISPLAY SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to display, or Default table, if omitted |
| selectMode | Integer | &#8594;  | Selection mode |
| enterList | Boolean | &#8594;  | Authorize Enter in list option |
| * | Operator |  &#8594;  | Use output form for one record selection and hide scroll bars in the input form |
| * | Operator |  &#8594;  | Show scroll bars in the input form (overrides second option of first optional *) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISPLAY SELECTION.Summary-->**DISPLAY SELECTION** displays the selection of *aTable*, using the output form.<!-- END REF--> The records are displayed in a scrollable list similar to that of the Design environment. If the user double-clicks a record, by default the record is displayed in the current input form. The list is displayed in the frontmost window.

To display a selection and also modify a record in the current input form after you have double-clicked on it (as you do in the Design environment window), or via the Enter in list mode, use [MODIFY SELECTION](modify-selection.md) instead of **DISPLAY SELECTION**.   
All of the following information applies to both commands, except for the information on modifying records.

After **DISPLAY SELECTION** is executed, there may not be a current record. Use a command such as [FIRST RECORD](first-record.md) or [LAST RECORD](last-record.md) to select one.

The *selectMode* parameter is used to set the possibilities for selecting records in the list using the mouse. You can pass one of the following constants of the “*Form Parameters*” theme in this parameter:

| Constant           | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiple selection | Integer | 2     | The user can select several records at once. To select adjacent records, click on the first record to be selected, then press the **Shift** key before clicking on the last record you want to include in the selection. To select non-adjacent records, click on each record separately while holding down the **Ctrl** (under Windows) or **Command** (under Mac OS) key. |
| No selection       | Integer | 0     | It is not be possible to select a record in the list                                                                                                                                                                                                                                                                                                                        |
| Single selection   | Integer | 1     | Only one record can be selected at a time                                                                                                                                                                                                                                                                                                                                   |

 If you do not pass the *selectMode* parameter, the “Multiple Selection” mode is used by default.   

The *enterList* parameter lets you authorize the “Enter in List” mode for the displayed list. This lets the user select and modify the record values directly in the output form. Pass [True](true.md "True") to enable this mode or [False](false.md "False") to disable it. By default, if you do not pass the *enterList* parameter, the “Enter in List” mode is disabled.   
Keep in mind that with the **DISPLAY SELECTION** command, this parameter only allows the selection of the values in the list and not their modification. In fact, the **DISPLAY SELECTION** command loads the records of the current selection in Read only in the current process. Only the [MODIFY SELECTION](modify-selection.md) command allows the actual entry of values. 

**Note:** The [OBJECT SET ENTERABLE](object-set-enterable.md) command can be used to enable or disable the Enter in list mode on the fly. 

If the selection contains only one record and the first optional *\** is not used, the record appears in the input form instead of the output form. If the first optional *\** is specified, a one-record selection is displayed, using the output form. If the first optional *\** is specified and the user displays the record in the input form by double-clicking on it, the scroll bars will be hidden in the input form. To reverse this effect, pass the second optional \*.

Custom buttons may be put in the Footer or Header area of the output form in order to terminate the execution of the **DISPLAY SELECTION** command. You can use automatic Accept or Cancel buttons to exit, or use an object method that calls [ACCEPT](accept.md) or [CANCEL](cancel.md). When an output form called by the **DISPLAY SELECTION** command has no buttons, only the **Escape** (Windows) or **Esc** (Mac OS) key can be used to exit the list.

During and after execution of **DISPLAY SELECTION**, the records that the user highlighted (selected) are kept in a set named UserSet. The UserSet is available within the selection display for object methods when a button is clicked or a menu item is chosen. It is also available to the project method that called **DISPLAY SELECTION** after the command was completed.

#### Example 1 

The following example selects all the records in the \[People\] table. It then uses **DISPLAY SELECTION** to display the records, and allows the user to select the records to print. Finally, it selects the records with [USE SET](use-set.md), and prints them with [PRINT SELECTION](print-selection.md):

```4d
 ALL RECORDS([People]) // Select all records
 DISPLAY SELECTION([People];*) // Display the records
 USE SET("UserSet") // Use only records picked by user
 PRINT SELECTION([People]) // Print the records that the user picked
```

#### Example 2 

See example #6 for the [Form event code](../commands/form-event-code.md) command. This example shows all the tests you may need to check in order to fully monitor the events that occur during a DISPLAY SELECTION.

#### Example 3 

To reproduce the functionality provided by, for example, the **Records** menu of the Design environment when you use **DISPLAY SELECTION** or [MODIFY SELECTION](modify-selection.md) in the Application environment, proceed as follows:

a. In the Design environment, create a menu bar with the menu commands you want, for example, Show All, Query and Order By. 

b. Associate this menu bar (using the “Associated menu bar” menu in the form properties dialog box) with the output form used with **DISPLAY SELECTION** or [MODIFY SELECTION](modify-selection.md).

c. Associate the following project methods to your menu commands:

```4d
  // M_SHOW_ALL (attached to menu item Show All)
 $vpCurTable:=Current form table
 ALL RECORDS($vpCurTable->)
 
  // M_QUERY (attached to menu item Query)
 $vpCurTable:=Current form table
 QUERY($vpCurTable->)
 
  // M_ORDER_BY (attached to menu item Order By)
 $vpCurTable:=Current form table
 ORDER BY($vpCurTable->)
```

You can also use other commands, such as [PRINT SELECTION](print-selection.md), [QR REPORT](qr-report.md), and so on, to provide all the “standard” menu options you may want each time you display or modify a selection in the Application environment. Thanks to the [Current form table](current-form-table.md) command, these methods are generic, and the menu bar they support can be attached to any output form of any table.

#### See also 

[Form event code](../commands/form-event-code.md)  
[MODIFY SELECTION](modify-selection.md)  
*Sets*  

#### Properties

|  |  |
| --- | --- |
| Command number | 59 |
| Thread safe | &cross; |
| Forbidden on the server ||


