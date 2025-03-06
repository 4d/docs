---
id: form-last-page
title: FORM LAST PAGE
slug: /commands/form-last-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM LAST PAGE.Syntax-->**FORM LAST PAGE**<!-- END REF-->
<!--REF #_command_.FORM LAST PAGE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM LAST PAGE.Summary-->FORM LAST PAGE changes the currently displayed form page to the last form page.<!-- END REF--> If a form is not being displayed or loaded by the [FORM LOAD](form-load.md) command, or if the last form page is already displayed, FORM LAST PAGE does nothing.

#### Example 

The following example is a one-line method called from a menu command. It displays the last form page:

```4d
 FORM LAST PAGE
```

#### See also 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 251 |
| Thread safe | &cross; |


