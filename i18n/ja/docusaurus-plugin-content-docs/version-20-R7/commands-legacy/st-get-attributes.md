---
id: st-get-attributes
title: ST GET ATTRIBUTES
slug: /commands/st-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST GET ATTRIBUTES.Syntax-->**ST GET ATTRIBUTES** ( {* ;} *object* ; *startSel* ; *endSel* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.ST GET ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>テキストフィールドまたは変数 (* 省略時) |
| startSel | Integer | &#8594;  | テキスト選択の開始位置 |
| endSel | Integer | &#8594;  | テキスト選択の終了位置 |
| attribName | Integer | &#8594;  | 取得する属性 |
| attribValue | Variable | &#8592; | 属性の現在の値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.ST GET ATTRIBUTES.Summary-->**ST GET ATTRIBUTES** コマンドは、*object*で指定したフォームオブジェクト中で選択されたテキストのスタイル属性を取得するために使用します。<!-- END REF--> 

##### 

オプションの *\** 引数を渡した場合、*object*引数にはオブジェクト名 (文字列) を渡します。コマンド実行時にオブジェクトにフォーカスがある場合、コマンドは編集中のオブジェクトに関する情報を返します。他方オブジェクトにフォーカスがない場合、コマンドはオブジェクトのデータソース (フィールドや変数) に関する情報を返します。  
*\** 引数を省略した場合、*object* 引数にはフィールドや変数を指定します。この場合文字列ではなくフィールドまたは変数への参照を渡します。コマンドはこのフィールドや変数に関する情報を返します。

##### 

*startSel*と*endSel*引数を使用して、オブジェクト中でスタイル属性を取得するテキストを選択します。 *startSel*には選択する最初の文字位置を、*endSel*には選択する文字の最後の位置に1加えた値を渡します。*endSel*に0をセットすることで、自動的にテキストの最後を指定(*startSel*に1をセットすることでテキストの最初を指定)できます。*startSel*と*endSel*の値が等しい場合や、*startSel*が*endSel*よりも大きい場合(*endSel*が0の場合を除く・上記参照)、エラーが返されます。  
*startSel*と*endSel*、エリア中に既に存在するスタイルタグを考慮に入れません。文字数のカウントは (テキストからスタイルタグを取り除いた) 生テキストを基に行います。

4D では選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡せる規定済み定数を用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります: 

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これらの定数を使用するためには、 *object* にオブジェクト名を渡す必要があります。フィールドまたは変数への参照を渡した場合、コマンドはオブジェクトの全てのテキストに対して適用されます。

*attribName* 引数に取得する属性の名前を、*attribValue*引数には属性値を受け取る変数を渡します。*attribName* 引数を指定するには*Multistyle Text Attributes*テーマの定数の一つを使用しなければなりません。

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

必要なだけ属性/値の組を渡すことができます。 

*attribName* 属性の値が選択された文字列中全体で同じ場合、*attribValue*にそれが返されます。値が異なる場合や*object* がSPANタグを含まない場合、以下の値が返されます:  

| **attribName**                | **属性値が一致しない場合やSPANタグが含まれない場合のattValue** |
| ----------------------------- | --------------------------------------- |
| Attribute background color    | FFFFFFFF                                |
| Attribute bold style          | 2                                       |
| Attribute font name           | "" (空の文字列)                              |
| Attribute italic style        | 2                                       |
| Attribute strikethrough style | 2                                       |
| Attribute text color          | FFFFFFFF                                |
| Attribute text size           | \-1                                     |
| Attribute underline style     | 2                                       |

#### 例題 

フォームに\[Table\_1\]というStyledTextフィールドが表示されています。このオブジェクトはマルチスタイルで"StyledText\_t"という名前がついているとします。選択されたテキストと、太字スタイル属性についてのステータスを取得したいという場合、オブジェクト名かフィールド参照のどちらかを使用して処理することができます。

* オブジェクト名を使用する方法:

```4d
 $text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)
 ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)
```

* フィールド名を使用する方法:

```4d
 GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)
 $text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)
 ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)
```

#### システム変数およびセット 

このコマンド実行後、エラーがなければOKシステム変数に1が設定されます。そうでなければ0が設定されます。これは特にスタイルタグが正しく評価できなかった場合に発生します (正しくない、あるいは失われたタグ)。  

エラーの場合、変数は変更されません。テキストが評価される際に変数にエラーが発生すると、4Dはテキストをプレーンテキストに変換します。結果、"<"、">"、"&"文字はHTML実体参照に変換されます。

#### 参照 

[ST SET ATTRIBUTES](st-set-attributes.md)  