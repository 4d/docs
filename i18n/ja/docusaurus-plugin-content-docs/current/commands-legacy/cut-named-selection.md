---
id: cut-named-selection
title: CUT NAMED SELECTION
slug: /commands/cut-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CUT NAMED SELECTION.Syntax-->**CUT NAMED SELECTION** ( {*aTable* ;} *name* )<!-- END REF-->
<!--REF #_command_.CUT NAMED SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションをカットするテーブル, または 省略した場合デフォルトテーブル |
| name | Text | &#8594;  | 作成する命名セレクションの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CUT NAMED SELECTION.Summary-->CUT NAMED SELECTION は、命名セレクション*name*を作成し、*aTable*のカレントセレクションをそこへ移します。<!-- END REF-->このコマンドは、カレントセレクションをコピーするのではなく、移動する点が[COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION")コマンドと異なります。

このコマンドを実行した後、カレントプロセスの*aTable*のカレントセレクションは空になります。そのため、CUT NAMED SELECTIONはレコードが修正されている最中は使用しないでください。

CUT NAMED SELECTIONは[COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION")よりも効率的です。[COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION")では選択したレコードの数x4バイトをメモリ内で複製します。CUT NAMED SELECTIONではリストの参照だけを移動します。

#### 例題 

以下のメソッドは、*\[Customers\]*テーブルのカレントセレクションを空にします:

```4d
 CUT NAMED SELECTION([Customers];"ToBeCleared")
 CLEAR NAMED SELECTION("ToBeCleared")
```

#### 参照 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  