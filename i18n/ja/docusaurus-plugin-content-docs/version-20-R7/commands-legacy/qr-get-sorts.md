---
id: qr-get-sorts
title: QR GET SORTS
slug: /commands/qr-get-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SORTS.Syntax-->**QR GET SORTS** ( *area* ; *aColumns* ; *aOrders* )<!-- END REF-->
<!--REF #_command_.QR GET SORTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| aColumns | Real array | &#8592; | ソートされたカラム |
| aOrders | Real array | &#8592; | ソート順 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR GET SORTS.Summary-->QR GET SORTS コマンドは、次の2つの配列を作成します:

* *aColumns*  
この配列には、ソート順が設定されているすべてのカラムが格納されます。<!-- END REF-->
* *aOrders*  
この配列の各要素には、対応するカラムの並び替え順が格納されます。  
   * *aOrders{$i}*が1の場合、並び替え順は昇順です。  
   * *aOrders{$i}*が-1の場合、並び替え順は降順です。

##### クロステーブルモード 

クロステーブルモードの場合、結果の配列に格納される項目は2つ以下となります。これは、ソートが実行されるのが、カラム (1) と行 (2) だけであるためです (*aColumns*の値)。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR SET SORTS](qr-set-sorts.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 753 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


