---
id: object-get-subform
title: OBJECT GET SUBFORM
slug: /commands/object-get-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM.Syntax-->**OBJECT GET SUBFORM** ( * ; *object* : Text ; *tablePtr* : Table ; *detailSubform* : Text {; *listSubform* : Text} )<br/>**OBJECT GET SUBFORM** ( *object* : Variable, Field ; *tablePtr* : Table ; *detailSubform* : Text {; *listSubform* : Text} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| tablePtr | Table | &#8592; | Pointer to table of form |
| detailSubform | Text | &#8592; | Name of detail form of subform |
| listSubform | Text | &#8592; | Name of list form of subform (table form) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R6|Modified|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT GET SUBFORM.Summary-->The **OBJECT GET SUBFORM** command gets the name(s) of the form(s) associated with the subform object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In the *tablePtr* parameter, the command returns a pointer to the table of the form(s) used. If the subform uses a project form, this parameter contains [Is nil pointer](../commands/is-nil-pointer). 

In the *detailSubform* and (optionally) *listSubform* parameters, the command returns:

* the form name if the subform was created in the 4D form editor.
* the subform's "name" attribute if the subform was created from a .json file or a 4D object.  
In both cases, if the "name" attribute is undefined, the command will return:  
   * for a .json file, the name of the .json file (without extension)  
   * for an object, "untitled"

If there is no list form, an empty string is returned in the *listSubform* parameter.

## See also 

[OBJECT GET SUBFORM CONTAINER SIZE](../commands/object-get-subform-container-size)  
[OBJECT SET SUBFORM](../commands/object-set-subform)  

## Properties

|  |  |
| --- | --- |
| Command number | 1139 |
| Thread safe | no |


