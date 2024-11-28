---
id: object-get-subform-container-size
title: OBJECT GET SUBFORM CONTAINER SIZE
slug: /commands/object-get-subform-container-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Syntax-->**OBJECT GET SUBFORM CONTAINER SIZE** ( *width* ; *height* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| width | Integer | &#8592; | サブフォームオブジェクトの幅 |
| height | Integer | &#8592; | サブフォームオブジェクトの高さ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Summary-->**OBJECT GET SUBFORM CONTAINER SIZE**コマンドは親フォーム中に表示されているカレントサブフォームオブジェクトの幅と高さをピクセル単位で返します。<!-- END REF-->

このコマンドはサブフォームとして使用され、サブフォームオブジェクトの中に表示されているフォームのメソッドから呼び出されなければなりません。コマンドはサブフォームを含んでいるオブジェクトの幅と高さを返します。

このコマンドは例えば、サブフォームオブジェクトの特性に基づきサブフォームオブジェクトのサイズをリサイズしなければならないようなケースで有用です。On Load フォームイベントでサブフォームはこのコマンドを呼び出し、自身のコンテンツを表示するためのスペースを計算できます。

親フォーム中に表示されているサブフォームオブジェクトをリサイズすると、サブフォームメソッドにおいて On Resize イベントが生成されます。(例: サブフォームが横および縦方向のサイズ変更時に拡大するようプロパティが設定されていて、親フォームがリサイズされた場合など) 

* コマンドがサブフォームとして使用されていないフォームから呼び出された場合、コマンドはフォームウィンドウの現在のサイズを返します。
* 画面表示が関連しない状況でコマンドが呼び出された場合 (例えば印刷時)、*width* と *height* には0が返されます。

#### 参照 

[OBJECT GET SUBFORM](../commands/object-get-subform.md)  
[OBJECT SET SUBFORM](../commands/object-set-subform.md)  