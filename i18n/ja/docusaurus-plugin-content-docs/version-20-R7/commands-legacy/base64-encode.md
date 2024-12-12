---
id: base64-encode
title: BASE64 ENCODE
slug: /commands/base64-encode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 ENCODE.Syntax-->**BASE64 ENCODE** ( *BLOB* {; *encoded*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 ENCODE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob, Text | &#8594;  | Base 64フォーマットでコード化するBLOB |
| &#8592; | Base 64フォーマットでコード化したBLOB |
| encoded | Blob, Text | &#8592; | エンコードされた値 |
| * | 演算子 | &#8594;  | Base64URL フォーマットでエンコードする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BASE64 ENCODE.Summary-->**BASE64 ENCODE** コマンドは、*toEncode* 引数に渡されたテキストまたはBlob値を、Base64 またはBase64URL フォーマットにエンコードします。<!-- END REF--> 

Bse64 エンコーディングは、8-bit のコードされたデータを編集し、データが7つ以上の有効なビットを持たないようにします。このエンコーディングは、例えばXML を使用しているBlob を扱う際などに必要になります。Base64URL はURL やファイル名のための特定の処理のために使用される代替エンコーディング方法です([rfc4648](https://tools.ietf.org/html/rfc4648#section-5) を参照してください)。

*toEncode* 引数には、エンコードしたテキストまたはBlob 値を渡します。

**注:** テキスト値を渡す場合、コマンドはテキストをUTF-8 で表現されたテキストを変換します。

*encoded* 引数を渡した場合、ここには*toEncode* 引数の中身をテキストまたはBlob にエンコードしたものをコマンド実行後に受け取ります。この場合、toEncode 引数自身はこのコマンドによっては何も変更されません。

*encoded* 引数を省略した場合、コマンドは*toEncode* 引数を直接変換します。

デフォルトで、 *\** 引数が省略された場合、コマンドはBase64 エンコーディングを使用します。 *\** 引数を渡した場合、コマンドはBase64URL エンコーディングを使用します。

#### 参照 

[BASE64 DECODE](base64-decode.md)  
[Generate digest](generate-digest.md)  
[XML DECODE](xml-decode.md)  
*XML DOMコマンドの概要*  