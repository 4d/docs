---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( *preview* )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| preview | Boolean | &#8594;  | スクリーンにプレビュー (TRUE), または プレビューしない (FALSE) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->**SET PRINT PREVIEW** は、プリントダイアログボックスのプレビュー設定のオン/オフをメソッドで切り替るためのものです。<!-- END REF-->*preview* に[True](true.md "True") を渡すとプレビューは有効になり、[False](false.md "False") を渡すと無効になります。この設定はプロセスに対してローカルであり、他のプロセスや他のユーザの印刷には影響を与えません。

**注意:** Windows では、 [SET PRINT OPTION](set-print-option.md) コマンドを使用することで印刷プレビューフォーマットを定義することができます。

#### 例題 

以下の例は、検索結果をスクリーン表示するために、まずプレビューを有効にし、それから無効に切り替えます。

```4d
 QUERY([Customers])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Customers] ;*)
    SET PRINT PREVIEW(False)
 End if
```

#### 参照 

[Get print preview](get-print-preview.md)  
[Is in print preview](is-in-print-preview.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 364 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


