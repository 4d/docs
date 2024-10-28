---
id: get-picture-resource
title: GET PICTURE RESOURCE
slug: /commands/get-picture-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE RESOURCE.Syntax-->**GET PICTURE RESOURCE** ( *resID* ; *resData* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE RESOURCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | リソースID番号 |
| resData | Field, Variable | &#8594;  | ピクチャを受け取る、ピクチャフィールドまたは変数 |
| &#8592; | PICTリソースの内容 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET PICTURE RESOURCE.Summary-->GET PICTURE RESOURCE コマンドは、*resID*のIDを持つピクチャ ("PICT") リソースに格納されているピクチャを*resData*のピクチャフィールドまたは変数に返します。<!-- END REF-->

リソースが見つからなかった場合、*resData*は変わらず、システム変数OKに0が設定されます。

*resFile*に有効なリソースファイル参照番号を渡すと、リソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、リソースチェーン内で最初に見つかったリソースのオカレンスが返されます。

**Note:** ピクチャリソースは、少なくとも数メガバイトのサイズになる可能性があります。

#### 例題 

[RESOURCE LIST](resource-list.md "RESOURCE LIST")コマンドの例題参照

#### システム変数およびセット 

リソースが見つかるとOKは1に、そうでなければ0に設定されます。

#### エラー管理 

ピクチャをロードするための十分なメモリがない場合、エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")を使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[ON ERR CALL](on-err-call.md)  