---
id: st-get-expression
title: ST Get expression
slug: /commands/st-get-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST Get expression.Syntax-->**ST Get expression** ( {* ;} *object* {; *startSel* {; *endSel*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get expression.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |
| 戻り値 | Text | &#8592; | 4D式の内容 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.ST Get expression.Summary-->**ST Get expression**コマンドは、*object* 引数で指定されたスタイル付テキストフィールドまたはテキスト変数内のカレントセレクションの中で、最初に見つけた 4D 式を返します。<!-- END REF-->

このコマンドは、オブジェクト内に挿入された4D式の内容を返します(結果は、例えば "mymethod" や"\[table1\]field1" 等になります)。 4D式の値は返されません。

**注:** このコマンドは、"バーチャルな"ストラクチャーが[SET TABLE TITLES](set-table-titles.md) および [SET FIELD TITLES](set-field-titles.md) コマンドを使用して定義されていたとしても、フィールドとテーブルに関しては"実際の"名前を返します。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。このとき、オブジェクトがフォーカスされていた場合にはコマンドは編集中のテキストに関しての情報を返し、オブジェクトがフォーカスされていない場合にはコマンドはオブジェクトのデータソースの情報を返します。  
省略時には *object* 引数でフィールドまたは変数を指定します。この場合にはコマンドは変数またはフィールドの情報を返します。

任意の *startSel* 引数と *endSel* 引数は*object* 内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* と *endSel* の両方を渡した場合、 **ST Get expression** コマンドは指定された範囲内に限り4D式を探します。
* *startSel* のみを指定した場合、もしくは *endSel* の値がオブジェクト内の総文字数より大きい場合は、 コマンドは *startSel* の位置からテキストの終わりまでの範囲内の4D式を探します。
* *startSel* と *endSel* の両方を省略した場合、指定されたオブジェクトが編集中であれば、そのとき選択されている範囲のテキスト内を探します。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります: 

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**注:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、 *OK* 変数は0に設定されます(ただし *endSel* が0である場合を除く)。

選択範囲の中に4D式が何もない場合、コマンドは空の文字列を返します。

#### 例題 1 

ダブルクリックイベントがあると、4D式が実際にあるかどうかをチェックし、あった場合にはユーザーがそれを変更できるようにその値を取得したダイアログボックスを表示する、という場合:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)
          vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)
          $winRef:=Open form window("Dial_InsertExpr";Movable form dialog box;Horizontally centered;Vertically centered;*)
          DIALOG("Dial_InsertExpr")
          If(OK=1)
             ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)
          End if
       End if
 End case
```

#### 例題 2 

ユーザーがリンクをクリックしたときに4Dメソッドを実行したい場合:

```4d
 Case of
    :(Form event code=On Clicked)
  //セレクションを取得
       HIGHLIGHT TEXT(*;"myText";startSel;endSel)
       If(startSel#endSel) //選択されたコンテンツが存在
  //コンテンツの型を取得
          $CT_type:=ST Get content type(*;"myText";startSel;endSel)
          If($CT_type=ST User type) //これはユーザーリンク
             MyMethod //4Dメソッドを実行
          End if
       End if
 End case
```

#### 参照 

[ST INSERT EXPRESSION](st-insert-expression.md)  