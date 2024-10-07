---
id: mail-new-attachment
title: MAIL New attachment
slug: /commands/mail-new-attachment
displayed_sidebar: docs
---

<!--REF #_command_.MAIL New attachment.Syntax-->**MAIL New attachment** ( *value* {; *name* {; *cid* {; *type* {; *disposition*}}}} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.MAIL New attachment.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| value | Text, Blob, Object | &#x1F852; | オブジェクト(4D.File、4D.ZipFile、4D.Blob)、または添付ファイルのパス(テキスト)、または添付ファイルを格納しているBlob(BLOB) |
| name | Text | &#x1F852; | 添付ファイルを指定するのにメールクライアントが使用する名前+拡張子 |
| cid | Text | &#x1F852; | 添付ファイルのID(HTMLメッセージのみ)、またはcidが必要でない場合には" " |
| type | Text | &#x1F852; | content-type ヘッダーの値 |
| disposition | Text | &#x1F852; | content-disposition ヘッダーの値: "inline" または "attachment". |
| 戻り値 | Object | &#x1F850; | 添付オブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MAIL New attachment.Summary-->**MAIL New attachment** コマンドは、*mail* オブジェクトに追加することができる添付オブジェクトを作成します。<!-- END REF-->(*transporter.send( )*参照)

*value* 引数には、添付の中身を渡します。以下のものを渡すことができます:

* **オブジェクト**型の4D.File、4D.ZipFile、または4D.Blob クラス
* **テキスト**型の*value* 引数: システムシンタックスで表現された添付ファイルのパスを渡します。完全なパス名、または単純なファイル名のみを渡すことができます(ファイル名のみの場合、4D はデータベースストラクチャーファイルと同じディレクトリ内を検索します)。
* **BLOB** 型の*value* 引数: 添付そのものを渡します。

任意の*name* 引数には、添付を指定するためにメールクライアントが使用する名前と拡張子を渡すことができます。*name* 引数が省略された場合、ファイル名は以下のようになります:

* *value* 引数がファイルパスの場合、そのファイル名と拡張子が使用されます。
* *value* 引数がBLOB 型の場合、拡張子がないランダムな名前が自動的に生成されます。

任意の*cid* 引数を使用すると、添付ファイルの内部ID を渡すことができます。このID はコンテンツID ヘッダーの値で、HTML メッセージでのみ使用されます。引数は、添付ファイルを、メッセージ本文で定義された参照を割り当て、**<img src="cid:ID">** のようにHTML タグを使用して参照します。これはつまり添付ファイルの中身(例: ピクチャー)はメールクライアント場ではメッセージ本文内に表示されるべきであることを意味しています。最終的な表示はメールクライアントによって若干異なる可能性があります。*cid* 引数を使用したくない場合、この引数には空の文字列を渡してください。

任意の*type* 引数を使用すると、添付ファイルのコンテンツタイプを明示的に設定することができます。例えば、MIME タイプを定義する文字列("video/mpeg"など)を渡すことができます。このコンテンツタイプは拡張子とは関係なく添付ファイルに対して設定されます。MIME タイプについての詳細な情報については、[Wikipedia 上のMIME に関するページ](https://ja.wikipedia.org/wiki/Multipurpose%5FInternet%5FMail%5FExtensions)を参照して下さい。  
この引数が省略された場合あるいはこの引数に空の文字列が渡された場合、デフォルトで、添付ファイルのコンテンツタイプは拡張子に基づいて設定されます。主なMIME タイプについては、以下のルールが適用されます:

| **拡張子**   | **コンテンツタイプ**                  |
| --------- | ----------------------------- |
| jpg, jpeg | image/jpeg                    |
| png       | image/png                     |
| gif       | image/gif                     |
| pdf       | application/pdf               |
| doc       | application/msword            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip               |
| gz        | application/gzip              |
| json      | application/json              |
| js        | application/javascript        |
| ps        | application/postscript        |
| xml       | application/xml               |
| htm, html | text/html                     |
| mp3       | audio/mpeg                    |
| *other*   | application/octet-stream      |

任意の*disposition* 引数には、添付ファイルのContent-Disposition ヘッダーを渡すことができます。"*Mail*" 定数テーマ内にある、以下の定数のいづれか1つを渡すことができます:

| 定数                          | 値          | コメント                                                                                                                       |
| --------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | attachment | Content-disposition ヘッダーの値を"attachment" に設定します。これは添付ファイルはメッセージ内でリンクとして提供される必要があることを意味します。                                  |
| mail disposition inline     | inline     | Content-disposition ヘッダーの値を"inline" に設定します。これは添付ファイルはメッセージ本文内の、"cid" の位置にレンダリングされる必要があることを意味します。レンダリングそのものはメールクライアントによります。 |

デフォルトでは、*disposition* 引数が省略された場合、Content-Disposition ヘッダーは以下のように設定されます:

* *cid* 引数が使われていた場合、Content-Disposition ヘッダーは"inline" に設定されます。
* *cid* 引数が渡されていない、あるいは空の文字列が渡されていた場合、Content-Disposition ヘッダーは"attachment" に設定されます。
