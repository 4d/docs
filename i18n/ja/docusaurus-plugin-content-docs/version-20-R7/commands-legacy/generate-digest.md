---
id: generate-digest
title: Generate digest
slug: /commands/generate-digest
displayed_sidebar: docs
---

<!--REF #_command_.Generate digest.Syntax-->**Generate digest** ( *param* ; *algorithm* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Generate digest.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| param | Blob, Text | &#8594;  | Digestキーを取得するBLOBやテキスト |
| algorithm | Integer | &#8594;  | キーの生成に使用するアルゴリズム0= MD5、1 = SHA1、 2=4Dダイジェスト |
| * | 演算子 | &#8594;  | ダイジェストをBase64URL でエンコード |
| 戻り値 | Text | &#8592; | Digestキーの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Generate digest.Summary-->**Generate digest**コマンドはBLOBやテキストのDigestキーを指定したアルゴリズムで生成して返します。<!-- END REF-->

*param* 引数にはテキストまたはBLOBフィールドや変数を渡します。**Generate digest**コマンドはダイジェストキーを文字列として返します。

*algorithm* 引数で使用するハッシュ関数を指定します。*Digest Type*テーマ内にある以下の定数を使用できます:

| 定数                  | 型    | 値 | コメント                                                      |
| ------------------- | ---- | - | --------------------------------------------------------- |
| \_o\_4D REST digest | 倍長整数 | 2 | \*\*\* 廃止予定の定数 \*\*\*                                     |
| MD5 digest          | 倍長整数 | 0 | MD5アルゴリズムを使用。32ビットの16進数の文字列として返された、連続した128ビット             |
| SHA1 digest         | 倍長整数 | 1 | SHA-1アルゴリズムを使用。40ビットの16進数の文字列として返された、連続した160ビット           |
| SHA256 digest       | 倍長整数 | 3 | (SHA-2 family) SHA-256は、64ビットの16進数の文字列として返された、連続した256ビット  |
| SHA512 digest       | 倍長整数 | 4 | (SHA-2 family) SHA-512は、128ビットの16進数の文字列として返された、連続した512ビット |

**注:** パスワードの管理にMD5 および SHA アルゴリズムを使用することは推奨されていません。パスワードをチェックするためには、[Generate password hash](generate-password-hash.md) および [Verify password hash](verify-password-hash.md)コマンドを使用することが推奨されます。

デフォルトで、 *\** 引数が省略された場合、16進数でエンコードされたダイジェストキーが返されます。ダイジェストキーをBase64URLでエンコードしたい場合、 *\** 引数を渡します。

同じオブジェクトに対して返される値は、全てのプラットフォームにおいて同じです(macOS/Win)。この計算は引数に渡されたテキストをUTF-8で表現したものに基づいています。

**注:** コマンドを空のテキストやBLOBに対して実行すると、エラーは返されず、文字列の値が返されます(例えばMD5 に対しては"d41d8cd98f00b204e9800998ecf8427e"が返されます)

#### 例題 1 

この例題ではMD5 アルゴリズムを使用して二つの画像を比較する場合を考えます

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
          ALERT("二つの画像は異なるものです")
       Else
          ALERT("二つの画像は完全に同一のものです")
       End if
    End if
 End if
```

#### 例題 2 

この例題ではテキストのダイジェストキーを取得します:

```4d
 $key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)
  // $key1は"e4d909c290d0fb1ca068ffaddf22cbd0"
 $key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)
  // $key2は"408d94384216f890ff7a0c3528e8bed1e0b01621"
```

#### 参照 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  
[Generate password hash](generate-password-hash.md)  
[WEB Validate digest](web-validate-digest.md)  
*暗号化プロトコル*  