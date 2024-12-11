---
id: set-document-properties
title: SET DOCUMENT PROPERTIES
slug: /commands/set-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT PROPERTIES.Syntax-->**SET DOCUMENT PROPERTIES** ( *document* ; *locked* ; *invisible* ; created on ; created at ; modified on ; modified at )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名 またはドキュメントの完全なパス名 |
| locked | Boolean | &#8594;  | ロックの場合はTrue、アンロックの場合はFalse |
| invisible | Boolean | &#8594;  | 非表示の場合はTrue、表示の場合はFalse |
| created on | 日付 | &#8594;  | 作成日 |
| created at | 時間 | &#8594;  | 作成時間 |
| modified on | 日付 | &#8594;  | 更新日 |
| modified at | 時間 | &#8594;  | 更新時間 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET DOCUMENT PROPERTIES.Summary-->SET DOCUMENT PROPERTIESコマンドは、引数*document* に渡した名前またはパス名を持つドキュメントについての情報を変更します。<!-- END REF-->

呼び出しの前に以下の情報を渡します。

* ドキュメントをロックするには、引数[Locked](locked.md "Locked")にTrueを渡します。ロックされたドキュメントを開いたり削除することはできません。ドキュメントのロックを解除するには[Locked](locked.md "Locked")にFalseを渡します。
* ドキュメントを隠すには、引数*invisible* にTrueを渡します。デスクトップウィンドウでドキュメントが表示されるようにするには、 *invisible* にFalseを渡します。
* 引数*created on*および*created at*に、ドキュメントの作成日および作成時間を渡します。
* 引数*modified on*および*modified at*に、最新のドキュメント更新日および更新時間を渡します。

作成および最新の更新の日付および時間は、ドキュメントを作成、またはこれにアクセスするたびに、システムのファイルマネージャによって管理されます。このコマンドを使用すると、特別な用途のためにこれらのプロパティを変更することができます。 [GET DOCUMENT PROPERTIES](get-document-properties.md "GET DOCUMENT PROPERTIES")コマンドの例を参照してください。

#### 参照 

[GET DOCUMENT PROPERTIES](get-document-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 478 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


