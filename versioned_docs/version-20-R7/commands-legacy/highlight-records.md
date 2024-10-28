---
id: highlight-records
title: HIGHLIGHT RECORDS
slug: /commands/highlight-records
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT RECORDS.Syntax-->**HIGHLIGHT RECORDS** ( {*aTable* }{;}{ *setName* {; *}} )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT RECORDS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table where records will be highlighted If omitted, table of current form |
| setName | Text | &#8594;  | Set of records to highlight or Userset if omitted |
| * | Operator | &#8594;  | Disable the automatic scroll of the list |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.HIGHLIGHT RECORDS.Summary-->The **HIGHLIGHT RECORDS** command highlights records in a list form.<!-- END REF--> This operation is identical to manually selecting records in list mode by using the mouse or the **Shift+Click** or **Ctrl+Click** (Windows) or **Command+Click** (Mac OS) key combinations. The current selection is not modified. 

**Note:** The set of “selected” records is updated after redrawing the records; that is, after executing the entire calling method — and not just immediately after executing **HIGHLIGHT RECORDS**.

The *aTable* parameter lets you designate the table where records will be “highlighted.” This parameter can be used, in particular, to highlight the records of included subforms — which do not belong to the current table (see below). 

* If you pass a valid set name to *setName*, the command is applied to the records in that set for the *table* defined.
* If you omit the *setName* parameter, the command only highlights the records in the current UserSet set. This set is only managed in Design mode and when calling the [DISPLAY SELECTION](display-selection.md) /[MODIFY SELECTION](modify-selection.md) commands. If you want to highlight the records of a subform, you must pass a table name and set name. For more information about the UserSet set, refer to the *Sets* section.

The *\** parameter, when passed, disables the automatic scroll function of the list if the highlighted records are not visible. This mechanism allows customized scroll management using the [OBJECT SET SCROLL POSITION](object-set-scroll-position.md) command. 

**Note:** Regarding included subforms, the **HIGHLIGHT RECORDS** command does nothing if the Selection Mode property **Multiple** is not selected for the subform. In this case, to highlight a line, you must use the [GOTO SELECTED RECORD](goto-selected-record.md) command. 

#### Example 

In an output form displayed by the [MODIFY SELECTION](modify-selection.md) command, you want the user to be able to perform searches without the current selection being modified. To do this, place a **Search** button in the form and associate it with the following method: 

```4d
 SET QUERY DESTINATION(Into set;"UserSet")
 QUERY
 SET QUERY DESTINATION(Into current selection)
 HIGHLIGHT RECORDS
```

When the user clicks the button, the standard query dialog box appears. Once the search has been validated, the records found will be highlighted without the current selection being modified.

#### See also 

[GET HIGHLIGHTED RECORDS](get-highlighted-records.md)  
[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  