---
id: highlight-text
title: HIGHLIGHT TEXT
slug: /commands/highlight-text
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT TEXT.Syntax-->**HIGHLIGHT TEXT** ( {* ;} *object* ; *startSel* ; *endSel* )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT TEXT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字列)、省略時: objectはフィールドまたは変数 |
| object | Field, Variable, any | &#8594;  | オブジェクト名 (*指定時)、またはフィールドや変数 (*省略時) |
| startSel | Integer | &#8594;  | 反転表示の先頭位置 |
| endSel | Integer | &#8594;  | 反転表示の最終位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.HIGHLIGHT TEXT.Summary-->**HIGHLIGHT TEXT**コマンドは、*object* 内にあるテキストの一部を反転表示します。<!-- END REF-->

オプションの *\** 引数を渡すと*object*引数はオブジェクト名 (文字列) です。*\** 引数を渡さないと*object*引数はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フォーム上のフィールドや変数のみ) を渡します。

*object* が現在編集中のオブジェクトでない場合、フォーカスはこのエリアにセットされます。

**注:** このコマンドをサブフォームのフィールドに対して使用することはできません。  
  
*startSel* は、反転表示する先頭文字の位置です。*lastSel* は、反転表示する最終文字の位置に1を加えた値です。*startSel* と *lastSel* が同じ場合は、挿入ポインタが *startSel* で指定された文字の前に置かれ、文字は全く反転表示されません。

*lastSel* が *object* の文字数より大きい場合、*startSel* からテキストの最終までのすべての文字を反転表示します。

#### 例題 1 

以下の例題を使用して、入力可能なフィールド *\[Products\]Comments* のすべての文字を選択します。 

```4d
 HIGHLIGHT TEXT([Products]Comments;1;Length([Products]Comments)+1)
```

#### 例題 2 

以下の例題を使用して、挿入ポインタを入力可能なフィールド *\[Products\]Comments* の始めに移動します。 

```4d
 HIGHLIGHT TEXT([Products]Comments;1;1)
```

#### 例題 3 

以下の例題を使用して、挿入ポインタを入力可能なフィールド *\[Products\]Comments* の終わりに移動します。 

```4d
 $vLen:=Length([Products]Comments)+1
 HIGHLIGHT TEXT([Products]Comments;$vLen;$vLen)
```

#### 例題 4 

[FILTER KEYSTROKE](filter-keystroke.md "FILTER KEYSTROKE") コマンドの例題を参照してください。

#### 参照 

[GET HIGHLIGHT](get-highlight.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 210 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


