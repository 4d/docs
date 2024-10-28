---
id: base64-decode
title: BASE64 DECODE
slug: /commands/base64-decode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 DECODE.Syntax-->**BASE64 DECODE** ( *toDecode* {; *decoded*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 DECODE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| toDecode | Text, Blob | &#8594;  | Encoded value to decode |
| &#8592; | Decoded value (if decoded parameter omitted) |
| decoded | Text, Blob | &#8592; | Decoded value |
| * | Operator | &#8594;  | Decode in Base64URL format |

<!-- END REF-->

#### Description 

<!--REF #_command_.BASE64 DECODE.Summary-->The **BASE64 DECODE** command decodes the text or blob value coded in Base64 or Base64URL format passed in the *toDecode* parameter.<!-- END REF--> For more information on Base64 and Base64URL formats, please refer to the [BASE64 ENCODE](base64-encode.md) command description. 

Pass in *toDecode* the Base64 or Base64URL encoded text or blob value to decode. 

If you pass the *decoded* parameter, the command decodes the contents of *toDecode* in the decoded parameter -- the *toDecode* parameter is left untouched. If you omit the *decoded* parameter, the command directly modifies the contents of the *toDecode* parameter.

**Note:** If a text variable is passed to receive what is decoded by the command, it receives the decoded bytes interpreted as utf-8.

By default if the *\** parameter is omitted, the command uses a Base64 decoding. If you pass the *\** parameter, the command uses a Base64URL decoding.

If *toDecode* contains an invalid base64 contents, an empty text or blob value is returned. 

#### Example 

This example lets you transfer a picture via a BLOB:

```4d
 var $sourceBlob : Blob
 var $mypicture : Picture
 $mypicture:=[people]photo
 PICTURE TO BLOB($mypicture;$sourceBlob;".JPG")
 var $base64Text : Text
 BASE64 ENCODE($sourceBlob;$base64Text) //Encoding of text
  // the binary is now available as character strings in $base64Text
 
 var $base64Text : Text
 var $targetBlob : Blob
 BASE64 DECODE($base64Text;$targetBlob) //Decoding of text
  // the binary encoded in base 64 is now available as a BLOB in $blobTarget
```

#### See also 

[BASE64 ENCODE](base64-encode.md)  
[Generate digest](generate-digest.md)  
*Overview of XML DOM Commands*  
[XML DECODE](xml-decode.md)  