---
id: set-application-color-scheme
title: SET APPLICATION COLOR SCHEME
slug: /commands/set-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Syntax-->**SET APPLICATION COLOR SCHEME** ( *colorScheme* )<!-- END REF-->
<!--REF #_command_.SET APPLICATION COLOR SCHEME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| colorScheme | Text | &#8594;  | "light", "dark", or "inherited" |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Summary-->The **SET APPLICATION COLOR SCHEME** command defines the color scheme to use at the application level for the current session.<!-- END REF--> This scheme will be applied to forms that do not already declare a specific scheme (a color scheme defined at the form level takes priority over the application level).

**Note:** This command only works on macOS. On Windows, the only available scheme is "light".

In the *colorScheme* parameter, pass a color scheme to apply:

* **"light"** \- the application will use the Default Light Theme
* **"dark"** \- the application will use the Default Dark Theme
* **"inherited"** \- the application will inherit from the higher priority level (i.e., in Settings)

#### Example 

```4d
  // Force the current application in dark
 SET APPLICATION COLOR SCHEME("dark")
```

#### See also 

[FORM Get color scheme](form-get-color-scheme.md)  
[Get application color scheme](get-application-color-scheme.md)  