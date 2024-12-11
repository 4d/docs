---
id: object-set-font-size
title: OBJECT SET FONT SIZE
slug: /commands/object-set-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT SIZE.Syntax-->**OBJECT SET FONT SIZE** ( {* ;} *object* ; *size* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT SIZE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| size | Integer | &#8594;  | フォントサイズ (ポイント) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET FONT SIZE.Summary-->**OBJECT SET FONT SIZE** は*object* で指定したフォームオブジェクトが、*size*に渡したフォントサイズを使用して表示されるよう設定します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。オブジェクト名に関する詳細は *オブジェクトプロパティ* を参照してください。

*size*には1から255までの整数を指定できます。実際のフォントサイズが存在しない場合、文字は拡大/縮小されます。

フォームで指定されるオブジェクトの領域は、指定したフォントサイズを表示するのに十分な大きさがなければなりません。十分な大きさがない場合には、テキストが途中までしか表示されなかったり、全く表示されなくなります。

**注意:** *object* 引数に、既にスタイルシートを使用しているオブジェクトを指定してこのコマンドを使用した場合、オブジェクトからそのスタイルシートへの参照は自動的に削除されてしまいます。これはコマンドで割り当てた属性がスタイルシートのものと同じでも参照は削除されます。

#### 例題 1 

以下の例は、*vtInfo*変数のフォントサイズを設定します: 

```4d
 OBJECT SET FONT SIZE(vtInfo;14)
```

#### 例題 2 

以下の例は、“hl”という名前で始まるすべてのフォームオブジェクトのフォントサイズを設定します: 

```4d
 OBJECT SET FONT SIZE(*;"hl@";14)
```

#### 参照 

[OBJECT Get font size](object-get-font-size.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  
*プログラミングに関する注意*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 165 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


