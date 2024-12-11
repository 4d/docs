---
id: char
title: Char
slug: /commands/char
displayed_sidebar: docs
---

<!--REF #_command_.Char.Syntax-->**Char** ( *charCode* ) : Text<!-- END REF-->
<!--REF #_command_.Char.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| charCode | Integer | &#8594;  | 文字コード |
| 戻り値 | Text | &#8592; | 文字コードによって表現された文字 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Char.Summary-->**Char** コマンド は文字コードが*charCode*である文字を返します。<!-- END REF-->にはUTF-16値(1から65535の間) を渡します。

**Tip:** メソッド作成時、 **Char** は通常キーボードから入力できない文字や、メソッドエディタでは編集コマンドとして解釈される文字を指定するために使用します。

#### 例題 

以下の例は、変数にキャリッジリターンを代入するためにChar関数を使用し、警告を表示します。 

```4d
 ALERT("Employees: "+String(Records in table([Employees]))+Char(Carriage return)+"Press OK to continue.")
```

#### 参照 

[Character code](character-code.md)  
*Unicodeコード*  
*文字参照記号*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 90 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


