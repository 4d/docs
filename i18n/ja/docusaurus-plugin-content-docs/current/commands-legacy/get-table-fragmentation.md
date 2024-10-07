---
id: get-table-fragmentation
title: Get table fragmentation
slug: /commands/get-table-fragmentation
displayed_sidebar: docs
---

<!--REF #_command_.Get table fragmentation.Syntax-->**Get table fragmentation** ( *aTable* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Get table fragmentation.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &srarr; | フラグメント率を取得するテーブル |
| 戻り値 | Real | &larr; | フラグメンテーションの割合 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get table fragmentation.Summary-->Get table fragmentation コマンドは *aTable*引数で指定されたテーブルの、物理的なレコードフラグメンテーションの割合 (%) を返します。<!-- END REF-->. 

レコードの物理的なフラグメンテーションの割合は、データファイル中にレコードが並び順通りに格納されているかを示します。フラグメンテーション率が高くなりすぎると、テーブルに対する並び替えやシーケンシャル検索がかなり遅くなります。フラグメンテーション率0%はフラグメンテーションがないことを示します。20%を超えた場合、データファイルの圧縮をお勧めします。

#### 例題 

メンテナンスメソッドを使用して、データベース中少なくとも1つのテーブルに大きなフラグメンテーションが見つかった時に、データファイルの圧縮を要求することができます:

```4d
 ToBeCompacted:=False
 For($i ;1;Get last table number)
    If(Is table number valid($i))
       If(Get table fragmentation(Table($i)->)>20)
          ToBeCompacted:=True
       End if
    End if
 End for
 If(ToBeCompacted)
  // 圧縮を要求するマーカーを置く
 End if
```

#### 参照 

[Compact data file](compact-data-file.md)  