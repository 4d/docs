---
id: form-get-entry-order
title: FORM GET ENTRY ORDER
slug: /commands/form-get-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET ENTRY ORDER.Syntax-->**FORM GET ENTRY ORDER** ( *objectNames* {; pageNumber | *} )<!-- END REF-->
<!--REF #_command_.FORM GET ENTRY ORDER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectNames | Text array | &#8592; | Object names sorted by entry order |
| pageNumber &#124; * | Longint, Operator | &#8594;  | Number of the page for which to get the defined entry order (current page if omitted), or* to get the actual entry order of the current page |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET ENTRY ORDER.Summary-->The **FORM GET ENTRY ORDER** command returns in *objectNames* the sorted names of objects that define the form entry order.<!-- END REF--> 

* If you do not pass the *\** parameter, **FORM GET ENTRY ORDER** returns the entry order as it was previously declared with the [FORM SET ENTRY ORDER](form-set-entry-order.md) command. You can omit or pass the *pageNumber* parameter:  
   * if you omit the *pageNumber* parameter, the *objectNames* array returns the entry order for the current page,  
   * if you pass the *pageNumber* parameter, the *objectNames* array returns the entry order for the *pageNumber* page.  
In both cases, if the [FORM SET ENTRY ORDER](form-set-entry-order.md) command was not previously called for the current form, the *objectNames* array is returned empty.
* If you pass the *\** as parameter, **FORM GET ENTRY ORDER** returns the actual entry order of the current page, i.e. the *objectNames* array only contains **valid** object names (for more information on valid objects, please refer to the [FORM SET ENTRY ORDER](form-set-entry-order.md) command description). The actual form entry order can be:  
   * the default form entry order, based upon object layering,  
   * or the form editor's entry order (see *Modifying data entry order*), if it has been used,  
   * or the entry order set by a call to the [FORM SET ENTRY ORDER](form-set-entry-order.md) command in the current process, if it has been used.  
The actual entry order always includes objects from page 0 and from inherited form(s).

**Note:** The entry order within a subform is not returned when this command is applied to the parent form. 

#### Example 

You want to exclude some objects from the current entry order:

```4d
 ARRAY TEXT($arrTabOrderObject;0)
 var $vElem : Integer
 
 FORM GET ENTRY ORDER($arrTabOrderObject;*) //get the actual entry order
 Repeat
    $vElem:=Find in array($arrTabOrderObject;"vTax@")
    If($vElem>0) //exclude objects whose name starts with "vTax" from data entry order
       DELETE FROM ARRAY($arrTabOrderObject;$vElem)
    End if
 Until($vElem<0)
 FORM SET ENTRY ORDER($arrTabOrderObject) //apply the new entry order
```

#### See also 

[FORM SET ENTRY ORDER](form-set-entry-order.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1469 |
| Thread safe | &cross; |


