---
id: wp-get-subsection
title: WP Get subsection
slug: /WritePro/commands/wp-get-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP Get subsection.Syntax-->**WP Get subsection** ( *targetObj* ) | (*wpSection* ; *subSectionType* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get subsection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element |
| wpSection | Object | &#8594;  | 4D Write Pro section |
| subSectionType | Integer | &#8594;  | Subsection type (wk first page, wk left page, or wk right page) |
| Function result | Object | &#8592; | Subsection |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get subsection.Summary-->The **WP Get subsection** command returns first subsection intersected by the *targetObj* range or element, or to the specified *subSectionType* subsection of the *wpSection* section.<!-- END REF-->

* With the first syntax (using the *targetObj* parameter), the command returns the first subsection which intersects the range or the element. If no subsection intersects the range or the element, a **null** object is returned. You can pass in *targetObj*:  
   * a range, or  
   * an element (table / row / paragraph / body / text box / header / footer ).  
If the range or element is or belongs to a header, a footer, or a text box, **WP Get subsection** returns the subsection to which the *targetObj* is attached. If the *targetObj* is not attached to a subsection, a **null** object is returned.  
If the range or element belongs to an anchored picture, an error is returned.
* With the second syntax (using the *wpSection* and *subSectionType* parameters), the command returns a *wpSubSection* object (child of *wpSection*) of the the *subSectionType* type. Pass one of the following constants in the *subSectionType* parameter:  
    
| Constant      | Type    | Value |  
| ------------- | ------- | ----- |  
| wk first page | Integer | 1     |  
| wk left page  | Integer | 2     |  
| wk right page | Integer | 3     |  
    
    
If no *subSectionType* subsection is defined for the specified *wpSection*, the command returns an undefined object (no error is returned).

#### Example 

You want to apply a blue background on left pages:

```4d
 var $section;$subsection : Object
  //Retrieve the reference on the first section
 $section:=WP Get section(wpDoc;1)
  //Retrieve the reference on the left subsection of the first section
 $subsection:=WP Get subsection($section;wk left page)
 
  //If the subsection exists, set the background to blue
 If($subsection#Null)
    WP SET ATTRIBUTES($subsection;wk background color;"#87CEEB")
 Else
    ALERT("Please, create left and right subsections.")
 End if
```

#### See also 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get section](wp-get-section.md)  
[WP New subsection](wp-new-subsection.md)  