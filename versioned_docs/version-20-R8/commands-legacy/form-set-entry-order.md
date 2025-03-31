---
id: form-set-entry-order
title: FORM SET ENTRY ORDER
slug: /commands/form-set-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET ENTRY ORDER.Syntax-->**FORM SET ENTRY ORDER** ( *objectNames* {; *pageNumber*} )<!-- END REF-->
<!--REF #_command_.FORM SET ENTRY ORDER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectNames | Text array | &#8594;  | Array of object names in their expected entry order |
| pageNumber | Integer | &#8594;  | Number of the page to set the entry order (current page if omitted) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM SET ENTRY ORDER.Summary-->The **FORM SET ENTRY ORDER** command allows to set dynamically the entry order of the current form for the current process based upon the *objectNames* array.<!-- END REF--> 

Pass in *objectNames* an array containing the names of form objects to include in the entry order. The order of objects in the array defines the form entry order. Any valid form objects belonging to the current form can be listed. An object is valid if:

* it has the focusable property(**Note:** The command ignores the **Tabbable** object property),
* it exists in the form (its name is defined),
* it is used on the current page (or the *pageNumber* page, see below). Keep in mind that a form page includes page 0 objects and inherited form objects.

If an invalid object is detected at runtime, it is simply ignored and 4D will try to use the next valid object in the *objectNames* array. You can know the actual entry order of the current page (based upon valid objects) using the [FORM GET ENTRY ORDER](form-get-entry-order.md) command with the \* parameter. 

Optionnally, you can pass the *pageNumber* for which to set the entry order. If omitted, the command is applied to the current page. 

**Notes:** 

* The entry order of a subform is defined in the subform itself. You have to call the **FORM SET ENTRY ORDER** command in the subform context.
* This command does not define the first focused object in the form at runtime. If you want to set a first object in the entry order, you need to use the [GOTO OBJECT](goto-object.md) command in the On Load event of the form. If you used the [OBJECT DUPLICATE](object-duplicate.md) command, you can set the duplicated object as the first one by passing the Object First in entry order constant in the *boundTo* parameter.

**About the data entry order**  
The data entry order is the order in which fields, subforms, and all other active objects are selected as the user hits the **Tab** or the **Carriage return** key in a form. Reverse data entry order is also available by pressing the **Shift+Tab** or **Shift+Carriage return** keys. Entry order can be set by default or modified in the Form editor. For more information, please refer to the *Modifying data entry order* section in the *Design Reference* manual. 

#### Example 

You want to set the entry order of objects in the form based upon their names:

```4d
 ARRAY TEXT(tabNames;0)
 
 FORM GET OBJECTS(tabNames;Form current page+Form inherited) //get form object names
 SORT ARRAY(tabNames;>) //sort the names in ascending order
 FORM SET ENTRY ORDER(tabNames) //use the alphabetical order for entry order
  //non-focusable objects are ignored
```

#### See also 

[FORM GET ENTRY ORDER](form-get-entry-order.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1468 |
| Thread safe | &cross; |


