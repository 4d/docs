---
id: propertiesPrint
title: Print 
---

## Print frame

This property handles the print mode for objects whose size can vary from one record to another depending on their contents. These objects can be set to print with either a fixed or variable frame. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object.

You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object.

> The `Print object` and `Print form` commands do not support this property.

The print options are:

- **Variable** option / **Print Variable Frame** checked: 4D enlarges or reduces the form object area in order to print all the subrecords.

- **Fixed (Truncation)** option / **Print Variable Frame** unchecked: 4D only prints the contents that appear in the object area. The form is only printed once and the contents not printed are ignored.

- **Fixed (Multiple Records)** (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records.

> This property can be set by programming using the `OBJECT SET PRINT VARIABLE FRAME` command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|printFrame|string |"fixed", "variable", (subform only) "fixedMultiple"|

#### Objects Supported

[Input](input_overview.md) - [Subforms](subform_overview.md) (list subforms only) - [4D Write Pro areas](writeProArea_overview.md)
