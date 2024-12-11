---
id: generate-digest
title: Generate digest
slug: /commands/generate-digest
displayed_sidebar: docs
---

<!--REF #_command_.Generate digest.Syntax-->**Generate digest** ( *param* ; *algorithm* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Generate digest.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| param | Blob, Text | &#8594;  | Blob or text for which to get digest key |
| algorithm | Integer | &#8594;  | Algorithm used to return key: 0 = MD5 Digest, 1 = SHA1 Digest, 2 = 4D digest, 3 = SHA-256 digest, 4 = SHA-512 digest |
| * | Operator | &#8594;  | Encode digest in Base64URL |
| Function result | Text | &#8592; | Value of digest key |

<!-- END REF-->

#### Description 

<!--REF #_command_.Generate digest.Summary-->The **Generate digest** command returns the digest key of a BLOB or text after application of an encryption algorithm.<!-- END REF-->

Pass a Text or BLOB field or variable in the *param* parameter. The **Generate digest** function returns the digest key as a string.

In the *algorithm* parameter, pass a value designating which hash function to use. Use one of the following constants, found in the *Digest Type* theme:

| Constant            | Value | Comment                                                                                               |
| ------------------- | ----- | ----------------------------------------------------------------------------------------------------- |
| \_o\_4D REST digest | 2     | \*\*\* Obsolete constant \*\*\*                                                                       |
| MD5 digest          | 0     | *Message Digest 5* algorithm. A series of 128 bits returned as a string of 32 hexadecimal characters. |
| SHA1 digest         | 1     | *Secure Hash 1* algorithm. A series of 160 bits returned as a string of 40 hexadecimal characters.    |
| SHA256 digest       | 3     | (SHA-2 family) SHA-256 is a series of 256 bits returned as a string of 64 hexadecimal characters.     |
| SHA512 digest       | 4     | (SHA-2 family) SHA-512 is a series of 512 bits returned as a string of 128 hexadecimal characters.    |

**Note:** It is not recommended to use MD5 and SHA algorithms to handle passwords; if you need to check passwords, you are advised to use [Generate password hash](generate-password-hash.md) and [Verify password hash](verify-password-hash.md) commands.

By default if the *\** parameter is omitted, the returned digest is encoded in hexadecimal. Pass the *\** parameter if you want it to be encoded in Base64URL. 

The value returned for the same object is the same on all the platforms (macOS/Windows). The calculation is performed based on the representation in UTF-8 of the text passed in the parameter. 

**Note:** If you use the command with an empty text/BLOB, it does not return void but a string value (for example "d41d8cd98f00b204e9800998ecf8427e" for MD5).

#### Example 1 

This example compares two images using the MD5 algorithm: 

```4d
 var $vPict1;$vPict2 : Picture
 var $FirstBlob;$SecondBlob : Blob
 READ PICTURE FILE("c:\\myPhotos\\photo1.png")
 If(OK=1)
    READ PICTURE FILE("c:\\myPhotos\\photo2.png")
    If(OK=1)
       PICTURE TO BLOB($vPict1;$FirstBlob;".png")
       PICTURE TO BLOB($vPict2;$SecondBlob;".png")
 
       $MD5_1:=Generate digest($FirstBlob;MD5 digest)
       $MD5_2:=Generate digest($SecondBlob;MD5 digest)
 
       If($MD5_1#$MD5_2)
          ALERT("These two images are different.")
       Else
          ALERT("These two images are identical.")
       End if
    End if
 End if
```

#### Example 2 

These examples illustrate how to retrieve the digest key of a text:

```4d
 $key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)
  // $key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"
 $key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)
  // $key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"
```

#### See also 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  
[Generate password hash](generate-password-hash.md)  
*Secured Protocol*  
[WEB Validate digest](web-validate-digest.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1147 |
| Thread safe | &check; |
| Forbidden on the server ||


