---
id: get-print-marker
title: Get print marker
slug: /commands/get-print-marker
displayed_sidebar: docs
---

<!--REF #_command_.Get print marker.Syntax-->**Get print marker** ( *markNum* ) : Integer<!-- END REF-->
<!--REF #_command_.Get print marker.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| markNum | Integer | &#8594;  | マーカ番号 |
| 戻り値 | Integer | &#8592; | マーカの位置 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get print marker.Summary-->Get print marker コマンドを使用し、印刷中にマーカの現在位置を取得することができます。<!-- END REF-->

このコマンドは次の2つの状況で使用することができます:

* [PRINT SELECTION](print-selection.md "PRINT SELECTION")および[PRINT RECORD](print-record.md "PRINT RECORD")コマンドのコンテキストでのOn Headerフォームイベント中で。
* [Print form](../commands/print-form.md "Print form")コマンドのコンテキストでのOn Printing Detailフォームイベント中で。

座標はピクセル単位で返されます (1ピクセル＝1/72インチ)。

*markNum*引数には、テーマ内の定数のうちのいずれかを渡します:

| 定数            | 型    | 値   |
| ------------- | ---- | --- |
| Form break0   | 倍長整数 | 300 |
| Form break1   | 倍長整数 | 301 |
| Form break2   | 倍長整数 | 302 |
| Form break3   | 倍長整数 | 303 |
| Form break4   | 倍長整数 | 304 |
| Form break5   | 倍長整数 | 305 |
| Form break6   | 倍長整数 | 306 |
| Form break7   | 倍長整数 | 307 |
| Form break8   | 倍長整数 | 308 |
| Form break9   | 倍長整数 | 309 |
| Form detail   | 倍長整数 | 0   |
| Form footer   | 倍長整数 | 100 |
| Form header   | 倍長整数 | 200 |
| Form header1  | 倍長整数 | 201 |
| Form header10 | 倍長整数 | 210 |
| Form header2  | 倍長整数 | 202 |
| Form header3  | 倍長整数 | 203 |
| Form header4  | 倍長整数 | 204 |
| Form header5  | 倍長整数 | 205 |
| Form header6  | 倍長整数 | 206 |
| Form header7  | 倍長整数 | 207 |
| Form header8  | 倍長整数 | 208 |
| Form header9  | 倍長整数 | 209 |

#### 例題 

[SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER")コマンドの例を参照 

#### 参照 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  