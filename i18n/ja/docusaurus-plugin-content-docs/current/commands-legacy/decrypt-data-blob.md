---
id: decrypt-data-blob
title: Decrypt data BLOB
slug: /commands/decrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Decrypt data BLOB.Syntax-->**Decrypt data BLOB** ( *blobToDecrypt* ; keyObject | passPhrase ; *salt* ; *decryptedBLOB* ) : Boolean<!-- END REF-->
<!--REF #_command_.Decrypt data BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| blobToDecrypt | Blob | &#8594;  | 復号化したいBLOB |
| keyObject &#124; passPhrase | オブジェクト, テキスト | &#8594;  | 暗号化鍵を格納したJSON オブジェクト、または直接暗号化鍵を生成するためのパスフレーズ(テキスト) |
| salt | Integer | &#8594;  | アルゴリズムのための追加のsalt |
| decryptedBlob | Blob | &#8592; | 復号化されたBLOB |
| 戻り値 | Boolean | &#8592; | 復号化が正常に実行された場合にはTrue、それ以外の場合にはFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Decrypt data BLOB.Summary-->**Decrypt data BLOB** コマンドは、*blobToDecrypt* 引数のBLOB を、4D がデータの復号化に使用するのと同じアルゴリズム(AES-256) を使用して復号化し、その結果を*decryptedBLOB* 引数に返します

BLOB を復号化するのには、*keyObject* または *passPhrase* のいづれかを使用することができます: 

* *keyObject*: 暗号鍵を格納したJSON オブジェクト。<!-- END REF-->その構造は、[New data key](new-data-key.md) コマンドによって返されるオブジェクトと同じです。
* *passPhrase*: 暗号鍵を生成するのに使用した文字列です。

**Decrypt data BLOB** の*salt* 引数に渡す数値は、暗号化の際に使用されたものと合致する必要があります。

復号化に成功した場合、復号化されたデータは*decryptedBLOB* 引数に返され、コマンドはTrue を返します。

エラーが起きた場合には、空のBLOB が返され、コマンドはFalse を返します。

#### 例題 

以下の例では、データベースのRESOURCES フォルダにある暗号化されたファイルを復号化したい場合を考えます:

  
```4d
 var $fileToDecrypt;$decryptedFile : 4D.File
 var $blobToDecrypt;$decryptedBlob : Blob
 var $result : Boolean
 
 $fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")
 $decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")
 
 $blobToDecrypt:=$fileToDecrypt.getContent()
 
 $result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)
 $decryptedFile.setContent($decryptedBlob)
```

復号化で使用する*passPhrase* 引数および *salt* 引数は、暗号化の際に使用された*passPhrase* 引数および *salt* 引数と同一です([Encrypt data BLOB](encrypt-data-blob.md) の例題を参照して下さい)。

#### 参照 

  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1774 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


