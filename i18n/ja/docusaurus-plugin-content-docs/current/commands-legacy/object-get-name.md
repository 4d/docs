---
id: object-get-name
title: OBJECT Get name
slug: /commands/object-get-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get name.Syntax-->**OBJECT Get name** {( *selector* )} : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | オブジェクトカテゴリ |
| 戻り値 | Text | &#8592; | オブジェクトの名前 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get name.Summary-->OBJECT Get name コマンドはフォームオブジェクトの名前を返します。<!-- END REF-->   

コマンドを使用して、*selector*引数の値に基づき、2タイプのオブジェクトを指定できます。この引数には以下の定数を渡せます (テーマ):

* Object current (*selector* 省略時のデフォルト): このセレクタを渡すか*selector*引数を省略した場合、コマンドはコマンドを呼び出した (オブジェクトメソッドあるいはオブジェクトメソッドから呼ばれたサブメソッド) オブジェクトの名前を返します。この場合、コマンドはフォームオブジェクトのコンテキストから呼ばれなければなりません。そうでなければ空の文字列を返します。
* Object with focus: このセレクタを渡した場合、コマンドはフォーム上でフォーカスを持つオブジェクトの名前を返します。

#### 例題 

"bValidateForm" ボタンのオブジェクトメソッド:

```4d
 $btnName:=OBJECT Get name(Object current)
```

このオブジェクトメソッド実行後、*$btnName*変数には"bValidateForm"が格納されています。

#### 参照 

*Form Objects (Access)*  
[OBJECT Get pointer](object-get-pointer.md)  
*オブジェクト(フォーム)*  