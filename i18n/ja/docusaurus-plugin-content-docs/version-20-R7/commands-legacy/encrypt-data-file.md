---
id: encrypt-data-file
title: Encrypt data file
slug: /commands/encrypt-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data file.Syntax-->**Encrypt data file** ( *structurePath* ; *dataPath* {; newPassPhrase | newDataKey {; *archiveFolder* {; curPassPhrase | curDataKey {; *methodName*}}}} ) : Text<!-- END REF-->
<!--REF #_command_.Encrypt data file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| structurePath | Text | &#8594;  | ストラクチャーファイルのパス名 |
| dataPath | Text | &#8594;  | 暗号化するデータファイルへのパス名 |
| newPassPhrase &#124; newDataKey | テキスト, オブジェクト | &#8594;  | 更新したい場合: 新しいパスフレーズ (テキスト)または新しい暗号化キー(オブジェクト) |
| archiveFolder | Text | &#8594;  | 元のファイルを保存しておくフォルダのパス名 |
| curPassPhrase &#124; curDataKey | テキスト, オブジェクト | &#8594;  | カレントのパスフレーズ(テキスト)またはカレントの暗号化キー(オブジェクト) |
| methodName | Text | &#8594;  | 4Dコールバックメソッド名 |
| 戻り値 | Text | &#8592; | 元のファイルが保存されたフォルダの完全なパス名 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Encrypt data file.Summary-->**Encrypt data file** コマンドはを使用数と、*structurePath* 引数で指定されたストラクチャーに割り当てられている、*dataPath* 引数で指定されたデータファイルを暗号化または再暗号化することができます。<!-- END REF-->またこれを使用してデータベースから暗号化を取り除くこともできます。このコマンドは元のファイルに対する編集は行わず、元のデータファイルのバックアップを取るために作成された完全なパス名を返します。

**注:**

* このコマンドは、既に開かれているカレントのデータファイルに対しては使用することができません。
* このコマンドは、ローカルモードの4D か、あるいは4D Server (ストアドプロシージャー)からしか実行することができません。暗号化されるデータファイルは*structurePath* 引数で指定したストラクチャーファイルと対応している必要があります。

このコマンドを実行すると、データベース内において"暗号化可能"と設定されていた全てのテーブルが暗号化されるか、または暗号化が変更されます。詳細な情報については、*暗号化可能* の章を参照して下さい。

**警告:** データベースの暗号化は時間がかかる処理です。そのため進捗インジケーターが表示されます(これはユーザーによって中断可能です)。また、データベース暗号化シークエンスには、圧縮のステップが含まれるという点に注意して下さい。

*structurePath* 引数には、空の文字列か、暗号化しようとしているデータファイルに関連づけられているストラクチャーファイルへの完全なパス名を渡します。この情報は暗号化手続きのために必要になります。空の文字列を渡した場合、標準の**ファイルを開く**ダイアログが表示され、ユーザーは使用されるストラクチャーファイルを指定することができます。それ以外には、OSのシンタックスで表された完全なパス名を渡すことができます。

引数には、空の文字列か、ファイル名か、または完全なパス名を渡します(パス名はOSのシンタックスで表されている必要があります)。空の文字列を渡した場合、標準の**ファイルを開く**ダイアログが表示され、ユーザーは使用されるデータファイルを指定することができます。このファイルは*structurePath* 引数で指定したストラクチャーファイルと対応している必要があります。データファイル名だけを渡した場合、4D はストラクチャーファイルと同じ階層の中を探します。

* **データベースを最初に暗号化するときに限り、**渡すのは*newPassPhrase* あるいは *newDataKey* 引数だけです(逆に、*curPassPhrase* または *curDataKey* 引数は渡してはいけません):  
   * *newPassPhrase*: 暗号化キーを生成するのに使用する文字列(SHA 256-bit)  
   * *newDataKey*: 新しいデータ暗号化キーを(*encodedKey* プロパティに)格納しているオブジェクト。このキーは[New data key](new-data-key.md) コマンドで生成されている必要があります。  
    
**注:** *newPassPhrase* (あるいは *newDataKey*) は4D キーチェーンには追加されません。
* **データベースを再暗号化するとき**(つまり既に暗号化されているデータベースをもう一度暗号化するとき)は、*newPassPhrase* (あるいは *newDataKey*) 引数とカレントのパスフレーズ(またはカレントのデータキー)の両方を渡す必要があります。これは再暗号化のマーにデータベースの復号化が必要になるからです。これらの情報は、以下のように渡すことができます:  
   * コマンドに*curPassPhrase* (または *curDataKey*) 引数を渡す  
   * 4D キーチェーンで渡す
* **全てのテーブルから暗号化を削除する**ためには、空のパスフレーズまたは*null* データキーを*newPassPhrase* (あるいは *newDataKey*)引数として渡します。このときカレントのパスフレーズまたはデータキーが既に提供されている必要があります。復号化されたファイルは、“Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS”/"Decrypted files YYYY-MM-DD HH-MM-SS"という名前のフォルダ内に生成/コピーされます。

このコマンドは元のファイルは編集しません。元のファイルは*archiveFolder* 引数で指定したフォルダに移動されます(引数が渡されていれば)。このフォルダは特殊なフォルダで、*Replaced files (Encrypting) YYYY-MM-DD HH-MM-SS* or *Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS* という名前がつけられ、YYYY-MM-DD HH-MM-SS は処理をした日時を表します。例えば、 "Replaced files (Encrypting) 2018-09-29 13-00-35"というような名前です。新たに暗号化または複合化されたデータファイルは自動的に元のファイルと入れ換えられます。  
引数に"" (空の文字列)を渡した場合、標準の**フォルダを開く**ダイアログがが表示され、ユーザーは作成されるフォルダの位置を指定することができます。引数が省略されていた場合、元のファイルは、ストラクチャーファイルのすぐ隣に作成された、タイムスタンプを押されたフォルダに自動的に保存されていきます。

*method* 引数を使用すると、暗号化プロセスの途中に頻繁に呼び出されるコールバックメソッドを設定することができます。空の文字列または無効なメソッド名を渡した場合、この引数は無視されます(メソッドは呼び出されません)。呼び出されるとき、このメソッドは呼び出しを行っているイベントの型によって、最大で5つまでの引数を受け取ることができます(以下参照)。これらの引数をメソッド内で宣言しておくことを忘れないで下さい:

| **イベント**            | **$1 (倍長整数)** | **$2 (倍長整数)** | **$3 (テキスト)**                                                                       | **$4 (倍長整数)**    | **$5 (倍長整数)** |
| ------------------- | ------------- | ------------- | ----------------------------------------------------------------------------------- | ---------------- | ------------- |
| Message             | 1             | 0             | プロセスメッセージ(例."Encrypting BLOBs in table Documents")                                  | 完了パーセンテージ(例. 50) | 予約済み          |
| Encryption finished | 2             | 0             | OK メッセージ (例 "Done")                                                                 | 0                | 予約済み          |
| Error               | 3             | 0             | エラーメッセージ (*例* "Problem on the XX data table: Encryption key has not been provided") | 0                | 予約済み          |
| End of execution    | 4             | 0             | "Done"                                                                              | 0                | 予約済み          |
| Warning(\*)         | 5             | オブジェクト型       | エラーのテキスト                                                                            | インデックス番号またはテーブル  | 予約済み          |

(\*) 検証ステップで返された警告([VERIFY DATA FILE](verify-data-file.md) コマンドを参照のこと)

**戻り値**

元のファイルの移行先フォルダの実際のパスが返されます。

#### 例題 1 

データファイルを初めて暗号化する場合を考えます:

```4d
 var $folder;$passphrase : Text
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
  // データファイルは暗号化されていないため、カレントの暗号化キーはない
    $folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)
 End if
```

#### 例題 2 

データファイルの再暗号化をする(パスフレーズを変更する)場合を考えます:

```4d
 var $folder;$targetFolder;$passphrase;$newPassphrase : Text
 $passphrase:=Request("Enter the current passphrase")
 If(OK=1)
    $newPassphrase:=Request("Enter the new passphrase")
    If(OK=1)
       $targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator
  // データファイルが暗号化されるので、カレントの暗号化キーが必要になります
       $folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)
    End if
 End if
```

#### 例題 3 

暗号化されたデータファイルから暗号化を取り除く場合を考えます:

```4d
 var $folder;$targetFolder;$passphrase : Text
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator
  // 新しいパスフレーズとして空の文字列を渡すことで全てのデータが復号化されます
  // カレントのパスフレーズを提供する必要があります
    $folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)
 End if
```

#### 例題 4 

カレントキーを使用して暗号化されたデータファイルを再暗号化する場合を考えます(例えば、一部のテーブルで暗号化ステータスが変更されたなどの場合です):

```4d
 var $folder;$passPhrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $added:=Register data key($passphrase) // データキーは4D キーチェーンに追加された
    $folder:=Encrypt data file(Structure file;"myData.4DD")
 End if
```

#### 参照 

  
[Data file encryption status](data-file-encryption-status.md)  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[New data key](new-data-key.md)  