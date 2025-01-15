---
id: web-send-text
title: WEB SEND TEXT
slug: /commands/web-send-text
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND TEXT.Syntax-->**WEB SEND TEXT** ( *htmlText* {; *type*} )<!-- END REF-->
<!--REF #_command_.WEB SEND TEXT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| htmlText | Text | &#8594;  | Webブラウザへ送られるHTMLテキストフィールド または変数 |
| type | Text | &#8594;  | MIME型 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SEND TEXT.Summary-->**WEB SEND TEXT**コマンドを使用して、 HTMLにフォーマットされたテキストデータを直接送ります。<!-- END REF--> 

引数 *htmlText* は送るデータを格納しています。4Dは引数の内容をチェックしませんので、HTMLが正確にコード化されているかを確認してください。

テキスト内での4D変数と *4DSCRIPT* 型タグへの参照は全て解析されます。

*type* 引数を省略した場合、4Dは送信されたデータが "text/html" 型であると自動的に判断します。この場合、コマンドは [WEB SEND BLOB](web-send-blob.md) コマンドを使用して "text/html" 型のBLOBを送信したのと同一の挙動をします。  
また、 *type* 引数を使用して送信したいテキストのMIME型を指定することもできます。サポートされているMIME型に関しての詳細な情報は、 [WEB SEND BLOB](web-send-blob.md) コマンドの詳細を参照して下さい。

#### 例題 

```4d
 var $content_t : Text
 var $blob_x : Blob
 $content_t:=""
 $content_t:=$content_t+String(Current time)
 $content_t:=$content_t+""
 
  // 以下の二行を
 TEXT TO BLOB($content_t;$blob_x;UTF8 text without length)
 WEB SEND BLOB($blob_x;"text/html")
 
  // 一行で置き換えることができます。
 WEB SEND TEXT($content_t)
```

#### 参照 

[WEB SEND BLOB](web-send-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 677 |
| スレッドセーフである | &check; |


