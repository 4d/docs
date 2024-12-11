---
id: append-document
title: Append document
slug: /commands/append-document
displayed_sidebar: docs
---

<!--REF #_command_.Append document.Syntax-->**Append document** ( *document* {; *fileType*} ) : Time<!-- END REF-->
<!--REF #_command_.Append document.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名、または 完全なドキュメントパス名、または 標準ファイルダイアログボックスの空の文字列 |
| fileType | Text | &#8594;  | スクリーンされるドキュメントタイプのリスト、または ドキュメントをスクリーンしない場合 "*" |
| 戻り値 | Time | &#8592; | ドキュメント参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Append document.Summary-->Append documentコマンドは[Open document](open-document.md "Open document")コマンドと同じ機能を提供します。<!-- END REF-->このコマンドを使用してディスクにあるドキュメントを開くことができます。

この2つのコマンドは多少異なります。Append documentはドキュメントの最後にファイル位置を設定します。一方[Open document](open-document.md "Open document")はドキュメントの先頭にファイル位置を設定します。

Append documentの使用についての詳細は、[Open document](open-document.md "Open document")を参照してください。

#### 例題 

次の例を使用して、Noteという名称の既存のドキュメントを開きます。文字列“ また会いましょう” とキャリッジリターンをドキュメントの最後に付加し、ドキュメントを閉じます。例えば、ドキュメントが既に文字列"さようなら" を含んでいると、ドキュメントは文字列"さようなら また、会いましょう"を含み、その後にキャリッジリターンが続きます。

```4d
 var vhDocRef : Time
 vhDocRef:=Append document("Note.txt") //Noteドキュメントを開く。
 SEND PACKET(vhDocRef;"　また会いましょう\r") // 文字列を追加する。
 CLOSE DOCUMENT(vhDocRef) //ドキュメントを閉じる。
```

#### 参照 

[Create document](create-document.md)  
[Open document](open-document.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 265 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document、error |
| サーバー上での使用は不可 ||


