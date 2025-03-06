---
id: load-variables
title: LOAD VARIABLES
slug: /commands/load-variables
displayed_sidebar: docs
---

<!--REF #_command_.LOAD VARIABLES.Syntax-->**LOAD VARIABLES** ( *document* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.LOAD VARIABLES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | 4D変数を保存したドキュメント |
| variable | Variable | &#8592; | 値を受け取る変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LOAD VARIABLES.Summary-->LOAD VARIABLES コマンドは、*document*によって指定されたドキュメントから1つまたはいくつかの変数を読み込みます。<!-- END REF-->そのドキュメントは[SAVE VARIABLES](save-variables.md "SAVE VARIABLES") コマンドで作成されたものでなくてはなりません。

変数 *variable* 、*variable2*...*variableN* が作成されます。これらの変数が既に存在する場合、上書きされます。

*document*に空の文字列を指定した場合、標準的なファイルを開くダイアログボックスが表示されます。ここで、ユーザは開くドキュメントを選択することができます。ドキュメントが選択されると、4Dシステム変数Documentにドキュメント名が入ります。

コンパイルされたデータベースでは、すべての変数はディスクから読み込まれた変数と同じタイプでなくてはなりません。

**警告:** このコマンドは、配列変数をサポートしません。新しく導入されたBLOBコマンドを使用してください。

#### 例題 

以下の例題を使用して、UserPrefsという名前のドキュメントから3つの変数を読み込みます。

```4d
 LOAD VARIABLES("User Prefs";vsName;vlCode;vgIconpicture)
```

#### システム変数およびセット 

変数が正しくロードされるとシステム変数OKに1が設定され、そうでなければ0が設定されます。

#### 参照 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 74 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document |


