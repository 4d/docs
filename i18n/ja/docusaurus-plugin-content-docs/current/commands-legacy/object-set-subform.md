---
id: object-set-subform
title: OBJECT SET SUBFORM
slug: /commands/object-set-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM.Syntax-->**OBJECT SET SUBFORM** ( {* ;} *object* {; *aTable*}; *detailSubform* {; *listSubform*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| aTable | Table | &#8594;  | フォームのテーブル (テーブルフォームの場合) |
| detailSubform | Text, Object | &#8594;  | 詳細フォーム名(テキスト)あるいは詳細フォームを定義した.jsonファイルへのPOSIXパス(テキスト)、あるいはサブフォームの詳細フォームを定義したオブジェクト |
| listSubform | Text, Object | &#8594;  | リストフォーム名(テキスト)、あるいはリストフォームを定義した.jsonファイルへのPOSIXパス(テキスト)、あるいはサブフォームのリストフォーム(テーブルフォーム)を定義したオブジェクト |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET SUBFORM.Summary-->**OBJECT SET SUBFORM**コマンドは*\** 引数および*object* 引数で指定したサブフォームオブジェクトに割り当てられる詳細フォームおよびオプションでリストフォームを動的に変更します。<!-- END REF-->

**注:** このコマンドを使用してサブフォームのタイプ (プロパティリストの出力サブフォームプロパティ) を変更することはできません。このプロパティはデザインモードで設定しなければなりません。 

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

*aTable* 引数には使用するフォームが属するテーブルを渡します。ページモードのサブフォームとしてプロジェクトフォームを指定する場合、この引数を省略します。 

*detailSubform* 引数および *listSubform* 引数には、以下のいづれかを渡して下さい:

* フォーム名
* 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス、*フォームファイルパス*参照)
* フォームの詳細を格納しているオブジェクト

**注**: *listSubform* 引数はリストタイプのサブフォームを変更する場合のみ指定できます。 

ページモードのサブフォームを変更する場合、このコマンドをいつでも実行できます。カレントセレクションは変更されません。しかしリストサブフォームを変更する場合、リストを表示しているときのみ変更可能です。リスト中がダブルクリックされ詳細フォームが表示されている状態でこのコマンドを実行すると、エラーが生成されます。 

#### 参照 

[OBJECT GET SUBFORM](../commands/object-get-subform.md)  
[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  