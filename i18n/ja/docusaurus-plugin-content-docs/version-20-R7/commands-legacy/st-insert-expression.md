---
id: st-insert-expression
title: ST INSERT EXPRESSION
slug: /commands/st-insert-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT EXPRESSION.Syntax-->**ST INSERT EXPRESSION** ( {* ;} *object* ; *expression* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT EXPRESSION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列) 省略時: object は変数またはフィールド |
| object | Object | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| expression | Text | &#8594;  | 挿入したい4D式と(任意の)フォーマット |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ST INSERT EXPRESSION.Summary-->**ST INSERT EXPRESSION**コマンドは、*object* 引数で指定したスタイル付テキストフィールドまたはテキスト変数内に、4D 式への参照を挿入します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*expression* 引数には、*object* 引数のオブジェクト内にて評価したい4D式を渡します。4D式は、引用符("")で囲まれている必要があります。

有効な4D式とは、値を返す文字列です。*expression* 引数には、フィールド、変数、4Dコマンド、値を返す宣言、プロジェクトメソッド、4D Write Pro 特有の式(*フォーミュラの管理*参照)等を指定することができます。

**注:**

* ピクチャー式(ピクチャー型変数等)を挿入することは、4D Write Pro エリアではサポートされています(*画像式の挿入* 参照)が、マルチスタイルテキストエリアではサポートされていません。
* このコマンドでは、例え[SET TABLE TITLES](set-table-titles.md) や [SET FIELD TITLES](set-field-titles.md) コマンドなどを使用して"バーチャルな"ストラクチャーが定義されていたとしても、"実際の"フィールド名やテーブル名を渡す必要があります。

*expression* で指定した4D式から返ってきた値がキャリッジリターンとタブを含んでいた場合、4D式が入っているオブジェクトに合わせてそのテキストを表示します。例えばこのとき、キャリッジリターンは改行として扱われます。

*expression* 引数に、任意のフォーマット情報を渡すことによって、4D式のフォーマット形式を指定することが出来ます。この場合、以下の書式で指定する必要があります:  

```RAW
"String(value;format)"
```

*value* 引数には4D式そのものを渡し、 *format* 引数には適用したい書式を渡します。*format* には以下のどれかを指定することができます:

* 数字に対しては、(存在するかしないかに関わらず)いかなる表示形式も指定することができます。例えば、 "###,##" のような形です。
* 日付に対しては、存在する日付のフォーマットを指定する数字を渡すことができます。このとき、 "*Date Display Formats*" テーマ内にある定数(System date short 等)を使用することができます。
* 時刻に対しては、存在する時刻のフォーマットを指定する数字を渡すことができます。このとき、 "*Time Display Formats*" テーマ内にある定数(System time short 等)を使用することができます。

例えば、以下の様な形になります:

```4d
 "String([Table_1]Field_1;System date short)"
```

特に何も指定しなければ、 expression の **値** がマルチスタイルテキストエリアに表示されます。また、 [ST SET OPTIONS](st-set-options.md) コマンドを使用することによって強制的に**参照**を表示させることもできます。

任意の *startSel* 引数と *endSel* 引数は*object* 内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* のみを指定した場合、式の結果が指定された位置に挿入されます。
* *startSel* と *endSel* の両方を省略した場合、式の結果がカーソルの位置に挿入されます。
* *startSel* と *endSel* の両方を渡した場合、 **ST INSERT EXPRESSION** コマンドは指定された範囲内のテキストを *expression* からの結果で置換します。*endSel* の値が*object* 内の総文字数より大きい場合は、 *startSel* の位置からテキストの終わりまでの全てのテキストが *expression* からの結果で置換されます。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります:

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**注:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、OK変数は0に設定されます(ただし *endSel* が0である場合を除く)。

#### 例題 

選択したテキストをプロジェクトメソッドの結果で置き換える場合を考えます:

```4d
 ST INSERT EXPRESSION(*;"myText";"MyMethod";ST Start highlight;ST End highlight)
```

#### 参照 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST Get expression](st-get-expression.md)  
[ST INSERT URL](st-insert-url.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1281 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


