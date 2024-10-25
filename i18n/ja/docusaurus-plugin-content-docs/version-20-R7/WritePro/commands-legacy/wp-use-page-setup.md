---
id: wp-use-page-setup
title: WP USE PAGE SETUP
slug: /WritePro/commands/wp-use-page-setup
displayed_sidebar: docs
---

<!--REF #_command_.WP USE PAGE SETUP.Syntax-->**WP USE PAGE SETUP** ( *wpDoc* )<!-- END REF-->
<!--REF #_command_.WP USE PAGE SETUP.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Proドキュメント |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP USE PAGE SETUP.Summary-->**WP USE PAGE SETUP** コマンドはカレントのプリンターページ設定を、4D Write Proドキュメント属性のページサイズとページの向きに変更します。<!-- END REF-->このコマンドは、カレントのプリンターページ設定を4D Write Proドキュメントページ設定と同期させるために、[WP PRINT](wp-print.md)の直前に呼び出される必要があります。

その他の設定は [PRINT SETTINGS](../../commands-legacy/print-settings.md) 4Dコマンドによって定義されます。カレントの印刷設定は 4Dセッション全体に対して設定されます。

#### 例題 

ドキュメントを印刷する前に、そのサイズと向きをドキュメント内に保存されている値に設定したい場合を考えます:

```4d
 WP USE PAGE SETUP(writeProDoc)
```

#### 参照 

[WP PRINT](wp-print.md)  