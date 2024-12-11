---
id: form-screenshot
title: FORM SCREENSHOT
slug: /commands/form-screenshot
displayed_sidebar: docs
---

<!--REF #_command_.FORM SCREENSHOT.Syntax-->**FORM SCREENSHOT** ( {{*aTable* ;} *formName* ;} *formPict* {; *pageNum*} )<!-- END REF-->
<!--REF #_command_.FORM SCREENSHOT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Form table |
| formName | Text | &#8594;  | Name of form |
| formPict | Picture | &#8592; | Picture of form being executed if first parameter(s) omitted, or <br/>Picture of form in Form editor if a form name is passed |
| pageNum | Integer | &#8594;  | Form page number |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM SCREENSHOT.Summary-->The FORM SCREENSHOT command returns a form as a picture.<!-- END REF--> This command accepts two different syntaxes: depending on the syntax used, you get either a picture of an executed form, or a picture of the form in the Form editor.

* FORM SCREENSHOT ( formPict )  
This syntax gets a screenshot of the current page of the form being executed or loaded by means of the [FORM LOAD](form-load.md) command: the picture returned in the *formPict* parameter contains all the form's visible objects with the current field and variable values of the form, subform, and so on. The form is returned in full, without taking the size of the window that contains it into account.  
Note that this syntax only works with input forms.
* FORM SCREENSHOT ( {*aTable* ;} formName; formPict{; *pageNum*} )  
This syntax gets a screenshot of a form "template" as it is displayed in the Form editor. All visible objects are drawn like they are in the editor; the command takes inherited forms and objects placed on page 0 into account.  
If you want a screenshot for a table form, pass the form table in the *aTable* parameter and then pass its name as a string in *formName*. For a project form, pass the form name directly in *formName*.  
By default, the command returns a screenshot of page 1 of the form. If you only want a picture of page 0, or any other page of the form, pass the desired page number in the *pageNum* parameter.

**Notes:** 

* Web areas are not rendered in the returned screenshot.
* Since the first two parameters of this command are optional, you cannot pass a function returning a pointer, such as [Current form table](current-form-table.md)\-> or [Table](table.md)\->, directly as an argument. Although this syntax would work in interpreted mode, it would be rejected during compilation, so instead you need to use an intermediate pointer variable in this case. For more information, refer to "*Direct use of commands returning pointers*".

#### See also 

[FORM LOAD](form-load.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 940 |
| Thread safe | &check; |
| Forbidden on the server ||


