---
id: qr-set-sorts
title: QR SET SORTS
slug: /commands/qr-set-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SORTS.Syntax-->**QR SET SORTS** ( *area* ; *aColumns* {; *aOrders*} )<!-- END REF-->
<!--REF #_command_.QR SET SORTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| aColumns | Real array | &#8594;  | カラム |
| aOrders | Real array | &#8594;  | ソート方向 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET SORTS.Summary-->QR SET SORTS コマンド使用し、*area*に渡した参照のレポート内にあるカラムのソート順を設定できます。<!-- END REF-->

*aColumns*には、ソート順を設定しようとする各カラムのカラム番号を格納します。

*aOrders*には、*aColumns*配列内の対応するカラムのソート順を格納しなくてはなりません。

* *aOrders{$i}*が1の場合、ソート順は昇順です。
* *aOrders{$i}*が-1の場合、ソート順は降順です。

##### クロステーブルモード 

クロステーブルモードの場合、2つより多くの項目を配列に納めることはできません。ソートされるのは、カラム (1) と行 (2) だけです。データ (カラムと行の交差する場所に位置する) をソートすることはできません。 

次に示すコードは、クロステーブルレポートにおいて行だけを並び替えます:

```4d
 ARRAY REAL($aColumns;1)
 $aColumns{1}:=2
 ARRAY REAL($aOrders;1)
 $aOrders{1}:=-1 //Alphabetic sort for rows
 QR SET SORTS(qr_area;$aColumns;$aOrders)
```

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR GET SORTS](qr-get-sorts.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 752 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


