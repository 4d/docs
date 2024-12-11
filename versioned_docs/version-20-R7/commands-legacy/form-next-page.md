---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM NEXT PAGE.Summary-->FORM NEXT PAGE changes the currently displayed form page to the next form page.<!-- END REF--> If no form is being displayed or loaded by the [FORM LOAD](form-load.md) command, or if the last form page is already displayed, FORM NEXT PAGE does nothing.

#### Example 

The following example is a one-line method called from a menu command. It displays the form page that follows the one currently displayed:

```4d
 FORM NEXT PAGE
```

#### See also 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 248 |
| Thread safe | &check; |
| Forbidden on the server ||


