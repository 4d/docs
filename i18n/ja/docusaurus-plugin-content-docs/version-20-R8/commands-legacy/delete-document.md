---
id: delete-document
title: DELETE DOCUMENT
slug: /commands/delete-document
displayed_sidebar: docs
---

<!--REF #_command_.DELETE DOCUMENT.Syntax-->**DELETE DOCUMENT** ( *document* )<!-- END REF-->
<!--REF #_command_.DELETE DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名、または 完全なドキュメントのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE DOCUMENT.Summary-->**DELETE DOCUMENT** コマンドを使用して、*document*に渡したドキュメント名を持つドキュメントを削除します。<!-- END REF-->

  
ドキュメント名や入力されたパス名が正しくないと、エラーが生成されます。開かれたドキュメントの削除を試みた場合もエラーが発生します。

ドキュメント名や入力されたパス名が正しくない場合、エラーが生成されます。

コマンドが呼び出されたときにドキュメントが既に開かれていた場合、その結果はOS によって異なります:

* Windows では、エラーが生成されます。
* macOS では、エラーは生成されず、ドキュメントは削除されます。

**DELETE DOCUMENT** は*document* に対して空の文字列の引数を受け入れません。空の文字列が使用されると、ファイルを開くダイアログボックスは表示されず、エラーが生成されます。

**警告:** **DELETE DOCUMENT** を使用して、ディスク上のあらゆるファイルを削除することができます。他のアプリケーションで作成されたドキュメント、およびアプリケーション自体も含まれます。**DELETE DOCUMENT** を使用する際は細心の注意を払ってください。ドキュメントの削除は恒久的に作用し、取り消すことはできません。

#### 例題 1 

次の例を使用して、Noteという名前のドキュメントを削除します。

```4d
 DELETE DOCUMENT("Note") //ドキュメントを削除する。
```

#### 例題 2 

コマンド [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD")の例を参照。

#### システム変数およびセット 

ドキュメントの削除は、OKシステム変数に1を代入します。DELETE DOCUMENT がドキュメントを削除できない場合、OKシステム変数に0が代入されます。

#### 参照 

[Test path name](test-path-name.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 159 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


