---
id: form-theme
title: FORM theme
slug: /commands/form-theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->
<!--REF #_command_.FORM theme.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Theme used by the current form:<ul><li>Windows: "Classic" or "FluentUI"</li><li>macOS: "Classic" or "LiquidGlass"</li></ul>|
</div>
<!-- END REF-->


<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Support of LiquidGlass on macOS |
|21 R2|Added|

</details>


## Description 

<!--REF #_command_.FORM theme.Summary-->The **FORM theme** command returns the OS interface theme rendered for the current form: "FluentUI" (Windows), "LiquidGlass" (macOS), or "Classic" (all platforms).<!-- END REF-->

If there is no current form, **FORM theme** returns an empty string. 

### Windows

The Windows form rendering theme can be defined at [application level](../../settings/interface.md#use-fluent-ui-on-windows) and/or at [form level](../../FormEditor/properties_FormProperties.md#form-theme-on-windows) (where it can be inherited or explicitely defined), and also depends on the [availability of specific Microsoft libraries](../../FormEditor/forms.md#requirements) on the current machine at runtime. This command allows you to know which form theme is currently running. 

### macOS

As of version 21 R3, 4D and 4D Server run natively under Liquid Glass interface on macOS 26 Tahoe. This rendering is automatically used and cannot be disabled, except in engine-based applications as a transitional measure to give developers additional time to adapt their forms (see [Apple's documentation](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility) about the "UIDesignRequiresCompatibility" *Info.plist* file key).



## See also 

[Fluent UI rendering](../../FormEditor/forms.md#fluent-ui-rendering)  
[(blog post) Deploy Fluent UI effortlessly in your 4D applications](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications/)   
[(blog post) The new macOS Tahoe design comes to your 4D applications](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications)

## Properties

|  |  |
| --- | --- |
| Command number | 1832 |
| Thread safe | no |


