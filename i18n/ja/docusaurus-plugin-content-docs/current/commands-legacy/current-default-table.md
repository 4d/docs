---
id: current-default-table
title: Current default table
slug: /commands/current-default-table
displayed_sidebar: docs
---

<!--REF #_command_.Current default table.Syntax-->**Current default table**  -> 戻り値<!-- END REF-->
<!--REF #_command_.Current default table.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Pointer | &#x1F850; | デフォルトテーブルへのポインタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current default table.Summary-->Current default table は、カレントプロセスに対して[DEFAULT TABLE](default-table.md "DEFAULT TABLE")コマンドで最後に指定されたテーブルのポインタを返します。<!-- END REF-->

#### 例題 

デフォルトテーブルが設定されているものとして、以下のコードはカレントデフォルトテーブルの名前をウィンドウタイトルにセットします。

```4d
 SET WINDOW TITLE(Table name(Current default table))
```

#### 参照 

[DEFAULT TABLE](default-table.md)  
[Table](table.md)  
[Table name](table-name.md)  