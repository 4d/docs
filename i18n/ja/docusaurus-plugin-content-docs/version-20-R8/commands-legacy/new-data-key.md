---
id: new-data-key
title: New data key
slug: /commands/new-data-key
displayed_sidebar: docs
---

<!--REF #_command_.New data key.Syntax-->**New data key** ( *passPhrase* ) : Object<!-- END REF-->
<!--REF #_command_.New data key.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| passPhrase | Text | &#8594;  | AESデータ暗号化キーを生成するために使用するパスフレーズ |
| 戻り値 | Object | &#8592; | キーを格納しているオブジェクト(encodedKeyプロパティに格納) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.New data key.Summary-->**New data key** コマントは、*passPhrase* 引数に渡されたパスフレーズのテキストからバイナリーデータの暗号化キーを生成します。<!-- END REF-->

エンコードされたキーはローカルに保存することができるので、例えばUSBメモリの様な取り外し可能なデバイスに保存することができます(*4D デザインリファレンス*の *データ暗号化キーをファイルに保存する* 参照)。暗号化されたデータベースをホストしているマシンにそのデバイスを接続することで、ユーザーは自動的に暗号化されたデータにアクセスできるようになります。

*passPhrase* 引数にはどんな文字も渡すことができます。*passPhrase* 引数のパスフレーズが同じであれば、生成される暗号化キーはいつも同じです。

**返される値**

返されるオブジェクトには以下のプロパティが格納されています:

| **プロパティ**  | **型** | **詳細**                                     |
| ---------- | ----- | ------------------------------------------ |
| encodedKey | テキスト  | *passPhrase* から生成されたAES 暗号化キー(SHA 256-bit) |

*passPhrase* 引数に空の文字列が渡された場合、コマンドは*null* を返します。

#### 例題 

暗号化キーを.4DKeyChain ファイルに保存したい場合を考えます:

```4d
 var $dataKey : Object
 var $passphrase : Text
 
 $passphrase:=Request("Enter the passphrase:")
 If(OK=1)
    $dataKey:=New data key($passphrase)
    TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))
 End if
```

#### 参照 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Discover data key](discover-data-key.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Register data key](register-data-key.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1611 |
| スレッドセーフである | &check; |


