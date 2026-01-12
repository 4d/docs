---
id: form-theme
title: FORM theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->

<!--REF #_command_.FORM theme.Params-->

| 引数  | 型    |                             | 説明                                                                                                   |
| --- | ---- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| 戻り値 | Text | &#8592; | Theme used by the current form: "Classic" or "FluentUI" (Windows) |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 21 R2 | 追加 |

</details>

## 説明

<!--REF #_command_.FORM theme.Summary-->The **FORM theme** command returns the Windows theme actually rendered for the current form: "Classic" or "FluentUI"<!-- END REF-->。

The Windows form rendering theme can be defined at [application level](../settings/interface.md#use-fluent-ui-on-windows) and/or at [form level](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (where it can be inherited or explicitely defined), and also depends on the [availability of specific Microsoft libraries](../FormEditor/forms.md#requirements) on the current machine at runtime. This command allows you to know which form theme is currently running.

If there is no current form, or if the command is executed on macOS, **FORM theme** returns an empty string.

## 参照

[Fluent UI rendering](../FormEditor/forms.md#fluent-ui-rendering)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1832                        |
| スレッドセーフ | &cross; |


