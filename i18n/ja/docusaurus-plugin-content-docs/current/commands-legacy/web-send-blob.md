---
id: web-send-blob
title: WEB SEND BLOB
slug: /commands/web-send-blob
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND BLOB.Syntax-->**WEB SEND BLOB** ( *BLOB* ; *type* )<!-- END REF-->
<!--REF #_command_.WEB SEND BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | ブラウザへ送るBLOB |
| type | Text | &#8594;  | BLOBのデータタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SEND BLOB.Summary-->**WEB SEND BLOB**コマンドを使用して *blob* をブラウザへ送ります。<!-- END REF--> 

BLOBに含まれるデータのタイプは *type* によって示されます。この引数は以下の定数のいずれかになります: 

* *Type* \= **空の文字列** (""): この場合、BLOBにそれ以上の情報を供給する必要はありません。ブラウザがBLOBの内容を解釈しようとします。
* *Type* \= **ファイル拡張子** (例: ".HTM"、".GIF"、".JPEG" など): この場合、BLOBに含まれるデータのMIMEタイプを拡張子を使って指定します。そして、BLOBはその拡張子に応じて解釈されます。ただし、ブラウザ が正確に解釈できるように、拡張子は標準なものでなくてはなりません。
* *type* \= **Mime/Type** (例: “text/html”、“image/tiff” など):この場合、BLOBに含まれるデータのMIMEタイプを直接指定します。このソリューションはより多くの自由度を提供します。標準タイプに加え、 イントラネット経由で固有のドキュメントを送るためにカスタムMIMEタイプを渡すこともできます。これを実行するには、ブラウザを 設定するだけです。このブラウザが、送られたタイプを認識したり、適切なアプリケーションを開いたりします。 *type* isに渡す値は、この場合、“application/x-\[TypeName\]”となります。クライアントワークステーションのブラウザでは、このタイプを参照し、それを “アプリケーション起動” 動作に関連付けます。そのため**WEB SEND BLOB**コマンド を使用すると、すべてのタイプのドキュメントを送ることが可能になり、イントラネットクライアントは関連するアプリケーションを自動的に開くことができるようになります。  
**注:** MIME型についての詳細な情報に関しては、こちらを参照して下さい: <http://www.iana.org/assignments/media-types>

最も一般的なMIMEタイプのリストです:

| 拡張子    | **Mime/Type**            |
| ------ | ------------------------ |
| .htm   | text/html                |
| .html  | text/html                |
| .shtml | text/html                |
| .shtm  | text/html                |
| .css   | text/css                 |
| .pdf   | application/pdf          |
| .rtf   | application/rtf          |
| .ps    | application/postscript   |
| .eps   | application/postscript   |
| .hqx   | application/mac-binhex40 |
| .js    | application/javascript   |
| .json  | application/json         |
| .txt   | text/plain               |
| .text  | text/plain               |
| .gif   | image/gif                |
| .jpg   | image/jpeg               |
| .jpeg  | image/jpeg               |
| .jpe   | image/jpeg               |
| .jfif  | image/jpeg               |
| .pic   | image/pict               |
| .pict  | image/pict               |
| .tif   | image/tiff               |
| .tiff  | image/tiff               |
| .mpeg  | video/mpeg               |
| .mpg   | video/mpeg               |
| .mov   | video/quicktime          |
| .moov  | video/quicktime          |
| .aif   | audio/aiff               |
| .aiff  | audio/aiff               |
| .wav   | audio/wav                |
| .ram   | audio/x-pn-realaudio     |
| .sit   | application/x-stuffit    |
| .bin   | application/x-stuffit    |
| .xml   | application/xml          |
| .z     | application/x-zip        |
| .zip   | application/x-zip        |
| .gz    | application/x-gzip       |
| .tar   | application/x-tar        |

**注:** 4D HTTPサーバーでサポートされているMIMEタイプは、4Dアプリケーションの以下のフォルダの中にある、 "MimeTypes.xml" の中に保存されています: *\[Contents\]\\Native components\\HTTPServer.bundle\\Contents\\Resources*. 

ページ内の4D 変数や *4DSCRIPT* 型タグへの参照は常に解析されます。

#### 例題 

[PICTURE TO BLOB](picture-to-blob.md)のルーチンの例を参照してください。

#### 参照 

[WEB SEND FILE](web-send-file.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 654 |
| スレッドセーフである | &check; |


