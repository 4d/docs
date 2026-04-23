---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( *preview* : Boolean )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| preview | Boolean | &#8594; | スクリーンにプレビュー (TRUE), または プレビューしない (FALSE) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004.5|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->**SET PRINT PREVIEW** は、プリントダイアログボックスのプレビュー設定のオン/オフをメソッドで切り替るためのものです。<!-- END REF-->*preview* に[True](../commands/true) を渡すとプレビューは有効になり、[False](../commands/false) を渡すと無効になります。この設定はプロセスに対してローカルであり、他のプロセスや他のユーザの印刷には影響を与えません。

**注意:** Windows では、 [SET PRINT OPTION](../commands/set-print-option) コマンドを使用することで印刷プレビューフォーマットを定義することができます。

## 例題 

以下の例は、検索結果をスクリーン表示するために、まずプレビューを有効にし、それから無効に切り替えます。

```4d
 QUERY([Customers])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Customers] ;*)
    SET PRINT PREVIEW(False)
 End if
```

## 参照 

[Get print preview](../commands/get-print-preview)  
[Is in print preview](../commands/is-in-print-preview)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 364 |
| スレッドセーフである | no |


