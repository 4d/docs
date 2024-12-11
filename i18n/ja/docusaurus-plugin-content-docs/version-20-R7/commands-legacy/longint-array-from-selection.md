---
id: longint-array-from-selection
title: LONGINT ARRAY FROM SELECTION
slug: /commands/longint-array-from-selection
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Syntax-->**LONGINT ARRAY FROM SELECTION** ( *aTable* ; *recordArray* {; *selection*} )<!-- END REF-->
<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントセレクションのテーブル |
| recordArray | Integer array | &#8592; | レコード番号配列 |
| selection | Text | &#8594;  | 命名セレクション名、または 省略した場合カレントセレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Summary-->LONGINT ARRAY FROM SELECTION コマンドは、*selection*の（絶対）レコード番号を*recordArray*に返します。<!-- END REF-->

*selection*引数を省略した場合、コマンドは*table*のカレントセレクションを使用します。

**Note:** 配列要素0は-1に初期化されます。 

#### 例題 

カレントセレクションのレコード番号を配列の形で取得します:

```4d
 ARRAY LONGINT($_arrRecNum;0) // コンパイルモードには必須です
 LONGINT ARRAY FROM SELECTION([Clients];$_arrRecNum)
```

#### 参照 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 647 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


