---
id: length
title: Length
slug: /commands/length
displayed_sidebar: docs
---

<!--REF #_command_.Length.Syntax-->**Length** ( *string* ) : Integer<!-- END REF-->
<!--REF #_command_.Length.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| string | Text | &#8594;  | 長さを調べる文字列 |
| 戻り値 | Integer | &#8592; | 文字列の長さ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Length.Summary-->Lengthは*aString*の長さを知るために使用します。<!-- END REF-->Lengthは*aString*中の文字数を返します。 

**Note**: Unicode モードにおいて文字列に (無視可能な文字を含め) 何らかの文字が含まれているかどうかを判定したい場合、If (vtAnyText="")ではなくIf (Length(vtAnyText)=0)を使用しなければなりません。例えば文字列が無視可能な文字列であるChar(1)が1つで構成されている場合、Length(vtAnyText)は1を返しますが、vtAnyText=""はTrueを返します。

#### 例題 

Lengthの使用例を次に示します。結果を変数*vlResult*に代入します。コメントは、変数*vlResult*に代入される値についての説明です。

```4d
 vlResult:=Length("Topaz") // vlResultは5
 vlResult:=Length("Citizen") // vlResultは7
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 16 |
| スレッドセーフである | &check; |


