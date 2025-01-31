---
id: open-document
title: Open document
slug: /commands/open-document
displayed_sidebar: docs
---

<!--REF #_command_.Open document.Syntax-->**Open document** ( *document* {; *fileType*}{; *mode*} ) : Time<!-- END REF-->
<!--REF #_command_.Open document.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名、または ドキュメントへの完全なパス名、または 空の文字列の場合、標準のファイルダイアログボックス表示 |
| fileType | Text | &#8594;  | 表示されるドキュメントタイプのリスト、または ドキュメントを表示しない"*" |
| mode | Integer | &#8594;  | ドキュメントを開くモード |
| 戻り値 | Time | &#8592; | ドキュメント参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Open document.Summary-->**Open document**コマンドは、*document*に渡した名前またはパス名を持つドキュメントを開きます。<!-- END REF-->

*document*に空の文字列を渡した場合、ファイルを開くダイアログボックスが表示され、開くドキュメントを選択できます。このダイアログをキャンセルするとドキュメントは開かれず、**Open document**はドキュメント参照番号に空値を返し、システム変数OKに0を代入します。

* ドキュメントが正しく開かれると、**Open document**はドキュメント参照番号を返し、システム変数OKに1を代入します。
* ドキュメントが既に読み込みのみモードで開かれていて、引数*mode*が省略されると、**Open document**はデフォルトで読み書きモードでドキュメントを開き、OK変数に1を代入します。
* ドキュメントが読み書きモードで既に開かれていて、書き込みモードで開こうとすると、エラー (-43) が発生します。しかし読み込みのみモードで開くことはでき、この場合OKシステム変数は1に設定されます。
* ドキュメントが存在しない場合、エラーが発生します。

引数*fileType*には、開くダイアログボックスで選択するファイルのタイプを渡します。; (セミコロン) で区切られた幾つかのタイプのリストを渡すことができます。それぞれのタイプセットに対して、ダイアログボックスでタイプを選択する際に使用するメニューに、アイテムが追加されます。  
Mac OSでは標準的なMac OSタイプ(TEXT、APPLなど) またはUTI (Uniformタイプ識別子) タイプのどちらかを渡します。ファイルタイプの標準化のニーズを満たすために 、UTIはAppleによって指定されます。例えば、"public.text" は、テキストタイプのファイルのUTIタイプとなります。UTIに関する詳細については、*developer.apple.com* のWebサイトにある、*Introduction to Uniform Type Identifiers Overview page* を参照してください。

Windowsでは、標準的なMac OSのファイルタイプ (4Dは内部的に対応を行います) またはファイル拡張子(.txt、.exe など) を渡します。Windowsでは、ダイアログボックスに"\*.\*"を入力することによって、全てのファイルタイプを表示させることができます。しかしこの場合、4Dは選択されたファイルタイプのチェックを追加して実行します。認識されていないファイルタイプが選択された場合、コマンドはエラーを返します。  
表示されているファイルを1つ以上のタイプに限定したくない場合は、文字列"\*" (アスタリスク) または".\*" を*fileType*に渡します。

任意の引数*mode*は、ドキュメントがどのように開かれるかを指定することができるようにするものです。4つのオープンモードが指定可能です。4D には下記の定数が "System Documents" テーマで定義されています。

| 定数             | 型    | 値 |
| -------------- | ---- | - |
| Get Pathname   | 倍長整数 | 3 |
| Read and Write | 倍長整数 | 0 |
| Read Mode      | 倍長整数 | 2 |
| Write Mode     | 倍長整数 | 1 |
  
  
ドキュメントが開かれると、**Open document**はドキュメントの最初にファイルの書き込み/読み込み位置を設定します。一方、[Append document](append-document.md)は、ドキュメントの最後にファイルの書き込み/読み込み位置を設定します。 

ドキュメントを開くと、[RECEIVE PACKET](receive-packet.md)と[SEND PACKET](send-packet.md) コマンドを使用してドキュメントを読んだり、書いたりすることができます。これらのコマンドを[Get document position](get-document-position.md) および[SET DOCUMENT POSITION](set-document-position.md) コマンドと組み合わせることにより、ドキュメントのあらゆる箇所へ直接アクセスすることが可能となります。

最後に、開かれたドキュメントに対して、[CLOSE DOCUMENT](close-document.md)を呼び出すことを忘れないようにしてください。

#### 例題 1 

以下の例を使用して、Note.txtという既存のドキュメントを開き、"Good-bye"という文字列を書き込み、そしてドキュメントを閉じます。ドキュメントの既存の中身は上書きされます: 

```4d
 var vhDoc : Time
 vhDoc:=Open document("Note.txt";Read and Write) //ノートというドキュメントを開く
 If(OK=1)
    SEND PACKET(vhDoc;"Good-bye") //ドキュメントに1語書き込む
    CLOSE DOCUMENT(vhDoc) //ドキュメントを閉じる
 End if
```

#### 例題 2 

ドキュメントがすでに書き込みモード開かれていても、読みをおこなうことはできます。 

```4d
 vDoc:=Open document("PassFile";"TEXT") //ファイルが開いている
  //ファイルを閉じる前に、読み込み専用モードで検査できる
 vRef:=Open document("PassFile";"TEXT";Read Mode)
```

#### システム変数およびセット 

ドキュメントが正しく開かれると、OKシステム変数に1が代入されます。その他の場合は0が代入されます。呼び出し後、Documentシステム変数には完全なドキュメント名が入っています。  
Open documentを3のモードで呼ぶと、関数は?00:00:00? (ドキュメント参照無し) を返します。ドキュメントは開きませんが、DocumentとOKシステム変数は更新されます。  

* OKは1と等しい。
* *document*には、完全なパス名とそのドキュメントの名前が入っています。

**Note:** 空の文字列を*document*に渡した場合はファイルを開くダイアログボックスが表示されます。ドキュメントを選択しOKボタンをクリックすると、*document*は選択したドキュメントのパスに設定され、OKに1が代入されます。Cancelボタンをクリックすると、OKに0が代入されます。

#### 参照 

[Append document](append-document.md)  
[Create document](create-document.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 264 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document、error |


