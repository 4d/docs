---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( {* ;} *object* ; *font* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| font | Text | &#8594;  | フォント名またはフォント番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT は*object* で指定したフォームオブジェクトに、*font* に渡したフォント名またはフォント番号のフォントが表示されるよう設定します。<!-- END REF--> *font* 引数には有効なフォント名を渡さなければなりません。

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

**注意:** *object* 引数に、既にスタイルシートを使用しているオブジェクトを指定してこのコマンドを使用した場合、オブジェクトからそのスタイルシートへの参照は自動的に削除されてしまいます。これはコマンドで割り当てた属性がスタイルシートのものと同じでも参照は削除されます。

#### 例題 1 

以下の例は*bOK*という名前のボタンに対してフォントを設定します:   
  
```4d
 OBJECT SET FONT(bOK;"Arial")
```

#### 例題 2 

以下の例はオブジェクト名に"info"を含むすべてのオブジェクトのフォントを設定します:   
  
```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

#### 例題 3 

以下の例は"パスワード"型フィールドへの入力・表示のために設計された特殊な *%password* オプションを使用しています。"%password"を *font* 引数に渡すと:

* オブジェクトに入力された文字は全て同じ記号で表示されます。
* オブジェクト内での"カット"と"コピー"が無効化されます。

**注:** *%password* オプションは、フィールド、変数、そしてコンボボックス型のオブジェクトに対して使用可能です。

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

#### 参照 

[Font file](font-file.md)  
[FONT LIST](font-list.md)  
[OBJECT Get font](object-get-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  
*プログラミングに関する注意*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 164 |
| スレッドセーフである | &cross; |


