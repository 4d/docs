---
id: wp-delete-text-box
title: WP DELETE TEXT BOX
slug: /WritePro/commands/wp-delete-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE TEXT BOX.Syntax-->**WP DELETE TEXT BOX** ( *textBox* )<!-- END REF-->
<!--REF #_command_.WP DELETE TEXT BOX.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| textBox | Object | &#8594;  | テキストボックス |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP DELETE TEXT BOX.Summary-->**WP DELETE TEXT BOX** コマンドは*textBox* 引数で定義したテキストボックスを削除します。<!-- END REF-->

*textBox* 引数で指定したテキストボックスが存在しない場合、コマンドは何もしません。

#### 例題 

IDを使用してテキストボックスを削除したい場合を考えます:

```4d
 var $myTextBox : Object
 
  // テキストボックスのID を取得
 $myTextBox:=WP Get element by ID(myDoc;"AddressBox")
 
  // テキストボックスを削除
 WP DELETE TEXT BOX($myTextBox)
```

#### 参照 

[WP New text box](wp-new-text-box.md)  