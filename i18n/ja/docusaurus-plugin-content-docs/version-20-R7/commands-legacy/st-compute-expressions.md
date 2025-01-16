---
id: st-compute-expressions
title: ST COMPUTE EXPRESSIONS
slug: /commands/st-compute-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Syntax-->**ST COMPUTE EXPRESSIONS** ( {* ;} *object* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST COMPUTE EXPRESSIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列) 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Summary-->**ST COMPUTE EXPRESSIONS**コマンドは、*object* 引数で指定したマルチスタイルあるいは4D Write Proのフィールドあるいは変数内にあるダイナミック 4D 式を更新します。<!-- END REF-->

マルチスタイルテキストエリアあるいは4D Write Pro エリアで使用されている 4D 式の詳細に関しては、 [ST INSERT EXPRESSION](st-insert-expression.md) コマンドの詳細を参照して下さい。

このコマンドは *object* で指定したオブジェクト内の4D 式の結果を、カレントの内容に応じて更新してそれを表示します。例えば、挿入された4D 式が時刻であった場合、表示される時刻は **ST COMPUTE EXPRESSIONS** コマンドを使用するたびに変更されます。4D 式は以下のときにも更新されます:

* 挿入されたとき
* オブジェクトがロードされたとき
* [ST FREEZE EXPRESSIONS](st-freeze-expressions.md) コマンドにおいて、2番目の *\** を渡して4D式が固定化されたとき

**ST COMPUTE EXPRESSIONS** コマンドは SPAN タグも含めてスタイル付テキストを変更しません。 object で指定されたオブジェクト内に表示された標準テキストのみ変更します。処理された値はスタイル付テキストの中には保存されず、参照のみが保存されます。

任意の *\** 演算子を渡した場合、*object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

指定された*object* はフォーカスになっている必要はありません。しかしながら、*object* がマルチスタイルテキストエリアを指定している場合にはそのエリアはフォームに含まれている必要があります。そうでない場合には**ST COMPUTE EXPRESSIONS** コマンドは何もしません。 

**注:** *object* が4D Write Pro ドキュメントを指定している場合、たとえそのドキュメントがフォームオブジェクトの中で開かれていなかったとしてもコマンドはそれを更新します(*ピクチャー式*を参照してください)。

任意の *startSel* 引数と *endSel* 引数はオブジェクト内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* と *endSel* の両方を渡した場合、 **ST COMPUTE EXPRESSIONS** コマンドは指定された範囲内の4D式のみ変更します。
* *startSel* のみを指定した場合、もしくは *endSel* の値がオブジェクト内の総文字数より大きい場合は、 *startSel* の位置からテキストの終わりまでの全ての4D式が変更されます。
* *startSel* と *endSel* の両方を省略した場合、指定されたオブジェクト内の全ての4D式は変更されます。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります:

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**注:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、OK変数は0に設定されます。(ただし *endSel* が0である場合を除く)

#### 例題 

テキストの選択範囲に含まれる参照を更新する場合を考えます:

```4d
 ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)
```

#### 参照 

[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1285 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


