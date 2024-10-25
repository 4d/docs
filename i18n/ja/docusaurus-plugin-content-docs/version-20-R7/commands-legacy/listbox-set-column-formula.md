---
id: listbox-set-column-formula
title: LISTBOX SET COLUMN FORMULA
slug: /commands/listbox-set-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Syntax-->**LISTBOX SET COLUMN FORMULA** ( {* ;} *object* ; *formula* ; *dataType* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)、省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または変数 (* 省略時) |
| formula | Text | &#8594;  | 列に割り当てる4Dフォーミュラ |
| dataType | Integer | &#8594;  | フォーミュラの結果型 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Summary-->**LISTBOX SET COLUMN FORMULA**コマンドは*object*と*\** 引数で指定したリストボックス列に割り当てられた*formula*を変更します。<!-- END REF-->フォーミュラはリストボックスプロパティのデータソースが**カレントセレクション**、**命名セレクション**、あるいは**コレクションまたはエンティティセレクション**の場合のみ使用できます。

**注:** [OBJECT SET DATA SOURCE](object-set-data-source.md) コマンドを使用することで、データソースを配列型リストボックスに定義できます。

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。この引数はリストボックス列を指定しなければなりません。

*formula* には以下のような、有効な式を指定できます:

* インストラクション
* フォーミュラエディターで生成したフォーミュラ
* 4Dコマンドの呼び出し
* プロジェクトメソッドの呼び出し

コマンドが呼び出されるとフォーミュラが解析され実行されます。

**注:** アプリケーションランゲージに左右されない、4Dコマンドを呼び出すフォーミュラを指定するためには[Command name](command-name.md) を使用します。

*dataType* 引数にはフォーミュラ実行時に返されるデータの型を指定します。この引数には*Field and Variable Types* テーマ内の定数を渡します。フォーミュラの結果が期待するデータ型に一致しない場合、エラーが生成されます。

#### 参照 

[LISTBOX Get column formula](listbox-get-column-formula.md)  
[OBJECT SET DATA SOURCE](object-set-data-source.md)  