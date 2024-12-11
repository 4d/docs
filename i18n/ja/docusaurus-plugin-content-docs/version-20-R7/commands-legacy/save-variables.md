---
id: save-variables
title: SAVE VARIABLES
slug: /commands/save-variables
displayed_sidebar: docs
---

<!--REF #_command_.SAVE VARIABLES.Syntax-->**SAVE VARIABLES** ( *document* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.SAVE VARIABLES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | 変数を保存するドキュメントファイル |
| variable | Variable | &#8594;  | 保存する変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAVE VARIABLES.Summary-->SAVE VARIABLES コマンドを使用して、引数 *document* に渡した名前を持つドキュメントに 1つまたは複数の変数を保存します。<!-- END REF-->

変数は同じタイプでなくてもかまいませんが、文字列、テキスト、実数、整数、倍長整数、日付、時間、ブール、またはピクチャのいずれかである必要があります。

引数 *document* に空の文字列を指定した場合、標準のファイルを保存ダイアログボックスが表示されます。ここで、ユーザは作成するドキュメントを選択することができます。この場合、ドキュメントが作成されると、4Dのシステム変数 Documentにドキュメント名が入ります。 

変数が正常に保存されると、OK変数に1が代入されます。その他の場合は、0が代入されます。

**Note:** SAVE VARIABLES コマンドで変数をドキュメントファイルに保存する場合は、4D専用の内部フォーマットで保存します。したがって、保存した変数は [LOAD VARIABLES](load-variables.md "LOAD VARIABLES") コマンド以外では読み込むことができません。SAVE VARIABLES コマンドで作成したドキュメントは、[RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE") または [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET") で読み込まないでください。

**警告:** このコマンドは、配列変数をサポートしません。BLOBコマンドを使用してください。

#### 例題 

以下の例題を使用して、UserPrefsという名前のドキュメントに3つの変数を保存します。

```4d
 SAVE VARIABLES("User Prefs";vsName;vlCode;vgIconppicture)
```

#### システム変数およびセット 

変数が正しく保存されるとシステム変数OKに1が設定され、そうでなければ0が設定されます。

#### 参照 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[LOAD VARIABLES](load-variables.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  
*システム変数*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 75 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document |
| サーバー上での使用は不可 ||


