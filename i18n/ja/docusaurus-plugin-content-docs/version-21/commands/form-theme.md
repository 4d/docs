---
id: form-theme
title: FORM theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->

<!--REF #_command_.FORM theme.Params-->

<div class="no-index">

| 引数  | 型    |                             | 説明                                                                                         |
| --- | ---- | --------------------------- | ------------------------------------------------------------------------------------------ |
| 戻り値 | Text | &#8592; | カレントフォームで使用されているテーマ: "Classic" または "FluentUI" (Windows) |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 21 R2 | 追加 |

</details>
</div>

## 説明

<!--REF #_command_.FORM theme.Summary-->**FORM theme** コマンドはカレントフォームに対して実際にレンダリングされているWindows テーマを返します: "Classic" または "FluentUI"。<!-- END REF-->

Windows フォームレンダリングテーマは、[アプリケーションレベル](../settings/interface.md#use-fluent-ui-on-windows) あるいは [フォームレベル](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (継承するかあるいは明示的に定義することが可能) で定義することが可能で、またランタイムでのカレントマシン上における [特定のMicrosoft ライブラリーの利用可能性](../FormEditor/forms.md#要件) にも依存します。 このコマンドを使用することで、どのフォームテーマが現在実行中なのかを知ることができます。

カレントフォームがない場合、あるいはコマンドが macOS 上で実行された場合、 **FORM theme** は空の文字列を返します。

## 参照

[Fluent UI レンダリング](../FormEditor/forms.md#fluent-ui-rendering)

## プロパティ

|         |      |
| ------- | ---- |
| コマンド番号  | 1832 |
| スレッドセーフ | ×    |


