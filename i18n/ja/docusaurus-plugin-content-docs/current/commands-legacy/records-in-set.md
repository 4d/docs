---
id: records-in-set
title: Records in set
slug: /commands/records-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Records in set.Syntax-->**Records in set** ( *set* ) : Integer<!-- END REF-->
<!--REF #_command_.Records in set.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| set | Text | &#8594;  | テストするセットの名前 |
| 戻り値 | Integer | &#8592; | セットに含まれるレコード数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Records in set.Summary-->Records in setコマンドは、*set*に含まれるレコードの数を返します。<!-- END REF-->*set*が存在しない場合、または*set*にレコードがない場合には0を返します。

#### 例題 

以下の例は、全顧客の中に占めるお得意様の割合をアラートボックスに表示します。

```4d
  //最初に割合を計算
 $Percent :=(Records in set("Best")/Records in table([Customers]))*100
  //割合を表示する
 ALERT(String($Percent;"##0%")+"がお得意様です。")
```

#### 参照 

[Records in selection](records-in-selection.md)  
[Records in table](records-in-table.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 195 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


