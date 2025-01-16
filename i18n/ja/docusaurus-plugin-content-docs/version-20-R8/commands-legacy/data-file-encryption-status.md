---
id: data-file-encryption-status
title: Data file encryption status
slug: /commands/data-file-encryption-status
displayed_sidebar: docs
---

<!--REF #_command_.Data file encryption status.Syntax-->**Data file encryption status** ( structurePath , dataPath ) : Object<!-- END REF-->
<!--REF #_command_.Data file encryption status.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| structurePath | Text | &#8594;  | チェックする4Dストラクチャーファイルへのパス名 |
| dataPath | Text | &#8594;  | チェックするデータファイルへのパス名 |
| 戻り値 | Object | &#8592; | データファイルとそれぞれのテーブルの暗号化についての情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Data file encryption status.Summary-->**Data file encryption status** コマンドは、*structurePath* および *dataPath* 引数で指定したデータファイルの、暗号化ステータスをあらわすオブジェクトを返します。<!-- END REF-->それぞれのテーブルについてのステータスも同時に提供されます。

*dataPath* 引数は、4D データファイル(.4dd) を指定します。このファイルは*structurePath* 引数で指定されたストラクチャーファイルと対応している必要があります。カレントのストラクチャーファイルを指定することはできますが、データファイルはカレントの(開かれている)ファイルを指定することはできません。

**注:** カレントデータファイルの暗号化ステータスを調べるためには、*ds.encryptionStatus( )* メソッドを使用してください。

**戻り値**

返されたオブジェクトには、以下のプロパティが格納されています:

| **プロパティ**       | **型**  | **詳細**                                                       |
| --------------- | ------ | ------------------------------------------------------------ |
| isEncrypted     | ブール    | データファイルが暗号化されていればTrue                                        |
| keyProvided     | ブール    | 暗号化されたデータファイルに合致する暗号化キーが4D キーチェーン(\*)に入っていればTrue             |
| tables          | オブジェクト | *暗号化可能* に設定されている、または *暗号化されている* テーブルと同じ数だけプロパティを格納しているオブジェクト |
| <*table name*\> | オブジェクト | 暗号化可能または暗号化済みテーブル                                            |
| name            | テキスト   | テーブル名                                                        |
| num             | 数値     | テーブル番号                                                       |
| isEncryptable   | ブール    | テーブルがストラクチャーファイル内で暗号化可能と宣言されていればTrue                         |
| isEncrypted     | ブール    | テーブルのレコードがデータファイル内で暗号化されていればTrue                             |

(\*) 暗号化キーは、以下のように提供されている必要があります:

* 事前に渡す:  
   * データファイルが開かれる前に、接続されているデバイスを使用して渡す  
   * データファイルが開かれる際に、*ds.provideDataKey( )* コマンドを使用して渡す  
   * データファイルが開かれた後に、[Discover data key](discover-data-key.md) コマンドを使用して渡す
* [Register data key](register-data-key.md) コマンドを使用して渡す

#### 例題 

カレントのストラクチャーファイルに対応するデータファイルの暗号化ステータスを知りたい場合を考えます:

```4d
 var $status : Object
 
 $status:=Data file encryption status(Structure file;"D:\\Invoices\\Data_2019\\Invoices.4dd")
 Case of
    :(Not($status.isEncrypted)) // 暗号化されていない
       ALERT("The data file is not encrypted")
    :($status.isEncrypted&(Not($status.keyProvided)) // 暗号化はされているが暗号化キーがない
       ALERT("The data file is encrypted and the encryption key is not in the keychain. You will not have access to encrypted data.")
    :($status.isEncrypted&$status.keyProvided) // 暗号化されており、暗号化キーもある
       ALERT("The data file is encrypted and the encryption key is in the keychain. You will have access to encrypted data.")
 End case
```

#### 参照 

  
[Encrypt data file](encrypt-data-file.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1609 |
| スレッドセーフである | &check; |


