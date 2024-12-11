---
id: st-freeze-expressions
title: ST FREEZE EXPRESSIONS
slug: /commands/st-freeze-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST FREEZE EXPRESSIONS.Syntax-->**ST FREEZE EXPRESSIONS** ( {* ;} *object* {; *startSel* {; *endSel*}}{; *} )<!-- END REF-->
<!--REF #_command_.ST FREEZE EXPRESSIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列) 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |
| * | 演算子 | &#8594;  | 渡した場合、固定化する前に4D式を更新 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ST FREEZE EXPRESSIONS.Summary-->**ST FREEZE EXPRESSIONS**コマンドは、*object* 引数で指定されたマルチスタイルテキストあるいは4D Write Proのフィールドまたは変数内の4D 式の内容を固定化します。<!-- END REF-->これにより、ダイナミックな4D式はスタティックなテキストあるいは画像(4D Write Pro エリアのみ)へと変換され、*object* に関連付けられた参照は解除されます。

マルチスタイルテキストあるいは4D Write Pro エリアの中で使用される4D 式の詳細については、 [ST INSERT EXPRESSION](st-insert-expression.md) を参照して下さい。

**ST FREEZE EXPRESSIONS** コマンドは、変更された4D式の値を保存します。この操作は特に、*object* をエリア外で使用する(書き出し、ディスクファイルへの保存、印刷等)際に必要になります。なぜなら、エリアのそのものには、4D式への参照しか保存されていないからです。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

任意の *startSel* 引数と *endSel* 引数は*object* 内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* と *endSel* の両方を渡した場合、 **ST FREEZE EXPRESSIONS** コマンドは指定された範囲内の4D式のみ固定化します。
* *startSel* のみを指定した場合、もしくは *endSel* の値が*object* 内の総文字数より大きい場合は、 *startSel* の位置からテキストの終わりまでの全ての4D式が固定化されます。
* *startSel* と *endSel* の両方を省略した場合、指定された*object* 内の全ての4D式が固定化されます。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります:

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**注:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、*OK* 変数は0に設定されます。(ただし *endSel* が0である場合を除く)

デフォルトでは、4D式は固定化される直前に再評価されるわけではありません。4D式を評価しなおして固定化したい場合には、 2 番目の*\** 演算子を渡します。

**注:** **ST FREEZE EXPRESSIONS** は*$wp\_pageNumber* または *$wp\_pageCount* を含んでいる4D Write Pro 式の固定化は行いません。より詳細な情報については、*フォーミュラの管理* の章を参照してください。

#### 例題 

テキストの冒頭にカレントの時刻を挿入し、レコードに保存する前に固定化する場合を考えます:

```4d
  //テキストの冒頭に時刻を挿入
 ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)
  //式を固定
 ST FREEZE EXPRESSIONS(*;"StyledText_t";1)
```

#### 参照 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1282 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


