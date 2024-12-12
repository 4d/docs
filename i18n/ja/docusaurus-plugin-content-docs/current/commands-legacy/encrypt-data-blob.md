---
id: encrypt-data-blob
title: Encrypt data BLOB
slug: /commands/encrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data BLOB.Syntax-->**Encrypt data BLOB** ( *blobToEncrypt* ; keyObject | passPhrase ; *salt* ; *encryptedBLOB* ) : Boolean<!-- END REF-->
<!--REF #_command_.Encrypt data BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| blobToEncrypt | Blob | &#8594;  | 暗号化したいBLOB |
| keyObject &#124; passPhrase | オブジェクト, テキスト | &#8594;  | 暗号化鍵を格納したJSON オブジェクト、または直接暗号化鍵を生成するためのパスフレーズ(テキスト) |
| salt | Integer | &#8594;  | アルゴリズムのための追加のsalt |
| encryptedBlob | Blob | &#8592; | 暗号化されたBLOB |
| 戻り値 | Boolean | &#8592; | 暗号化が正常に実行された場合にはTrue、それ以外の場合にはFalse |

<!-- END REF-->

#### 詳細 

<!--REF #_command_.Encrypt data BLOB.Summary-->**Encrypt data BLOB** コマンドは、*blobToEncrypt* 引数のBLOB を、4D がデータの暗号化に使用するのと同じアルゴリズム(AES-256) を使用して暗号化し、その結果を*encryptedBlob* 引数に返します。<!-- END REF-->

BLOB を暗号化するのには、*keyObject* または *passPhrase* のいづれかを使用することができます: 

* *keyObject*: 暗号鍵を格納したJSON オブジェクト。その構造は、[New data key](new-data-key.md) コマンドによって返されるオブジェクトと同じです。
* *passPhrase*: 暗号鍵を生成するのに使用した文字列です。

*salt* 引数には、暗号化をより堅牢にするために使用される数字を渡します。

暗号化に成功した場合、暗号化されたデータは*encryptedBlob* 引数に返され、コマンドはTrue を返します。

エラーが起きた場合には、空のBLOB が返され、コマンドはFalse を返します。

**注:** **Encrypt data BLOB** を使用してBLOB を暗号化する場合、返される*encryptedBlob* 引数内のBLOB は、16 バイトの整数倍になります。これは暗号化アルゴリズムによるものです。結果として、もし*blobToEncrypt* 引数に渡すBLOB が16 バイトの整数倍でなかった場合、コマンドは自動的に末尾にnull バイトを追加してBLOB を16バイトの整数倍に変換します。BLOB を[Decrypt data BLOB](decrypt-data-blob.md) で復号化する際にエラーが起きるのを避けるため、テキストファイルではないファイルを使用する際には*blobToEncrypt* 引数のサイズを管理する必要があります。これの詳細なやり方については、[こちらのブログ記事(英文)](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/) を参照して下さい。

#### 例題 

データベースのRESOURCES フォルダ内にあるテキストファイルを暗号化する場合を考えます:

```4d
 var $fileToEncrypt;$encryptedFile : 4D.File
 var $blobToEncrypt;$encryptedBlob : Blob
 var $result : Boolean
 
 $fileToEncrypt:=File("/RESOURCES/confidential.txt")
 $encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")
 
 $blobToencrypt:=$fileToEncrypt.getContent()
 
 $result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)
 $encryptedFile.setContent($encryptedBlob)
```

#### 参照 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  