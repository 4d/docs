---
id: is-data-file-locked
title: Is data file locked
slug: /commands/is-data-file-locked
displayed_sidebar: docs
---

<!--REF #_command_.Is data file locked.Syntax-->**Is data file locked**  : Boolean<!-- END REF-->
<!--REF #_command_.Is data file locked.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True=ファイル/セグメントがロックされている   False=ファイル/セグメントはロックされていない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is data file locked.Summary-->Is data file locked コマンドは、現在開いているデータベースのデータファイル、または少なくとも1つのセグメントがロックされている（つまり、書き込み禁止）場合にTrue（真）を返します。<!-- END REF-->

例えばにおいてこのコマンドを使用すると、ロックされたデータファイルを誤ってオープンする危険性を回避することができます。

#### 例題 

このメソッドは、データファイルがロックされている場合、データベースが開かれることを回避します。

```4d
 If(Is data file locked)
    ALERT("データファイルがロックされています。このデータベースを開くことはできません。")
    QUIT 4D
 End if
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 716 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


