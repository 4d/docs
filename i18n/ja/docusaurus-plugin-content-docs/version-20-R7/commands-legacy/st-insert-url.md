---
id: st-insert-url
title: ST INSERT URL
slug: /commands/st-insert-url
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT URL.Syntax-->**ST INSERT URL** ( {* ;} *object* ; *urlText* ; *urlAddress* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| urlText | Text | &#8594;  | リンクの表示テキスト |
| urlAddress | Text | &#8594;  | URL アドレス |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ST INSERT URL.Summary-->**ST INSERT URL**コマンドは、*object* 引数で指定したスタイル付テキストフィールドまたはテキスト変数内に、 URL のリンクを挿入します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*urlText* 引数には、オブジェクト内で表示される、リンクの表示テキストを渡します。例えば、 "4D Web Site" や "Follow this link for more information" などのテキストラベルです。"http://www.4d.com" のような、アドレスそのものを指定することもできます。

*urlAddress* 引数には、 "http://www.4D.com" のように、ブラウザに表示させたいWebサイトの完全なアドレスを渡します。

任意の *startSel* 引数と *endSel* 引数は*object* 内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* のみを渡した場合、 *urlText* が指定の位置に挿入されます。
* *startSel* と*endSel*,の両方を省略した場合、*urlText* がカーソルの位置に挿入されます。
* *startSel* と *endSel* の両方を渡した場合、 **ST INSERT URL** コマンドは指定された範囲内のテキストを *urlText* で指定したテキストと置換します。*endSel* の値がオブジェクト内の総文字数より大きい場合は、 *startSel* の位置からテキストの終わりまでの全ての文字が *urlText* で置換されます。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります: 

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**Note:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、*OK* 変数は0に設定されます(ただし *endSel* が0である場合を除く)。

リンクは挿入されれば既に有効になっています。ラベルを、 Windows では **Ctrl+クリック**、 Mac OS X では**Command+クリック** することによって既定のブラウザで*urlAddress* で指定したページを開くことができます。

#### 例題 

オブジェクト内で選択されたテキストを、4D のウェブサイトへのリンクで置き換えたい場合を考えます:

```4d
 vTitle:="4D Web Site"
 vURL:="http://www.4d.com/"
 ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)
```

#### 参照 

[ST GET URL](st-get-url.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1280 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


