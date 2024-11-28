---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.FORM FIRST PAGE.Summary-->FORM FIRST PAGE changes the currently displayed form page to the first form page.<!-- END REF--> If no form is being displayed or loaded by the [FORM LOAD](../commands/form-load.md) command, or if the first form page is already displayed, FORM FIRST PAGE does nothing.

#### Example 

The following example is a one-line method called from a menu command. It displays the first form page:

```4d
 FORM FIRST PAGE
```

#### See also 

[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  