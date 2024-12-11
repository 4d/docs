---
id: get-application-color-scheme
title: Get application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get application color scheme.Syntax-->**Get application color scheme** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Get application color scheme.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns color scheme of host database |
| Function result | Text | &#8592; | Current application color scheme |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get application color scheme.Summary-->The **Get application color scheme** command returns the name of the actual color scheme in use at the application level.<!-- END REF--> 

**Note:** On Windows, this command always returns "light".

The actual color scheme is defined by:

* a call to the [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) command;
* if [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) was not called or called with "inherited" parameter value, the Settings (host database Settings in case of a component);
* if settings set to "inherited", the OS user preferences.

The *\** parameter is useful when the command is called from a component: when it is passed, the command returns the color scheme of the host database. 

Please refer to the [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) command description for details about color scheme names. 

#### Example 

```4d
 var $colorScheme : Text
 
  // Retrieve the colorScheme of the host database
 $colorScheme:=Get application color scheme(*)
```

#### See also 

[FORM Get color scheme](form-get-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1763 |
| Thread safe | &check; |
| Forbidden on the server ||


