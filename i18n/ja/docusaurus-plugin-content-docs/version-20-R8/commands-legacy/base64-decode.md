---
id: base64-decode
title: BASE64 DECODE
slug: /commands/base64-decode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 DECODE.Syntax-->**BASE64 DECODE** ( *encodedText* {; *decoded*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 DECODE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| encodedText | Text, Blob | &#8594;  | デコードする、エンコード済みの値 |
| &#8592; | デコードされた値(decoded 引数省略時) |
| decoded | Text, Blob | &#8592; | デコードされた値 |
| * | 演算子 | &#8594;  | デコードにBase64URL フォーマットを指定 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BASE64 DECODE.Summary-->**BASE64 DECODE** コマンドは、*toDecode* 引数に渡された、Base64 または Base64URL フォーマットにエンコードされたテキストまたはBlob をデコードします。<!-- END REF-->Base64 およびBase64URL フォーマットについての詳細な情報については、[BASE64 ENCODE](base64-encode.md) コマンドの詳細を参照してください。

*toDecode* 引数には、デコードしたい、Base64 またはBase64URL フォーマットでエンコードされているテキストまたはBlob値を渡します。

*decoded* 引数を渡した場合、コマンドは*toDecode* 引数の中身をデコードしたものをdecoded 引数に入れます。この場合*toDecode* 引数は何も変更されずそのままにされます。引数を省略した場合、引数を省略した場合、コマンドは*toDecode* 引数の中身を直接変換します。

**注:** コマンドがデコードした結果を受け取るためにテキスト変数を渡した場合、その変数にはデコードされたバイトをUTF-8で解釈した結果が渡されます。

デフォルトで、 *\** 引数が省略された場合、コマンドはデコードにBase64 を使用します。 *\** 引数を渡した場合、コマンドはデコードにBase64URL を使用します。

*toDecode* 引数に無効なBase64 コンテンツが含まれていた場合、空のテキストまたはBlob が返されます。

#### 例題 

この例題ではBLOBを使用してピクチャーを転送します:

```4d
 var $sourceBlob : Blob
 var $mypicture : Picture
 $mypicture:=[people]photo
 PICTURE TO BLOB($mypicture;$sourceBlob;".JPG")
 var $base64Text : Text
 BASE64 ENCODE($sourceBlob;$base64Text) //テキストにエンコード
  // バイナリは文字列として$base64Textに格納されている
 
 var $base64Text : Text
 var $targetBlob : Blob
 BASE64 DECODE($base64Text;$targetBlob) //テキストをデコード
  // Base64にエンコードされたバイナリは$blobTargetにデコードされる
```

#### 参照 

[BASE64 ENCODE](base64-encode.md)  
[Generate digest](generate-digest.md)  
[XML DECODE](xml-decode.md)  
*XML DOMコマンドの概要*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 896 |
| スレッドセーフである | &check; |


