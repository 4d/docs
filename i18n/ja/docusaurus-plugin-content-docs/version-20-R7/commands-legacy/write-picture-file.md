---
id: write-picture-file
title: WRITE PICTURE FILE
slug: /commands/write-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.WRITE PICTURE FILE.Syntax-->**WRITE PICTURE FILE** ( *fileName* ; *picture* {; *codec*} )<!-- END REF-->
<!--REF #_command_.WRITE PICTURE FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | 書き出すファイルのフルパス名, または空の文字列 |
| picture | Picture | &#8594;  | 書き出すピクチャフィールドまたは変数 |
| codec | Text | &#8594;  | ピクチャCodec ID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WRITE PICTURE FILE.Summary-->**WRITE PICTURE FILE**コマンドを使用し、 引数*picture*に渡されたピクチャを、指定した*codec*でディスクに保存することができます。<!-- END REF--> 

*fileName*には、作成するファイルのフルパス名、あるいはファイル名のみを渡すことができます。ファイル名だけを渡した場合、書き出したファイルはデータベースのストラクチャファイルと同階層に置かれます。ファイルの拡張子を指定しなければなりません。  
*fileName*に空の文字列 ("") を渡すと、標準のファイル保存ダイアログボックスが表示され、作成するファイルの名前、場所、フォーマットをユーザが指定できます。デフォルト名がピクチャーフィールドに割り当てられている場合、ダイアログにはその名前が表示されます ([SET PICTURE FILE NAME](set-picture-file-name.md)コマンド参照)。

*picture*には、ディスクに保存するピクチャを格納したピクチャ変数またはフィールドを渡します。

オプションの*codec*引数を使用して、保存されるピクチャのフォーマットを指定できます。Codecは拡張子 (例 “.gif”), またはMimeタイプ (例 “image/jpeg”) です。[PICTURE CODEC LIST](picture-codec-list.md)コマンドを使用して、利用可能なCodecのリストを取得できます。

*codec* 引数を省略すると、コマンドは*fileName* 引数に渡されたファイル名の拡張子に基づき、codecの決定を試みます。例えば以下のコードにおいて:  

```4d
 WRITE PICTURE FILE("c:\folder\photo.jpg";myphoto)
```

  
コマンドはピクチャの格納にJPEG codecを使用します。   
使用された拡張子が利用可能なcodecに対応しない場合、ファイルは保存されず、OKシステム変数に0が設定されます。*codec* もファイル拡張子も渡さない場合、ピクチャはPICTフォーマットで保存されます。 

**注:** (*fileName* の拡張子あるいは*codec* 引数で指定される) *picture* の書き出しフォーマットが元のタイプと同じで、変換処理が適用されない場合、ピクチャはそのまま変更なしで保存されます。 

コマンドが正しく実行されると、システム変数Documentには作成されたファイルのフルパス名が、システム変数OKには1が設定されます。そうでなければOKは0に設定されます。

#### 参照 

[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  
[SET PICTURE FILE NAME](set-picture-file-name.md)  
*ピクチャ*  