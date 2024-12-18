---
id: wa-get-external-links-filters
title: WA GET EXTERNAL LINKS FILTERS
slug: /commands/wa-get-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Syntax-->**WA GET EXTERNAL LINKS FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| filtersArr | Text array | &#8592; | フィルタ配列 |
| allowDenyArr | Boolean array | &#8592; | 許可-拒否配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Summary-->WA GET EXTERNAL LINKS FILTERS コマンドは*filtersArr* と *allowDenyArr*配列に、*\** と *object* 引数で指定したWebエリアの外部リンクフィルタを返します。<!-- END REF-->フィルタが有効でない場合、空の配列が返されます。

フィルタは[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md "WA SET EXTERNAL LINKS FILTERS") コマンドでインストールされます。セッション中に配列が最初期化されても、WA GET EXTERNAL LINKS FILTERS コマンドを使用すれば現在の設定を取得できます。

#### 参照 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1033 |
| スレッドセーフである | &cross; |


