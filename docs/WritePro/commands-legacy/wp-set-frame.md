---
id: wp-set-frame
title: WP SET FRAME
slug: /WritePro/commands/wp-set-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP SET FRAME.Syntax-->**WP SET FRAME** ( {* ;} *wpArea* ; *frameSelector* {; *textBoxID*} )<!-- END REF-->
<!--REF #_command_.WP SET FRAME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable. |
| wpArea | String | &#x1F852; | Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted) |
| frameSelector | Longint | &#x1F852; | Frame where the cursor should be set |
| textBoxID | String | &#x1F852; | Id of the text box where the cursor should be set |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP SET FRAME.Summary-->The **WP SET FRAME** command sets the cursor into the frame designated by *frameSelector* and optionally, *textBoxID*, in the 4D Write Pro *wpArea* area.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that *wpArea* is a form object name (string). If you do not pass this parameter, you indicate that *wpArea* is a 4D Write Pro object variable or field. 

**Note**: This command can only be used if the *wpArea* is associated with a form object (*i.e.* it is displayed in the current form/page).

You can pass in *frameSelector* one of the following constants from the *4D Write Pro Constants* theme: 

| Constant                          | Type    | Value | Comment                                                                                |
| --------------------------------- | ------- | ----- | -------------------------------------------------------------------------------------- |
| wk body                           | Longint | 0     | Body frame of the section                                                              |
| wk current page footer            | Longint | 2     |                                                                                        |
| wk current page header            | Longint | 1     |                                                                                        |
| wk current section default footer | Longint | 10    | Default footer of the section (available only if there is no active subsection footer) |
| wk current section default header | Longint | 9     | Default header of the section (available only if there is no active subsection header) |
| wk current section first footer   | Longint | 4     | Footer of the first page of the section                                                |
| wk current section first header   | Longint | 3     | Header of the first page of the section                                                |
| wk current section left footer    | Longint | 6     | Footer of the left page(s) of the section                                              |
| wk current section left header    | Longint | 5     | Header of the left page(s) of the section                                              |
| wk current section right footer   | Longint | 8     | Footer of the right page(s) of the section                                             |
| wk current section right header   | Longint | 7     | Header of the right page(s) of the section                                             |
| wk text box                       | Longint | 11    | Text box                                                                               |

* If wk current page header or wk current page footer is passed in *frameSelector*, **WP SET FRAME** will give focus to the first selected page header or footer, no matter the sub-section type (if it does not contain any header or footer, the command will do nothing).
* If any of the wk current section\[...\] constants are passed in *frameSelector*, **WP SET FRAME** will give focus to the specified sub-section header or footer of the first selected section (if it does not contain any header or footer, the command will do nothing).
* **WP SET FRAME** will do nothing if the *frameSelector* frame does not exist for the selection section (for example, wk current section left header when there is no distinction between left and right pages in *wpArea*).

If *frameSelector* \= wk text box, you must pass the *textBoxID* parameter with the **id** of the text box in which to set the focus. In this case, if *textBoxID* is omitted or if there is no text box with the specified id or if there is no page corresponding to the anchor conditions of the text box, the command does nothing. The *textBoxID* parameter is ignored if *frameSelector* \# wk text box.

#### Example 

You want to set the cursor to the left footer of the current section:

```4d
 WP SET FRAME(*;"WPArea";wk current section left footer)
```

#### See also 

[WP Get frame](wp-get-frame.md)  