---
id: document-list
title: DOCUMENT LIST
slug: /commands/document-list
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT LIST.Syntax-->**DOCUMENT LIST** ( *pathname* ; *documents* {; *options*} )<!-- END REF-->
<!--REF #_command_.DOCUMENT LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pathname | Text | &#8594;  | ボリューム、ディレクトリ、またはフォルダーへのパス名 |
| documents | Text array | &#8592; | この場所にあるドキュメントの名前 |
| options | Integer | &#8594;  | 取得するリストを指定するオプション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOCUMENT LIST.Summary-->**DOCUMENT LIST**コマンド は、*pathname*に渡すパス名にあるドキュメントの名前を要素とするテキスト配列*documents*を生成します。<!-- END REF-->引数*pathname* は絶対パス名だけを受け入れます。 

*options* 引数を省略した場合、デフォルトで *documents* 配列にドキュメント名のみが返されます。*options* 引数に*System Documents*テーマの以下の定数を渡すと、この動作を変更できます:

| 定数                | 型    | 値 | コメント                                            |
| ----------------- | ---- | - | ----------------------------------------------- |
| Absolute path     | 倍長整数 | 2 | *documents*配列は絶対パス名を格納                          |
| Ignore invisible  | 倍長整数 | 8 | 不可視ドキュメントをリストに含めない                              |
| Posix path        | 倍長整数 | 4 | *documents*配列はPOSIXフォーマットパス名を格納                 |
| Recursive parsing | 倍長整数 | 1 | *documents*配列は指定したフォルダーに含まれるすべてのファイルとサブフォルダーを格納 |

**注:**

* 相対モードにおけるRecursive parsingオプション (option 1のみ) では、プラットフォームに応じてサブフォルダー内のドキュメント名は":"または"\\"から始まります。
* 相対モードにおけるPosix pathオプション (option 4のみ) では、パスは"/"で始まりません。
* 絶対モードにおけるPosix pathオプション (option 4 + 2) では、パスは常に"/"で始まります。

指定した場所にドキュメントがない場合、コマンドは空の配列を返します。*pathname*に渡したパス名が無効だと、**DOCUMENT LIST**はファイルマネジャエラーを生成します。このエラーは[ON ERR CALL](on-err-call.md)でインストールされるエラー処理メソッドを使用して、検知することができます。

#### 例題 1 

フォルダー中のすべてのドキュメントをリスト (デフォルトシンタックス):

```4d
 DOCUMENT LIST("C:\\";arrFiles)
```

\-> arrFiles:  
 Text1.txt  
 Text2.txt

#### 例題 2 

絶対モードでフォルダー中のすべてのドキュメントをリスト:

```4d
 DOCUMENT LIST("C:\\";arrFiles; Absolute path)
```

\-> arrFiles:  
 C:\\Text1.txt  
 C:\\Text2.txt

#### 例題 3 

再帰 (相対) モードですべてのドキュメントをリスト:

```4d
 DOCUMENT LIST("C:\\";arrFiles;Recursive parsing)
```

  
\-> arrFiles:  
 Text1.txt  
 Text2.txt  
 \\Folder1\\Text3.txt  
 \\Folder1\\Text4.txt  
 \\Folder2\\Text5.txt  
 \\Folder2\\Folder3\\Picture1.png

#### 例題 4 

再帰 (絶対) モードですべてのドキュメントをリスト:

```4d
 DOCUMENT LIST("C:\\MyFolder\\";arrFiles;Recursive parsing+Absolute path)
```

\-> arrFiles:  
 C:\\MyFolder\\MyText1.txt  
 C:\\MyFolder\\MyText2.txt  
 C:\\MyFolder\\Folder1\\MyText3.txt  
 C:\\MyFolder\\Folder1\\MyText4.txt  
 C:\\MyFolder\\Folder2\\MyText5.txt  
 C:\\MyFolder\\Folder2\\Folder3\\MyPicture1.png

#### 例題 5 

再帰POSIX (相対) モードですべてのドキュメントをリスト:

```4d
 DOCUMENT LIST("C:\\MyFolder\\";arrFiles;Recursive parsing+Posix path)
```

\-> arrFiles:  
 MyText1.txt  
 MyText2.txt  
 Folder1/MyText3.txt  
 Folder1/MyText4.txt  
 Folder2/MyText5.txt  
 Folder2/Folder3/MyPicture1.png

#### 参照 

[FOLDER LIST](folder-list.md)  
[VOLUME LIST](volume-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 474 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


