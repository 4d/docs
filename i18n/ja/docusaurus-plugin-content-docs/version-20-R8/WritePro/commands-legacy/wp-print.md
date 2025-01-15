---
id: wp-print
title: WP PRINT
slug: /WritePro/commands/wp-print
displayed_sidebar: docs
---

<!--REF #_command_.WP PRINT.Syntax-->**WP PRINT** ( *wpDoc* {; *printOptions*} )<!-- END REF-->
<!--REF #_command_.WP PRINT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| printOptions | Integer | &#8594;  | 4D Write Pro ドキュメントの印刷オプション |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP PRINT.Summary-->**WP PRINT** コマンドは、*wpDoc* で指定した 4D Write Proドキュメントの印刷ジョブをローンチするか、あるいは[OPEN PRINTING JOB](../../commands-legacy/open-printing-job.md) と [CLOSE PRINTING JOB](../../commands-legacy/close-printing-job.md) の間に呼び出された場合には、ドキュメントをカレントの印刷ジョブに追加します。<!-- END REF-->**WP PRINT** は通常の [PRINT SETTINGS](../../commands-legacy/print-settings.md) あるいは [SET PRINT OPTION](../../commands-legacy/set-print-option.md) コマンドで定義された印刷設定を使用しますが、ページの余白に関しては常に 4D Write Pro ドキュメントの設定を使用します。また、**WP PRINT** はカレントのページ設定オプション (ページサイズやページの向きなど) を使用しますが、[WP USE PAGE SETUP](wp-use-page-setup.md) が先に呼び出されていた場合には、指定ドキュメントにおけるこれらの設定を使用します。

任意の*printOptions* 引数を使用して、印刷出力に HTML WYSIWYG ビューを設定したりフォーミュラの計算を設定したりすることができます。"4D Write Pro" テーマの次の定数を一つまたは複数組み合わせて受け渡すことができます:

| 定数                              | 型    | 値 | コメント                                                       |
| ------------------------------- | ---- | - | ---------------------------------------------------------- |
| wk 4D Write Pro layout          | 倍長整数 | 0 | 標準の4D Write Proレイアウト。いくつかの特定のスタイル属性を含める事ができます。             |
| wk do not recompute expressions | 倍長整数 | 2 | ドキュメントまたは変数内の全てのフォーミュラが、印刷時または固定化時に再計算されないように指定します。        |
| wk html wysiwyg                 | 倍長整数 | 1 | このレイアウトでは、4D Write Proの高度な属性のうち、全てのブラウザで互換性があるもの以外は除去されます。 |
| wk recompute expressions        | 倍長整数 | 0 | ドキュメントまたは変数内の全てのフォーミュラが、印刷時または固定化時に再計算されるように指定します(デフォルト値)。 |

*printOptions* が省略された場合、デフォルトで4D Write Pro レイアウトが使用され、式は(あれば)再計算されます。

**注:** **WP PRINT** を使用して印刷した場合、エリアのビュープロパティ (*ビュープロパティの設定* 参照) の設定にかかわらず、4D Write Pro ドキュメントは常にページビューモードのとおりに印刷されます。

**互換性に関する注意:** GDI-ベースの旧式印刷レイヤー([SET PRINT OPTION](../../commands-legacy/set-print-option.md) コマンドを使用して設定可能)は廃止予定となっており、**WP PRINT** と使用してはいけません。レンダリング時にアーティファクトが出るおそれがあるからです。このコマンドではデフォルトの印刷レイヤーのみを使用することが推奨されています。

#### 例題 

変数の値に応じて、4D Write Pro ドキュメントを標準レイアウト、あるいは HTML wysiwyg レイアウトで印刷します:

```4d
  // HTML wysiwyg レイアウトまたは4D Write Pro レイアウトで印刷します
 If(rb_htmlwysiwyg=1)
    WP PRINT(writeProDoc;wk html wysiwyg)
 Else
    WP PRINT(writeProDoc;wk 4D Write Pro layout)
 End if
```

#### 参照 

[WP Get position](wp-get-position.md)  
[WP USE PAGE SETUP](wp-use-page-setup.md)  