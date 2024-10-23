---
id: object-get-subform
title: OBJECT GET SUBFORM
slug: /commands/object-get-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM.Syntax-->**OBJECT GET SUBFORM** ( {* ;} *object* ; *tablePtr* ; *detailSubform* {; *listSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| tablePtr | Table | &#8592; | フォームが属するテーブルへのポインター |
| detailSubform | Text | &#8592; | サブフォームの詳細フォーム名 |
| listSubform | Text | &#8592; | サブフォームのリストフォーム名 (テーブルフォーム) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT GET SUBFORM.Summary-->**OBJECT GET SUBFORM**コマンドは*object*と*\**引数で指定したサブフォームオブジェクトに関連付けられたフォームの名前を返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

*tablePtr* 引数には使用されるフォームが属するテーブルへのポインターが返されます。サブフォームにプロジェクトフォームが指定されている場合、この引数には[Is nil pointer](is-nil-pointer.md)になります。 

コマンドは*detailSubform* 引数および*listSubform* 引数(オプション)には、以下のものを返します:

* サブフォームが4D フォームエディターで作成されていた場合にはフォーム名
* サブフォームが.josn ファイルあるいは4D オブジェクトから作成されていた場合にはサブフォームの"name" 属性  
どちらの場合においても、"name" 属性が未定義だった場合には、コマンドは以下のものを返します:  
   * .josn ファイルの場合には、.json ファイルの名前(拡張子なし)  
   * オブジェクトの場合には"untitled"

リストフォームが指定されていない場合、*listSubform* 引数には空の文字列が返されます。

#### 参照 

[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  
[OBJECT SET SUBFORM](object-set-subform.md)  