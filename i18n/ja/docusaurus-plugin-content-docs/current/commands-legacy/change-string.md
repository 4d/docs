---
id: change-string
title: Change string
slug: /commands/change-string
displayed_sidebar: docs
---

<!--REF #_command_.Change string.Syntax-->**Change string** ( *source* ; *newChars* ; *where* ) : Text<!-- END REF-->
<!--REF #_command_.Change string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Text | &#8594;  | 元の文字列 |
| newChars | Text | &#8594;  | 新しい文字 |
| where | Integer | &#8594;  | 入れ替え開始位置 |
| 戻り値 | Text | &#8592; | 結果の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Change string.Summary-->Change stringは、*source*の中の文字グループを修正したものを返します。<!-- END REF-->*where*で指定された位置から、*newChars*で*source*を上書きします。  
  
*newChars*が空の文字列（""）の場合、Change stringは*source*を変更しないで返します。Change stringは常に*source*と同じ長さの文字列を返します。*where*が*source*の長さ以下の場合や*source*の長さ以上の場合、Change stringは*source*を返します。  
  
Change stringは、文字を挿入しないで上書きするという点が[Insert string](insert-string.md "Insert string")と異なります。

#### 例題 

Change stringの使用例を次に示します。結果を変数*vtResult*に代入します。

```4d
 vtResult:=Change string("Acme";"CME";2) // vtResultは"ACME"
 vtResult:=Change string("November";"Dec";1) // vtResultは"December"
```

#### 参照 

[Delete string](delete-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  