---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MESSAGES OFF.Summary-->MESSAGES OFF および [MESSAGES ON](messages-on.md) コマンドは、時間のかかる処理を行っている際に4Dが表示する進捗インジケータの表示/非表示を切り替えます。<!-- END REF-->デフォルトでは、メッセージは表示されます。

進捗インジケータを表示する処理を以下の表に示します:

| フォーミュラの適用  | クイックレポート     | 並び替え    |
| ---------- | ------------ | ------- |
| データの書き出し   | データの読み込み     | グラフ     |
| フォームによるクエリ | フォーミュラによるクエリ | クエリエディタ |

進捗インジケータを表示するコマンドは以下の通りです:

[APPLY TO SELECTION](apply-to-selection.md)  
[Average](average.md)  
[BUILD APPLICATION](build-application.md)  
[DISTINCT VALUES](distinct-values.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[ORDER BY FORMULA](order-by-formula.md)  
[QR REPORT](qr-report.md)  
[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[REDUCE SELECTION](reduce-selection.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  
[SCAN INDEX](scan-index.md)  
[Sum](sum.md)

**4D Serverでの注意:** 進捗メッセージウィンドウは、それらのオペレーションが管理ウィンドウの *\_o\_PAGE SETUP* にて自動的に表示されるため、サーバー側では表示されません。これらの進捗ウィンドウを強制的に表示したい場合は、サーバー側で [MESSAGES ON](messages-on.md) を呼び出す必要があります。

#### 例題 

以下の例は、並び替えを実行する前に進捗インジケータを非表示にし、処理が完了した時点で表示に戻します:

```4d
 MESSAGES OFF
 ORDER BY([Addresses];[Addresses]ZIP;>;[Addresses]Name2;>)
 MESSAGES ON
```

#### 参照 

[MESSAGES ON](messages-on.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 175 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


