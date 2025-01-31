---
id: wp-get-frame
title: WP Get frame
slug: /WritePro/commands/wp-get-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP Get frame.Syntax-->**WP Get frame** ( {* ;} *wpArea* {; *textBoxID*} ) : Integer<!-- END REF-->
<!--REF #_command_.WP Get frame.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable. |
| wpArea | Text | &#8594;  | Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted) |
| textBoxID | Text | &#x1F858; | ID of the text box (only filled if a text box has the focus) |
| Function result | Integer | &#8592; | Frame where the cursor is currently set |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP Get frame.Summary-->The **WP Get frame** command returns the frame where the cursor is currently set within the 4D Write Pro *wpArea* area.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that *wpArea* is a form object name (string). If you do not pass this parameter, you indicate that *wpArea* is a 4D Write Pro object variable or field. 

**Note**: This command can only be used if the *wpArea* is associated with a form object (*i.e.* it is displayed in the current form/page).

The returned value can be compared to one of the following constants from the *4D Write Pro Constants* theme:

| Constant                          | Type    | Value | Comment                                                                                |
| --------------------------------- | ------- | ----- | -------------------------------------------------------------------------------------- |
| wk body                           | Integer | 0     | Body frame of the section                                                              |
| wk current section default footer | Integer | 10    | Default footer of the section (available only if there is no active subsection footer) |
| wk current section default header | Integer | 9     | Default header of the section (available only if there is no active subsection header) |
| wk current section first footer   | Integer | 4     | Footer of the first page of the section                                                |
| wk current section first header   | Integer | 3     | Header of the first page of the section                                                |
| wk current section left footer    | Integer | 6     | Footer of the left page(s) of the section                                              |
| wk current section left header    | Integer | 5     | Header of the left page(s) of the section                                              |
| wk current section right footer   | Integer | 8     | Footer of the right page(s) of the section                                             |
| wk current section right header   | Integer | 7     | Header of the right page(s) of the section                                             |
| wk text box                       | Integer | 11    | Text box                                                                               |

If the cursor is currently set in a text box element, the element **id** of the text box is returned in the *textBoxID* parameter. In all other cases, this parameter is returned empty.

#### Example 

You want to make sure the user has set the cursor in a header or a footer frame:

```4d
 var $frameGet : Integer
 $frameGet:=WP Get frame(*;"WParea")
 If($frameGet=wk body)|($frameGet=wk text box)
    ALERT("Please select a footer or a header.")
 End if
```

#### See also 

[WP Get footer](wp-get-footer.md)  
[WP SET FRAME](wp-set-frame.md)  