---
id: propertiesSubform
title: Subform 
---

## Source

Specifies the type of source for the subform. For list subforms, choose the table that the subform belongs to.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource|string, or string array for hierarchical listbox column |A 4D variable, field name, or an arbitrary complex language expression.|

#### Objects Supported 

[Subform](subform_overview.md#overview)

## Detail Form

You use this option to associate a detail form with a list subform. A detail form can be used to enter or view subrecords. It generally contains more information than the list subform. Naturally, the detail form must belong to the same table as the subform. You normally use an Output form as the list form and an Input form as the detail form. If you do not specify the form to use for full page entry, 4D automatically uses the default Input format of the table.

Depending on the configuration of the subform, the user may display the detail form by double-clicking on a subrecord or by using the commands for adding and editing subrecords.

>You can associate a detail form with a list subform by holding down Shift and dragging the detail form from the Explorer onto the subform cpntainer.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|detailForm|string|Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objects Supported

[Subform](subform_overview.md#overview)