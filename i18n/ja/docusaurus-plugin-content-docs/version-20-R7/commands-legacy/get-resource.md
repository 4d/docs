---
id: get-resource
title: GET RESOURCE
slug: /commands/get-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET RESOURCE.Syntax-->**GET RESOURCE** ( *resType* ; *resID* ; *resData* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.GET RESOURCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4文字のリソースタイプ |
| resID | Integer | &#8594;  | リソースID番号 |
| resData | Blob | &#8594;  | データを受け取るBLOBフィールドまたは変数 |
| &#8592; | リソースの内容 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET RESOURCE.Summary-->GET RESOURCE コマンドは、*resType*と*resID*に渡されるタイプとIDを持つリソースの内容を、BLOBフィールドまたはBLOB変数の*resData*に返します。<!-- END REF-->

**重要**: *resType*には4文字を渡す必要があります。.

リソースが見つからなかった場合、*resData*はそのまま変わらず、システム変数OKに0が設定されます。

*resFile*に有効なリソースファイル参照番号を渡すと、リソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合、リソースチェーン内で最初に見つかったリソースのオカレンスが返されます。

**Note:** リソースは、数メガバイトのサイズになる可能性があります。

#### プラットフォーム独立性 

 Mac OSベースのリソースに対して作業していることを忘れないでください。プラットフォームが何であろうと、倍長整数のような内部リソースデータは Macintoshバイトオーダーで格納されます。Windows上では、(ストリングリストリソースおよびピクチャリソース等の) 標準リソースデータは必要に応じて自動的にバイトスワップされます。これに対して、カスタム内部データストラクチャを作成および使用する場合は、BLOB から取り出すデータのバイトスワップは開発者に任されています ([BLOB to longint](blob-to-longint.md "BLOB to longint")コマンドにMacintosh byte ordering定数を渡すなど)。

#### 例題 

SET RESOURCEコマンドの例題参照

#### システム変数およびセット 

リソースが見つかるとOKに1が、そうでなければ０が設定されます。

#### エラー管理 

リソースをロードするための十分なメモリがない場合、エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")を使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

*リソース*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 508 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


