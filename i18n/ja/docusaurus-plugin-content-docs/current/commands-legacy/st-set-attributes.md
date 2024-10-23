---
id: st-set-attributes
title: ST SET ATTRIBUTES
slug: /commands/st-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST SET ATTRIBUTES.Syntax-->**ST SET ATTRIBUTES** ( {* ;} *object* ; *startSel* ; *endSel* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.ST SET ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>フィールドまたは変数 (* 省略時) |
| startSel | Integer | &#8594;  | 新しいテキスト選択の開始位置 |
| endSel | Integer | &#8594;  | 新しいテキスト選択の終了位置 |
| attribName | Text | &#8594;  | 設定する属性 |
| attribValue | Text, Integer | &#8594;  | 新しい属性値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.ST SET ATTRIBUTES.Summary-->**ST SET ATTRIBUTES** コマンドを使用して、 *object*で指定したフォームオブジェクト中の1つ以上のスタイル属性を変更できます。<!-- END REF--> 

##### 

オプションの *\** 引数を渡した場合、*object*引数にはオブジェクト名 (文字列) を渡します。コマンド実行時にオブジェクトにフォーカスがある場合、コマンドは編集中のオブジェクトにのみ適用され、(フィールドや変数などの) データソースには適用されません。変更がソース (およびこの同じソースを使用する他のオブジェクト) に転送されるのは、フォーカスが外れるか**Enter**キーが押されて、オブジェクトへの編集が有効化された場合のみです。オブジェクトにフォーカスがない場合、コマンドは直接データソースに適用され、変更は即座に同じソースを使用する他のオブジェクトに転送されます。  
*\** 引数を省略した場合、*object* 引数にはフィールドや変数を指定します。この場合文字列ではなくフィールドまたは変数への参照を渡します。コマンドは直接データソースに適用され、変更は即座に同じソースを使用する他のオブジェクトに転送されます。

##### 

**Note:** テキスト型のフィールドにのみスタイル属性を使用できます。文字型のフィールドは事前に設定された長さがあるため、スタイルを追加すると、データが失われることがあります。

属性の定義はHTMLスタイルのタグをテキストに挿入したり変更したりすることにより行われます (この点に関する詳細は*Design Reference*を参照してください)。**ST SET ATTRIBUTES**は、*object*がマルチスタイルプロパティを設定されていないテキストのフォームオブジェクトを指定している場合でも、すべてのケースでスタイルタグを挿入することに留意してください。

*startSel*と*endSel*引数は*object*内でスタイルの変更を適用するテキストを選択するために使用します。*startSel*にはスタイルの変更を行う最初の文字の位置を、*endSel*に変更を行う最後の文字の位置に1加えた数を渡します (最後の位置の文字は変更の対象となりません)。*endSel*に0をセットすることで、自動的にテキストの最後を指定(*startSel*に1をセットすることでテキストの最初を指定)できます。   
*endSel*が*object*中の文字数より大きい場合、*startSel*からテキストの最後までが変更されます。   
*startSel*が*endSel*より大きい場合(*endSel*が0の場合を除く・上記参照)、コマンドはなにも行わず、OKシステム変数が0に設定されます。  
*startSel*と*endSel*の値はエリアに既に存在するスタイルタグを考慮しません。これらの引数は生のテキスト (スタイルタグがフィルタされたテキスト) をもとに評価されます。

4D では選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡せる規定済み定数を用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります:   

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これらの定数を使用するためには、 *object* にオブジェクト名を渡す必要があります。フィールドまたは変数への参照を渡した場合、コマンドはオブジェクトの全てのテキストに対して適用されます。

*attribName* と*attribValue*には変更する属性に対応する名前と値を渡します。必要なだけ属性/値の組を渡すことができます。*attribName* 引数を指定するためには*Multistyle Text Attributes*テーマの定義済み定数を使用します。*attribValue*引数に渡す値は、*attribName* 引数に基づきます:

| 定数                            | 型    | 値 | コメント                                                                                |
| ----------------------------- | ---- | - | ----------------------------------------------------------------------------------- |
| Attribute background color    | 倍長整数 | 8 | *attValue* \= (Windowsのみ) 16進値またはHTMLカラー名                                           |
| Attribute bold style          | 倍長整数 | 1 | *attValue* \= 0: 選択部からボールド属性を取り除きます<br/>*attValue* \= 1: 選択部にボールド属性を適用します   |
| Attribute font name           | 倍長整数 | 5 | *attValue* \= フォントファミリー名 (文字)                                                       |
| Attribute italic style        | 倍長整数 | 2 | *attValue* \= 0: 選択部からイタリック属性を取り除きます<br/>*attValue* \= 1: 選択部にイタリック属性を適用します |
| Attribute strikethrough style | 倍長整数 | 3 | *attValue* \= 0: 選択部から取り消し線属性を取り除きます<br/>*attValue* \= 1: 選択部に取り消し線属性を適用します |
| Attribute text color          | 倍長整数 | 7 | *attValue* \= 16進値またはHTMLカラー名                                                       |
| Attribute text size           | 倍長整数 | 6 | *attValue* \= ポイント数 (数値)                                                            |
| Attribute underline style     | 倍長整数 | 4 | *attValue* \= 0: 選択部から下線属性を取り除きます<br/>*attValue* \= 1: 選択部に下線属性を適用します       |

**カラー** 
*attribName* 引数に Attribute text color や Attribute background color 定数を渡した場合、*attribValue*にはHTMLカラー名か16進のカラー値を文字で渡さなければなりません:  

| **HTMLカラー名** | **16進値** |
| ------------ | -------- |
| Aqua         | #00FFFF  |
| Black        | #000000  |
| Blue         | #0000FF  |
| Fuchsia      | #FF00FF  |
| Gray         | #808080  |
| Green        | #008000  |
| Lime         | #00FF00  |
| Maroon       | #800000  |
| Navy         | #000080  |
| Olive        | #808000  |
| Purple       | #800080  |
| Red          | #FF0000  |
| Silver       | #C0C0C0  |
| Teal         | #008080  |
| White        | #FFFFFF  |
| Yellow       | #FFFF00  |

#### 例題 

この例題ではテキストのサイズやカラーのほか、ボールドおよび下線属性を2番目から4番目の文字に設定します:

```4d
 ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")
```

#### システム変数およびセット 

このコマンド実行後、エラーがなければOKシステム変数に1が設定されます。そうでなければ0が設定されます。これは特にスタイルタグが正しく評価できなかった場合に発生します (正しくない、あるいは失われたタグ)。  

エラーの場合、変数は変更されません。テキストが評価される際に変数にエラーが発生すると、4Dはテキストをプレーンテキストに変換します。結果、"<"、">"、"&"文字はHTML実体参照に変換されます。

#### 参照 

[FONT LIST](font-list.md)  
[ST GET ATTRIBUTES](st-get-attributes.md)  