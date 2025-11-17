---
id: form-windows-theme
title: FORM Windows theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM Windows theme.Syntax-->**FORM Windows theme** : Text<!-- END REF-->
<!--REF #_command_.FORM Windows theme.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Windows theme used by the current form: "Classic" or "FluentUI" |

<!-- END REF-->
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R2|Added|

</details>


## Description 

<!--REF #_command_.FORM Windows theme.Summary-->The **FORM Windows theme** command returns the Windows theme actually rendered for the current form: "Classic" or "FluentUI"<!-- END REF-->.

The Windows form rendering theme can be defined at [application level] and/or at [form level] (where it can be inherited or explicitely defined), and also depends on the availability of specific Microsoft libraries on the current machine at runtime. This command allows you to know which form rendering theme is currently running. 

If there is no current form, or if the command is executed on macOS, **FORM Windows theme** returns an empty string. 


## See also 

[Fluent UI rendering](../FormEditor/forms.md#fluent-ui-rendering)  

## Properties

|  |  |
| --- | --- |
| Command number | 1832 |
| Thread safe | &cross; |


