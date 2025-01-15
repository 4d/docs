---
id: form-goto-page
title: FORM GOTO PAGE
slug: /commands/form-goto-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM GOTO PAGE.Syntax-->**FORM GOTO PAGE** ( *pageNumber* {; *} )<!-- END REF-->
<!--REF #_command_.FORM GOTO PAGE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pageNumber | Integer | &#8594;  | Form page to display |
| * | Operator | &#8594;  | Change page of current subform |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GOTO PAGE.Summary-->**FORM GOTO PAGE** changes the currently displayed form page to the form page specified by *pageNumber*.<!-- END REF-->

If no form is displayed or loaded by the [FORM LOAD](../commands/form-load.md) command, or if *pageNumber* corresponds to the current page of the form, **FORM GOTO PAGE** does nothing. If *pageNumber* is greater than the number of pages, the last page is displayed. If *pageNumber* is less than one, the first page is displayed.

The *\** parameter is useful when the command is called in the context of a page type subform containing several pages. In this case, when you pass this parameter, the command changes the page of the current subform (the one that called the command). By default, when the *\** parameter is omitted, the command is always applied to the parent form.

##### About form page management commands 

Automatic action buttons perform the same tasks as the [FORM FIRST PAGE](form-first-page.md), [FORM LAST PAGE](form-last-page.md), [FORM NEXT PAGE](form-next-page.md), [FORM PREVIOUS PAGE](form-previous-page.md) and **FORM GOTO PAGE** commands that you can apply to objects such as tab controls, drop-down list boxes, and so on. Whenever appropriate, use automatic action buttons instead of commands. 

Page commands can be used with input forms or with forms displayed in dialogs. Output forms use only the first page. A form always has at least one page—the first page. Remember that regardless of the number of pages a form has, only one form method exists for each form. 

* Use the [FORM Get current page](form-get-current-page.md) command to find out which page is being displayed.
* Use the On Page Change [Form event code](../commands/form-event-code.md) that is generated each time the current page of the form changes.

**Note:** When **designing** a form, you can work with pages 1 through X, as well as with page 0, in which you put objects that will appear in all of the pages. When **using** a form, and therefore when calling page commands, you work with pages 1 through X; page 0 is automatically combined with the page being displayed.

#### Example 

The following example is an object method for a button. It displays a specific page, page 3: 

```4d
 FORM GOTO PAGE(3)
```

#### See also 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 247 |
| Thread safe | &cross; |


