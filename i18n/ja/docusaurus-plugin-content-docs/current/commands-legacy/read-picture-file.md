---
id: read-picture-file
title: READ PICTURE FILE
slug: /commands/read-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.READ PICTURE FILE.Syntax-->**READ PICTURE FILE** ( *fileName* ; *picture* {; *} )<!-- END REF-->
<!--REF #_command_.READ PICTURE FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | 読み込むファイルのフルパス名, または空の文字列 |
| picture | Picture | &#8592; | ピクチャを受け取るフィールドまたは変数 |
| * | 演算子 | &#8594;  | 指定時 = すべてのファイルタイプを受け入れる |

<!-- END REF-->

#### 説明 

<!--REF #_command_.READ PICTURE FILE.Summary-->READ PICTURE FILE コマンドを使用してディスクファイル*fileName* に保存されたピクチャを開き、これを*picture* 引数に指定した4Dフィールドまたは変数へロードすることができます。<!-- END REF-->

*fileName* には読み込むファイルのフルパス名またはファイル名のみを渡すことができます。ファイル名のみを渡した場合、そのファイルはデータベースストラクチャと同階層になければなりません。Windowsではファイル拡張子が必要です。  
空の文字列 ("") が*fileName* に渡されると、標準のファイルを開くダイアログボックスが表示され、ユーザは読み込むファイルやフォーマットを指定できます。 

[PICTURE CODEC LIST](picture-codec-list.md "PICTURE CODEC LIST") コマンドを使用して、利用可能なフォーマットを取得できます。

*picture*には、読み込んだピクチャを受け取るピクチャ変数またはフィールドを渡します。

**Note:** 内部的なピクチャフォーマットは4D変数やフィールドに格納されます。 

オプションの *\** 引数を渡すと、コマンドはすべてのタイプのファイルを受け入れます。この方法では、適切なcodecなしでもピクチャを扱うことができます ([BLOB TO PICTURE](blob-to-picture.md) コマンドの説明を参照してください)。

#### システム変数およびセット 

コマンドが正しく実行されると、システム変数Documentには開かれたファイルのフルパスが格納され、システム変数OKは1に設定されます。そうでなければOKに0が設定されます。

#### 参照 

[BLOB TO PICTURE](blob-to-picture.md)  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  
*ピクチャ*  