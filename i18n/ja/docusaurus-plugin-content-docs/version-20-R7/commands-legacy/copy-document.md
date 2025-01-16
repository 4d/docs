---
id: copy-document
title: COPY DOCUMENT
slug: /commands/copy-document
displayed_sidebar: docs
---

<!--REF #_command_.COPY DOCUMENT.Syntax-->**COPY DOCUMENT** ( *sourceName* ; *destinationName* {; *newName*} {; *} )<!-- END REF-->
<!--REF #_command_.COPY DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| sourceName | Text | &#8594;  | コピーするファイルやフォルダーのパス名 |
| destinationName | Text | &#8594;  | ファイルやフォルダーコピーの配置先名またはパス名 |
| newName | Text | &#8594;  | コピーされたファイルまたはフォルダの新しい名前 |
| * | 演算子 | &#8594;  | 存在する場合、既存のドキュメントを上書きする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COPY DOCUMENT.Summary-->**COPY DOCUMENT**コマンドを使用して、*sourceName*によって指定されたファイルやフォルダーを*destinationName*によって指定された場所にコピーします。<!-- END REF--> 
この場合*sourceName*引数には以下のどちらかを渡す事ができます。  
   * ボリュームのルートから始まる完全なファイルパス名  
   * データベースフォルダーから相対的なパス名  
*destinationName*引数には複数のタイプで場所を指定できます:  
   * ボリュームのルートから始まる完全なファイルパス名。ファイルはこの場所にコピーされます。  
   * ファイル名または相対的なファイルパス名。ファイルはデータベースフォルダー内にコピーされます。サブフォルダーはコマンド実行前に存在していなければなりません。  
   * データベースフォルダーから相対的な完全フォルダーパス名またはパス名(*destinationName*はプラットフォームに応じたフォルダー区切り文字で終わっていなければなりません)。ファイルは指定したフォルダーにコピーされます。これらのフォルダーはコマンド実行前に存在していなければなりません(自動的に作成されることはありません)。  
オプションの *\** 引数を渡していない場合、*destinationName*で指定した場所にすでにドキュメントが存在するとエラーが生成されます。この引数を渡した場合、既存のファイルは削除され、コピーするドキュメントで置き換えられます。
* **フォルダーのコピー**  
フォルダーを指定するためには、*sourceName* と *destinationName* に渡す文字列がプラットフォームに対応したフォルダー区切り文字で終わっていなければなりません。例えばWindows環境下では "C:\\\\Element\\\\"はフォルダーを表し、"C:\\\\Element"はファイルを表します。  
フォルダーをコピーするには、その完全パス名を*sourceName*に渡します。このフォルダーは既に存在しなければなりません。フォルダーを*sourceName*引数に設定した場合、*destinationName*引数もフォルダーでなければなりません。このとき、ディスクにすでに存在する完全フォルダーパス名を渡さなければなりません。  
*sourceName* で指定したフォルダーと同じ名前のフォルダーが*destinationName* で指定した場所に既に存在し、そのフォルダーが空でない場合、4Dは項目をコピーする前にフォルダーの内容を確認します。オプションの *\** 引数を渡していない場合、同じ名前のファイルが既に存在すればエラーが生成されます。この引数を渡した場合、その場所のファイルは削除され、コピーするドキュメントで置き換えられます。

ファイルをフォルダーにコピーするために、*sourceName* にファイルを、*destinationName* にフォルダーを渡すことは可能です。

任意の *newName* 引数を渡した場合、コピーした場所のドキュメント(ファイルまたはフォルダー)を改名します。ファイルのコピーの際に渡した場合は、この引数は *destinationName* 引数に渡された名前を置き換えます。

#### 例題 1 

次の例を使用して、そのドキュメントがあるフォルダ内でドキュメントを複製します。

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"C:\\FOLDER\\DocName2")
```

#### 例題 2 

次の例を使用して、ドキュメントをデータベースフォルダにコピーします(表示されているC:\\\\FOLDERは、データベースフォルダではありません) 。

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"DocName")
```

#### 例題 3 

次の例を使用して、ドキュメントを一つのボリュームから他のボリュームへコピーします。

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"F:\\Archives\\DocName.OLD")
```

#### 例題 4 

次の例を使用して、そのドキュメントがあるフォルダ内で既存のコピーを上書きして、ドキュメントを複製します。

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"C:\\FOLDER\\DocName2";*)
```

#### 例題 5 

指定したフォルダーに同じ名前でファイルをコピー:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\")
```

#### 例題 6 

指定したフォルダーに同じ名前でファイルをコピー。既存のファイルは上書きする:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\"; *)
```

#### 例題 7 

フォルダーを他のフォルダーにコピー (両フォルダーは既に存在しなければなりません):

```4d
 COPY DOCUMENT("C:\\Projects\\";"C\\Archives\\2011\\")
```

#### 例題 8 

以下の例はデータベースフォルダー内に異なるファイルやフォルダーを作成します(ただしこれはWindows用の例題です)。どの場合においても、"folder2"というフォルダーが先に存在していなければなりません。

```4d
 COPY DOCUMENT("folder1\\name1";"folder2\\")
  //"folder2/name1" という名前のファイルを作成します。
 
 COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
  //"folder2/new" という名前のファイルを作成します。
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2")
  //"folder2/name2" という名前のファイルを作成します。
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2";"new")
  //"folder2/new" という名前のファイルを作成します(name2は無視されます)。
 
 COPY DOCUMENT("folder1\\" ; "folder2\\")
  //"folder2/folder1/" という名前のフォルダを作成します。
 
 COPY DOCUMENT("folder1\\" ; "folder2\\" ; "new")
  //"folder2/new/" という名前のファイルを作成します。
```

#### 参照 

[MOVE DOCUMENT](move-document.md)  
*システムドキュメント*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 541 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


