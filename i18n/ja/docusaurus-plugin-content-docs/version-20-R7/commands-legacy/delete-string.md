---
id: delete-string
title: Delete string
slug: /commands/delete-string
displayed_sidebar: docs
---

<!--REF #_command_.Delete string.Syntax-->**Delete string** ( *source* ; *where* ; *numChars* ) : Text<!-- END REF-->
<!--REF #_command_.Delete string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Text | &#8594;  | 文字を削除する文字列 |
| where | Integer | &#8594;  | 削除開始位置 |
| numChars | Integer | &#8594;  | 削除する文字数 |
| 戻り値 | Text | &#8592; | 結果の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Delete string.Summary-->Delete stringは、*where*から*numChars*分の文字を*source*から削除した文字列を返します。<!-- END REF-->  
  
Delete stringは、以下のような場合に*source*と同じ文字列を返します。  

* *source*が空の文字列の場合
* *where*が*source*の長さより大きい場合
* *numChars*がゼロ(0) の場合
*where*が0より小さい場合、文字列の始めから文字が削除されます。  
  
*where*と*numChars*の和が*source*の長さと等しいかまたは大きい場合は、*where*から文字列の最後まで文字を削除します。

#### 例題 

Delete stringの使用例を次に示します。結果を変数*vtResult*に代入します。

```4d
 vtResult:=Delete string("Lamborghini";6;6) // vtResultは"Lambo"
 vtResult:=Delete string("Indentation";6;2) // vtResultは"Indention"
 vtResult:=Delete string(vtOtherVar;3;32000) // vtResultはvtOtherVarの最初の2文字のみ
```

#### 参照 

[Change string](change-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 232 |
| スレッドセーフである | &check; |


