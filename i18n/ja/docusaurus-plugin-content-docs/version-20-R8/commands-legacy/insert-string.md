---
id: insert-string
title: Insert string
slug: /commands/insert-string
displayed_sidebar: docs
---

<!--REF #_command_.Insert string.Syntax-->**Insert string** ( *source* ; *what* ; *where* ) : Text<!-- END REF-->
<!--REF #_command_.Insert string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Text | &#8594;  | 文字列を挿入する文字列 |
| what | Text | &#8594;  | 挿入する文字列 |
| where | Integer | &#8594;  | 挿入する位置 |
| 戻り値 | Text | &#8592; | 結果の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Insert string.Summary-->Insert stringは、*source*の*where*で指定された位置の前に、*what*を 挿入した文字列を返します。<!-- END REF-->

*what*が空の文字列("") であれば、Insert stringは*source*を変更しないで返します。

*where*が、*source*の長さよりも大きい場合は、*what*を*source*の後ろに追加します。*where*が1よりも小さい場合には、*what*を*source*の前に挿入します。

Insert stringは、文字を上書きしないで挿入するという点が[Change string](change-string.md "Change string")と異なります。

#### 例題 

Insert string関数の使用例を次に示します。結果を変数*vtResult*に代入します。

```4d
 vtResult:=Insert string("The tree";" green";4) // vtResultは"The green tree"
 vtResult:=Insert string("Shut";"o";3) // vtResultは"Shout"
 vtResult:=Insert string("Indention";"ta";6) // vtResultは"Indentation"
```

#### 参照 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Replace string](replace-string.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 231 |
| スレッドセーフである | &check; |


