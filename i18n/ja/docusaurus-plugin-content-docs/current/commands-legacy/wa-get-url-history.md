---
id: wa-get-url-history
title: WA GET URL HISTORY
slug: /commands/wa-get-url-history
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL HISTORY.Syntax-->**WA GET URL HISTORY** ( {* ;} *object* ; *urlsArr* {; *direction* {; *titlesArr*}} )<!-- END REF-->
<!--REF #_command_.WA GET URL HISTORY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| urlsArr | Text array | &#8592; | 訪問したURLの配列 |
| direction | Integer | &#8594;  | 0または省略=前のURL配列, 1=次のURL配列 |
| titlesArr | Text array | &#8592; | ウィンドウタイトルの配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA GET URL HISTORY.Summary-->WA GET URL HISTORY コマンドは、*\** と *object* 引数で指定したWebエリアのセッション中に訪問したURLを含む1つまたは2つの配列を返します。<!-- END REF-->このコマンドを使用して、カスタムのナビゲーションシステムを作成できます。

提供される情報はセッションに限定されます。言い換えればナビゲーションは同じWebエリアで、フォームが閉じられない間実行されます。

*urlsArr* 配列には、訪問したURLが返されます。*direction* 引数が渡されればその値に基づき、配列に前のURL (デフォルト動作)、または次のURLが返されます。これらのリストは、ブラウザの標準の次ページや前ページの内容に対応します。

URLは時間順に並びかえられます。

*direction*には取得するリストを指定する値を渡します。 *Web Area* テーマの以下の定数を使用できます:

| 定数               | 型    | 値 |
| ---------------- | ---- | - |
| WA next URLs     | 倍長整数 | 1 |
| WA previous URLs | 倍長整数 | 0 |

*direction* 引数を省略すると、0が使用されます。

*titlesArr* 引数を渡すと、URLに関連付けられたウィンドウの名前が返されます。この配列は*urlsArr* 配列と同期しています。

**互換性に関する注意:** **4D v19 R5 以降、このコマンドは Windows のシステムレンダリングエンジン を使用しているWeb エリアにおける urlsArr および titlesArr 配列のみを返します。*

#### 参照 

[WA Create URL history menu](wa-create-url-history-menu.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1048 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


