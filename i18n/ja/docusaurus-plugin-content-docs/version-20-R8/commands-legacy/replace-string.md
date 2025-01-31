---
id: replace-string
title: Replace string
slug: /commands/replace-string
displayed_sidebar: docs
---

<!--REF #_command_.Replace string.Syntax-->**Replace string** ( *source* ; *oldString* ; *newString* {; *howMany*}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.Replace string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Text | &#8594;  | 元の文字列 |
| oldString | Text | &#8594;  | 置き換対象の文字列 |
| newString | Text | &#8594;  | 置き換え後の文字列 (空文字の場合オカレンスは削除) |
| howMany | Integer | &#8594;  | 置き換え 省略時、すべてのオカレンスを置き換え |
| * | 演算子 | &#8594;  | 渡されると、文字コードに基づいて評価 |
| 戻り値 | Text | &#8592; | 結果の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Replace string.Summary-->Replace stringは、*source*に存在するすべての*oldString*を*newString*で*howMany*回数だけ置き換えます。<!-- END REF-->

*newString*が空の文字列 ("") の場合は、Replace stringは*source*の中の*oldString*をすべて削除します。

*howMany*を指定した場合、Replace string関数は*source*の最初の文字から探して、その回数分だけ*oldString*を置き換えます。指定しない場合、発見した*oldString*をすべて置き換えます。

*oldString*が空の文字列の場合は、Replace stringはなにも変更せず、元の文字列を返します。

デフォルトでこのコマンドはグローバルな比較を行い、言語上の特性と、1つ以上の文字で記述される文字 (例 æ = ae) を考慮に入れます。他方、発音区分符号 (a=A, a=à等) は無視され、文字コードが9未満の制御コードは考慮されません (Unicodeの仕様)。  
この動作を変更するには、最後の引数にアスタリスク *\** を渡します。この場合、比較は文字コードベースで行われます。*\** 引数は以下のようなケースで必要となります:

* Char(1)など特別な文字を考慮に入れたい場合、
* 文字の評価で大文字小文字の区別やアクセント文字を考慮したい場合 (a#A, a#a 等)。

このモードでは、単語が書かれた方法のバリエーションが評価されないことに留意してください。

**注:** 4D v15 R3 以降、使用するシンタックスに関わらず、文字列を異なる長さの文字列で置き換える際にこのコマンドが使用するアルゴリズムに対し大幅な最適化が行われました。その結果、このコンテキストにおける処理が飛躍的に早くなりました。

#### 例題 1 

Replace stringの使用例を次に示します。結果を変数*vtResult*に代入します。コメントは、変数*vtResult*に代入される内容についての説明です。

```4d
 vtResult:=Replace string("Willow";" ll";"d") //Resultは"Widow"
 vtResult:=Replace string("Shout";"o";"") //Resultは"Shut"
 vtResult:=Replace string(vtOtherVar;Char(Tab);",";*) //vtOtherVar の中の全てのタブをコンマ(.) に置き換える
```

#### 例題 2 

以下の例は、*vtResult*のテキストからキャリッジリターンとタブを取り除きます。

```4d
 vtResult:=Replace string(Replace string(vtResult;Char(Carriage return);"";*);Char(Tab);"";*)
```

#### 例題 3 

この例では発音区分符号を区別するために、\* 引数の使用する例を示します。   
  
```4d
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel") //Result gets "Crème caramel"
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel";*) //Result gets "Crème brûlée"
```

  

#### 参照 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Insert string](insert-string.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 233 |
| スレッドセーフである | &check; |


