---
id: form-theme
title: FORM theme
slug: /commands/form-theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme** : Text<!-- END REF-->

<!--REF #_command_.FORM theme.Params-->

<div class="no-index">

| 引数  | 型    |                             | 説明                                                                                         |
| --- | ---- | --------------------------- | ------------------------------------------------------------------------------------------ |
| 戻り値 | Text | &#8592; | カレントフォームで使用されているテーマ:<ul><li>Windows: "Classic" または "FluentUI"</li><li>macOS: "Classic" または "LiquidGlass"</li></ul>

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 21 R3 | macOSの LiquidGlassのサポート |
| 21 R2 | 追加 |

</details>
</div>

## 説明

<!--REF #_command_.FORM theme.Summary-->**FORM theme** コマンドはカレントフォームに対して実際にレンダリングされているOS インターフェーステーマを返します: "FluentUI" (Windows)、 "LiquidGlass" (macOS)、 あるいは "Classic" (全てのプラットフォーム)。<!-- END REF-->

カレントフォームがない場合、**FORM theme** は空の文字列を返します。

### Windows

Windows フォームレンダリングテーマは、[アプリケーションレベル](../../settings/interface.md#use-fluent-ui-on-windows) あるいは [フォームレベル](../../FormEditor/properties_FormProperties.md#form-theme-on-windows) (継承するかあるいは明示的に定義することが可能) で定義することが可能で、またランタイムでのカレントマシン上における [特定のMicrosoft ライブラリーの利用可能性](../../FormEditor/forms.md#要件) にも依存します。 このコマンドを使用することで、どのフォームテーマが現在実行中なのかを知ることができます。

### macOS

バージョン 21 R3 以降、4D および4D Server はmacOS 26 Tahoe 上のLiquid Glass インターフェースでネイティブに実行されます。このレンダリングは自動的に使用され無効化することはできません。ただし組み込みアプリケーションであれば、開発者にそのフォームを調整するための追加の時間を与えるための移行方法として無効化することができます(*Info.plist* ファイルの"UIDesignRequiresCompatibility" キーについては[Apple のドキュメント](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility) を参照してください)。



## 参照

[Fluent UI レンダリング](../../FormEditor/forms.md#fluent-ui-rendering)
[(blog 記事) Deploy Fluent UI effortlessly in your 4D applications](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications/)   
[(blog 記事) The new macOS Tahoe design comes to your 4D applications](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications)

## プロパティ

|         |      |
| ------- | ---- |
| コマンド番号  | 1832 |
| スレッドセーフ | ×    |


