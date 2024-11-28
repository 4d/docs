---
id: form-screenshot
title: FORM SCREENSHOT
slug: /commands/form-screenshot
displayed_sidebar: docs
---

<!--REF #_command_.FORM SCREENSHOT.Syntax-->**FORM SCREENSHOT** ( {{*aTable* ;} *formName* ;} *formPict* {; *pageNum*} )<!-- END REF-->
<!--REF #_command_.FORM SCREENSHOT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | フォームテーブル |
| formName | Text | &#8594;  | フォーム名 |
| formPict | Picture | &#8592; | 第一引数が省略された場合実行中のフォームのピクチャー。フォーム名がが渡された場合フォームエディター中のフォームのピクチャー |
| pageNum | Integer | &#8594;  | フォームページ番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FORM SCREENSHOT.Summary-->FORM SCREENSHOT コマンドはフォームをピクチャーにして返します。<!-- END REF-->このコマンドは2つのシンタックスを受け入れます。使用されるシンタックスに応じてフォームのピクチャー、またはフォームエディター内のフォームのピクチャーが返されます。

* FORM SCREENSHOT ( formPict )  
このシンタックスでは実行中、または [FORM LOAD](../commands/form-load.md) コマンドによってロード中のフォームのカレントページのスクリーンショットが返されます。*formPict*引数に返されるピクチャーにはフォームのすべての表示可能なオブジェクトが含まれ、そこにカレントのフィールドや変数の値が表示されます。フォームのすべてが返され、ウィンドウサイズは考慮されません。  
このシンタックスは入力フォームでのみ有効です。
* FORM SCREENSHOT ( {*aTable* ;} formName; formPict{; *pageNum*} )  
このシンタックスはフォームエディターに表示されるフォームテンプレートのスクリーンショットを返します。すべての表示可能なオブジェクトはフォームエディターに表示される通りに描画されます。継承フォームや0ページのオブジェクトも含まれます。  
テーブルフォームのスクリーンショットを得たい場合、*aTable*引数にフォームテーブルを渡し、*formName*にフォーム名を渡します。プロジェクトフォームの場合、*formName*にフォーム名を渡します。  
デフォルトでこのコマンドはフォームの1ページ目のスクリーンショットを返します。0ページやその他のページのピクチャーを得たい場合、*pageNum*引数を使用してページ番号を指定します。

****注:**

* 返されたスクリーンショットにはWebエリアはレンダリングされません。
* このコマンドの最初の二つの引数は任意であるため、[Current form table](current-form-table.md)\-> や[Table](table.md)\->のように、ポインターを返す関数を直接引数として渡す事は出来ません。このシンタックスはインタープリタモードでは動作し ますがコンパイル時に除去されますので、この場合にはその代わりに中間のポインター変数を使用する必要があります。詳細な情報に関しては、"*ポインターを返すコマンドを直接使用する方法*"を参照して下さい。

#### 参照 

[FORM LOAD](../commands/form-load.md)  