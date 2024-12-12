---
id: wa-get-url-filters
title: WA GET URL FILTERS
slug: /commands/wa-get-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| filtersArr | Text array | &#8592; | フィルタ配列 |
| allowDenyArr | Boolean array | &#8592; | 許可-拒否配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA GET URL FILTERS.Summary-->WA GET URL FILTERS コマンドは*filtersArr* と *allowDenyArr*配列に、*\** と *object* 引数で指定したWebエリアで有効なフィルタを返します。<!-- END REF-->フィルタが有効でない場合、空の配列が返されます。 

フィルタは[WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS") コマンドでインストールされます。セッション中に配列が最初期化されても、WA GET URL FILTERS コマンドを使用すれば現在の設定値を知ることができます。

#### 参照 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1031 |
| スレッドセーフである | &cross; |


