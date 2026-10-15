---
id: set-application-color-scheme
title: SET APPLICATION COLOR SCHEME
slug: /commands/set-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Syntax-->**SET APPLICATION COLOR SCHEME** ( *colorScheme* : Text )<!-- END REF-->
<!--REF #_command_.SET APPLICATION COLOR SCHEME.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| colorScheme | Text | &#8594;  | "light", "dark", or "inherited" |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Summary-->The **SET APPLICATION COLOR SCHEME** command defines the color scheme to use at the application level for the current session.<!-- END REF--> This scheme will be applied to forms that do not already declare a specific scheme (a color scheme defined at the form level takes priority over the application level).

**Note:** This command does nothing on Windows with [Classic theme](../../settings/interface.md#use-fluent-ui-on-windows). In this context, the only available scheme is "light".

In the *colorScheme* parameter, pass a color scheme to apply:

* **"light"** \- the application will use the Default Light Theme
* **"dark"** \- the application will use the Default Dark Theme
* **"inherited"** \- the application will inherit from the higher priority level (i.e., in Settings)

## Example 

```4d
  // Force the current application in dark
 SET APPLICATION COLOR SCHEME("dark")
```

## See also 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[Get Application color scheme](../commands/get-application-color-scheme)  

## Properties

|  |  |
| --- | --- |
| Command number | 1762 |
| Thread safe | no |


