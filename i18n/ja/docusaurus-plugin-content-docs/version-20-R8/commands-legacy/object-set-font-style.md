---
id: object-set-font-style
title: OBJECT SET FONT STYLE
slug: /commands/object-set-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT STYLE.Syntax-->**OBJECT SET FONT STYLE** ( {* ;} *object* ; *styles* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT STYLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| styles | Integer | &#8594;  | フォントスタイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET FONT STYLE.Summary-->OBJECT SET FONT STYLE は*object* で指定したフォームオブジェクトが、*styles*に渡したフォントスタイルを使用して表示されるよう設定します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。オブジェクト名に関する詳細はの節を参照してください。

*styles* にはフォントスタイルを定義する定数の和を渡します。4Dは以下の定義済み定数を提供します:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Bold      | 倍長整数 | 1 |
| Italic    | 倍長整数 | 2 |
| Plain     | 倍長整数 | 0 |
| Underline | 倍長整数 | 4 |

  
#### 例題 1 

以下の例は*bAddNew*ボタンのスタイルを設定します。フォントスタイルは太字のイタリックになります:   
  
```4d
 OBJECT SET FONT STYLE(bAddNew;Bold+Italic)
```

#### 例題 2 

以下の例は、オブジェクト名が"vt"で始まるすべてのフォームオブジェクトのフォントスタイルをスタイルなしにします:   
  
```4d
 OBJECT SET FONT STYLE(*;"vt@";Plain)
```

#### 参照 

[OBJECT Get font style](object-get-font-style.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  
*プログラミングに関する注意*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 166 |
| スレッドセーフである | &cross; |


