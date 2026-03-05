---
id: form-get-color-scheme
title: FORM Get color scheme
slug: /commands/form-get-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get color scheme.Syntax-->**FORM Get color scheme**  : Text<!-- END REF-->
<!--REF #_command_.FORM Get color scheme.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Color scheme of current form: "light" or "dark" |
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

<!--REF #_command_.FORM Get color scheme.Summary-->The **FORM Get color scheme** command returns the name of the actual color scheme of the currently displayed form.<!-- END REF--> If there is no current form, the command returns an empty string.

**Note**: On Windows with [Classic theme](../../settings/interface.md#use-fluent-ui-on-windows), this command always returns "light".

The actual color scheme of a form is defined by:

* the ["Color Scheme" form property](../../FormEditor/properties_FormProperties.md#color-scheme);
* if "Color Scheme" set to "inherited", a call to the [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) command;
* if [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) not called or called with "inherited" parameter value, the Settings (host database Settings in case of a component);
* if Settings set to "inherited", the OS user preferences.

Please refer to the [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) command for details about color scheme names. 

## Example 

You want to load a picture depending on the form current scheme:

```4d
 $txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")
 READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)
```

**Note:** It is recommended to use *css* to adapt form objects design to the current scheme. 

## See also 

[Get Application color scheme](../commands/get-application-color-scheme)  
[SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme)  

## Properties

|  |  |
| --- | --- |
| Command number | 1761 |
| Thread safe | no |


