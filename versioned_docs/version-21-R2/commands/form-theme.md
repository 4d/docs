---
id: form-theme
title: FORM theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->
<!--REF #_command_.FORM theme.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Theme used by the current form: "Classic" or "FluentUI" (Windows) |

<!-- END REF-->


<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R2|Added|

</details>


## Description 

<!--REF #_command_.FORM theme.Summary-->The **FORM theme** command returns the Windows theme actually rendered for the current form: "Classic" or "FluentUI".<!-- END REF-->

The Windows form rendering theme can be defined at [application level](../settings/interface.md#use-fluent-ui-on-windows) and/or at [form level](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (where it can be inherited or explicitely defined), and also depends on the [availability of specific Microsoft libraries](../FormEditor/forms.md#requirements) on the current machine at runtime. This command allows you to know which form theme is currently running. 

If there is no current form, or if the command is executed on macOS, **FORM theme** returns an empty string. 


## See also 

[Fluent UI rendering](../FormEditor/forms.md#fluent-ui-rendering)  

## Properties

|  |  |
| --- | --- |
| Command number | 1832 |
| Thread safe | no |


