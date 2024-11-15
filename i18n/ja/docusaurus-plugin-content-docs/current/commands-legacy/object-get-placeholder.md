---
id: object-get-placeholder
title: OBJECT Get placeholder
slug: /commands/object-get-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get placeholder.Syntax-->**OBJECT Get placeholder** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get placeholder.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Text | &#8592; | オブジェクトと関連付けられたプレースホルダーテキスト |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get placeholder.Summary-->**OBJECT Get placeholder**コマンドは、引数 *object* と *\** で指定したオブジェクトと関連付けられたプレースホルダーテキストを返します。<!-- END REF-->オブジェクトにプレースホルダーテキストが何も関連付けられていない場合は、空の文字列を返します。

プ レースホルダーテキストは、プロパティリストを使用するか、 [OBJECT SET PLACEHOLDER](object-set-placeholder.md) コマンドを使用することで定義できます。

任意の \* 演算子を渡した場合、 object 引数でオブジェクト名を文字列で指定します。省略時には object 引数でフィールドまたは変数を指定します。

プレースホルダーにプロパティリストを通じてxliff参照が定義されていた場合、コマンドは参照値ではなく、 ":xliff:*resname*"という原文をそのまま返します。

#### 例題 

あるフィールドのプレースホルダーのテキストを取得したい場合:

```4d
 $txt:=OBJECT Get placeholder([People]LastName)
```

#### 参照 

[OBJECT SET PLACEHOLDER](object-set-placeholder.md)  