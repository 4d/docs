---
id: form-get-names
title: FORM GET NAMES
slug: /commands/form-get-names
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET NAMES.Syntax-->**FORM GET NAMES** ( {*aTable* ;} *arrNames* {; *filter* {; *marker*}}{; *} )<!-- END REF-->
<!--REF #_command_.FORM GET NAMES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table reference |
| arrNames | Text array | &#8592; | Array of form names |
| filter | Text | &#8594;  | Name filter |
| marker | Real | &#8594;  | Marker for minimum version to return |
| &#8592; | New value |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET NAMES.Summary-->The **FORM GET NAMES** command fills the *arrNames* array with the names of forms in the application.<!-- END REF--> 

If you pass the *aTable* parameter, the command returns the names of the table forms associated with this table. If you omit this parameter, the command returns the names of the database project forms. 

You can limit this list of forms by passing a comparison string in the *filter* parameter: in this case, only forms whose names match the filter are returned. You can use the @ character in order to specify "starts with", "ends with" or "contains" type filters. If you pass an empty string, the *filter* parameter is ignored.

You can also limit the list of forms using the optional *marker* parameter, which allows you to limit forms returned in *arrNames* to those that were modified after a given time. As part of a version control system, this parameter lets you update only forms that were modified since the last backup.   
This principle works as follows: 4D internally maintains a counter of database resource modifications. Since forms are resources, each time a form is created or saved, this counter is incremented. If you pass the *marker* parameter, the command returns, in *arrNames*, only forms corresponding to marker values that are greater than or equal to that of the *marker*. In addition, if you pass a variable in *marker*, the command returns the new value of the modification counter, i.e., the highest one, in this variable. You can then save this value and use it in the next call of the **FORM GET NAMES** command to retrieve only new or modified forms. 

If the command is executed from a component, it returns by default the names of the component project forms. If you pass the *\** parameter, the array contains the forms of the host database. 

**Note:** Forms placed in the trash are not listed. 

#### Example 

Examples of typical use:

```4d
  // List all the project forms of the database
 FORM GET NAMES(arr_Names)
 
  // List forms of the [Employees] table
 FORM GET NAMES([Employees] ;arr_Names)
 
  // List "input" forms of the [Employees] table
 FORM GET NAMES([Employees] ;arr_Names;"input_@")
 
  // List specific project forms of the database
 FORM GET NAMES(arr_Names;"dialogue_@")
 
  // List all project forms in database that were modified since the last synchronization
  // vMarker contains a numeric value
 FORM GET NAMES(arr_Names;"";vMarker)
 
  // List table forms from a component
  // A pointer is necessary because the table name is unknown
 FORM GET NAMES(tablePtr->;arr_Names;*)
```

#### See also 

[METHOD GET PATHS FORM](method-get-paths-form.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1167 |
| Thread safe | &cross; |

