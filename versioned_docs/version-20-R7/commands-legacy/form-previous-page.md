---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE changes the currently displayed form page to the previous form page.<!-- END REF--> If no form is being displayed or loaded by the [FORM LOAD](form-load.md) command, or if the first form page is already displayed, FORM PREVIOUS PAGE does nothing.

#### Example 

The following example is a one-line method called from a menu command. It displays the form page that precedes the one currently displayed:

```4d
 FORM PREVIOUS PAGE
```

#### See also 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 249 |
| Thread safe | &check; |
| Forbidden on the server ||


