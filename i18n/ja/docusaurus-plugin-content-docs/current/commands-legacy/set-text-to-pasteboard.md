---
id: set-text-to-pasteboard
title: SET TEXT TO PASTEBOARD
slug: /commands/set-text-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET TEXT TO PASTEBOARD.Syntax-->**SET TEXT TO PASTEBOARD** ( *text* )<!-- END REF-->
<!--REF #_command_.SET TEXT TO PASTEBOARD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| text | Text | &#8594;  | ペーストボードに置くテキスト |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET TEXT TO PASTEBOARD.Summary-->SET TEXT TO PASTEBOARD は、ペーストボードを消去し、*text*に渡したテキストのコピーをペーストボードに置きます。<!-- END REF-->

**Note:** コピー/ペースト操作では、ペーストボードはクリップボードと同じです。

ペーストボードにテキストを置いた後、[Get text from pasteboard](get-text-from-pasteboard.md "Get text from pasteboard") コマンド または例えば GET PASTEBOARD DATA **("com.4d.private.text.native";...)** を使用して、そのテキストを取り出すことができます。  

4Dのテキスト式は最大2 GBのテキストを含めることができます。

**Note:** On Drag Over フォームイベント中ペーストボードは読み込みのみモードです。このコンテキストではこのコマンドは使用できません。

#### 例題 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD") コマンドの例題参照

#### システム変数およびセット 

テキストのコピーが正しくペーストボードに置かれると、OK変数は1に設定されます。  
ペーストボードにテキストを置くためのメモリが十分にない場合、OK変数は0に設定されますが、エラーは生成されません。

#### 参照 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  