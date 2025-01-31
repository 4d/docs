---
id: create-document
title: Create document
slug: /commands/create-document
displayed_sidebar: docs
---

<!--REF #_command_.Create document.Syntax-->**Create document** ( *document* {; *fileType*} ) : Time<!-- END REF-->
<!--REF #_command_.Create document.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名、または 完全なドキュメントのパス名、または 標準ファイルダイアログボックスの空の文字列 |
| fileType | Text | &#8594;  | スクリーンされるドキュメントタイプのリスト、または ドキュメントをスクリーンしない場合 "*" |
| 戻り値 | Time | &#8592; | ドキュメント参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Create document.Summary-->**Create document**コマンドは新しいドキュメントを作成し、ドキュメント参照番号を返します。<!-- END REF-->がロックされていたり既に開いている場合は、エラーが生成されます。

*document*に空の文字列を渡すと、別名で保存ダイアログボックスが表示され、作成したいドキュメントの名前を入力できます。ダイアログをキャンセルした場合ドキュメントは作成されません。**Create document**はヌルDocRefを返し、OK変数に0を代入します。

ドキュメントが正しく作成されそのドキュメントが開かれると、**Create document**はそのドキュメント参照番号を返し、OK変数に1を代入します。システム変数Documentが更新され、作成したドキュメントの完全なアクセスパスを返します。

別名で保存ダイアログボックスを使用してもしなくても、**Create document**はTXT (Windows) または TEXT (Macintosh) ドキュメントをデフォルトで作成します。他のタイプのドキュメントを作成したい場合、引数*fileType*を渡します。

引数*fileType*には、開いているダイアログボックスで選択できるファイルのタイプを渡します。 ; (セミコロン) で区別される幾つかのタイプのリストを渡すこともできます。それぞれのタイプセットに対して、ダイアログボックスでタイプを選ぶために使用されるメニューにアイテムが追加されます。

Mac OSでは、標準的なMac OSタイプ(TEXT、APPLなど)、またはUTI (Uniformタイプ識別子) タイプのいずれかを渡します。ファイルタイプの標準化のニーズを満たすために、UTIはAppleによって定義されます。例えば、"public.text" は、テキストタイプファイルのUTIタイプになります。UTIについての詳細は、以下のアドレスを参照してください。 *https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html*

Windowsでは、標準的なMac OSファイルタイプやファイル拡張子 (.txt、.exeなど) を渡します。Windowsでは、ダイアログボックスに\*.\* を入力して全てのファイルタイプを表示させることができます。しかしこの場合、4Dは選択されたファイルタイプの追加チェックを実行します。認められていないファイルタイプを選択すると、コマンドはエラーを返します。  
表示されているファイルを1つ以上のタイプに制限したくない場合、文字列"\*" (アスタリスク) または".\*" を *fileType*に渡します。 

Windowsでは、Windowsのファイル拡張子を渡すか、*\_o\_MAP FILE TYPES*メカニズムを通してマップされたMacintoshのファイルタイプを渡します。拡張子のないドキュメントや、複数の拡張子を含むドキュメント、そして3文字以上から成る拡張子を含むドキュメントを作成したい場合、引数*type* を使用せずに、完全な名前を*document*渡します(例2を参照) 。

ドキュメントを作成してドキュメントを開くと、[RECEIVE PACKET](receive-packet.md)と[SEND PACKET](send-packet.md)コマンドを使用してドキュメントを読んだり書いたりできます。これらのコマンドに[Get document position](get-document-position.md)と[SET DOCUMENT POSITION](set-document-position.md)コマンドを組み合わせることができます。これにより、ドキュメントのあらゆる箇所に直接アクセスすることが可能となります。

ドキュメントに対して、最後に[CLOSE DOCUMENT](close-document.md)を呼び出すことを忘れないでください。

#### 例題 1 

次の例を使用して、Noteと呼ばれる新しいドキュメントを作成して開きます。文字列"Hello" をそこへ書き込み、ドキュメントを閉じます。 

```4d
 var vhDoc : Time
 vhDoc:=Create document("Note.txt") //Noteと呼ばれる新しいドキュメントを作成します。
 If(OK=1)
    SEND PACKET(vhDoc;"Hello") //ドキュメントで1つの単語を書き込みます。
    CLOSE DOCUMENT(vhDoc) //ドキュメントを閉じます。
 End if
```

#### 例題 2 

次の例を使用して、Windowsで非標準拡張子を付けてドキュメントを作成します。 

```4d
 $vtMyDoc:=Create document("Doc.ext1.ext2") //複数の拡張子
 $vtMyDoc:=Create document("Doc.shtml") //長い拡張子
 $vtMyDoc:=Create document("Doc.") //拡張子なし (ピリオド "." は必須)
```

#### システム変数およびセット 

ドキュメントが正しく作成されると、システム変数OKに1が代入されます。システム変数Documentは、完全なパス名と*document*の名前を格納します。

#### 参照 

[Append document](append-document.md)  
[Open document](open-document.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 266 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document、error |


